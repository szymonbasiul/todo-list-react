import {
  selectTasks,
  toggleTaskDone,
  removeTask,
  selectHideDone,
} from "../tasksSlice";
import { List, Item, Content, Button, TaskLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const TasksList = () => {
  const tasks = useSelector(selectTasks);
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
            <TaskLink to="/szczegoly">{task.content}</TaskLink>
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
