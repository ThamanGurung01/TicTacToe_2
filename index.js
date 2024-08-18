let boxes=document.querySelectorAll(".xo");
let resetBtn=document.querySelector(".reset-btn");
let turnO=true;
let patterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
let p1Val,p2Val,p3Val;
let winner;
let announce=document.querySelector(".msg");
let msgContainer=document.querySelector(".msg-container");
let ngbtn=document.querySelector(".ng");



const reset=()=>{
  evtEnable();
  turnO=true;
  announce.innerText="";
  msgContainer.classList.add("hide");
  for(let box of boxes){
    box.innerText="";
  }
}
ngbtn.onclick=()=>{
location.reload();
}
const winCheck=()=>{
for(let pattern of patterns){
p1Val=boxes[pattern[0]].innerText;
p2Val=boxes[pattern[1]].innerText;
p3Val=boxes[pattern[2]].innerText;
console.log(`${p1Val} ${p2Val} ${p3Val}`)
if(p1Val!=""&&p2Val!=""&&p3Val!=""){
  if(p1Val==p2Val&&p2Val==p3Val){
    announce.innerText="Winner is "+p1Val;
    msgContainer.classList.remove("hide");
    evtDisable();
    resetBtn.removeEventListener("click",reset);
    resetBtn.classList.add("hide");
    msgContainer.classList.add("win");

  }
}
}
}
const evtDisable=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const evtEnable=()=>{
  for(let box of boxes){
    box.disabled=false;
  }
}
(()=>{
  for(let box of boxes){
    box.addEventListener("click",()=>{
      if(turnO){
        box.innerText="O";
        turnO=false;
      }else{
        box.innerText="X";
        turnO=true;
      }
      box.disabled=true;
  winCheck();
    });
  }
  resetBtn.addEventListener("click",reset);
})();