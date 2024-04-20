import React from "react";
import styles from "./jumbotron.module.scss";
import bookImage from "../../assets/images/books-jumbo.jpg";

interface JumbotronProps {
  title: string;
  description: string;
  btnText: string;
}

const Jumbotron: React.FC<JumbotronProps> = ({
  title,
  description,
  btnText,
}) => {
  return (
    <div id="top" className={styles["jumbotron-container"]}>
      <div className={styles["content"]}>
        <div className={styles["image-container"]}>
          <img src={bookImage} alt={title} />
        </div>
        <div className={styles["text"]}>
          <h1 className={styles["title"]}>{title}</h1>
          <p className={styles["description"]}>{description}</p>
          <div className={styles["button-container"]}>
            <button className={styles["button"]}>{btnText || "Button"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
