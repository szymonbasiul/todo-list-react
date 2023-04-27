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
  border-bottom: 1px solid rgba(128, 128, 128, 0.25);

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
  background-color: green;
  color: white;
  transition: 0.5s;

  &:hover {
    background-color: rgba(11, 138, 11, 0.8);
  }

  &:active {
    background-color: rgba(11, 138, 11, 0.8);
    transform: translateY(2px);
  }

  ${({ remove }) =>
    remove &&
    css`
      background-color: red;
      transition: 0.5s;

      &:hover {
        background-color: rgba(211, 12, 12, 0.752);
      }

      &:active {
        background-color: rgba(211, 12, 12, 0.752);
        transform: translateY(2px);
      }
    `}
`;
