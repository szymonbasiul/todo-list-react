import React from "react";
import "./style.css";

const Form = () => (
  <form className="form__input">
    <input className="input__task" placeholder="Co jest do zrobienia?" />
    <button className="input__taskButton">Dodaj zadanie</button>
  </form>
);

export default Form;
