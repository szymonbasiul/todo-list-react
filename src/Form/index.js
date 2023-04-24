import { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();
    if (!trimmedNewTaskContent) {
      return;
    }
    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
    focusInput();
  };

  return (
    <form className="form__input" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        ref={inputRef}
        onChange={({ target }) => setNewTaskContent(target.value)}
        className="input__task"
        placeholder="Co jest do zrobienia?"
      />
      <button className="input__taskButton" onClick={focusInput}>Dodaj zadanie</button>
    </form>
  );
};

export default Form;
