let display = document.getElementById('input1');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += ' ' + operator + ' ';
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        // Evaluate the expression
        let result = eval(display.value);
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}
