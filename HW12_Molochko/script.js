function Calculator(base) {
    this.result = base;

    this.add = function (val) {
        return (this.result += val);
    };
    this.div = function (val) {
        return (this.result /= val);
    };
    this.mult = function (val) {
        return (this.result *= val);
    };
    this.sub = function (val) {
        return (this.result -= val);
    };
}

const calc = new Calculator(10);
calc.result; // 10
calc.add(100); //110
calc.result; // 110
// calc.div(11); //10
// calc.mult(5); //50
// calc.sub(20); //30
// calc.result; // 30