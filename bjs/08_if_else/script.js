let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
let firstMaxValue = maxValue;
let firstMinValue = minValue;
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

function restart() {
	minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
	minValue = (isNaN(minValue)) ? parseInt(0) : minValue;
	maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
	maxValue = (isNaN(maxValue)) ? parseInt(100) : maxValue;
	maxValue = (maxValue > 100) ? 100 : maxValue;
	minValue = (minValue < 0) ? 0 : minValue;
	firstMinValue = minValue;
	firstMaxValue = maxValue;
	answerNumber = Math.floor((minValue + maxValue) / 2);
	orderNumber = 1;
	gameRun = true;
	orderNumberField.innerText = orderNumber;
	answerField.innerText = `Вы загадали число ${answerNumber}?`;
	// alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
}

function changeText() {
	let text = `Вы загадали число ${answerNumber}?`;
	console.log(text.length);
	text = (text.length > 20) ? text : `Вы загадали число ${intToWords(answerNumber)}?`;
	answerField.innerText = text;

}

//Функцию взял с одно из своих старх проектов, задача уже была такая
function intToWords(int, names) {
	var result = [];
	if (typeof int === 'number') {
		int = int.toString();
	} else if (typeof int !== 'string') {
		int = '';
	}
	if (!(names instanceof Array) || (typeof names[0] !== 'string') || (typeof names[1] !== 'string') || (typeof names[2] !== 'string')) {
		names = null;
	}
	if (int.length && !/[^0-9]/.test(int)) {
		var selectName = function (number, names) {
			return names[((parseInt(number) % 100 > 4) && (parseInt(number) % 100 < 20)) ? 2 : [2, 0, 1, 1, 1, 2][Math.min(parseInt(number) % 10, 5)]];
		};
		var name = null;
		var zero = 'ноль';
		if (int === '0') {
			result.push(zero);
		} else {
			var from0To2 = [zero, 'одна', 'две'];
			var from0To19 = [
				zero, 'один', 'два', 'три', 'четыре',
				'пять', 'шесть', 'семь', 'восемь', 'девять',
				'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать',
				'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'
			];
			var tens = [
				'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
				'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'
			];
			var hundreds = [
				'сто', 'двести', 'триста', 'четыреста', 'пятьсот',
				'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
			];
			var thousands = [
				['тысяча', 'тысячи', 'тысяч'],
				['миллион', 'миллиона', 'миллионов'],
				['миллиард', 'миллиарда', 'миллиардов'],
				['триллион', 'триллиона', 'триллионов'],
				['квадриллион', 'квадриллиона', 'квадриллионов'],
				['квинтиллион', 'квинтиллиона', 'квинтиллионов'],
				['секстиллион', 'секстиллиона', 'секстиллионов'],
				['септиллион', 'септиллиона', 'септиллионов'],
				['октиллион', 'октиллиона', 'октиллионов'],
				['нониллион', 'нониллиона', 'нониллионов'],
				['дециллион', 'дециллиона', 'дециллионов']
			];
			var unknown = '{неизвестно}';
			var numberParts = int.replace(/(?=(\d{3})+(?!\d))/g, ' ').split(' ');
			var i = numberParts.length - 1;
			for (var j in numberParts) {
				var numberPart = parseInt(numberParts[j]);
				if (numberPart) {
					var numberPartResult = [];
					var hundred = Math.floor(numberPart / 100);
					if (hundred) {
						numberPartResult.push(hundreds[hundred - 1]);
						numberPart -= hundred * 100;
					}
					if (numberPart > 19) {
						var ten = Math.floor(numberPart / 10);
						numberPartResult.push(tens[ten - 1]);
						numberPart -= ten * 10;
					}
					if (numberPart) {
						numberPartResult.push(((i === 1) && ([1, 2].indexOf(numberPart) !== -1)) ? from0To2[numberPart] : from0To19[numberPart]);
					}
					if (thousands[i - 1] !== undefined) {
						numberPartResult.push(selectName(numberParts[j], thousands[i - 1]));
					} else if (i !== 0) {
						numberPartResult.push(unknown);
					} else if (names) {
						name = selectName(numberParts[j], names);
					}
					result.push(numberPartResult.join(' '));
				}
				i--;
			}
			if (!result.length) {
				result.push(zero);
			}
		}
		if (!name && names) {
			name = selectName(0, names);
		}
		if (name) {
			result.push(name);
		}
	}
	return result.join(' ');
}

function randomText(max) {
	const phraseRandom = Math.round(Math.random() * max);
	const answerPhrase = (phraseRandom === 0) ?
		`Вы загадали неправильное число!\n\u{1F914}` : (phraseRandom === 1) ?
			`Я сдаюсь..\n\u{1F92F}` : (phraseRandom === 2) ? 'Ещё один текст' : 'И ещё один текст';
	return answerPhrase;
}

function randomTextSuccess(max) {
	const phraseRandom = Math.round(Math.random() * max);
	const answerPhrase = (phraseRandom === 0) ?
		`Я всегда угадываю\n\u{1F60E}` : (phraseRandom === 1) ?
			`Вот текст` : (phraseRandom === 2) ? 'Ещё один текст' : 'И ещё один текст';
	return answerPhrase;
}

document.getElementById('btnRetry').addEventListener('click', function () {
	restart();
	minValue = firstMinValue;
	maxValue = firstMaxValue;
	orderNumber = 1;
	answerNumber = Math.floor((minValue + maxValue) / 2);
	answerField.innerText = `Вы загадали число ${answerNumber}?`;
	orderNumberField.innerText = orderNumber;
	gameRun = true;
	answerField.classList.remove('successBtn');
	answerField.classList.remove('errorBtn');
})

document.getElementById('btnOver').addEventListener('click', function () {
	if (gameRun) {
		if (minValue === maxValue) {
			const answerPhrase = randomText(3);
			answerField.innerText = answerPhrase;
			gameRun = false;
			answerField.classList.add('errorBtn');
		} else {
			minValue = answerNumber + 1;
			answerNumber = Math.floor((minValue + maxValue) / 2);
			orderNumber++;
			orderNumberField.innerText = orderNumber;
			changeText();
		}
	}
})

document.getElementById('btnLess').addEventListener('click', function () {
	if (gameRun) {
		if (minValue === answerNumber) {
			const phraseRandom = Math.round(Math.random());
			const answerPhrase = randomText(3);
			answerField.innerText = answerPhrase;
			gameRun = false;
			answerField.classList.add('errorBtn');
		} else {
			maxValue = answerNumber;
			answerNumber = Math.floor((minValue + maxValue) / 2);
			orderNumber++;
			orderNumberField.innerText = orderNumber;
			changeText();
		}
	}
})

document.getElementById('btnEqual').addEventListener('click', function () {
	if (gameRun) {
		answerField.innerText = randomTextSuccess(3);
		gameRun = false;
	}
	answerField.classList.add('successBtn');
})




