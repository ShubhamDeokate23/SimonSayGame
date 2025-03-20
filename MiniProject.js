let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let started=false;

let level=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
} );
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let rendIdx=Math.floor(Math.random()*3);
    let renColor=btns[rendIdx];
    let randbtn=document.querySelector(`.${renColor}`);
    // console.log(randbtn);
    // console.log(renColor);
    // console.log(rendIdx);
    
 gameSeq.push(renColor);
 console.log(gameSeq);

    btnFlash(randbtn);
}


function checkAns(idx){
    // console.log("curr level:",level);

    // let idx=level-1;
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
            levelUp();
        }
    

    }
    else{
        h2.innerHTML=`Game over..! Your Score was : <b>${level}<b> press other key`;
        h3.innerHTML=`WOW Your Higher Score:${level}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function buttonpress(){
   let btn=this;
   console.log(this);
   userflash(btn);
   userColor=btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}
let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",buttonpress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}
