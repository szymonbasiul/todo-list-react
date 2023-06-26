import React from "react";
import { NavbarContainer, NavbarLink, StyledLink } from "./styled";

export const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarLink>
          <StyledLink to="/zadania">Zadania</StyledLink>
        </NavbarLink>
        <NavbarLink>
          <StyledLink to="/autor">O autorze</StyledLink>
        </NavbarLink>
      </NavbarContainer>
    </>
  );
};
