
let playerscore=0 , computerscore=0;


let choices = document.querySelectorAll('.choice');
let player_choicedom = document.querySelector('.player_choice');
let computer_choicedom = document.querySelector('.computer_choice');
let player_scoredom = document.querySelector('.player_score');
let computer_scoredom = document.querySelector('.computer_score');
let round_result = document.querySelector('.result');

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        let xc = getComputerChoice();
        let xp = 0;
        let str = choice.textContent;
        if(str=='Paper') xp=1;
        if(str=='Scissor') xp=2;
        player_choicedom.textContent = choice.textContent;
        if(xc==0){
            computer_choicedom.textContent = "Rock";
        }else if(xc==1){
            computer_choicedom.textContent = "Paper";
        }else if(xc==2){
            computer_choicedom.textContent = "Scissor";
        }
        let res = PlayRound(xp,xc);
        if(res==-1){
            round_result.textContent = "Computer Won this round";
        }else if(res==1)
        {
            round_result.textContent = "Player won this round";
        }else{
            round_result.textContent = "It's a Draw";
        }
    })
})


function getComputerChoice(){
    let maxd = 2 , mind = 0;
    let x =  Math.floor((Math.random())*(maxd - mind + 1)+mind);
    return x;
}

function getHumanChoice(){
    let player_choice = prompt("Enter Rock,paper or scissor","DEnter your choice");
    player_choice = player_choice.toLowerCase();
    if(player_choice=="rock") return 0;
    if(player_choice=="paper") return 1;
    if(player_choice=="scissor") return 2;
}

function PlayRound(humanchoice , computerchoice){
    if(humanchoice==computerchoice) return 0;
    let res = 0;
    if(humanchoice==0){
        if(computerchoice==1){
            computerscore++;
            res = -1;
        }else{
            playerscore++;
            res =  1;
        }
    }else if(humanchoice==1){
        if(computerchoice==2){
            computerscore++;
            res = -1;
        }else{
            playerscore++;
            res = 1;
        }
    }else{
        if(computerchoice==0){
            computerscore++;
            res = -1;
        }else{
            playerscore++;
            res =  1;
        }
    }
    player_scoredom.textContent = `Player Score: ${playerscore}`;
    computer_scoredom.textContent = `Computer Score :  ${computerscore}`;
    return res;
}
function playGame()
{
    let t = 1;
    playerscore=0; 
    computerscore=0;
    while(t--){
        let humanchoice = getHumanChoice();
        let computerchoice = getComputerChoice();

        console.log(PlayRound(humanchoice,computerchoice));
        console.log(`Player_Score : ${playerscore}`);
        console.log(`Computer_Score : ${computerscore}`);

    }
    if(playerscore>computerscore){
        console.log("COngratulations Player WON !!!");
    }else if(playerscore<computerscore){
        console.log("OOPS !! Better Luck next time ..");
    }else {
        console.log("It's a DRAW");
    }
}
// playGame();
function Restart(){
    playerscore=0; 
    computerscore=0;
}


