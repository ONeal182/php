let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
minValue = (isNaN(minValue)) ? parseInt(0) : minValue;
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
maxValue = (isNaN(maxValue)) ? parseInt(100) : maxValue;
maxValue = (maxValue > 100) ? 100 : maxValue;
minValue = (minValue < 0) ? 0 : minValue;
let firstMaxValue = maxValue;
let firstMinValue = minValue;
// alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = firstMinValue;
    maxValue = firstMaxValue;
    orderNumber = 1;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    orderNumberField.innerText = orderNumber;
    gameRun = true;
    answerField.classList.remove('successBtn');
    answerField.classList.remove('errorBtn');
})

function randomText(max){
    const phraseRandom = Math.round( Math.random() * max);
    const answerPhrase = (phraseRandom === 0) ?
    `Вы загадали неправильное число!\n\u{1F914}` :(phraseRandom === 1) ?
    `Я сдаюсь..\n\u{1F92F}` : (phraseRandom === 2) ? 'Ещё один текст' : 'И ещё один текст';
    return answerPhrase;
}

function randomTextSuccess(max){
    const phraseRandom = Math.round( Math.random() * max);
    const answerPhrase = (phraseRandom === 0) ?
    `Я всегда угадываю\n\u{1F60E}` :(phraseRandom === 1) ?
    `Вот текст` : (phraseRandom === 2) ? 'Ещё один текст' : 'И ещё один текст';
    return answerPhrase;
}
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const answerPhrase = randomText(3);
            answerField.innerText = answerPhrase;
            gameRun = false;
            answerField.classList.add('errorBtn');
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === answerNumber){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = randomText(3);
            answerField.innerText = answerPhrase;
            gameRun = false;
            answerField.classList.add('errorBtn');
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = randomTextSuccess(3);
        gameRun = false;
    }
    answerField.classList.add('successBtn');
})

