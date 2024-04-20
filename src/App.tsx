import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Jumbotron from "./components/jumbotron/Jumbotron";
import { RootState } from "./redux/store";
import { useDispatch } from "react-redux";
import EditModal from "./components/modal/EditModal";
import { updateBook } from "./redux/reducers";
import Footer from "./components/footer/Footer";

type Book = {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book>();

  const books = useSelector((state: RootState) => state.books.books);
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSave = (
    id: number,
    name: string,
    price: number,
    category: string,
    description: string
  ) => {
    dispatch(updateBook({ id, name, price, category, description }));
    setIsModalOpen(false);
    console.log(name, price, category, description);
  };

  return (
    <>
      <Header title="Blaze Books" />
      <Jumbotron
        title="Let Blaze Books light up your reading journey!"
        description="Explore, Discover, Read!"
        btnText="Add Book"
      />
      <div id="card-section">
        {books.map((book) => {
          const imageUrl = `https://source.unsplash.com/random?${book.category}&orientation=landscape`;
          return (
            <>
              <Card
                key={book.id}
                id={book.id}
                imageUrl={imageUrl}
                openModal={() => {
                  setSelectedBook({
                    ...book,
                    description: book.description || "",
                  });
                  setIsModalOpen(true);
                }}
              />
              {selectedBook && selectedBook.id === book.id && (
                <EditModal
                  id={selectedBook.id}
                  imageUrl={imageUrl}
                  name={selectedBook.name}
                  price={selectedBook.price}
                  category={selectedBook.category}
                  description={selectedBook.description}
                  isOpen={isModalOpen}
                  onClose={handleClose}
                  onSave={handleSave}
                />
              )}
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
