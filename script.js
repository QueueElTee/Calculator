// UI Elements
const display = document.querySelector('.display');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');


const populateDisplay = () => {
    numbers.forEach(number => number.addEventListener('click', (e) => {
        display.textContent += e.target.id;
    }));

    operators.forEach(operator => operator.addEventListener('click', () => {
        let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        if(display.textContent != '' && numbers.includes(display.textContent.slice(-1))){
            display.textContent += `${operator.textContent}`;
        };
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
        };
    });
};

populateDisplay();
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