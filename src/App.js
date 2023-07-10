import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { Navbar } from "./common/Navbar";
import TasksPage from "./features/tasks/TasksPage";
import Author from "./features/author/Author";
import TaskDetails from "./features/tasks/TasksPage/TaskDetails";

export default () => (
  <BrowserRouter basename="/todo-list-react">
    <nav>
      <Navbar />
      <Switch>
        <Route path="/zadania/:id">
          <TaskDetails />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
        <Route path="/szczegoly">
          <TaskDetails />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </BrowserRouter>
);
