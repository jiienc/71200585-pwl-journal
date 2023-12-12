import React from "react";
class ControlledInput extends React.Component {
    state = {
        inputValue: "",
    };
    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value,
        });
    };
    render() {
        return (
            <div>
                <h1>Controlled Input</h1>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <p>Input Value: {this.state.inputValue}</p>
            </div>
        );
    }
}
export default ControlledInput;