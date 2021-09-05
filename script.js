//custom parse float so that customParseFloat('12.000') returns 12.000 and not 12.
//Source:  on StackOverflow
function customParseFloat(numAsStr) {
    const num = parseFloat(numAsStr);
    const backToStr = String(num);
    numOfZeros = numAsStr.length - backToStr.length -1;
    return num.toFixed(numOfZeros);
}
    

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
let btnSelected = false;

function clear() {
    a = 0;
    b = 0;
    operator = 'add';
    userInput = '';
    document.querySelector('.userInputDisp').textContent = '0';
    document.querySelector('.fullOperation').textContent = '0';
}

function equal() {
    a = operate(a, b, operator);
    b = 0;
    operator = 'add';
    if (String(a).length > 8) {
        a = a.toFixed(5);
    }
    document.querySelector('.userInputDisp').textContent = '';
    document.querySelector('.userInputDisp').textContent = a;
    document.querySelector('.fullOperation').textContent = '';
    document.querySelector('.fullOperation').textContent = a;
}

function evaluateUserInput(userInput) {
    if (btnSelected==true) {
        document.querySelector('.btnSelected').removeAttribute('class', 'btnSelected');
        btnSelected = false;
    }

    if (userInput=='+' || userInput=='-' || userInput=='x' || userInput=='/') 
        switch (userInput) {
            case '+':
                equal()
                document.querySelector('.fullOperation').textContent += userInput;
                operator = 'add';
                break;
            case '-':
                equal()
                document.querySelector('.fullOperation').textContent += userInput;
                operator = 'subtract';
                break;
            case 'x':
                equal()
                document.querySelector('.fullOperation').textContent += userInput;
                operator = 'multiply';
                break;
            case '/':
                equal()
                document.querySelector('.fullOperation').textContent += userInput;
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

        if (content=='+' || content=='-' || content=='x' || content=='/') {
            if (btnSelected==false) {
                button.setAttribute('class', 'btnSelected');
                btnSelected = true;
            }
        }
    })
})
