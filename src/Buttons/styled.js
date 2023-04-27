import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  color: rgb(12, 117, 117);
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
    color: rgb(16, 153, 153);
  }

  &:disabled {
    color: #6666668f;
    transition: 0.4s;
  }

  @media (max-width: 768px) {
    align-self: center;
    flex-basis: 100%;
  }
`;
