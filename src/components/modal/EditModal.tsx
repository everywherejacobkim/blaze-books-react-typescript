import React, { useState } from "react";
import styles from "./modal.module.scss";

type ModalProps = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  category: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (
    id: number,
    name: string,
    price: number,
    category: string,
    description: string
  ) => void;
};

const EditModal: React.FC<ModalProps> = ({
  id,
  imageUrl,
  name: initialName,
  price: initialPrice,
  category: initialCategory,
  description: initialDescription,
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
    onSave(id, name, price, category, description);
  };

  return (
    <div className={styles["modal"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-content-image"]}>
          <img src={imageUrl} alt={name} />
        </div>
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
            onChange={(e) => setCategory(e.target.value)}
          />
          <label>Details:</label>
          <textarea
            value={description}
            rows={7}
            onChange={(e) => setCategory(e.target.value)}
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

export default EditModal;
