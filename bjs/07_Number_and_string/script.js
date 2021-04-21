let lastOperand = 0;
let operation = null;
let lastNum = '';
const inputWindow = document.getElementById('inputWindow');
const num = document.querySelectorAll('.num');




document.getElementById('btn_clr').addEventListener('click', function() {
    inputWindow.style = "";
    lastOperand = 0;
    operation = null;
    inputWindow.value = 0;
    num.forEach(num => num.removeAttribute("disabled"));
    lastNum = '';
})

document.getElementById('btn_1').addEventListener('click', function() {
    if (inputWindow.value == 0) {
        inputWindow.value = '';
    }
    inputWindow.value += '1';
    if (operation != null) {
        lastNum += this.value;
    }

})
document.getElementById('btn_2').addEventListener('click', function() {
    if (inputWindow.value == 0) {
        inputWindow.value = '';
    }
    inputWindow.value += '2';
    if (operation != null) {
        lastNum += this.value;
    }
})
document.getElementById('btn_3').addEventListener('click', function() {
    if (inputWindow.value == 0) {
        inputWindow.value = '';
    }
    inputWindow.value += '3';
    if (operation != null) {
        lastNum += this.value;
    }
})
document.getElementById('btn_4').addEventListener('click', function() {
    if (inputWindow.value == 0) {
        inputWindow.value = '';
    }
    inputWindow.value += '4';
    if (operation != null) {
        lastNum += this.value;
    }
})
document.getElementById('btn_5').addEventListener('click', function() {
    if (inputWindow.value == 0) {
        inputWindow.value = '';
    }
    inputWindow.value += '5';
    if (operation != null) {
        lastNum += this.value;
    }
})
document.getElementById('btn_6').addEventListener('click', function() {
    if (inputWindow.value == 0) {
        inputWindow.value = '';
    }
    inputWindow.value += '6';
    if (operation != null) {
        lastNum += this.value;
    }
})
document.getElementById('btn_7').addEventListener('click', function() {
    if (inputWindow.value == 0) {
        inputWindow.value = '';
    }
    inputWindow.value += '7';
    if (operation != null) {
        lastNum += this.value;
    }
})
document.getElementById('btn_8').addEventListener('click', function() {
    if (inputWindow.value == 0) {
        inputWindow.value = '';
    }
    inputWindow.value += '8';
    if (operation != null) {
        lastNum += this.value;
    }
})
document.getElementById('btn_9').addEventListener('click', function() {
    if (inputWindow.value == 0) {
        inputWindow.value = '';
    }
    inputWindow.value += '9';
    if (operation != null) {
        lastNum += this.value;
    }
})
document.getElementById('btn_0').addEventListener('click', function() {
    if (inputWindow.value == 0) {
        inputWindow.value = '';
    }
    inputWindow.value += '0';
    if (operation != null) {
        lastNum += this.value;
    }
})

document.getElementById('btn_sum').addEventListener('click', function() {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value += '+';

})
document.getElementById('btn_def').addEventListener('click', function() {
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value += '-';
})

document.getElementById('btn_mult').addEventListener('click', function() {
    lastOperand = parseInt(inputWindow.value);
    operation = 'mult';
    inputWindow.value += '*';
})

document.getElementById('btn_share').addEventListener('click', function() {
    lastOperand = parseInt(inputWindow.value);
    operation = 'share';
    inputWindow.value += '/';
})
document.getElementById('btn_sqrt').addEventListener('click', function() {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sqrt';
    inputWindow.value = '';
    const result = Math.sqrt(lastOperand);
    operation = null;
    lastOperand = 0;
    inputWindow.value = result;
})
document.getElementById('btn_calc').addEventListener('click', function() {

    if (operation === 'sum') {
        const operand = String(inputWindow.value);
        const result = lastOperand + parseInt(lastNum);
        operation = null;
        lastOperand = 0;
        inputWindow.value = operand + '=' + result;
    }
    if (operation === 'def') {
        const operand = String(inputWindow.value)
        const result = lastOperand - parseInt(lastNum);
        operation = null;
        lastOperand = 0;
        inputWindow.value = operand + '=' + result;
    }
    if (operation === 'mult') {
        const operand = String(inputWindow.value)
        const result = lastOperand * parseInt(lastNum);
        operation = null;
        lastOperand = 0;
        inputWindow.value = operand + '=' + result;
    }
    if (operation === 'share') {
        const operand = String(inputWindow.value)
        const result = lastOperand / parseInt(lastNum);
        operation = null;
        lastOperand = 0;
        inputWindow.value = operand + '=' + result;
    }
    num.forEach(num => num.setAttribute("disabled", "disabled"));
    if (inputWindow.value.length > 22) {
        inputWindow.style = "font-size: 16px;";
    }
    lastNum = '';
    // console.log(eval(inputWindow.value));
})