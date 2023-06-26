import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./common/Navbar";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";

export default () => (
  <BrowserRouter>
    <nav>
      <Navbar/>
      <Switch>
      <Route path="/zadania">
        <Tasks />
      </Route>
      <Route path="/autor">
        <Author />
      </Route>
    </Switch>
    </nav>
  </BrowserRouter>
);
