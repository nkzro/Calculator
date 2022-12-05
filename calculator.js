const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.button.number');
const deleteBtn = document.querySelector('.button#delete');
const clearBtn = document.querySelector('.button#clear');
const operators = document.querySelectorAll('.button.operator');

let firstNumber = '';
let secondNumber = '';
let operator = '';


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

// function equation () {
//     firstNumber = 
// }

function operate (operator, firstNumber, secondNumber) {
    let operation;
    switch (operator) {
        case '+':
            operation = add(firstNumber, secondNumber);
            break;
        case 'subtract':
            operation = subtract(firstNumber, secondNumber);
            break;
        case 'multiply':
            operation = multiply(firstNumber, secondNumber);
            break;
        case 'divide':
            operation = divide(firstNumber, secondNumber);
            break;
    }
    return operation;
}


/* Event listeners for buttons */

operators.forEach(sign => {
    sign.addEventListener('click', () => {
        operator = sign;
    })
});

numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.textContent += number.textContent;
    })
});

//Deletes the last element when you click the delete button
deleteBtn.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
})

//Clears the display, leaving it blank.
clearBtn.addEventListener('click', () => {
    display.textContent = null;
})