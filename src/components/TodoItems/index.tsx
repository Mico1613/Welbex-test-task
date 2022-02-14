import { useAppSelector } from "../../redux/hooks";
import Todo from "../Todo";
import styles from "./TodoItems.module.scss";

function TodoItems() {
  const { todos } = useAppSelector((state) => state.todo);

  return (
    <ul className={styles.wrapper}>
      {todos.map((i, index) => {
        return <Todo key={`${i.id}_${index}`} item={i} />;
      })}
    </ul>
  );
}

export default TodoItems;
