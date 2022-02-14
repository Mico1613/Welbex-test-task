import { useEffect } from "react";
import AddTodo from "../../components/AddTodo";
import Pagination from "../../components/Pagination";
import TodoItems from "../../components/TodoItems";
import { useAppDispatch} from "../../redux/hooks";
import { fetchTodos } from "../../redux/todoSlice";
import styles from './Todos.module.scss'


function Todos() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className={styles.flex}>
      <AddTodo />
      <Pagination/>
      <TodoItems />
    </div>
  );
}

export default Todos;
