import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import Todos from "./pages/Todos";

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
