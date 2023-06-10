import { useSelector } from "react-redux";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import { useTasks } from "../../useTasks";
import { selectTasks } from "./tasksSlice";

function App() {
  const { tasks } = useSelector(selectTasks);
  const { toggleHideDone } = useSelector(selectTasks);

  const { removeTask, toggleTaskDone, setAllDone, addNewTask } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <TasksList removeTask={removeTask} toggleTaskDone={toggleTaskDone} />
        }
        extraHeaderContent={<Buttons setAllDone={setAllDone} />}
      />
    </Container>
  );
}

export default App;
