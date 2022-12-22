const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.button.number');
const deleteBtn = document.querySelector('.button#delete');
const clearBtn = document.querySelector('.button#clear');
const operators = document.querySelectorAll('.button.operator');
const equals = document.querySelector('.button.evaluate');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

let isOperatorSet = false;


//Operations needed for basic arithmetic.
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return "Undefined";
    }
    return firstNumber/secondNumber;
}

function operate (operator, firstNumber, secondNumber) {
    let operation;
    switch (operator) {
        case '+':
            operation = add(firstNumber, secondNumber);
            break;
        case '-':
            operation = subtract(firstNumber, secondNumber);
            break;
        case 'x':
            operation = multiply(firstNumber, secondNumber);
            break;
        case '÷':
            operation = divide(firstNumber, secondNumber);
            break;
    }
    return operation;
}


/* Event listeners for buttons */

function setOperator(sign) {
    return operator;
}

numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.textContent += number.textContent;
        firstNumber += number.textContent;
        if (number.classList.contains('operator')) {
            setOperator(number.textContent);
            console.log(operator)
            //secondNumber += number.textContent;
        }
        else if (number.classList.contains('evaluate')){
            operate(operator, firstNumber, secondNumber);
        }
    })
});

function evaluate() {
    return operate(operator, firstNumber, secondNumber);
}

//Deletes the last element when you click the delete button
deleteBtn.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
})

//Clears the display, leaving it blank.
clearBtn.addEventListener('click', () => {
    display.textContent = null;
})