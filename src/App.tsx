import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Jumbotron from "./components/jumbotron/Jumbotron";
import { RootState } from "./redux/store";
import { useDispatch } from "react-redux";
import EditModal from "./components/modal/EditModal";
import { updateBook, addBook } from "./redux/reducers";
import Footer from "./components/footer/Footer";
import AddModal from "./components/modal/AddModal";

type Book = {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
};

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book>();

  const books = useSelector((state: RootState) => state.books.books);
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsEditModalOpen(false);
    setIsAddModalOpen(false);
  };

  const handleUpdateSave = (
    id: number,
    name: string,
    price: number,
    category: string,
    description: string
  ) => {
    dispatch(updateBook({ id, name, price, category, description }));
    setIsEditModalOpen(false);
  };

  const handleAddSave = (
    name: string,
    price: number,
    category: string,
    description: string
  ) => {
    dispatch(
      addBook({
        name,
        price,
        category,
        description,
        id: Date.now(),
      })
    );
    setIsAddModalOpen(false);
  };

  return (
    <>
      <Header title="Blaze Books" />
      <Jumbotron
        title="Let Blaze Books light up your reading journey!"
        description="Explore, Discover, Read!"
        btnText="Add Book"
        openModal={() => setIsAddModalOpen(true)}
      />
      <div id="card-section">
        {books.map((book) => {
          const imageUrl = `https://source.unsplash.com/random?${book.category}&orientation=landscape`;
          return (
            <div key={book.id}>
              <Card
                id={book.id}
                imageUrl={imageUrl}
                openModal={() => {
                  setSelectedBook({
                    ...book,
                    description: book.description || "",
                  });
                  setIsEditModalOpen(true);
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
                  isOpen={isEditModalOpen}
                  onClose={handleClose}
                  onSave={handleUpdateSave}
                />
              )}
            </div>
          );
        })}
      </div>
      <Footer />
      <AddModal
        isOpen={isAddModalOpen}
        name={""}
        price={0}
        category={""}
        description={""}
        onClose={handleClose}
        onSave={handleAddSave}
      />
    </>
  );
}

export default App;
