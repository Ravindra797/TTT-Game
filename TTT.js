
let boxes=document.querySelectorAll(".box");
let btn=document.querySelector("#btn");
let newbtn=document.querySelector("#new");
let msg=document.querySelector(".msg-container");
let p=document.querySelector("#msg");

let turnO=true;
let winpatterns=[

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],





];

let count=0;

const resetgame=()=>{
turnO=true;
enablebtns();
count=0;
msg.classList.add("hide");



};


boxes.forEach((box)=>{

    box.addEventListener("click",()=>{

     if(turnO){

     box.innerText="O";
     turnO=false;

     }
     else{
        box.innerText="X";
        turnO=true;
     }

 box.disabled=true;
 count++;
  checkwinner();

    });



});
const disablebtns=()=>{

    for (let boxess of boxes){

        boxess.disabled=true;
    }
}

    const enablebtns=()=>{

    for (let boxess of boxes){

        boxess.disabled=false;
        boxess.innerText=""
    }
}




 

const showwinner=(winner)=>{
    p.innerText=`Congratulations winner ${winner}`;
    msg.classList.remove("hide");
    disablebtns()




}


const checkwinner=()=>{

for(let pattern of winpatterns){

    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;

    if(pos1!="" && pos2!="" &&pos3!=""){
        if(pos1===pos2 && pos2===pos3){
           console.log("winner",pos1)
           showwinner(pos1);
           return;
        }
    }


}

if (count === 9) {
        p.innerText = "It's a Draw!";
        msg.classList.remove("hide");
    }
};



newbtn.addEventListener("click",resetgame)
btn.addEventListener("click",resetgame)




