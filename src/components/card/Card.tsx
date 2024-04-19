import React from "react";
import { useDispatch } from "react-redux";
import styles from "./card.module.scss";
import Modal from "../modal/Modal";
import { updateBook } from "../../redux/reducers";

interface CardProps {
  id: number;
  name: string;
  price: number;
  category: string;
}

const Card: React.FC<CardProps> = ({ id, name, price, category }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();

  const imageUrl = `https://source.unsplash.com/random?${category}`;

  const handleEdit = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSave = (name: string, price: number, category: string) => {
    dispatch(updateBook({ id, name, price, category }));
    setIsOpen(false);
  };

  return (
    <div className={styles["card"]}>
      <img src={imageUrl} alt={name} className={styles["card-img"]} />
      <div className={styles["card-body"]}>
        <h5 className={styles["card-title"]}>{name}</h5>
        <p className={styles["card-text"]}>Price: ${price}</p>
        <p className={styles["card-text"]}>Category: {category}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
      <Modal
        name={name}
        price={price}
        category={category}
        isOpen={isOpen}
        onClose={handleClose}
        onSave={handleSave}
      />
    </div>
  );
};

export default Card;
