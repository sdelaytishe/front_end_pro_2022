'use strict'
function createCalculator(base){
        return{
            add: (b) => (base += b),
            div: (b) => (base /= b),
            sub: (b) => (base -=b),
            mult: (b) => (base *=b),
            set: (b) => (base = b),
        };
}

const calc = createCalculator(100);