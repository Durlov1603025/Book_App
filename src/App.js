import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';
import './styles/App.css';

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';
import Home from './pages/Home';
import WishlistPage from './pages/WishlistPage';
import BookDetails from './pages/BookDetails';

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);
  const [paginatedBooks, setPaginatedBooks] = useState([]);

  // Fetch books from API
  const fetchBooks = async () => {
    const response = await axios.get('https://gutendex.com/books');
    setBooks(response.data.results);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Filter books based on the search term
  useEffect(() => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchTerm, books]);

  // Handle pagination
  useEffect(() => {
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const paginatedBooks = filteredBooks.slice(startIndex, endIndex);
    setPaginatedBooks(paginatedBooks);
  }, [filteredBooks, currentPage, booksPerPage]);

  // Add book to wishlist
  const addToWishlist = (bookId) => {
    setWishlist([...wishlist, bookId]);
    localStorage.setItem('wishlist', JSON.stringify([...wishlist, bookId]));
  };

  // Remove book from wishlist
  const removeFromWishlist = (bookId) => {
    const updatedWishlist = wishlist.filter((id) => id !== bookId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle genre filter change
  const handleFilterChange = (genre) => {
    if (genre === '') {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter((book) => book.genres.includes(genre));
      setFilteredBooks(filtered);
    }
  };

  // Load wishlist from local storage on page load
  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Animation for book cards
  const cardAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200,
  });

  return (
    <Router>
      <Navbar>
        <SearchBar handleSearchChange={handleSearchChange} />
        <FilterDropdown handleFilterChange={handleFilterChange} />
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              books={paginatedBooks}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
              wishlist={wishlist}  // Passing wishlist as a prop
              handlePageChange={handlePageChange}
              currentPage={currentPage}
              booksPerPage={booksPerPage}
              cardAnimation={cardAnimation}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <WishlistPage
              wishlist={wishlist}
              books={books}
              removeFromWishlist={removeFromWishlist}
            />
          }
        />
        <Route path="/books/:bookId" element={<BookDetails books={books} />} />
      </Routes>
    </Router>
  );
};

export default App;
