import './App.css';
import Book from "./components/book/book-listing";
import AddBook from "./components/book/add-book";
import EditBook from "./components/book/edit-book";

import Home from "./components/home";
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid">

    <Router>
    <div className="justify-content-center bg-primary navbar">
      <div className="col-md-2 text-white text-center">
      <Link to="/" className="text-white">Home</Link>
      </div>
      <div className="col-md-2 text-white text-center">
      <Link to="/book-listing" className="text-white">Book Listing</Link>
      </div>
      </div>
    <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route path="/book-listing" element={<Book />}></Route>
    <Route path="/book/add-book" element={<AddBook />}></Route>
    <Route path="/book/edit-book" element={<EditBook />}></Route>
    </Routes>
    </Router>
    <Footer></Footer>
  </div>
  );
}

export default App;
