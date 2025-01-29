const introPage = document.getElementById("nickname-input-area");
const gamePage = document.getElementById("game-area");

let nickname;
const nickSubmitBtn = document.getElementById("nickname-submit-btn");

const nicknameDisplayArea = document.getElementById("nickname-display-area");
const streakDisplayArea = document.getElementById("streak-display-area");
const num1TextArea = document.getElementById("number1");
const num2TextArea = document.getElementById("number2");
const operationSignTextArea = document.getElementById("operation_sign");
let result;

let answer;
const answerInputBox = document.getElementById("answer-box");
const answerSubmitBtn = document.getElementById("answer-submit-btn");
const reportMessageArea = document.getElementById("report-message");
let streak = 0;

let questionTime;
let answerTime;
let reactionTime;
const reactionTimeTextArea = document.getElementById("reaction-time-message");

function check_nickname(name) {
    if (name.length > 0) {
        introPage.classList.remove("areas");
        introPage.classList.add("hidden");
        // introPage.style.display = "none";
        gamePage.classList.remove("hidden");
        gamePage.classList.add("areas");
        // gamePage.style.display = "flex";
        print_info_to_page();
    } else {
        alert("Please enter a nickname!" + name);
    }
}

function check_answer() {
    if (isNaN(answer) === false) {
        reportMessageArea.classList.remove("hidden");
        if (answer == result) {
            reportMessageArea.innerText = "Your answer was correct!\n It was " + result;
            reportMessageArea.style.borderColor = "rgb(0,255,0)";
            reportMessageArea.style.backgroundColor = "rgb(179, 253, 179)";
            streak += 1;
            print_info_to_page();
            print_reaction_time(questionTime, answerTime);
            console.log("q time: " + questionTime);
            console.log("a time: " + answerTime);
            console.log("r time: " + reactionTime);
            questionTime = Date.now();
        } else {
            reportMessageArea.innerText = "Your answer was wrong!";
            reportMessageArea.style.borderColor = "red";
            reportMessageArea.style.backgroundColor = "rgb(255, 114, 114)";
            streak = 0;
        }
    } else {
        // pass
    }
}

function produce_random_numbers() {
    const randomNum1 = Math.floor(Math.random() * 100); // Random int between [0,99]
    const randomNum2 = Math.floor(Math.random() * 100); 
    const operationRandomizer = Math.floor(Math.random() * 2); // Random int [0,1]
    let operation;

    if (operationRandomizer === 0) {
        operation = "+";
        result = randomNum1 + randomNum2; 
    } else if (operationRandomizer === 1) {
        operation = "-";
        result = randomNum1 - randomNum2;
    } 

    // else if (operationRandomizer === 2) {
    //     const operation = "*"
    //     const result = randomNum1 * randomNum2;
    // }

    return [randomNum1, randomNum2, operation, result];
}

function print_info_to_page() {
    const [num1, num2, operation, result] = produce_random_numbers();
    nicknameDisplayArea.innerText = nickname;
    streakDisplayArea.innerText = " " + streak;
    num1TextArea.innerText = num1;
    num2TextArea.innerText = num2;
    operationSignTextArea.innerText = operation;
}

function print_reaction_time(questionTime, answerTime) {
    reactionTime = (answerTime - questionTime) / 1000;
    reactionTimeTextArea.innerText = reactionTime + "s";
    if (reactionTime < 2.5) {
        reactionTimeTextArea.style.color = "lime";
    } else if (reactionTime < 5) {
        reactionTimeTextArea.style.color = "yellow";
    } else {
        reactionTimeTextArea.style.color = "red";
    }
    reactionTimeTextArea.classList.remove("hidden");
}

nickSubmitBtn.addEventListener("click", () => {
    nickname = document.getElementById("nickname-input-box").value;
    check_nickname(nickname);
})

answerSubmitBtn.addEventListener("click", () => {
    answerTime = Date.now();
    answer = answerInputBox.value;
    check_answer(answer);
})

answerInputBox.addEventListener("keyup", (e) => {
    if(e.keyCode === 13) {
        answerTime = Date.now();
        answer = answerInputBox.value;
        check_answer(answer);
        answerInputBox.value = "";
    }
})