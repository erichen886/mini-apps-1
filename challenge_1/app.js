console.log ('hello from app!')
var player = ['X', 'O'];
var currentPlayer = player[0];
var choices ={};
var count = 0;
var isWinner = false;

//getElementsByClassName returns an array
//event handler
function changeContent(id) {
  if (!isWinner) {
    if(currentPlayer === player[0]) {
      //check if choices at id property exists
      if (choices[id] === undefined) {
        //if it doesn't place down choice
        choices[id] = currentPlayer;
        document.getElementById(id).innerHTML = currentPlayer;
        document.getElementById(id).style = "Color: black";
        //set display back to blank
        display('');
        //check if won
        checkWinner();
        //change player
        currentPlayer = player[1];
        //increment count
        count++
        //else
      } else {
        //log that is not a valid choice try again
        display('That is not a valid choice. Try again.');
        console.log ('That is not a valid choice. Try again.')
      }
    } else {
      if (choices[id] === undefined) {
        //if it doesn't place down choice
        choices[id] = currentPlayer;
        document.getElementById(id).innerHTML = currentPlayer;
        document.getElementById(id).style = "Color: red";
        //set display to blank
        display('');
        //check if won
        checkWinner();
        //change player
        currentPlayer = player[0];
        //increment count
        count++
        //else
      } else {
        display('That is not a valid choice. Try again.');
        console.log ('That is not a valid choice. Try again.')
      }
    }
  } else {
    display('Press reset to start a new game');
  }
}
//winner checker
function checkWinner() {
 //horizontal wins
  if(choices[1] === currentPlayer && choices[2] === currentPlayer && choices[3] === currentPlayer){
    display(currentPlayer + ' wins!');
    isWinner = true;
    // console.log (currentPlayer + ' wins!')
  }
  if(choices[4] === currentPlayer && choices[5] === currentPlayer && choices[6] === currentPlayer){
    display(currentPlayer + ' wins!');
    isWinner = true;
    // console.log (currentPlayer + ' wins!')
  }
  if(choices[7] === currentPlayer && choices[8] === currentPlayer && choices[9] === currentPlayer){
    display(currentPlayer + ' wins!');
    isWinner = true;
    // console.log (currentPlayer + ' wins!')
  }

  //vertical wins
  if(choices[1] === currentPlayer && choices[4] === currentPlayer && choices[7] === currentPlayer){
    display(currentPlayer + ' wins!');
    isWinner = true;
    // console.log (currentPlayer + ' wins!')
  }
  if(choices[2] === currentPlayer && choices[5] === currentPlayer && choices[8] === currentPlayer){
    display(currentPlayer + ' wins!');
    isWinner = true;
    // console.log (currentPlayer + ' wins!')
  }
  if(choices[3] === currentPlayer && choices[6] === currentPlayer && choices[9] === currentPlayer){
    display(currentPlayer + ' wins!');
    isWinner = true;
    // console.log (currentPlayer + ' wins!')
  }

  //diagonal wins
  if(choices[1] === currentPlayer && choices[5] === currentPlayer && choices[9] === currentPlayer){
    display(currentPlayer + ' wins!');
    isWinner = true;
    // console.log (currentPlayer + ' wins!')
  }
  if(choices[3] === currentPlayer && choices[5] === currentPlayer && choices[7] === currentPlayer){
    display(currentPlayer + ' wins!');
    isWinner = true;
    // console.log (currentPlayer + ' wins!')
  }

  if(count === 8 && !isWinner) {
    display('CAT\'S GAME!');
  }

}

function display (string) {
  document.getElementById('display').innerHTML = string;
}

function resetGame () {
  for (var i = 1; i < 10; i++) {
    document.getElementById(i).innerHTML = '';
  }
  for (var key in choices) {
    delete choices[key];
  }
  currentPlayer = player[0];
  display('');
  isWinner = false;
  count = 0;
  // console.log(currentPlayer);
  // console.log(choices);
  display('X goes first')
  console.log('reset!')
}