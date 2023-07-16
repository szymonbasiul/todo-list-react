import React from "react";
import { NavbarContainer, NavbarLink, StyledNavLink } from "./styled";

export const Navbar = () => {
  return (
    <nav>
      <NavbarContainer>
        <NavbarLink>
          <StyledNavLink to="/zadania">
            Zadania
          </StyledNavLink>
        </NavbarLink>
        <NavbarLink>
          <StyledNavLink to="/autor">
            O autorze
          </StyledNavLink>
        </NavbarLink>
      </NavbarContainer>
    </nav>
  );
};
