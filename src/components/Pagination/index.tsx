import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { fetchTodos } from "../../redux/todoSlice";
import styles from "./Pagination.module.scss";


function Pagination() {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  function onChangePage(page: number) {
    setPage(page);
    dispatch(fetchTodos(page));
  }

  return (
    <ul className={styles.flex}>
      {Array(10)
        .fill(1)
        .map((i, index) => {
          return (
            <li
              key={`${i}_${index}`}
              className={`${page === index + 1 ? styles.active : null}`}
              onClick={() => onChangePage(index)}
            >
              <span>{++index}</span>
            </li>
          );
        })}
    </ul>
  );
}

export default Pagination;
