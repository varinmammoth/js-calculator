//custom parse float so that customParseFloat('12.000') returns 12.000 and not 12.
//Source:  on StackOverflow
function customParseFloat(numAsStr) {

    // first, we convert to a number and *back* to a string. 
    let backToStr = String(parseFloat(numAsStr));
    
    if(numAsStr.includes(".") ){
      if(!backToStr.includes(".")){
        // if we get here, then the original string has a . and
        //  the converted doesn't - that indicates that the . was
        //  at the right end of the original string. Let's add it back
        backToStr += '.';
      }
      // in this case, we may have some zeroes to add. If the original
      //  string was 12.000, we need to pad to the length of that 
      //  string with zeroes.
      // the replace tacked on the end here takes care of the 
      //  initial state, where the display is 0 and the user enters
      //  a number: original is 02, and we have 2 - so zero-padding
      //  will make a mess.
      backToStr += '.';
      backToStr = backToStr.padEnd(numAsStr.length, "0");
    }
  
    return backToStr;
  }
    

function parser(numAsStr) {
    if (numAsStr[0]=='0') {
        numAsStr = numAsStr.slice( 1 );
    }
    return numAsStr;
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
    a = operate(Number(a), Number(b), operator);
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
        b = parser(b); //removes 0s in front
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
