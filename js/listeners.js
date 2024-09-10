import { add, subtract, multiply } from "./operations.js";
import { matrix_a11, matrix_b11, matrixInputs } from "./inputs.js";

const preText = document.getElementsByClassName('main__preformatted-text')[0];
const preElement = document.createElement('pre');

let sum = 0, subt = 0, mult = 0;

function listenerAdd() {

    if (matrixInputs() !== undefined) {

        sum = add(matrix_a11, matrix_b11);
        //representação textual das matrizes e da soma
        preElement.textContent = `
            A = [${matrix_a11}]
            B = [${matrix_b11}]
            A + B = [${matrix_a11} + ${matrix_b11}] = [${sum}]`;

        return preText.appendChild(preElement);
    }
}

function listenerSubtract() {

    if (matrixInputs() !== undefined) {

        subt = subtract(matrix_a11, matrix_b11);

        preElement.textContent = `
            A = [${matrix_a11}]
            B = [${matrix_b11}]
            A - B = [${matrix_a11} - ${matrix_b11}] = [${subt}]`;

        return preText.appendChild(preElement);
    }

}

function listenerMultiply() {

    if (matrixInputs() !== undefined) {

        mult = multiply(matrix_a11, matrix_b11);

        preElement.textContent = `
            A = [${matrix_a11}]
            B = [${matrix_b11}]
            A * B = [${matrix_a11} * ${matrix_b11}] = [${mult}]`;

        preText.appendChild(preElement);
    }

}

export { listenerAdd, listenerSubtract, listenerMultiply };

