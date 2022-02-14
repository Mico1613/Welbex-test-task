import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import {
  editTodo,
  ITodoItem,
  removeTodo,
  toggleCompleted,
} from "../../redux/todoSlice";
import styles from "./Todo.module.scss";
import remove from "../../assets/remove.png";
import edit from "../../assets/edit.png";

type Props = {
  item: ITodoItem;
};

const Todo = React.memo(({ item }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputValue, setInputValue] = useState(item.title);

  function onEditTodo() {
    setIsDisabled(!isDisabled);
    if (!isDisabled) {
      dispatch(
        editTodo({
          id: item.id,
          title: inputValue,
        })
      );
    }
  }
  function onEditEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !isDisabled) {
      dispatch(
        editTodo({
          id: item.id,
          title: inputValue,
        })
      );
      setIsDisabled(true);
    }
  }
  useEffect(() => {
    inputRef.current?.focus();
  }, [isDisabled]);

  return (
    <li className={styles.flex}>
      <span
        onClick={() => dispatch(toggleCompleted(item.id))}
        className={`${styles.isCompleted} ${
          item.completed ? styles.completed : null
        }`}
      ></span>
      <input
        title={item.title}
        value={inputValue}
        disabled={isDisabled}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
        className={`${!isDisabled ? styles.isAble : null}`}
        onKeyDown={(e) => onEditEnter(e)}
      />
      <button onClick={onEditTodo}>
        <img src={edit} alt="#" width="25" height="25" />
      </button>
      <button onClick={() => dispatch(removeTodo(item.id))}>
        <img width="30" height="30" src={remove} alt="#" />
      </button>
    </li>
  );
});

export default Todo;
