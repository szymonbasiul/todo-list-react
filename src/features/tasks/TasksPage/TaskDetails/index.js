import { useParams } from "react-router-dom";
import { Container } from "../../../../common/Container/styled";
import Header from "../../../../common/Header";
import Section from "../../../../common/Section";
import { useSelector } from "react-redux";
import { getTaskById } from "../../tasksSlice";

function TaskDetails() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));
  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task}
        body={"Elo"}
      />
    </Container>
  );
}

export default TaskDetails;
