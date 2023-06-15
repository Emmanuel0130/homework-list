import React, {useState} from "react";
import Task from "./Task";

const TaskList = () => {
    const [tasks, setTasks ] = useState ([
        {id: 1, text: 'Bañarse', completed: false},
        {id: 2, text: 'leer', completed: false},
        {id: 3, text: 'estudiar', completed: false},
        {id: 4, text: 'desayunar', completed: false},
        {id: 5, text: 'jugar', completed: false},
        {id: 6, text: 'trabajar', completed: false},
        {id: 7, text: 'almorzar', completed: false},
        {id: 8, text: 'tomar el té', completed: false},
        {id: 9, text: 'tomar el algo', completed: false},
        {id: 10, text: 'leer', completed: false},
        {id: 11, text: 'ver una serie', completed: false},
    ]);

    const handleToggle = (taskId) => {
        const updatedTasks = tasks.map ((task) => 
        task.id === taskId ? { ...task, completed: !task.completed } : task 
        );
        setTasks(updatedTasks);
    };

    return (
        <div>
            <ul className="task-list"> 
            {tasks.map((task) => (
                <li key={task.id} className="task-item">
                    <Task
                    text={task.text}
                    completed={task.completed}
                    onToggle={() => handleToggle (task.id)} />
                </li>
            )
            )}
            </ul>
        </div>
    );
};
export default TaskList;