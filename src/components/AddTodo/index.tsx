import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addTodo } from "../../redux/todoSlice";
import styles from "./AddTodo.module.scss";
import { v4 as uuid } from "uuid";

function AddTodo() {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const onAddTodo = () => {
    if (inputValue.trim().length) {
      dispatch(
        addTodo({
          id: uuid(),
          userId: 1,
          completed: false,
          title: inputValue.trim(),
        })
      );
      setInputValue("");
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Введите тудушку"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onAddTodo}>Добавить тудушку</button>
    </div>
  );
}

export default AddTodo;
