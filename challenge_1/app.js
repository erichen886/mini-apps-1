console.log ('hello from app!')
var player = ['X', 'O'];
var currentPlayer = player[0];

function changeContent(id) {
  document.getElementById(id).innerHTML = currentPlayer;
  document.getElementById(id).style = "Color: red";
  if(currentPlayer === player[0]) {
    currentPlayer = player[1];
  } else {
    currentPlayer = player[0]
  }
}