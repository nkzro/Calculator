const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');
const previousDisplay = document.querySelector('[data-previous]');
const currentDisplay = document.querySelector('[data-current]');

let currentNumber = currentDisplay.textContent;
let previousNumber = '';
let operator = '';
let result = null;
let hasPoint = false;
let isCurrentDisplayClear = false;

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
        case 'x':
            result = multiply(currentNumberFloat, previousNumberFloat);
            break;
        case '÷':
            result = divide(currentNumberFloat, previousNumberFloat);
            break;
    }
    return result;
}

function appendNumber(number) {
    if (!isCurrentDisplayClear) clearCurrentDisplay();
    if (number.textContent === '.' && !hasPoint) {
        hasPoint = true;
    }
    else if (number.textContent === '.' && hasPoint) {
        return;
    }
    currentDisplay.textContent += number.textContent;
    currentNumber = currentDisplay.textContent;
}

function setOperator (operation) {
    operator = operation.textContent;
    previousNumber = currentNumber;
    previousDisplay.textContent = currentNumber + ' ' + operator;
    isCurrentDisplayClear = false; 
    hasPoint = false;
}

function clearCurrentDisplay () {
    currentDisplay.textContent = '';
    isCurrentDisplayClear = true;
}

deleteBtn.addEventListener('click', () => {
    currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
    currentNumber = currentDisplay.textContent;
})
clearBtn.addEventListener('click', () => {
    previousDisplay.textContent = null;
    currentDisplay.textContent = '0';
    currentNumber = currentDisplay.textContent;
    isCurrentDisplayClear = false;
})

numberBtns.forEach(btn => {
    btn.addEventListener('click', () => appendNumber(btn))
})

operationBtns.forEach(btn => {
    btn.addEventListener('click', () => setOperator(btn))
})

equalsBtn.addEventListener('click', () => {
     operate(operator, currentNumber, previousNumber);
     previousDisplay.textContent += ' ' + currentDisplay.textContent;
     currentDisplay.textContent = result;
     currentNumber = currentDisplay.textContent;
     isCurrentDisplayClear = false;
})

// const display = document.querySelector('.display');
// const numbers = document.querySelectorAll('.button.number');
// const deleteBtn = document.querySelector('.button#delete');
// const clearBtn = document.querySelector('.button#clear');
// const operators = document.querySelectorAll('.button.operator');
// const equals = document.querySelector('.button.evaluate');

// let currentNumber = '';
// let previousNumber = '';
// let operator = '';
// let result = '';

// let isOperatorSet = false;


// 

// /* Event listeners for buttons */

// function setOperator(sign) {
//     return operator;
// }

// numbers.forEach(number => {
//     number.addEventListener('click', () => {
//         display.textContent += number.textContent;
//         currentNumber += number.textContent;
//         if (number.classList.contains('operator')) {
//             setOperator(number.textContent);
//             console.log(operator)
//             //previousNumber += number.textContent;
//         }
//         else if (number.classList.contains('evaluate')){
//             operate(operator, currentNumber, previousNumber);
//         }
//     })
// });

// function evaluate() {
//     return operate(operator, currentNumber, previousNumber);
// }

// //Deletes the last element when you click the delete button

// //Clears the display, leaving it blank.