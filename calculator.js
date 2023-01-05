const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');
const previousDisplay = document.querySelector('[data-previous]');
const currentDisplay = document.querySelector('[data-current]');

let currentNumber = '';
let previousNumber = '';
let operator = '';
let result = null;
let hasPoint = false;
let isCurrentDisplayClear = false;
let isFirstOperator = true;

//Operations needed for basic arithmetic.
function add(currentNumber, previousNumber) {
    return currentNumber + previousNumber;
}

function subtract(currentNumber, previousNumber) {
    return previousNumber - currentNumber;
}

function multiply(currentNumber, previousNumber) {
    return currentNumber * previousNumber;
}

function divide(currentNumber, previousNumber) {
    if (currentNumber === 0) {
        return "Undefined";
    }
    return previousNumber/currentNumber;
}

function operate (operator, currentNumber, previousNumber) {
    let currentNumberFloat = parseFloat(currentNumber);
    let previousNumberFloat = parseFloat(previousNumber);
    switch (operator) {
        case '+':
            result = add(currentNumberFloat, previousNumberFloat);
            break;
        case '-':
            result = subtract(currentNumberFloat, previousNumberFloat);
            break;
        case '*':
            result = multiply(currentNumberFloat, previousNumberFloat);
            break;
        case '÷':
            result = divide(currentNumberFloat, previousNumberFloat);
            break;
    }
    return Math.round(result * 1000) / 1000;
}

function clearPreviousDisplay () {
    previousDisplay.textContent = '';
}

function clearCurrentDisplay () {
    currentDisplay.textContent = '';
    isCurrentDisplayClear = true;
}

function del () {
    currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
    currentNumber = currentDisplay.textContent;
}

function clear () {
    previousDisplay.textContent = '';
    currentDisplay.textContent = '0';
    currentNumber = '';
    operator = '';
    result = null;
    isCurrentDisplayClear = false;
    isFirstOperator = true;
}

function appendNumber(number) {
    currentNumber = '';
    if (!isCurrentDisplayClear) clearCurrentDisplay();
    if (number.textContent === '.' && !hasPoint) {
        hasPoint = true;
    }    
    else if (number.textContent === '.' && hasPoint) {
        return;
    }    
    if (isFirstOperator) {
        clearPreviousDisplay();
        previousNumber = '';
    }    
    currentDisplay.textContent += number.textContent;
    currentNumber += currentDisplay.textContent;
}    

function setOperator (operation) {
    if (!isFirstOperator) {
        evaluate();
        operator = operation.textContent;
        previousDisplay.textContent = previousNumber + ' ' + operator;
        currentDisplay.textContent = '';
    }    
    else {
        operator = operation.textContent;
        currentNumber = currentDisplay.textContent;
        previousDisplay.textContent = currentNumber + ' ' + operator;
        previousNumber = previousDisplay.textContent.slice(0, -2);
        // currentDisplay.textContent = '';
        clearCurrentDisplay();
        hasPoint = false;
        isFirstOperator = false;
    }    
    currentNumber = '';
}    

function evaluate () {
    if (currentNumber === '' || operator === '' || previousNumber === '' || result  === 'Undefined') {
        return;
    }
    else {
        if (currentNumber === '' || operator === '' || previousNumber === '' || result === 'Undefined') {
            return;
        }
        else {
            let roundedResult = operate(operator, currentNumber, previousNumber);
            previousDisplay.textContent = previousNumber + ' ' + operator + ' ' + currentNumber + ' =';
            previousNumber = roundedResult;
            currentDisplay.textContent = roundedResult;
            isCurrentDisplayClear = false;
        }
        isFirstOperator = true;
    }
}


//Event Listeners
deleteBtn.addEventListener('click', () => del())

clearBtn.addEventListener('click', () => clear());

numberBtns.forEach(btn => {
    btn.addEventListener('click', () => appendNumber(btn));
})

operationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setOperator(btn)
    })
})

equalsBtn.addEventListener('click', () => {
    evaluate();
})


//Keyboard Support
window.addEventListener('keydown', (e) => {
    if (
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.'
        ) {
            keybaordNumbers (e.key);
    }
    else if (
        e.key === '+' ||
        e.key === '-' ||
        e.key === '*'
        ) {
            keyboardOperators (e.key);
    }
    else if (e.key === '/') {
        keyboardOperators('÷');
    }
    else if (e.key === '=' || e.key === 'Enter') {
        evaluate();
    }
    else if (e.key === 'Backspace') {
        del();
    }
    else if (e.key === 'Escape') {
        clear();
    }
})

function keybaordNumbers (key) {
    numberBtns.forEach(btn => {
        if (btn.textContent === key) {
            btn.click();
        }
    })
}

function keyboardOperators (key) {
    operationBtns.forEach(btn => {
        if (btn.textContent === key) {
            btn.click();
        }
    })
}