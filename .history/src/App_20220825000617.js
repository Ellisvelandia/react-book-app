import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import F
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookList />} />
        <Route path="/" element={<BookList />} />
      </Routes>
    </div>
  );
}

export default App;