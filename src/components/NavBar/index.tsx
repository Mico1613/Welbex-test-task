import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          !isActive ? styles.link : `${styles.link} ${styles.active}`
        }
      >
        Main Page
      </NavLink>
      <NavLink
        to="/todos"
        className={({ isActive }) =>
          !isActive ? styles.link : `${styles.link} ${styles.active}`
        }
      >
        Todos Page
      </NavLink>
    </nav>
  );
}

export default NavBar;
