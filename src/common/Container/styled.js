import styled from "styled-components";

export const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 20px 20px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
  }
`;
