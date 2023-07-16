import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { List, Item, Content, Button, TaskLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const TasksList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            <TaskLink to={`/zadania/${task.id}`}>{task.content}</TaskLink>
          </Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            &#128465;
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
