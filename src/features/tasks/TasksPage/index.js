import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import Form from "./Form";
import FetchButton from "./FetchButton";
import SearchEngine from "./SearchEngine";
import TasksList from "./TasksList";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<FetchButton />}
      />
      <Section title="Wyszukiwarka" body={<SearchEngine />} />
      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
