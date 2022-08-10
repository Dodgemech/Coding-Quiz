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



