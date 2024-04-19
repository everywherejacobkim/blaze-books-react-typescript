import React from "react";
import styles from "./styles.module.scss";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <header className={styles["header-container"]}>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <a href="/" className={styles["header-top"]}>Top</a>
      </div>
    </header>
  );
};

export default Header;
