import styled from "styled-components";

export const MainSection = styled.section`
  margin: 10px 0;
  background-color: white;
`;

export const SectionHeader = styled.h2`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 22px;
  font-weight: bolder;
  margin: 0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.25);

  @media (max-width: 768px) {
      flex-direction: column;
  }
`;
