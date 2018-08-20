
document.addEventListener('DOMContentLoaded', function(){

var turn = 0;
var gameMoves = document.querySelectorAll('td');
var winCases = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[0,4,8],[2,4,6], [2,5,8] ]
var imageTag = document.querySelector('.giphy')
var winner = document.querySelector('.winner');
var body = document.querySelector('body');
var playAgain = document.querySelector('#play-again');

//reset-game




playAgain.addEventListener('click', function() {
  var reset = document.querySelectorAll("#box");
  for(var i=0; i<reset.length; i++){
  reset[i].innerHTML = '';
  };


  winner.innerHTML = 'Good Luck!';
  playAgain.style.display = 'inline-block';
});


//game

for(var i=0; i<gameMoves.length; i++){
  gameMoves[i].addEventListener('click', ticTacMove);
  gameMoves[i].id = 'box';
};


//play

function ticTacMove() {

  if (this.innerHTML === ''){
    if (turn%2 != 0){
      this.innerHTML = 'X';
      this.style.color = '#228DFF';
      playAgain.style.display= 'none';
    } else {
      this.innerHTML = 'O';
      this.style.color = '#FF1177';
      playAgain.style.display = 'none';
    }
    check();
    turn ++;
  }
}

//win



function check() {
  winCases.forEach(function(c){
    foo1 = gameMoves[c[0]].innerHTML
    foo2 = gameMoves[c[1]].innerHTML
    foo3 = gameMoves[c[2]].innerHTML
    if (foo1 === foo2 && foo2 ===  foo3 && foo1 != "") {
      win = foo1;
      winner.innerHTML = 'PLAYER ' +"'"+ win +"'" + ' WINS!';
      playAgain.style.display = 'inline-block';
    }
      else if (foo1 !== foo2 && foo2 !== foo3 && foo1 != ""){
        playAgain.style.display = 'inline-block';
      }

  })
}








});
