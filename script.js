let playerscore=0 , computerscore=0;
let choices = document.querySelectorAll('.choice');
let player_choicedom = document.querySelector('.player_choice');
let computer_choicedom = document.querySelector('.computer_choice');
let player_scoredom = document.querySelector('.player_score');
let computer_scoredom = document.querySelector('.computer_score');
let round_result = document.querySelector('.result');
let game_status = document.querySelector('#status');
let pc_img = document.querySelector('#player-choice-img');
let cc_img = document.querySelector('#computer-choice-img');



choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        let xc = getComputerChoice();
        let xp = 0;
        let str = choice.textContent;
        if(str=='Paper') xp=1;
        if(str=='Scissor') xp=2;
        player_choicedom.textContent = `Player Choice : ${choice.textContent}`;
        let path = choice.textContent + '.png';
        pc_img.src=path;
        pc_img.classList.remove('invisible');
        cc_img.src='';
        cc_img.classList.add('invisible');
        computer_choicedom.textContent = "Computer's Choice : Loading ....";
        round_result.classList.remove(...round_result.classList);
        round_result.textContent = "Result";
        
        setTimeout(()=> {
            cc_img.classList.remove('invisible');
            if(xc==0){
                computer_choicedom.textContent = "Computer's Choice : Rock";
                cc_img.src = "Rock.png";
            }else if(xc==1){
                computer_choicedom.textContent = "Computer's Choice ; Paper";
                cc_img.src = "Paper.png";

            }else if(xc==2){
                computer_choicedom.textContent = "Computer's Choice ; Scissor";
                cc_img.src = "Scissor.png";
            }
            let res = PlayRound(xp,xc);
            if(res==-1){
                round_result.textContent = "Computer Won this round";
                round_result.classList.add("lost");
            }else if(res==1)
            {
                round_result.textContent = "Player won this round";
                round_result.classList.add("won");
            }else{
                round_result.textContent = "It's a Draw";
            }
            if(playerscore>=3){
                setTimeout(() => {
                     window.location.href='player-won.html';
                },1000)
            }else if (computerscore>=3){
                setTimeout(() => {
                    window.location.href='player-lost.html';
               },1000)
            }
        },2000);
 
    });
});


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
    playerscore=0; 
    computerscore=0;
    while(playerscore<3 && computerscore< 3){
        let humanchoice = getHumanChoice();
        let computerchoice = getComputerChoice();

        console.log(PlayRound(humanchoice,computerchoice));
        console.log(`Player_Score : ${playerscore}`);
        console.log(`Computer_Score : ${computerscore}`);

    }

}
// playGame();
function Restart(){
    playerscore=0; 
    computerscore=0;
}


