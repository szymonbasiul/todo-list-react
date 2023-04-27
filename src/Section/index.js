import { MainSection, SectionHeader } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <MainSection>
    <SectionHeader>
      {title}
      {extraHeaderContent}
    </SectionHeader>
    {body}
  </MainSection>
);

export default Section;
