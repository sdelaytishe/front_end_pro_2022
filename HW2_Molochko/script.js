'use strict'
let number1
do{ number1 = prompt('Insert first number');
}
while ( number1 === null || number1.trim() === '' || isNaN(number1) )
let number2
do{ number2 = prompt('Insert second number');
}
while ( number2 === null || number2.trim() === '' || isNaN(number2) )
const operand1= +number1;
const operand2= +number2;
let action
do{
    action = prompt('Choose option')
}while(!(action === '+' || action ==='-'||action ==='*'||action ==='/'));
let result
switch (action) {
    case '+':
        result = operand1 + operand2;
        break;
    case '-':
        result = operand1 - operand2;
        break;
    case '*':
        result = operand1 * operand2;
        break;
    case '/':
        result = operand1 / operand2;
        break;
}
alert(operand1 + action + operand2 + '=' + result);