var questionsContainerEl = document.querySelector("#questions");
var promptEl = document.querySelector("#question-prompt");
var choicesEl = document.querySelector("#question-choices");
var finalScoreEl = document.querySelector("#final-score");
var timerEl = document.querySelector("#countdown");
var feedbackEl = document.getElementById("right-wrong");
var highScoreScreenEl = document.getElementById("highscore-input");
var initialsEl = document.getElementById("initials");
var startBtn = document.querySelector("#start");
var submitBtn = document.querySelector("#submit");

var currentQuestion = 0;
var time = 100;
var timer;

// User Questions
var questions = [
    {
        prompt: "Which company developed JavaScript?",
        choices: ["Google", "Netscape", "Oracle", "Microsoft"],
        answer: "Netscape"
    },
    {
        prompt: "Which symbol is used for comments in JavaScript?",
        choices: ["<>", "()", "//", "!!"],
        answer: "//"
    },
    {
        prompt: "Which is referred to as the assignment operator?",
        choices: ["=", "==", "!", "++"],
        answer: "="
    },
    {
        prompt: "A function can be nested inside another function.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        prompt: "A variable declared using 'const' can later be reassigned.",
        choices: ["True", "False"],
        answer: "False"
    }
];

// Quiz Start Function
var startQuiz = function() {
    var startInfoEl = document.querySelector(".start-info");
    startInfoEl.setAttribute("class", "hide");
    questionsContainerEl.removeAttribute("class");
    timer = setInterval(clock, 1000);
    timerEl.textContent = time;
    displayQuestion();
}

// Display Question Function
var displayQuestion = function() {
    var questionIndex = questions[currentQuestion];
    promptEl.textContent = questionIndex.prompt;
    choicesEl.innerHTML = "";
    questionIndex.choices.forEach(function(choices, i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice btn btn-outline-primary")
        choiceBtn.setAttribute("value", choices);
        choiceBtn.textContent = i + 1 + ". " + choices;
        choiceBtn.onclick = choiceClick;
        choicesEl.appendChild(choiceBtn);
    });
};

// Correct/Incorrect response. Function will 
var choiceClick = function() {
    if (this.value !== questions[currentQuestion].answer) {
        time -= 10;
        timerEl.textContent = time;
        feedbackEl.textContent = "Incorrect!"
    } else {
        feedbackEl.textContent = "Correct!";
    }
};


