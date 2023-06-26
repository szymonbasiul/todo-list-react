import {
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
  selectAreTasksEmpty,
  selectHideDone,
  selectIsEveryTaskDone,
} from "../tasksSlice";
import { Button, ButtonsContainer } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <ButtonsContainer>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonsContainer>
  );
};

export default Buttons;
