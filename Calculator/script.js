let display = document.getElementById('display');
let currentInput = '';
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    updateDisplay();
}

function setOperator(operator) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (currentOperator) {
        secondOperand = parseFloat(currentInput);
        firstOperand = calculateResult();
    }
    currentOperator = operator;
    currentInput = '';
}

function calculate() {
    if (currentOperator === null || currentInput === '') return;
    secondOperand = parseFloat(currentInput);
    currentInput = calculateResult();
    currentOperator = null;
    firstOperand = null;
    secondOperand = null;
    updateDisplay();
}

function calculateResult() {
    switch (currentOperator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return;
    }
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput || '0';
}
