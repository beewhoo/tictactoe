
var turn = 0;
var gameMoves = document.querySelectorAll('td');
var winCases = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[0,4,8],[2,4,6], [2,5,8] ]



// reset



//game

for(var i=0; i<gameMoves.length; i++){
gameMoves[i].addEventListener('click', ticTacMove);
};


//play

function ticTacMove() {
  if (turn%2 != 0){
    this.innerHTML = 'X';
  } else {
    this.innerHTML = 'O';
  }
  this.removeEventListener('click', ticTacMove);
  check();
  turn ++;
};


//win

function check() {
  winCases.forEach(function(c){
    foo1 = gameMoves[c[0]].innerHTML
    foo2 = gameMoves[c[1]].innerHTML
    foo3 = gameMoves[c[2]].innerHTML
    if (foo1 === foo2 && foo2 ===  foo3 && foo1 != "") {
      console.log('You win');
    };
  });
};
