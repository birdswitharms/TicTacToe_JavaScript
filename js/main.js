document.addEventListener('DOMContentLoaded', function() {
  var counter = 0;
  var game = document.querySelector('.game');
  var winningCombinations = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,6],[0,4,8],[2,4,6] ]


  game.addEventListener('click', function(event) {
    var tileArray = document.querySelectorAll('.tile');

    if (event.target.innerHTML === "<h1>X</h1>" || event.target.innerHTML === "<h1>O</h1>" || event.target.outerText  === 'X' || event.target.outerText  === 'O' ) {
      return;
    } else {
      if (counter === 0) {
        event.target.innerHTML = "<h1>X</h1>";
        counter++
        checkWin();
        console.log(tileArray);
      } else if (counter % 2 !== 0 ) {
        event.target.innerHTML = "<h1>O</h1>";
        counter++
        checkWin();
        console.log(tileArray);
      } else if (counter % 2 === 0 ) {
        event.target.innerHTML = "<h1>X</h1>";
        counter++
        checkWin();
        console.log(tileArray);
      };
    };

    function checkWin() {
      winningCombinations.forEach(function(combo){
        tile1 = tileArray[combo[0]].innerText
        tile2 = tileArray[combo[1]].innerText
        tile3 = tileArray[combo[2]].innerText
        if (tile1 === tile2 && tile2 === tile3 && tile1 != "") {
          console.log("You win!");
          game.removeEventListener('click');
        }

        // console.log(tileArray[combo[0]].innerText === tileArray[combo[1]].innerText && tileArray[combo[0]].innerText != "")

      });
    };

  });














});
