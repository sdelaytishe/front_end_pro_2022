const num = getNumber()
const evenSummary = getEvenSum(num);
const oddSummary = getOddSum(num);
function getNumber() {
    let operand
    do {
        operand = prompt('What`s your number?')
    } while (isValueInvalid(operand));
    return Number(operand);
}
function isValueInvalid(val){
    return val === null || val.trim() === '' || isNaN(val) || val <0;
}
function getEvenSum(val){
    let i = 0;
    let result = 0;
    while (i <= val){
        if (i % 2 === 0){
            result +=i;
        }
        i++;
    }
    return result;
}
function getOddSum(val){
    let i = 0;
    let result = 0;
    while (i <= val){
        if (i % 2 === 1){
            result +=i;
        }
        i++
    }
    return result;
}
alert('Even Summary'  + evenSummary);
alert('Odd Summary'  + oddSummary);