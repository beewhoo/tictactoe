
document.addEventListener('DOMContentLoaded', function(){

var turn = 0;
var gameMoves = document.querySelectorAll('td');
var winCases = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[0,4,8],[2,4,6], [2,5,8] ]
var imageTag = document.querySelector('.giphy')
var winner = document.querySelector('.winner');
var body = document.querySelector('body');

//reset-game


var playAgain = document.querySelector('#play-again');

playAgain.addEventListener('click', function() {
  var reset = document.querySelectorAll("#box");
  for(var i=0; i<reset.length; i++){
  reset[i].innerHTML = '';
  };
  imageTag.src='https://media.giphy.com/media/XVR9lp9qUDHmU/giphy.gif';
  body.style.backgroundColor ='#39CCCC';
  winner.innerHTML = 'I AM NOT #HASHTAG';
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
    } else {
      this.innerHTML = 'O';
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
      body.style.backgroundColor = '#8358E6';
      var response = $.ajax({
      url: "http://api.giphy.com/v1/gifs/search?q=you+win&api_key=RMPk3NWNEsXqUJkMuD1bNVBdRvnsxqRV&limit=15",
      type: "GET",
      success: function(data) {
        var gifs = data
          console.log(gifs);
        var gif = gifs.data[0].images.original.url
        var imageTag = document.querySelector('.giphy')
        imageTag.src = gif
      }

      })
    }
  })
}








});
