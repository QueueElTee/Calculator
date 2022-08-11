// UI Elements
const display = document.querySelector('.display');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const numbers = document.querySelectorAll('.number');


const populateInput = () => {
    numbers.forEach(number => number.addEventListener('click', (e) => {
        display.textContent += e.target.id;
    }));
};


const clearDisplay = () => {
    clear.addEventListener('click', () => {
        display.textContent = '';
    });
};

const clearCharacter = () => {
    backspace.addEventListener('click', () => {
        if(display.textContent != ''){
            let displayChars = display.textContent.split("");
            displayChars.pop();
            display.textContent = displayChars.join("");
        }
    });
};

populateInput();
clearDisplay();
clearCharacter();



const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mul = (a, b) => a * b;

const div = (a, b) => a / b;


const operate = (operator, num1, num2) => {
    switch(operator){
        case '+':
            add(num1, num2);
            break;
        case '-':
            sub(num1, num2);
            break;
        case 'x':
            mul(num1, num2);
            break;
        case '÷':
            div(num1, num2);
            break;
    }
};