let sum = 0

function add(a, b) {
    sum = (a + b);
    return sum;
}

let sub = 0;

function subtract(a, b) {
    sub = (a - b);
    return sub;
}

let mult = 0;

function multiply(a, b) {
    mult = (a * b);
    return mult;
}

export { add, subtract, multiply };