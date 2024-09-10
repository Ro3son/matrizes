const inputs = document.getElementsByClassName('form__matrix');

const matrix_a = inputs[0].children[1];
const matrix_b = inputs[1].children[1];

let matrix_a11 = 0, matrix_b11 = 0;

function matrixInputs() {

    if (matrix_a.value === '' ||
        matrix_b.value === '') {

        return undefined;

    } else if (typeof matrix_a.value === 'string' &&
        typeof matrix_b.value === 'string') {

        matrix_a11 = parseInt(matrix_a.value);
        matrix_b11 = parseInt(matrix_b.value);

        return matrix_a11;
    }
}

export { matrix_a11, matrix_b11, matrixInputs };