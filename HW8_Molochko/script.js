const calcBtnElem = document.querySelector('#calcBtn');
calcBtnElem.addEventListener('click', onCalcBtnClick);
function onCalcBtnClick(){
    const operandAElem = document.querySelector('#operandA');
    const operandA = +operandAElem.value;

    const operandBElem = document.querySelector('#operandB');
    const operandB = +operandBElem.value;

    const operatorElem = document.querySelector('#operator');
    const operator = operatorElem.value;

    let expression = `${operandA} ${operator} ${operandB} = `;

    switch (operator) {
        case '+':
            expression += operandA + operandB;
            break;
        case '-':
            expression += operandA - operandB;
            break;
        case '*':
            expression += operandA * operandB;
            break;
        case '/':
            expression += operandA / operandB;
            break;
    }
    const resultElem  = document.querySelector('#result');
    resultElem.textContent = expression;
}