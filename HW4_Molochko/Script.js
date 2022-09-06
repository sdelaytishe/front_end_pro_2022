'use strict'
const option = getOption();
const operandsAmount = getOperandsAmount();
const expression = calcExpression(operandsAmount, option);
alert (expression);
function getOption() {
    let option;
    do {
        option = prompt('Choose option + - / *');
    } while (!(option === '+' || option === '-' || option === '*' || option === '/'));
    return option;
}
function getOperandsAmount(){
    let operand;
    do{
        operand = prompt('how many operands?');
    }while (isOperandAmountInvalid(operand));
    return Number(operand);
}
function isOperandAmountInvalid(val) {
    return val === null ||val.trim() === '' || isNaN(val) || val <2;
}
function getOperand(label) {
    let operand;
    do{
        operand = prompt(label);
    } while (isOperandInvalid(operand));
    return Number(operand);
}
function isOperandInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val);
}
function calcExpression(count, operator){
    let result = getOperand('Operand 1');
    let expression = result;
    for( let i = 2; i <= count; i++) {
        const operand = getOperand('Operand' + i);
        result = calcResult(result,operand,operator);
        expression += `${operator} ${operand}`;
    }
        return `${expression} = ${result}`;
}
function calcResult(a, b, action){
    switch (action){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}