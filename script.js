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
    b = 0;
    operator = 'add';
    document.querySelector('.userInputDisp').textContent = '';
    document.querySelector('.userInputDisp').textContent = a;
}

function evaluateUserInput(userInput) {
    if (userInput=='+' || userInput=='-' || userInput=='x' || userInput=='/') 
        switch (userInput) {
            case '+':
                equal()
                operator = 'add';
                break;
            case '-':
                equal()
                operator = 'subtract';
                break;
            case 'x':
                equal()
                operator = 'multiply';
                break;
            case '/':
                equal()
                operator = 'divide';
                break;
        }
    else if (userInput=='clr') {
        clear()
    }
    else if (userInput=='=') {
        equal()
    }
    else if (userInput=='.') {
        b = String(b);
        b += userInput;
        document.querySelector('.userInputDisp').textContent = '';
        document.querySelector('.userInputDisp').textContent = b;
    }
    else {
        b = String(b);
        b += userInput;
        b = parseFloat(b);
        document.querySelector('.userInputDisp').textContent = '';
        document.querySelector('.userInputDisp').textContent = b;
    }
    
    userInput = '';
}

let btn = document.querySelectorAll('btn');
btn = Array.from(btn);
btn.forEach( (button) => {
    button.addEventListener( 'click', () => {
        let content = button.textContent;
        evaluateUserInput(content);
    })
})
