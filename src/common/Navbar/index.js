import React from "react";
import { NavbarContainer, NavbarLink, StyledLink } from "./styled";

export const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarLink>
          <StyledLink activeClassName="active" to="/zadania">
            Zadania
          </StyledLink>
        </NavbarLink>
        <NavbarLink>
          <StyledLink activeClassName="active" to="/autor">
            O autorze
          </StyledLink>
        </NavbarLink>
      </NavbarContainer>
    </>
  );
};
