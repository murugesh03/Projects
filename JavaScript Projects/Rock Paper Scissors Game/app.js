let userscore=0
let compscore=0
const user_span=document.getElementById("user-score")
const comp_span=document.getElementById("comp-score")
const scoreboard_div=document.querySelector(".score-board")
const result=document.querySelector(".result > p")
const rock=document.getElementById("r")
const paper=document.getElementById("p")
const scissor=document.getElementById("s")
const button=document.querySelector(".btn")


function reset() {
    user_span.innerHTML=0;
    comp_span.innerHTML=0;
    result.innerHTML="Start your game!";
    userscore=0;
    compscore=0;
}

function getcompchoice() {
    const array=['r','p','s']
    const random=Math.floor(Math.random()*3)
    return array[random]
}
function convertoword(letter) {
    if(letter=='r') return "Rock";
    else if(letter=='p') return "Paper";
    return "Scissor";
}

function win(user, com) {
    const userr="you".fontsize(3).sub();
    const comm="comp".fontsize(3).sub();
    const userid=document.getElementById(user);
    userscore++;
    user_span.innerHTML=userscore;
    comp_span.innerHTML=compscore; 
    result.innerHTML=`${convertoword(user)}${userr} beats ${convertoword(com)}${comm}. You Win...!`
    userid.classList.add("green-glow");
    setTimeout(()=>{userid.classList.remove('green-glow')}, 300);

}
function lose(user, com) {
    const userr="you".fontsize(3).sub();
    const comm="comp".fontsize(3).sub()
    const userid=document.getElementById(user);
    compscore++;
    comp_span.innerHTML=compscore;
    user_span.innerHTML=userscore;
    result.innerHTML=`${convertoword(user)}${userr} lost to ${convertoword(com)}${comm}. You lose...!`
    userid.classList.add("red-glow");
    setTimeout(()=>{userid.classList.remove("red-glow")},300);
}
function draw(user, com) {
    const userr="you".fontsize(3).sub();
    const comm="comp".fontsize(3).sub();
    const userid=document.getElementById(user);
    userid.classList.add("grey-glow");
    setTimeout(()=>{userid.classList.remove("grey-glow")},300);
    result.innerHTML=`${convertoword(user)}${userr} and ${convertoword(com)}${comm}. Draw...!`

}


function game(userchoice) {
    const comchoice=getcompchoice()
    switch (userchoice+comchoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userchoice, comchoice);
            break;

        case "sr":
        case "rp":
        case "ps":
            lose(userchoice, comchoice);
            break;

        case "ss":
        case "pp":
        case "rr":
           draw(userchoice, comchoice);
            break;
    }
}

function main() {
    rock.addEventListener('click', ()=>game('r'));
    paper.addEventListener('click', ()=>game('p'));
    scissor.addEventListener('click', ()=>game('s'));
    button.addEventListener('click', ()=>reset());
    
}

main();