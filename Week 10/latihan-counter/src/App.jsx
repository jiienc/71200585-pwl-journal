import { useState } from 'react'
import Counter from "./Counter.jsx";

function App() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="App">

            <Counter />

            {/*<h1>Counter</h1>
            <h2>Result: {counter}</h2>

            <button className="btnIncrement"
                onClick={(e) => {
                    const perhitungan = counter - 1;
                    setCounter(perhitungan);
                }} > -
            </button>

            <button
                className="btnIncrement"
                onClick={(e) => {
                    const perhitungan = counter + 1;
                    setCounter(perhitungan);
                }}
            >
                +
            </button>

            <button
                className="btnIncrement"
                onClick={(e) => {
                    const perhitungan = 0;
                    setCounter(perhitungan)
                }}
            >
                Reset
            </button>*/}

            {/*<Counter counter={counter}/>*/}

        </div>
    );
}
export default App;

/*const Counter = (counter) => {
    console.log("state", counter);
};*/
