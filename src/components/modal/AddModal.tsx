import React, { useState } from "react";
import styles from "./modal.module.scss";

type ModalProps = {
  name: string;
  price: number;
  category: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (
    name: string,
    price: number,
    category: string,
    description: string
  ) => void;
};

const AddModal: React.FC<ModalProps> = ({
  name: initialName = "",
  price: initialPrice = 10,
  category: initialCategory = "",
  description: initialDescription = "",
  isOpen,
  onClose,
  onSave,
}) => {
  const [name, setName] = useState(initialName);
  const [price, setPrice] = useState(initialPrice);
  const [category, setCategory] = useState(initialCategory);
  const [description, setDescription] = useState(initialDescription);

  if (!isOpen) {
    return null;
  }

  const handleSaveClick = () => {
    onSave(name, price, category, description);
    setName(initialName);
    setPrice(initialPrice);
    setCategory(initialCategory);
    setDescription(initialDescription);
  };

  return (
    <div className={styles["modal"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-content-text"]}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <label>Category:</label>
          <input
            type="text"
            value={category}
            placeholder="e.g. Fiction, Non-fiction"
            onChange={(e) => setCategory(e.target.value)}
          />
          <label>Details:</label>
          <textarea
            value={description}
            rows={7}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className={styles["modal-content-buttons"]}>
            <button onClick={onClose}>Close</button>
            <button onClick={handleSaveClick}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
