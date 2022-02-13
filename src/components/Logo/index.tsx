import React from "react";
import logo from "../../assets/logo.jpg";
import styles from "./Logo.module.scss";
type Props = {};

function Logo({}: Props) {
  return (
    <div className={styles.content}>
      <img
       
        src={logo}
        alt="#"
        className={styles.logo}
      />
    </div>
  );
}

export default Logo;
