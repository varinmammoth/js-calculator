//basic math functions
function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(a,b,operator) {
    switch (operator) {
        case 'add':
            return add(a,b);
            break;
        case 'subtract':
            return subtract(a,b);
            break;
        case 'multiply':
            return multiply(a,b);
            break;
        case 'divide':
            return divide(a,b);
            break;
    }
}

let a = 0;
let b = 0;
let operator = 'add';
let userInput = '';

function clear() {
    a = 0;
    b = 0;
    operator = 'add';
    userInput = '';
    document.querySelector('.userInputDisp').textContent = userInput;
}

function equal() {
    a = operate(a, b, operator);
    document.querySelector('.userInputDisp').textContent = a;
}

function evaluateUserInput(userInput) {
    
}

let btn = document.querySelectorAll('btn');
btn = Array.from(btn);
btn.forEach( (button) => {
    button.addEventListener( 'click', () => {
        let content = button.textContent;
        if (content=='+' || content=='-' || content=='x' || content=='/') {
            userInput += content;
        }
        else if (content=='clr') {
            clear();
        }
        else if (content =='=') {
            operate(a, b, operator);
        }
        else {
            userInput += content;
            document.querySelector('.userInputDisp').textContent = userInput;
        }
    })
})

