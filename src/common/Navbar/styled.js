import styled from "styled-components";
import { NavLink } from "react-router-dom";
const activeClassName = "active";

export const NavbarContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
  background-color: ${({ theme }) => theme.color.button};
  text-decoration: none;
`;

export const NavbarLink = styled.li`
  margin: 20px 40px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: ${({ theme }) => theme.color.white};
  font-size: 18px;
  font-weight: 300;
  text-decoration: none;
  &.${activeClassName} {
    font-weight: 600;
  }
`;
