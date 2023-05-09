import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.color.button};
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.activeToggleButton};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.disabledToggleButton};
    transition: 0.4s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    align-self: center;
    flex-basis: 100%;
  }
`;
