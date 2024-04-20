import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Blaze Books © {new Date().getFullYear()} Jacob Namhyung Kim</p>
    </footer>
  );
};

export default Footer;
