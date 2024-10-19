import React, { useState } from 'react';
import '../styles/Home.css';
import Book from '../components/Book';
import Pagination from '../components/Pagination';

const Home = ({ books, addToWishlist, wishlist, booksPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(books.length / booksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="home-container">
      <h2>Books</h2>
      <div className="book-list">
        {currentBooks.map((book) => (
          <Book
            key={book.id}
            book={book}
            addToWishlist={addToWishlist}
            wishlist={wishlist}
          />
        ))}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        handlePageChange={handlePageChange} 
      />
    </div>
  );
};

export default Home;
