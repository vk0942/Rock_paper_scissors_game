
let playerscore=0 , computerscore=0;

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
    if(humanchoice==0){
        if(computerchoice==1){
            computerscore++;
            return -1;
        }else{
            playerscore++;
            return 1;
        }
    }else if(humanchoice==1){
        if(computerchoice==2){
            computerscore++;
            return -1;
        }else{
            playerscore++;
            return 1;
        }
    }else{
        if(computerchoice==0){
            computerscore++;
            return -1;
        }else{
            playerscore++;
            return 1;
        }
    }
}
function playGame()
{
    let t = 5;
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


