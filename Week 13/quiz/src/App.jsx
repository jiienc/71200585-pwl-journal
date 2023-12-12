import * as React from "react";
import { useKeyPress } from "@uidotdev/usehooks";

export default function App() {
    const [activeKey, setActiveKey] = React.useState("");
    const [inputValue, setInputValue] = React.useState("");

    useKeyPress("ArrowRight", onKeyPress);
    useKeyPress("ArrowLeft", onKeyPress);
    useKeyPress("ArrowUp", onKeyPress);
    useKeyPress("ArrowDown", onKeyPress);

    function onKeyPress(e) {
        e.preventDefault();
        setActiveKey(e.key);
        setInputValue(activeKey);
        setTimeout(() => {
            setActiveKey("");
        }, 600);
    }

    return (
        <section>
            <h1>useKeyPress</h1>
            <p>Press an arrow key or type in the input below:</p>
            <article>
                <button className={activeKey === "ArrowUp" ? "pressed" : ""}>
                    <span>&uarr;</span>
                </button>
                <button className={activeKey === "ArrowLeft" ? "pressed" : ""}>
                    <span>&larr;</span>
                </button>
                <button className={activeKey === "ArrowDown" ? "pressed" : ""}>
                    <span>&darr;</span>
                </button>
                <button className={activeKey === "ArrowRight" ? "pressed" : ""}>
                    <span>&rarr;</span>
                </button>
            </article>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => console.log("Input:", inputValue)}>Submit</button>
            {Boolean(activeKey) && <label>{activeKey} was pressed</label>}
        </section>
    );
}
