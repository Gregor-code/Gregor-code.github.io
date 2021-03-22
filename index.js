class Calculator {
    constructor(previousoperandDiv, currentoperandDiv) {//nochmal Googlen, was classes sind
        this.previousoperandDiv = previousoperandDiv;//googlen, was this macht
        this.currentoperandDiv = currentoperandDiv;
        this.clear();
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return
        if (this.previousOperand !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case "+":
                computation = prev + current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "÷":
                computation = prev / current;
                break;
            case "*":
                computation = prev * current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = "";
    }

    getDisplayNumber(number) {
        const floatNumber = parseFloat(number);
        if (isNaN(floatNumber)) return ""
        return floatNumber.toLocaleString("eng");
    }

    updateDisplay() {
        this.currentoperandDiv.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousoperandDiv.innerText = `${this.previousOperand} ${this.operation}`;
        }
    }
}


const numberButtons = document.querySelectorAll("[data-number]");//mit dieser Syntax werden alle so genannten Elemente ausgewählt(ähnlich, wie getElementById)
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const all_clearButton = document.querySelector("[data-all-clear]");
const previousoperandDiv = document.querySelector("[data-previous-operand]");
const currentoperandDiv = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousoperandDiv, currentoperandDiv);


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener("click", button => {
    calculator.compute();
    calculator.updateDisplay();
})

all_clearButton.addEventListener("click", button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener("click", button => {
    calculator.delete();
    calculator.updateDisplay();
})