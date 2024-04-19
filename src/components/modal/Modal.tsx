import React, { useState } from "react";

interface ModalProps {
  name: string;
  price: number;
  category: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string, price: number, category: string) => void;
}

const Modal: React.FC<ModalProps> = ({ name, price, category, isOpen, onClose, onSave }) => {
  const [editName, setEditName] = useState(name);
  const [editPrice, setEditPrice] = useState(price);
  const [editCategory, setEditCategory] = useState(category);

  const handleSave = () => {
    onSave(editName, editPrice, editCategory);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form>
          <label>
            Name:
            <input type="text" value={editName} onChange={e => setEditName(e.target.value)} />
          </label>
          <label>
            Price:
            <input type="number" value={editPrice} onChange={e => setEditPrice(Number(e.target.value))} />
          </label>
          <label>
            Category:
            <input type="text" value={editCategory} onChange={e => setEditCategory(e.target.value)} />
          </label>
          <button type="button" onClick={handleSave}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;