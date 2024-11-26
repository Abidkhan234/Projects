var display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}


function clearDisplay() {
    display.value = "";
}

function clearLastDigit() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (Error) {
        display.value = "Error";
    }
}

