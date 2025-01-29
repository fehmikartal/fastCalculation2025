const introPage = document.getElementById("nickname-input-area");
const gamePage = document.getElementById("game-area");

let nickname;
const nickSubmitBtn = document.getElementById("nickname-submit-btn");

const nicknameDisplayArea = document.getElementById("nickname-display-area");
const num1TextArea = document.getElementById("number1");
const num2TextArea = document.getElementById("number2");
const operationSignTextArea = document.getElementById("operation_sign");

let answer;
const answerSubmitBtn = document.getElementById("answer-submit-btn");


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

function produce_random_numbers() {
    const randomNum1 = Math.floor(Math.random() * 100); // Random int between [0,99]
    const randomNum2 = Math.floor(Math.random() * 100); 
    const operationRandomizer = Math.floor(Math.random() * 2); // Random int [0,1]
    let operation;
    let result;

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
    num1TextArea.innerText = num1;
    num2TextArea.innerText = num2;
    operationSignTextArea.innerText = operation;
}

function check_answer() {
    
}

nickSubmitBtn.addEventListener("click", () => {
    nickname = document.getElementById("nickname-input-box").value;
    check_nickname(nickname);
})

answerSubmitBtn.addEventListener("click", () => {
    answer = document.getElementById("answer-box").value;

})