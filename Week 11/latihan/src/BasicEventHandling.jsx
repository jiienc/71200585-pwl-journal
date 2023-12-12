import React from "react";

class BasicEventHandling extends React.Component {
    handleClick = () => {
        alert("Button Clicked!");
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}
export default BasicEventHandling;
