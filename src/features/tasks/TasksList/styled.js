import styled, { css } from "styled-components";

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
