// Use local storage to retrieve the initials and score
var allPlayerDetails = window.localStorage.getItem("allPlayerDetails");
var playerDetailsArray = JSON.parse(allPlayerDetails);
// console.log(playerDetailsArray, playerDetailsArray.length);

// Show these details on screen as a new list item

var highscoreBoard = document.querySelector("#highscores");

function sortHighscores(a, b) {
  return b.score - a.score;
}

var sortedScores = playerDetailsArray.sort(sortHighscores);
// console.log(sortedScores);

function displayHighscores() {
  for (var i = 0; i < sortedScores.length; i++) {
    var player = sortedScores[i];

    var li = document.createElement("li");
    li.textContent = player.initials + ", " + player.score;
    highscoreBoard.appendChild(li);
  }
}

displayHighscores();

var scoreClearer = document.querySelector("#clear");
scoreClearer.addEventListener("click", function (event) {
  event.preventDefault();
  highscoreBoard.textContent = "";
  window.localStorage.removeItem("allPlayerDetails");
});
