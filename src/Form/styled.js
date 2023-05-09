import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-basis: 100%;
  padding: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-wrap: wrap;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin: 0 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  padding: 6px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 20px;
    flex-basis: 100%;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 0 10px;
  width: 200px;
  padding: 6px;
  border: none;
  background-color: ${({ theme }) => theme.color.button};
  color: white;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.activeButton};
    transform: scale(1.1);
  }

  &:active {
    background-color: ${({ theme }) => theme.color.activeButton};
    transform: translateY(2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
  }
`;
