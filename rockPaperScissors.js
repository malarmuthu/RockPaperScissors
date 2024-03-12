let arr = ["Rock", "Paper",
    "Scissors"];

function getComputerChoice()
{
    return (arr[(Math.floor(Math.random() * arr.length))]);
}


function playRound(playerSelection, computerSelection) {
    // your code here!
    const hashMap = new Map();
    hashMap.set('rock', 1);
    hashMap.set('paper',2);
    hashMap.set('scissors',3);
    console.log("Player Selection is:"+playerSelection);
    console.log("Computer Selection is:"+ computerSelection);
    if(hashMap.get(playerSelection)===hashMap.get(computerSelection)){
        console.log("Same selection, its a draw!!");
        return "Draw"
    } else if(Math.abs(hashMap.get(playerSelection) - hashMap.get(computerSelection))==1){
        if(hashMap.get(playerSelection) > hashMap.get(computerSelection)){
            console.log("Player Wins")
            return "Player Wins"
        } else{
            console.log("Computer Wins")
            return "Computer Wins"
        }
    } else{
        if(hashMap.get(playerSelection) < hashMap.get(computerSelection)){
            console.log("Player Wins")
            return "Player Wins"
        }else{
            console.log("Computer Wins")
            return "Computer Wins"
        }
        }
    }

  
 

  function playGame(){
    let playerWin =0;
    let computerWin=0;
    
    for (let i = 0; i < 5; i++) {
       // let playerSelection = "Rock";
       let playerSelection = prompt("Please enter your option, Rock, Paper or Scissors");
       playerSelection=playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        computerSelection=computerSelection.toLowerCase();
        let result =  playRound(playerSelection, computerSelection);
        if(result ==="Player Wins"){
            playerWin++;
        } else if(result ==="Computer Wins"){
            computerWin++;
        }
    }
    if(playerWin>computerWin){
        console.log("Overall Winner is Player");
    } else{
        console.log("Overall Winner is Computer");
    }

    }
  
    playGame()
  