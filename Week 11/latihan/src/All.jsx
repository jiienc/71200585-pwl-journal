import React, { useState } from "react";
const ControlledInput = ({ onInputChange }) => {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        onInputChange(newValue);
    };
    return (
        <div>
            <label>
                Controlled Input:
                <input type="text" value={inputValue} onChange={handleChange} />
            </label>
        </div>
    );
};
const ButtonClick = ({ onButtonClick }) => {
    const handleClick = () => {
        onButtonClick();
    };
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};
const All = () => {
    const [inputValue, setInputValue] = useState("");
    const [buttonClickCount, setButtonClickCount] = useState(0);
    const handleInputChange = (value) => {
        setInputValue(value);
    };
    const handleButtonClick = () => {
        setButtonClickCount((prevCount) => prevCount + 1);
    };
    return (
        <div>
            <h2>Combined Exercise</h2>
            <ControlledInput onInputChange={handleInputChange} />
            <ButtonClick onButtonClick={handleButtonClick} />
            <p>Input Value: {inputValue}</p>
            <p>Button Click Count: {buttonClickCount}</p>
        </div>
    );
};
export default All;