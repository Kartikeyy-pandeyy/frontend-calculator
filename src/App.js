import { useState } from "react";
import axios from "axios";
import './App.css';  // Import the CSS file

function App() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);

    const calculate = async (operation) => {
        const response = await axios.post("https://api-gateway-production-0763.up.railway.app/calculate", { num1: Number(num1), num2: Number(num2), operation });
        setResult(response.data.result);
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

            <button className="op-btn" onClick={ () => calculate("add")} >Add</button>
            <button className="op-btn" onClick={() => calculate("subtract")}>Subtract</button>
            <button className="op-btn" onClick={() => calculate ("multiply")}>Multiply</button>
            <button className="op-btn" onClick={() => calculate ("divide")}>Divide</button>
            <button className="op-btn" onClick={() => calculate ("exponent")}>Exponent</button>

            <div className="result">
             {result !== null && <h3 className="result-text">Result: {result}</h3>}
        </div>
        </div>
        
    );
}

export default App;
