import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.button};
  text-decoration: none;
  
  
`;

export const NavbarLink = styled.li`
  margin: 20px 40px;
 
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.white};
  font-size: 18px;
  font-weight: 300;
  text-decoration: none;

`;
