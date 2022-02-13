import React from "react";
import styles from "./MainPageContent.module.scss";
type Props = {};

function MainPageContent({}: Props) {
  return (
    <main className={styles.main}>
      <p>
        Это главная страница с логотипом <br /> Вы можете перейти на страницу с
        ToDo приложением с помощью NavBar вверху
      </p>
    </main>
  );
}

export default MainPageContent;
