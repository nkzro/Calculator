const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.button.number');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.textContent = number.textContent;
    })
    console.log(number.textContent)
});

//Operations needed for basic arithmetic.
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Undefined";
    }
    return a/b;
}

function operate (operator, a, b) {
    let operation;
    switch (operator) {
        case 'add':
            operation = add(a, b);
            break;
        case 'subtract':
            operation = subtract(a, b);
            break;
        case 'multiply':
            operation = multiply(a, b);
            break;
        case 'divide':
            operation = divide(a, b);
            break;
    }
    return operation;
}

