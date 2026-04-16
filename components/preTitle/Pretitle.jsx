import React from "react";
import styles from "./Pretitle.module.css";

const Pretitle = ({ text, variant = "default" }) => {
  return (
    <div className={styles.pretitle}>
      <div className={`${styles.pretitle_ribbon} ${styles[variant]}`}>
        <div className={`${styles.police_block} ${styles.police_blue}`}></div>
        <div className={`${styles.police_block} ${styles.police_light_blue}`}></div>
        <div className={`${styles.police_block} ${styles.police_red}`}></div>
        <div className={`${styles.police_block} ${styles.police_yellow}`}></div>
      </div>
      <div className={`${styles.text} ${styles[variant]}`}>{text}</div>
    </div>
  );
};

export default Pretitle;