import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
  <ul className="list__item">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`list__itemRow 
      ${task.done && hideDone ? "list__itemRow--hidden" : ""}`}
      >
        <button className="list__button">{task.done ? "✔" : ""}</button>
        <li
          className={`list__itemContent ${
            task.done ? "list__itemContent--done" : ""
          }`}
        >
          {task.content}
        </li>
        <button className="list__button list__button--remove">&#128465;</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
