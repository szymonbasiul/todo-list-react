import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

function App() {
    return (
      <Container>
        <Header title="Szczegóły zadania" />
        <Section
          title="Tytuł zadania"
          body="Ukończone: TAK/NIE"
        />
      </Container>
    );
  }
  
  export default App;