const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.button.number');
const deleteBtn = document.querySelector('.button#delete');
const clearBtn = document.querySelector('.button#clear');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.textContent += number.textContent;
    })
});

deleteBtn.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
})

clearBtn.addEventListener('click', () => {
    display.textContent = null;
})

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

