import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  margin: 0;
  padding: 20px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.ul`
  padding: 0;
  width: 100%;
  margin: 10px;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const TaskLink = styled(Link)`
  color: ${({ theme }) => theme.color.button};
  border: none;
  text-decoration: none;
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

export const Button = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.activeGreen};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.activeGreen};
    transform: translateY(2px);
  }

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.red};
      transition: 0.5s;

      &:hover {
        background-color: ${({ theme }) => theme.color.activeRed};
      }

      &:active {
        background-color: ${({ theme }) => theme.color.activeRed};
        transform: translateY(2px);
      }
    `}
`;
