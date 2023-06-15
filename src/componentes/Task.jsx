import React from "react";

const Task = ({ text, completed, onToggle }) => {
    const taskStyle = {
        textDecoration: completed ? 'line-through' : 'none', 
        };
        
        return (
            <div style={taskStyle}>
                <input type="checkbox" checked={completed} onChange={onToggle} />
                <span>  { text } </span>

            </div>
        );
};

export default Task;
