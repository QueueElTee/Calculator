// UI Elements
const display = document.querySelector('.display');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const decimal = document.querySelector('#dot');


let calcNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let operatorParameters = [];
let operandParameters = [];


const populateDisplay = () => {
    numbers.forEach(number => number.addEventListener('click', (e) => {
        display.textContent += e.target.id;
    }));

    operators.forEach(operator => operator.addEventListener('click', () => {
        if(display.textContent != '' && calcNumbers.includes(display.textContent.slice(-1))){
            display.textContent += `${operator.textContent}`;
        };
    }));
};


const clearDisplay = () => {
    clear.addEventListener('click', () => {
        display.textContent = '';
        operatorParameters = [];
        operandParameters = []
    });
};


const clearCharacter = () => {
    backspace.addEventListener('click', () => {
        if(display.textContent != ''){
            let displayChars = display.textContent.split("");
            displayChars.pop();
            display.textContent = displayChars.join("");

            let expressionResult = display.textContent.split(/[÷|x|+|-]/);

            operandParameters.splice(0, operandParameters.length);

            if(expressionResult.length == 2){
                operandParameters[0] = expressionResult[0];
                operandParameters[1] = expressionResult[1];
            }
            else if(expressionResult.length == 1 || expressionResult.length == 0){
                operatorParameters.splice(0, operatorParameters.length);
                operandParameters[0] = expressionResult[0];
            }
        };
    });
};


const add = (a, b) => (a + b).toString().includes('.') ? (a + b).toFixed(2) : (a + b).toFixed(0);

const sub = (a, b) => (a - b).toString().includes('.') ? (a - b).toFixed(2) : (a - b).toFixed(0);

const mul = (a, b) => (a * b).toString().includes('.') ? (a * b).toFixed(2) : (a * b).toFixed(0);

const div = (a, b) => (a / b).toString().includes('.') ? (a / b).toFixed(2) : (a / b).toFixed(0);


const operate = (operator, num1, num2) => {
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return sub(num1, num2);
        case 'x':
            return mul(num1, num2);
        case '÷':
            return div(num1, num2);
    }
};


// Evaluate Expressions In Pairs
operators.forEach(operator => operator.addEventListener('click', () => {
    if(display.textContent != '' && calcNumbers.includes(display.textContent.slice(-1))){
        if(operatorParameters.length < 2){
            operatorParameters.push(operator.textContent);
            console.log(operatorParameters);
        }

        if(operatorParameters.length == 2){
            operandParameters = display.textContent.split(/[÷|x|+|-]/);
            console.log(operandParameters);
            let num1 = parseFloat(operandParameters[0]);
            let num2 = parseFloat(operandParameters[1]);
            let currentOperator = operatorParameters[0];
            let nextOperator = operatorParameters[1];

            let exprDisplay = operate(currentOperator, num1, num2);
            display.textContent = `${exprDisplay}${nextOperator}`;

            operatorParameters.splice(0, operatorParameters.length);
            operandParameters.splice(0, operandParameters.length);
            operandParameters[0] = exprDisplay;
            operatorParameters[0] = nextOperator;
        }
    }
}));


// Evaluate Expression On Equals
equals.addEventListener('click', () => {
   let expressionResult = display.textContent.split(/[÷|x|+|-]/);
    // filter(e => e) removes empty spaces from the array
    if(expressionResult.filter(e => e).length == 2){
        let num1 = parseFloat(expressionResult[0]);
        let num2 = parseFloat(expressionResult[1]);
        let currentOperator = operatorParameters[0];

        let exprDisplay = operate(currentOperator, num1, num2);
        display.textContent = `${exprDisplay}`;

        operatorParameters.splice(0, operatorParameters.length);
        operandParameters.splice(0, operandParameters.length);
        operandParameters[0] = exprDisplay;
    }
});


// Support For Decimal Points
decimal.addEventListener('click', () => {
    let expressionResult = display.textContent.split(/[÷|x|+|-]/);
    if(!expressionResult[0].includes('.') || !expressionResult[1].includes('.')){
        display.textContent += '.';
    }
});


let testOperate = operate('-', 5.8, 7);
console.log(testOperate);


populateDisplay();
clearDisplay();
clearCharacter();


// TODOS:
// 2. Add support for decimal points
// 3. Fix issue with negative numbers
// 4. Add Custom Message When You Try To Divide By 0
// 5. Add keyboard support