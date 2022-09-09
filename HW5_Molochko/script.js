'use strict'
const operator = getOperator();
const operands = getOperands();
const result = calculate(operands, operator);
showResult(result)

function getOperator() {
    let val;
    do {
       val = prompt('Choose option + - / *');
    }while(isOperatorInvalid(val));
   return val;
}
function isOperatorInvalid(val){
    return val !== '+' && val !== '-' && val !== '*' && val !== '/'
}
function getOperands(){
    const valuesStr = getOperandsString();
    const valuesStrs = valuesStr.split(',');
    const values = valuesStrs.map(function (item){
        return Number(item)
    });
    return values;
}
function getOperandsString(){
    let str = '';
    while (isOperandsStringInvalid(str)) {
        str= prompt('Operands');
    }
    return str;
}
function isOperandsStringInvalid(val){
    return val === null || val === '';
}
function calculate(values, operator){
    let result = values[0];
    for (let i = 1; i < values.length; i++) {
        result = calculateResult(result, values[i], operator)
    }
    return result;
}
function calculateResult(a, b, action){
    switch (action)  {
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
function showResult(value){
    console.log('Result is' + value);
}
