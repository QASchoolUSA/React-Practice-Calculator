import "./App.css";
import * as math from "mathjs";
import { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("");

  function calculateResult(display) {
    try {
      const result = math.evaluate(display);
      return result.toString();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  function handleButtonClick(value) {
    switch (value) {
      case "C":
        setDisplay("");
        break;
      case "=":
        setDisplay(calculateResult(display));
        break;
      default:
        setDisplay(display + value);
        break;
    }
  }

  return (
    <div>
      <div className="calculator">
        <div className="display center">{display}</div>
        <div className="button-row center">
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("4")}>4</button>
        </div>
        <div className="button-row center">
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
        </div>
        <div className="button-row center">
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
        </div>
        <div className="button-row center">
          <button onClick={() => handleButtonClick("*")}>*</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
          <button onClick={() => handleButtonClick("C")}>C</button>
          <button onClick={() => handleButtonClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
