import styled from "styled-components";

export default styled.input`
  width: 100%;
  margin: 0 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  padding: 6px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 20px;
    flex-basis: 100%;
  }
`;