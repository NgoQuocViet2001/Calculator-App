import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            operator: "",
            previousNumber: "",
            result: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleNumberClick = this.handleNumberClick.bind(this);
        this.handleOperatorClick = this.handleOperatorClick.bind(this);
        this.handleEqualsClick = this.handleEqualsClick.bind(this);
        this.handleClearClick = this.handleClearClick.bind(this);
        this.handleNegativeClick = this.handleNegativeClick.bind(this);
        this.handleDecimalClick = this.handleDecimalClick.bind(this);
        this.handleFactorialClick = this.handleFactorialClick.bind(this);
        this.handlePowerClick = this.handlePowerClick.bind(this);
    }

    handleChange(event) {
        this.setState({ input: event.target.value });
    }

    handleNumberClick(number) {
        let newInput = this.state.input + number;
        this.setState({ input: newInput });
    }

    handleOperatorClick(operator) {
        if (this.state.previousNumber) {
            this.handleEqualsClick();
        }
        this.setState({
            operator: operator,
            previousNumber: this.state.input,
            input: "",
        });
    }

    handleEqualsClick() {
        if (!this.state.input) {
            return;
        }
        let result = "";
        let inputNumber = parseFloat(this.state.input);
        let previousNumber = parseFloat(this.state.previousNumber);
        switch (this.state.operator) {
            case "+":
                result = previousNumber + inputNumber;
                break;
            case "-":
                result = previousNumber - inputNumber;
                break;
            case "*":
                result = previousNumber * inputNumber;
                break;
            case "/":
                result = previousNumber / inputNumber;
                break;
            case "^":
                result = Math.pow(previousNumber, inputNumber);
                break;
            default:
                result = inputNumber;
        }
        this.setState({
            result: result,
            input: "",
            operator: "",
            previousNumber: "",
        });
    }

    handleClearClick() {
        this.setState({
            input: "",
            operator: "",
            previousNumber: "",
            result: "",
        });
    }

    handleNegativeClick() {
        let newInput = "";
        if (this.state.input.startsWith("-")) {
            newInput = this.state.input.substring(1);
        } else {
            newInput = "-" + this.state.input;
        }
        this.setState({ input: newInput });
    }

    handleDecimalClick() {
        if (this.state.input.indexOf(".") === -1) {
            let newInput = this.state.input + ".";
            this.setState({ input: newInput });
        }
    }

    handleFactorialClick() {
        let result = 1;
        let inputNumber = parseInt(this.state.input);
        if (isNaN(inputNumber) || inputNumber < 0) {
            return;
        }
        for (let i = 1; i <= inputNumber; i++) {
            result *= i;
        }
        this.setState({
            result: result,
            input: "",
            operator: "",
            previousNumber: "",
        });
    }

    handlePowerClick() {
        if (!this.state.input) {
            return;
        }
        let result = "";
        let inputNumber = parseFloat(this.state.input);
        let previousNumber = parseFloat(this.state.previousNumber);
        result = Math.pow(previousNumber, inputNumber);
        this.setState({
            result: result,
            input: "",
            operator: "",
            previousNumber: "",
        });
    }

    render() {
        return (
            <div className="App">
                <div className="calculator">
                    <div className="display">
                        {this.state.input || this.state.result || "0"}
                    </div>
                    <button
                        className="operator"
                        onClick={() => this.handleClearClick()}
                    >
                        AC
                    </button>
                    <button
                        className="operator"
                        onClick={() => this.handleNegativeClick()}
                    >
                        +/-
                    </button>
                    <button
                        className="operator"
                        onClick={() => this.handleOperatorClick("/")}
                    >
                        ÷
                    </button>
                    <button
                        className="operator"
                        onClick={() => this.handleOperatorClick("*")}
                    >
                        ×
                    </button>
                    <button
                        className="number"
                        onClick={() => this.handleNumberClick("7")}
                    >
                        7
                    </button>
                    <button
                        className="number"
                        onClick={() => this.handleNumberClick("8")}
                    >
                        8
                    </button>
                    <button
                        className="number"
                        onClick={() => this.handleNumberClick("9")}
                    >
                        9
                    </button>
                    <button
                        className="operator"
                        onClick={() => this.handleOperatorClick("-")}
                    >
                        -
                    </button>
                    <button
                        className="number"
                        onClick={() => this.handleNumberClick("4")}
                    >
                        4
                    </button>
                    <button
                        className="number"
                        onClick={() => this.handleNumberClick("5")}
                    >
                        5
                    </button>
                    <button
                        className="number"
                        onClick={() => this.handleNumberClick("6")}
                    >
                        6
                    </button>
                    <button
                        className="operator"
                        onClick={() => this.handleOperatorClick("+")}
                    >
                        +
                    </button>
                    <button
                        className="number"
                        onClick={() => this.handleNumberClick("1")}
                    >
                        1
                    </button>
                    <button
                        className="number"
                        onClick={() => this.handleNumberClick("2")}
                    >
                        2
                    </button>
                    <button
                        className="number"
                        onClick={() => this.handleNumberClick("3")}
                    >
                        3
                    </button>
                    <button
                        className="operator"
                        onClick={() => this.handleOperatorClick("^")}
                    >
                        xⁿ
                    </button>
                    <button
                        className="number"
                        onClick={() => this.handleNumberClick("0")}
                    >
                        0
                    </button>
                    <button
                        className="number"
                        onClick={() => this.handleDecimalClick()}
                    >
                        .
                    </button>
                    <button
                        className="operator"
                        onClick={() => this.handleFactorialClick()}
                    >
                        x!
                    </button>
                    <button
                        className="operator"
                        onClick={() => this.handleEqualsClick()}
                    >
                        =
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
