import { useSelector } from "react-redux";
import styles from "./card.module.scss";
import { RootState } from "../../redux/store";

interface CardProps {
  id: number;
  imageUrl: string;
  openModal: () => void;
}

const Card: React.FC<CardProps> = ({ id, imageUrl, openModal }) => {
  const book = useSelector((state: RootState) =>
    state.books.books.find((book) => book.id === id)
  );

  if (!book) {
    return null;
  }

  return (
    <>
      <div
        className={styles["card"]}
        onClick={openModal}
        title={book.description}
      >
        <img src={imageUrl} alt={book.name} className={styles["card-img"]} />
        <div className={styles["card-body"]}>
          <h5 className={styles["card-title"]}>{book.name}</h5>
          <p className={styles["card-text"]}>Price: ${book.price}</p>
          <p className={styles["card-text"]}>Category: {book.category}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
