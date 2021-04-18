// console.log('Hello World!')

const outcome = ['Rock','Paper','Scissors'];

const computerPlay = () => {
  let randomNumber =Math.round( Math.random() * (3 - 1) + 1 ) ;
  // console.log( `Computer: ${outcome[ randomNumber - 1 ]}` );
  return outcome[ randomNumber - 1 ];
}




const playRound = (playerSelection,computerSelection) => {
  if( 
      (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper' ) || 
      ( playerSelection.toLowerCase() === 'scissor' && computerSelection === 'Rock') ||( playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors')
    )
  {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
  else if( 
      (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock' ) || 
      ( playerSelection.toLowerCase() === 'scissor' && computerSelection === 'Paper') ||( playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') 
      
   )
  {
    return `You Win! ${playerSelection[0].toUpperCase() + playerSelection.substr(1)} beats ${computerSelection}`;
  }
  else{
    return `It's a Draw ${playerSelection} ${computerSelection}`;
  }
 
}
let html;
let userCount=0;
let compCount=0;
const rock= document.querySelector('#rock');

const paper= document.querySelector('#paper');
const scissor= document.querySelector('#scissor');

const buttons = document.querySelectorAll('.init');
//change the name of the class if you change it elsewhere

const userScore = document.querySelector('.pScore');
const compScore = document.querySelector('.cScore');
const res = document.querySelector('.final-result');
const br =  document.createElement('br');
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.classList.add('final-button');


function game(){
  
  
    // var playerSelection = prompt('Enter your selection');
    // change this line
    
    var playerSelection = this.value;
    console.log('palyer Selection',playerSelection);
    console.log(`Player: ${playerSelection}`);

    var computerSelection = computerPlay();
    console.log(`Computer: ${computerSelection}`);

    var result = playRound(playerSelection,computerSelection);
    console.log(result);
    // console.log(`result : ${result.substr(4,1)}`);
    if( result.substr(4,1) === 'W'){
      userCount++;
    }
    else if( result.substr(4,1) === 'L'){
      compCount++;
    }
  userScore.textContent=`${userCount}`;
  compScore.textContent=`${compCount}`;
  if(userCount === 5){
    html = `the user wins the overall game`;
    res.innerHTML = html;
    buttons.forEach(button=>{
      button.removeEventListener('click',game);
    });
    res.appendChild(br);
    res.appendChild(resetButton);
    return;
  }
  if(compCount === 5){
    html = `the computer wins the overall game`;
    res.innerHTML = html;
    buttons.forEach(button=>{
      button.removeEventListener('click',game);
    })
    res.appendChild(br);
    res.appendChild(resetButton);
    return;
  }
  
  console.log(`userCount ${userCount}`);
  console.log(`conpCount ${compCount}`);
  res.innerHTML = result;
}


console.log(buttons);
buttons.forEach(button=>{
  console.log(button.value);
  button.addEventListener('click',game)
})


function reset(){
  userCount=0;
  compCount=0;
  userScore.textContent=`0`;
  compScore.textContent=`0`;
  res.innerHTML = '';
  buttons.forEach(button=>{
    console.log(button.value);
    button.addEventListener('click',game)
  });
  res.removeChild(resetButton);
}

resetButton.addEventListener('click',reset);
// console.log(game());