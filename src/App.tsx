import React from 'react';
import { useSelector } from 'react-redux';
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Jumbotron from "./components/jumbotron/Jumbotron";
import { RootState } from './redux/store';

function App() {
  const books = useSelector((state: RootState) => state.books.books);

  return (
    <>
      <Header title="Blaze Books" />
      <Jumbotron
        title="Let Blaze Books light up your reading journey!"
        description="Explore, Discover, Read!"
        btnText="Add Book"
      />
      <div id="card-section">
        {books.map(book => (
          <Card
            key={book.id}
            id={book.id}
            name={book.name}
            price={book.price}
            category={book.category}
          />
        ))}
      </div>
    </>
  );
}

export default App;