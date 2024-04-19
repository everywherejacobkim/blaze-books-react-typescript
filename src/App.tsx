import Header from "./components/header/Header";
import Jumbotron from "./components/jumbotron/Jumbotron";

function App() {
  return (
    <>
      <Header title="Blaze Books" />
      <Jumbotron
        title="Let Blaze Books light up your reading journey!"
        description="Explore, Discover, Read!"
        btnText="Add Book"
      />
    </>
  );
}

export default App;
