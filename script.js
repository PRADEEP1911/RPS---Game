let player = document.getElementById("player");
let computer = document.getElementById("computer");
let resultt = document.getElementById("result");

let btns = document.querySelectorAll(".btns");

let playerr;
let com;
let res;

btns.forEach(btn => btn.addEventListener("click", ()=>{

    playerr = btn.textContent;
    computerturn();
    player.textContent = `Player result : ${playerr}`;
    computer.textContent = `Computer result : ${com}`;
    resultt.textContent = `Game result : ${winner()}`;
}))


function computerturn(){
    let randnum = Math.floor(Math.random()*3)+1;

     com = randnum==1? "Rock":randnum==2?"Paper":"Scissors";
}

function winner(){
    return (playerr==com)?"Tie":playerr=="Rock" && com =="Scissors"?"Player Wins":playerr=="Paper" && com=="Rock"?"Player Wins":playerr=="Scissors" && com=="Paper"?"Player Wins":"Computer Wins";
}