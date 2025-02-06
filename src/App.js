import { useState } from "react";
import axios from "axios";
import './App.css';  // Import the CSS file

function App() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operation, setOperation] = useState("add");
    const [result, setResult] = useState(null);

    const calculate = async () => {
        const response = await axios.post("https://api-gateway-production-0763.up.railway.app/calculate", { num1: Number(num1), num2: Number(num2), operation });
        setResult(response.data.result);
    };

    const handleSliderChange = (e) => {
        // Change operation based on slider value
        setOperation(e.target.value === "1" ? "add" : "subtract");
    };

    return (
        <div className="app-container">
            <h2>Calculator</h2>
            <div className="inputs-container">
                <input
                    className="input-field"
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Enter first number"
                />
                <input
                    className="input-field"
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Enter second number"
                />
            </div>

            <div className="slider-container">
                <label className="slider-label">{operation === "add" ? "Addition" : "Subtraction"}</label>
                <input
                    type="range"
                    min="0"
                    max="1"
                    value={operation === "add" ? "1" : "0"}
                    onChange={handleSliderChange}
                    className="slider"
                />
            </div>

            <button className="calculate-button" onClick={calculate}>Calculate</button>
            {result !== null && <h3 className="result-text">Result: {result}</h3>}
        </div>
    );
}

export default App;
