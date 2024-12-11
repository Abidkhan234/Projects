//! For Quiz-app

var overlay = document.getElementById("overlay");

// For html quiz modal

// For html all question array

var htmlQuestions = [
    {
        question: "Qno1: What does HTML stand for?",
        options: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "HyperTransfer Markup Language",
            "None of the above"
        ],
        answer: "HyperText Markup Language"
    },
    {
        question: "Qno2: Which HTML element is used for the largest heading?",
        options: ["<heading>", "<h1>", "<h6>", "<head>"],
        answer: "<h1>"
    },
    {
        question: "Qno3: What is the correct HTML element for inserting a line break?",
        options: ["<br>", "<lb>", "<break>", "<line>"],
        answer: "<br>"
    },
    {
        question: "Qno4: Which of these is a valid way to add a comment in HTML?",
        options: [
            "<!-- This is a comment -->",
            "// This is a comment",
            "/* This is a comment */",
            "# This is a comment"
        ],
        answer: "<!-- This is a comment -->"
    },
    {
        question: "Qno5: Which attribute specifies the destination of a hyperlink?",
        options: ["src", "link", "href", "target"],
        answer: "href"
    },
    {
        question: "Qno6: What is the purpose of the <alt> attribute in <img> tags?",
        options: [
            "To define alternate text for an image",
            "To set the image's alignment",
            "To specify an alternate image URL",
            "To define the image's aspect ratio"
        ],
        answer: "To define alternate text for an image"
    },
    {
        question: "Qno7: Which element is used to create an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: "<ul>"
    },
    {
        question: "Qno8: Which HTML element is used to define a table row?",
        options: ["<th>", "<tr>", "<td>", "<row>"],
        answer: "<tr>"
    },
    {
        question: "Qno9: What is the correct way to link an external CSS file?",
        options: [
            "<link rel='stylesheet' href='style.css'>",
            "<style src='style.css'>",
            "<css href='style.css'>",
            "<stylesheet link='style.css'>"
        ],
        answer: "<link rel='stylesheet' href='style.css'>"
    },
    {
        question: "Qno10: Which HTML element is used to play video files?",
        options: ["<media>", "<video>", "<movie>", "<play>"],
        answer: "<video>"
    }
];

// For html all question array

var htmlModal = document.getElementById("html-quiz-modal");

var htmlQuestion = document.getElementById("html-question");

var htmlOptions = document.querySelectorAll(".ans");

var htmlQuizScore = document.getElementById("html-quiz-score");

var quizScoreOverlay = document.querySelector(".quiz-score-overlay");

var htmlScoreSpan = document.getElementById("html-score");

var htmlScore = 0;

var htmlQuestionIndex = 0;

const addClass = () => {
    const htmlOptions = document.querySelectorAll(".ans"); // Select all buttons with class "ans"

    htmlOptions.forEach((option) => {
        option.addEventListener("click", () => {
            // Remove the "active" class from all buttons
            htmlOptions.forEach((value) => {
                value.classList.remove("active");
            });

            // Add the "active" class to the clicked button
            option.classList.add("active");
        });
    });
};

// Initialize the addClass function
document.addEventListener("DOMContentLoaded", addClass);


var startHtmlQuiz = () => {

    htmlModal.style.top = "50%";
    overlay.style.width = "100%";

    // For html quiz question

    htmlQuestion.innerText = htmlQuestions[htmlQuestionIndex].question;

    // For html quiz question

    // For html quiz options

    htmlOptions.forEach((option, index) => {
        option.innerText = htmlQuestions[htmlQuestionIndex].options[index];
    });

    // For html quiz options

}

// For html score checking

var htmlScoreCounter = () => {
    var selectedOption = document.querySelector(".ans.active");
    if (selectedOption) {
        var correctAnswer = htmlQuestions[htmlQuestionIndex].answer;
        if (selectedOption.innerText === correctAnswer) {
            htmlScore++;
            console.log(htmlScore);
        }
    }
}

// For html score checking

// For html quiz next question and options


const htmlNext = () => {

    const htmlselectedOption = document.querySelector(".ans.active");
    if (htmlselectedOption) {
        const htmlcorrectAnswer = htmlQuestions[htmlQuestionIndex].answer;
        if (htmlselectedOption.innerText === htmlcorrectAnswer) {
            htmlScore++;
        }
    } else {
        alert("Plase select one option");
        htmlQuestionIndex--;
    }

    htmlScoreSpan.innerText = htmlScore;

    htmlQuestionIndex++;

    // For Checking Score
    if (htmlQuestionIndex === htmlQuestions.length) {

        htmlQuizScore.style.top = "50%";
        quizScoreOverlay.style.height = "100vh";

        return;
    }

    // Update question and options
    htmlQuestion.innerText = htmlQuestions[htmlQuestionIndex].question;

    htmlOptions.forEach((option, index) => {
        option.innerText = htmlQuestions[htmlQuestionIndex].options[index];
        option.classList.remove("active");
    });
};


// For html quiz next question and options

// For html score close

var htmlScoreClose = () => {
    location.reload();
}

// For html score close

// For html quiz next

var closeHtmlQuiz = () => {
    htmlModal.style.top = "-50%";
    overlay.style.width = "0%";
}

// For html quiz modal

//! For Quiz-app