import logo from "../../assets/logo.jpg";
import styles from "./Logo.module.scss";


function Logo() {
  return (
    <div className={styles.content}>
      <img src={logo} alt="#" className={styles.logo} />
    </div>
  );
}

export default Logo;
