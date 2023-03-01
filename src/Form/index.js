import React from "react";
import "./style.css";

const Form = () => (
  <form className="form__input">
    <input className="newTask" placeholder="Co jest do zrobienia?" />
    <button className="newTaskButton">Dodaj zadanie</button>
  </form>
);

export default Form;