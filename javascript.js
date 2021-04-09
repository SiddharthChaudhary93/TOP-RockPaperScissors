// console.log('Hello World!')

const outcome = ['Rock','Paper','Scissors'];

const computerPlay = () => {
  let randomNumber =Math.round( Math.random() * (3 - 1) + 1 ) ;
  console.log( `Computer: ${outcome[ randomNumber - 1 ]}` );
  return outcome[ randomNumber - 1 ];
}

var playerSelection = prompt('Enter your selection');
console.log(`Player: ${playerSelection}`);


var computerSelection = computerPlay();


const playRound = (playerSelection,computerSelection) => {
  if( 
      (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper' ) || 
      ( playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') ||( playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors')
    )
  {
    return 'Computer Wins';
  }
  else if( 
      (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock' ) || 
      ( playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') ||( playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors')
   )
  {
    return 'Player Wins';
  }
  else{
    return `It's a Draw`;
  }
 
}

console.log(playRound(playerSelection,computerSelection))