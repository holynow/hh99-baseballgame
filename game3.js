let attempts = 0; // 시도 횟수 변수

// 정답 숫자 생성
let answer = generateAnswer();

function generateAnswer() {
    let answer = String(~~(Math.random() * 1000)).padStart(3, "0"); 
    // 중복된 숫자가 있을 경우 다시 생성
    while (hasDuplicateNumbers(answer)) {
        answer = String(~~(Math.random() * 1000)).padStart(3, "0");
    }
    return answer;
}

function hasDuplicateNumbers(input) {
    const exceptional = [...new Set(input.split(''))];
    console.log(new Set(input.split('')))
    return exceptional.length !== 3;
}

let answerMessage = answer;
document.getElementById('정답').innerText = answerMessage;


function isValidInput(input) {
    return input.toString().length === 3 && !hasDuplicateNumbers(input); 
}

function checkNumber() {
    attempts++; // 시도 횟수 증가
    const userInput = document.getElementById('userInput').value;
    if (!isValidInput(userInput)) {
        alert("3자리의 숫자를 입력하세요. 각 자리의 숫자는 중복되지 않습니다.");
        return;
    }

    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === answer[i]) {
            strikes++;
        } else if (answer.includes((answer[i]))) {
            balls++;
        }
    }

    let resultMessage = '';
    if (strikes === 3) {
        resultMessage = `${attempts}번째 시도 : ${userInput}
        3S
        ${attempts}번만에 맞히셨습니다. 게임을 종료합니다.`;
    } else if(balls ===3) {
        resultMessage = `${attempts}번째 시도 : ${userInput}
        3B`;
    } else {
        resultMessage = `${attempts}번째 시도 : ${userInput}
        ${strikes}S${balls}B`;
    }

    document.getElementById('result').innerText = resultMessage;
}


