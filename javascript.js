// console.log('Hello World!')

const outcome = ['Rock','Paper','Scissor'];

const computerPlay = () => {
  let randomNumber =Math.round( Math.random() * (3 - 1) + 1 ) ;

  console.log( outcome[ randomNumber - 1 ] )
}

var userSelection = prompt('Enter your selection')

var computerSelection = computerPlay();
computerPlay();