console.log ('hello from app!')
var player = ['X', 'O'];
var currentPlayer = player[0];
var playerX =[];
var playerO =[];

//getElementsByClassName returns an array
function changeContent(id) {
  document.getElementById(id).innerHTML = currentPlayer;
  document.getElementById(id).style = "Color: red";
  if(currentPlayer === player[0]) {
    currentPlayer = player[1];
    playerX.push(id);
    console.log("playerX: ", playerX);
  } else {
    currentPlayer = player[0]
    playerO.push(id);
    console.log("playerO", playerO);
  }
}

function checkWinner() {


}