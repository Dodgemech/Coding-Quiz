var clearBtn = document.getElementById("clear");

/* Grabs Scores from loacl storage and arranges scores from highest to lowest
then displays them on the page. */
var getScores = function() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function(a, b) {
        return b.score - a.score;
    });
    highscores.forEach(function(score){
        var listItem = document.createElement("li");
        listItem.textContent = score.initials + ": " + score.score;
        var list = document.querySelector("#highscore-list");
        list.appendChild(listItem);
    });
};

/* Clears highscore list when user clicks on button and runs getScores
  on page reload.*/
var clearScores = function() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

clearBtn.onclick = clearScores;
getScores();