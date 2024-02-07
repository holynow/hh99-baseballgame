const playBtn = document.querySelector("#playBtn");
const userInput = document.querySelector("#userInput");
const status = document.querySelector(".status");
const result = document.querySelector(".result");
const randomBall = [];
const userInputVal = [];
let count = 0;
const playBaseball = () => {
    while (randomBall.length < 3) {
        let checkBall = ~~(Math.random() * 10);
        if (!randomBall.includes(checkBall)) {
            randomBall.push(checkBall);
        }
    }
    userInput.addEventListener('input', (e) => {
        let removeBtn = 0;
        if(e.data === null){
            removeBtn++;
            for(let i = 0; i < removeBtn; i++){
                userInputVal.pop();
            }   
            return userInputVal
        }
        userInputVal.push(~~(e.data));
    });
    playBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let ball = 0, strike = 0;
        count++;
        for (let i = 0; i < randomBall.length; i++) {
            if (randomBall[i] === userInputVal[i]) {
                strike++;
            } else if (randomBall.includes(userInputVal[i])) {
                ball++;
            }
        }
        if(strike === 3) {
            alert(`${count}번만에 맞히셨습니다!\n게임을 종료합니다.`)
            if(confirm){
                location.reload();
            }
        }
        status.innerText = `${count}번째 시도 : ${userInputVal.join('')}`;
        result.innerText = strike >= 3 ? `${strike}S` : ball >= 3 ? `${ball}B` : `${ball}B${strike}S`
        userInputVal.length = 0;
        userInput.value = null;
    })
}
playBaseball();