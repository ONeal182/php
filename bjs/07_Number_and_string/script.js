let lastOperand = 0;
let operation = null;
let lastNum = null;
const inputWindow = document.getElementById('inputWindow');
const num = document.querySelectorAll('.num');




document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
    num.forEach(num => num.removeAttribute("disabled"))
})

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
    lastNum = this.value;
})
document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
    lastNum = this.value;
})
document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
    lastNum = this.value;
})
document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
    lastNum = this.value;
})
document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
    lastNum = this.value;
})
document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
    lastNum = this.value;
})
document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
    lastNum = this.value;
})
document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
    lastNum = this.value;
})
document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
    lastNum = this.value;
})
document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
    lastNum = this.value;
})

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value += '+';
    
})
document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value += '-';
})

document.getElementById('btn_mult').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'mult';
    inputWindow.value += '*';
})

document.getElementById('btn_share').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'share';
    inputWindow.value += '/';
})
document.getElementById('btn_sqrt').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sqrt';
    inputWindow.value = '';
    const result = Math.sqrt(lastOperand);
    operation = null;
    lastOperand = 0;
    inputWindow.value = result;
})
document.getElementById('btn_calc').addEventListener('click', function () {
    console.log(lastOperand);
    if(operation === 'sum'){
        const operand = String(inputWindow.value);
        console.log(inputWindow.value);
        const result = lastOperand + parseInt(lastNum);
        operation = null;
        lastOperand = 0;
        inputWindow.value = operand + '=' + result;
    }
    if(operation === 'def'){
        const operand = String(inputWindow.value)
        const result = lastOperand - parseInt(lastNum);
        operation = null;
        lastOperand = 0;
        inputWindow.value = operand + '=' + result;
    }
    if(operation === 'mult'){
        const operand = String(inputWindow.value)
        const result = lastOperand * parseInt(lastNum);
        operation = null;
        lastOperand = 0;
        inputWindow.value = operand + '=' + result;
    }
    if(operation === 'share'){
        const operand = String(inputWindow.value)
        const result = lastOperand / parseInt(lastNum);
        operation = null;
        lastOperand = 0;
        inputWindow.value = operand + '=' + result;
    }
    num.forEach(num => num.setAttribute("disabled", "disabled"))

})
