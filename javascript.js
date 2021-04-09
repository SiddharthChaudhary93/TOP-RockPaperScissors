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
      ( playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') ||( playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors')
    )
  {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
  else if( 
      (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock' ) || 
      ( playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') ||( playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors')
   )
  {
    return `You Win! ${playerSelection[0].toUpperCase() + playerSelection.substr(1)} beats ${computerSelection}`;
  }
  else{
    return `It's a Draw`;
  }
 
}




const game = () =>{
  let userCount=0;
  let compCount=0
  for (let i=0 ; i<5 ; i++){
    var playerSelection = prompt('Enter your selection');
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
    
  }
  if(userCount>=compCount){
    return `User wins the game`;
  }
  else {
    return `Computer wins the game`;
  }
  
}

console.log(game());