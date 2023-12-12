import { Component } from "react";
class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }
    render() {
        return (
            <div className="App">
                <h1>Counter</h1>
                <h2>Result: {this.state.counter}</h2>

                <button className="btnIncrement"
                        onClick={(e) => {
                            const perhitungan = this.state.counter - 1;
                            this.setState({counter: perhitungan});
                        }} > -
                </button>

                <button className="btnIncrement"
                    onClick={(e) => {
                        const perhitungan = this.state.counter + 1;
                        this.setState({counter: perhitungan});
                    }} > +
                </button>

                <button className="btnIncrement"
                    onClick={(e) => {
                        const perhitungan = 0;
                        this.setState({counter: perhitungan});
                    }} > Reset
                </button>

            </div>
        );
    }
}
export default Counter;
