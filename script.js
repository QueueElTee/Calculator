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