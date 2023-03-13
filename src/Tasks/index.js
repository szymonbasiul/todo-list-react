import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="list__item">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`list__itemRow 
      ${task.done && hideDone ? "list__itemRow--hidden" : ""}`}
      >
        <button
          onClick={() => toggleTaskDone(task.id)}
          className="list__button"
        >
          {task.done ? "✔" : ""}
        </button>
        <li
          className={`list__itemContent ${
            task.done ? "list__itemContent--done" : ""
          }`}
        >
          {task.content}
        </li>
        <button
          onClick={() => removeTask(task.id)}
          className="list__button list__button--remove"
        >
          &#128465;
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
