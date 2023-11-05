// Use local storage to retrieve the initials and score
var playerDetails = window.localStorage.getItem("playerDetails");
var playerDetailsObject = JSON.parse(playerDetails);

// Show these details on screen as a new list item
var allPlayerScores = [];
