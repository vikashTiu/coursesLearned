// alert(`WELCOME TO ROCK PAPER SCISSOR GAME\n\nClick on the button to play the game`);
let result = '';
let computerMove = '';
let playeerMove = '';
let guess = '';

//extract score from local storage
const score = JSON.parse(localStorage.getItem('score')) || {
  win : 0,
  lose : 0,
  tie : 0,
};//avoiding error if local storage is empty

//using event Listener
document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
}); 
document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
}); 
document.querySelector('.js-scissor-button').addEventListener('click', () => {
  playGame('scissor');
}); 

//ading event listener in key
document.body.addEventListener('keydown' , (event) => {
  if (event.key === 'r'){
    playGame('rock');
  }else if (event.key === 'p'){
    playGame('paper');
  }else if(event.key === 's'){
    playGame('scissor');
  }else {
    console.log(event.key);
  }
})

document.querySelector('.reset-button').addEventListener('click', () => {
  score.win = 0;
  score.lose =0;
  score.tie =0;
  localStorage.removeItem('score');
  console.log(score);
  /*
  score2.wins = 0;
  score2.loses = 0;
  localStorage.removeItem('score2');
  console.log(score2);
  */
  //alert('Scorer set to 0');
  
  //display score
  document.querySelector('.display-score').innerHTML = `Score <br>wins : ${score.win} <br>loses : ${score.lose}<br>Tie : ${score.tie}`;

  //display result
  document.querySelector('.display-result').innerHTML = `<br><br><br><br>`;

  //display choice
  document.querySelector('.display-choice').innerHTML = ``;
  //stop autoplay
  isautoPlay=true;
  autoplay();
});

document.querySelector('.autoplay-button').addEventListener('click', () => {
  autoplay();
})




//display score
document.querySelector('.display-score').innerHTML = `Score :\nYou   win : ${score.win}\nYou lose : ${score.lose}\nTie : ${score.tie}`;


//NEW GAME
console.log(score);
//score - object
/*
const score = {
  win : 0,   
  lose : 0,
  tie : 0,
};
*/
//computer move function
function pickComputerMove(){
  const randomNumber = Math.random();
  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove  = 'rock';
  }else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper'; 
  }else if(randomNumber >2/3 && randomNumber <1){
    computerMove = 'scissor';
  }
  return computerMove;
}

function playGame(playerMove){
  const computerMove = pickComputerMove();
  if(playerMove === 'rock'){
    if(computerMove === 'rock'){
      result = 'TIE';
    }else if(computerMove === 'paper'){
      result = 'YOU LOSE';
    }else if(computerMove === 'scissor'){
      result = 'YOU WIN';
    }
  }else if(playerMove === 'paper'){
    if(computerMove === 'rock'){
      result = 'YOU WIN';
    }else if(computerMove === 'paper'){
      result = 'TIE';
    }else if(computerMove === 'scissor'){
      result = 'YOU LOSE';
    }
  }else if(playerMove === 'scissor'){
    if(computerMove === 'rock'){
      result = 'YOU LOSE';
    }else if(computerMove === 'paper'){
      result = 'YOU WIN';
    }else if(computerMove === 'scissor'){
      result = 'TIE';
    }
  }
  console.log(result);

  //score update
  if(result === 'YOU WIN'){
    score.win++;
  }else if(result === 'YOU LOSE'){
    score.lose++;
  }else if(result === 'TIE'){
    score.tie++
  }
  console.log(score);

  //display result
  document.querySelector('.display-result').innerHTML =result;

  //display choice
  document.querySelector('.display-choice').innerHTML = `you choose :  <img src="images/${playerMove}-emoji.png" class="move-icon"> computer choose :<img src="images/${computerMove}-emoji.png" class="move-icon"> `;

  //display score
  document.querySelector('.display-score').innerHTML = `Score <br>wins : ${score.win} <br>loses : ${score.lose}<br>Tie : ${score.tie}`;

  
  //store score in local storage
  const store = JSON.stringify(score);
  localStorage.setItem('score', store);
  //console.log(store);

  //result display
  //alert(`\nYou choose : ${playerMove}\ncomputer choose : ${computerMove}\n${result}\n\nScore :\nYou win : ${score.win}\nYou lose : ${score.lose}\nTie : ${score.tie}`);    
}

let isautoPlay = false;
let intervalId;

function autoplay(){
  if(!isautoPlay){
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    console.log(intervalId)
    isautoPlay = true
  }else{
    clearInterval(intervalId);
    isautoPlay = false;
  }
}



/*
//HEAD_TAIL GAME
//score - object
const score2 = JSON.parse(localStorage.getItem('score2')) ||{
    wins: 0,
    loses: 0,
  }
console.log(score2);
//function for head and tail game
function playGame1(guess){
  const randomNumber = Math.random();
  const computerGuess = randomNumber < 0.5 ? 'head': 'tail';

  let result = (computerGuess === guess ? 'you win': 'you lose');
  console.log(result);

  
  //update score
  if(result === 'you win'){
    score2.wins++;
  }else if(result === 'you lose'){
    score2.loses++;
  }
  console.log(score2);

  //store score in local storage
  const store2 = JSON.stringify(score2);
  localStorage.setItem('score2', store2);

}
  */
