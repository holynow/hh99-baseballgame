const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("===야구게임 시작===");

let randomball = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let random = [];
for (let i = 0; i < 3; i++) {
    let num = ~~(Math.random() * randomball.length);
    random[i] = randomball.splice(num, 1)[0];
}

console.log("===볼 생성 완료===");
console.log("===정답을 입력하세요.===");

let count = 0;
rl.on("line", (input) => {
    count++;

    console.log(count + "번째 도전: " + input);
    checkNumber(input)
});

let strike = 0, ball = 0;
let checkNumber = function (myNumber) {

    myNumber = [...String(myNumber)].map(Number);
    let cnt = new Set(myNumber);

    if (cnt.size !== 3 || myNumber.length !== 3) {
        console.log("===올바른 값을 입력 해주세요.(중복되지 않는 숫자 3개)===")
        count--;
        return;
    }

    for (let i = 0; i < random.length; i++) {
        if (random[i] === myNumber[i]) {
            strike++;
        } else if (random.includes(myNumber[i])) {
            ball++;
        }
    }

    console.log(`${strike}S ${ball}B`);

    if (strike == 3) {
        console.log(`${count}번 시도 했습니다.`)
        console.log("정답입니다!")
        rl.close();
    } else {
        strike = 0;
        ball = 0;
        console.log("===정답을 입력하세요.===");
    }
}

