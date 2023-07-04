import { Button, ButtonsContainer } from "../Buttons/styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";

const FetchButton = () => {
  const dispatch = useDispatch();
  return (
    <ButtonsContainer>
      <>
        <Button onClick={() => dispatch(fetchExampleTasks())}>
          Pobierz przykładowe zadania
        </Button>
      </>
    </ButtonsContainer>
  );
};

export default FetchButton;
