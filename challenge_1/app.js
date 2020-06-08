console.log ('hello from app!')
var player = ['X', 'O'];
var currentPlayer = player[0];
var choices ={};

//getElementsByClassName returns an array
function changeContent(id) {

  if(currentPlayer === player[0]) {
    //check if choices at id property exists
    if (choices[id] === undefined) {
      //if it doesn't place down choice
      choices[id] = currentPlayer;
      document.getElementById(id).innerHTML = currentPlayer;
      document.getElementById(id).style = "Color: black";
      //check if won
      checkWinner();
      //change player
      currentPlayer = player[1];
      //else
    } else {
      //log that is not a valid choice try again
      console.log ('That is not a valid choice. Try again.')
    }
  } else {
    if (choices[id] === undefined) {
      //if it doesn't place down choice
      choices[id] = currentPlayer;
      document.getElementById(id).innerHTML = currentPlayer;
      document.getElementById(id).style = "Color: red";
      //check if won
      checkWinner();
      //change player
      currentPlayer = player[0];
      //else
    } else {
      console.log ('That is not a valid choice. Try again.')
    }
  }
}

function checkWinner() {
 //horizontal wins
  if(choices[1] === currentPlayer && choices[2] === currentPlayer && choices[3] === currentPlayer){
    console.log (currentPlayer + ' wins!')
  }
  if(choices[4] === currentPlayer && choices[5] === currentPlayer && choices[6] === currentPlayer){
    console.log (currentPlayer + ' wins!')
  }
  if(choices[7] === currentPlayer && choices[8] === currentPlayer && choices[9] === currentPlayer){
    console.log (currentPlayer + ' wins!')
  }

  //vertical wins
  if(choices[1] === currentPlayer && choices[4] === currentPlayer && choices[7] === currentPlayer){
    console.log (currentPlayer + ' wins!')
  }
  if(choices[2] === currentPlayer && choices[5] === currentPlayer && choices[8] === currentPlayer){
    console.log (currentPlayer + ' wins!')
  }
  if(choices[3] === currentPlayer && choices[6] === currentPlayer && choices[9] === currentPlayer){
    console.log (currentPlayer + ' wins!')
  }

  //diagonal wins
  if(choices[1] === currentPlayer && choices[5] === currentPlayer && choices[9] === currentPlayer){
    console.log (currentPlayer + ' wins!')
  }
  if(choices[3] === currentPlayer && choices[5] === currentPlayer && choices[7] === currentPlayer){
    console.log (currentPlayer + ' wins!')
  }
}