import { listenerAdd, listenerSubtract, listenerMultiply } from "./listeners.js";

const arrayOfButtons = [];

document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.getElementsByClassName('main__button');

    arrayOfButtons.push(buttons);

    let buttonAdd, buttonSubtract, buttonMultiply;
  
    for (let i = 0; i < buttons.length; i++) {

        let element = arrayOfButtons[0][i];

        if (element.classList.contains('main__button--add')) {

            buttonAdd = element;

            buttonAdd.addEventListener('click', listenerAdd);
        }

        if (element.classList.contains('main__button--subtract')) {

            buttonSubtract = element;

            buttonSubtract.addEventListener('click', listenerSubtract);
        }

        if (element.classList.contains('main__button--multiply')) {

            buttonMultiply = element;

            buttonMultiply.addEventListener('click', listenerMultiply);
        }
    }
});

