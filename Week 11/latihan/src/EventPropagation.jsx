import React, { useState } from "react";
const Item = ({ id, text, completed, onToggle }) => {
    return (
        <li>
<span style={{ textDecoration: completed ? "line-through" : "none" }}>
{text}
</span>
            <button onClick={() => onToggle(id)}>
                {completed ? "Reopen" : "Complete"}
            </button>
        </li>
    );
};
const EventPropagation = () => {
    const [items, setItems] = useState([
        { id: 1, text: "Task 1", completed: false },
        { id: 2, text: "Task 2", completed: false },
// Add more items as needed
    ]);
    const handleToggle = (itemId) => {
        const updatedItems = items.map((item) =>
            item.id === itemId ? { ...item, completed: !item.completed } : item
        );
        setItems(updatedItems);
    };
    const completedCount = items.filter((item) => item.completed).length;
    const totalCount = items.length;
    return (
        <div>
            <p>Total Items: {totalCount}</p>
            <p>Completed Items: {completedCount}</p>
            <ul>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggle={handleToggle}
                    />
                ))}
            </ul>
        </div>
    );
};
export default EventPropagation;
