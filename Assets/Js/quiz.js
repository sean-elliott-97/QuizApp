//global variables 
var hideStart = document.getElementById("startButton");
var timer = 75;
var timerLabel = document.getElementById("timer");
timerLabel.innerHTML = "Time left: " + timer;
var score = 0;

var qPrompt = document.getElementById("questionPrompt");
var node1 = document.getElementById("choiceOne");
var node2 = document.getElementById("choiceTwo");
var node3 = document.getElementById("choiceThree");
var node4 = document.getElementById("choiceFour");
var userScoreArea = document.getElementById("scoreArea");
var existingScores = JSON.parse(localStorage.getItem("allScores"));

function questionOne() {
  qPrompt.innerHTML = "Commonly used data types DO NOT include:";
  node1.innerHTML = "1. Strings";
  node2.innerHTML = "2. Booleans";
  node3.innerHTML = "3. Alerts";
  node4.innerHTML = "4. Numbers";
  document.getElementById("choiceOne").onclick = function () {
    alert("incorrect");
    score -= 10;
    timer -= 10;
    questionTwo();
  };
  document.getElementById("choiceTwo").onclick = function () {
    alert("incorrect");
    score -= 10;
    timer -= 10;
    questionTwo();
  };
  document.getElementById("choiceThree").onclick = function () {
    alert("correct");
    score += 10;
    questionTwo();
  };
  document.getElementById("choiceFour").onclick = function () {
    alert("incorrect");
    score -= 10;
    timer -= 10;
    questionTwo();
  };
}
function questionTwo() {
  qPrompt.innerHTML =
    "The condition in an if/else statement is enclosed within __________.";

  node1.innerHTML = "1. quotes";
  node2.innerHTML = "2. curly brackets";
  node3.innerHTML = "3. parentheses";
  node4.innerHTML = "4. square brackets";

  document.getElementById("choiceOne").onclick = function () {
    alert("incorrect");
    score -= 10;
    timer -= 10;
    questionThree();
  };
  document.getElementById("choiceTwo").onclick = function () {
    alert("incorrect");
    score -= 10;
    timer -= 10;
    questionThree();
  };
  document.getElementById("choiceThree").onclick = function () {
    alert("correct");
    score += 10;
    questionThree();
  };
  document.getElementById("choiceFour").onclick = function () {
    alert("incorrect");
    score -= 10;
    timer -= 10;
    questionThree();
  };
}
function questionThree() {
  qPrompt.innerHTML = "Arrays in javascript can be used to store __________.";
  node1.innerHTML = "1. numbers and strings";
  node2.innerHTML = "2. other arrays";
  node3.innerHTML = "3. booleans";
  node4.innerHTML = "4. all of the above";

  document.getElementById("choiceOne").onclick = function () {
    alert("incorrect");
    score -= 10;
    timer -= 10;
    questionFour();
  };
  document.getElementById("choiceTwo").onclick = function () {
    alert("incorrect");
    score -= 10;
    timer -= 10;
    questionFour();
  };
  document.getElementById("choiceThree").onclick = function () {
    alert("incorrect");
    score -= 10;
    timer -= 10;
    questionFour();
  };
  document.getElementById("choiceFour").onclick = function () {
    alert("correct");
    score += 10;
    questionFour();
  };
}

function questionFour() {
  qPrompt.innerHTML =
    "String values must be enclosed within __________ when being assigned to variables.";
  node1.innerHTML = "1. commas";
  node2.innerHTML = "2. curly brackets";
  node3.innerHTML = "3. quotes";
  node4.innerHTML = "4. parentheses";

  document.getElementById("choiceOne").onclick = function () {
    alert("incorrect");
    score -= 10;
    timer -= 10;
    questionFive();
  };
  document.getElementById("choiceTwo").onclick = function () {
    alert("incorrect");
    score -= 10;
    timer -= 10;
    questionFive();
  };
  document.getElementById("choiceThree").onclick = function () {
    alert("correct");
    score += 10;
    questionFive();
  };
  document.getElementById("choiceFour").onclick = function () {
    alert("incorrect");
    score -= 10;
    timer -= 10;
    questionFive();
  };
}

function questionFive() {
  qPrompt.innerHTML =
    "A very useful tool used during development and debugging for printing content to the debugger is:";
  node1.innerHTML = "1. JavaScript";
  node2.innerHTML = "2. terminal / bash";
  node3.innerHTML = "3. for loops";
  node4.innerHTML = "4. console log";

  document.getElementById("choiceOne").onclick = function () {
    alert("incorrect");
    score -= 10;
    timer -= 10;
    alert("Your score is " + score);
    saveCurrentScore();
    highScore();
  };
  document.getElementById("choiceTwo").onclick = function () {
    alert("incorrect");
    score -= 10;
    timer -= 10;
    alert("Your score is " + score);
    saveCurrentScore();
    highScore();
  };
  document.getElementById("choiceThree").onclick = function () {
    alert("incorrect");
    score -= 10;
    timer -= 10;
    alert("Your score is " + score);
    saveCurrentScore();
    highScore();
  };
  document.getElementById("choiceFour").onclick = function () {
    alert("correct");
    score += 10;
    alert("Your score is " + score);
    saveCurrentScore();
    highScore();
  };
}

//loads highScores page
function highScore() {
  window.location = "highScores.html";
}

//starts timer and quiz
window.onload = function () {
  var timerInterval = setInterval(function () {
    if (timer <= 0) {
      saveCurrentScore();

      clearInterval(timerInterval);
      highScore();
    }

    timerLabel.innerHTML = "Time left: " + timer;
    timer -= 1;
  }, 1000);
  questionOne();
};



//save to local storage in questionFive(), then display in highscore function
function saveCurrentScore() {
  localStorage.cScore = score;
}


//stores scores and usernames in local storage and displays them in userScoreArea
function saveScore() {
  var saveName = prompt("enter your name: ");
  //var existingScores = JSON.parse(localStorage.getItem("allScores"));

  if (existingScores == null) {
    existingScores = [];
  }

  var nameAndScore = {
    userName: saveName,
    saveScore: localStorage.cScore,
  };
  localStorage.setItem("scoreArray", JSON.stringify(nameAndScore));

  existingScores.push(nameAndScore);
  localStorage.setItem("allScores", JSON.stringify(existingScores));
  userScoreArea.innerHTML +=
    "<br />" +
    existingScores[existingScores.length - 1].userName +
    ": " +
    existingScores[existingScores.length - 1].saveScore;
}

//clears local storage and userScoreArea
function clearScores() {
  localStorage.clear();
  userScoreArea.innerHTML = "";
}
