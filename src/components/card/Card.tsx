import React from "react";
import styles from "./styles.module.scss";

interface CardProps {
  name: string;
  price: number;
  category: string;
}

const Card: React.FC<CardProps> = ({ name, price, category }) => {
  const imageUrl = `https://source.unsplash.com/random?${category}`;

  return (
    <div className={styles["card"]}>
      <img src={imageUrl} alt={name} className={styles["card-img"]} />
      <div className={styles["card-body"]}>
        <h5 className={styles["card-title"]}>{name}</h5>
        <p className={styles["card-text"]}>Price: ${price}</p>
        <p className={styles["card-text"]}>Category: {category}</p>
      </div>
    </div>
  );
};

export default Card;
