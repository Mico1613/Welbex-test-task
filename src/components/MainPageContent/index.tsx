import styles from "./MainPageContent.module.scss";


function MainPageContent() {
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
