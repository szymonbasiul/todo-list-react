import { selectTasks, toggleTaskDone } from "../tasksSlice";
import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const TasksList = ({ removeTask }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>{task.content}</Content>
          <Button remove onClick={() => removeTask(task.id)}>
            &#128465;
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
