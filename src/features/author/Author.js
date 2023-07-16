import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import About from "./About";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section title="Szymon Basiul" body={<About />} />
  </Container>
);
