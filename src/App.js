import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";
import {
  NavbarContainer,
  NavbarLink,
  StyledLink,
} from "./common/Navbar/styled";

export default () => (
  <BrowserRouter>
    <nav>
      <NavbarContainer>
        <NavbarLink>
          <StyledLink to="/zadania">Zadania</StyledLink>
        </NavbarLink>
        <NavbarLink>
          <StyledLink to="/autor">O autorze</StyledLink>
        </NavbarLink>
      </NavbarContainer>
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
