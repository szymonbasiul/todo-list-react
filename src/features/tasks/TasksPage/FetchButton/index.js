import { Button, ButtonsContainer } from "../Buttons/styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

const FetchButton = () => {
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch();
  return (
    <ButtonsContainer>
      <>
        <Button
          disabled={loading}
          onClick={() => dispatch(fetchExampleTasks())}
        >
          {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </Button>
      </>
    </ButtonsContainer>
  );
};

export default FetchButton;
