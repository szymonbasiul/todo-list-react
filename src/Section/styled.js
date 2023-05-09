import styled from "styled-components";

export const MainSection = styled.section`
  margin: 10px 0;
  background-color: ${({ theme }) => theme.color.white};
`;

export const SectionHeader = styled.h2`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 22px;
  font-weight: bolder;
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-direction: column;
  }
`;
