import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BookDetails.css';  

const BookDetails = ({ books }) => {
  const { bookId } = useParams();
  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-details">  
      <h2 className="book-title">{book.title}</h2>  
      <img className="book-image" src={book.formats['image/jpeg'].thumbnail} alt={book.title} /> 
      <p className="book-authors">by {book.authors.map((author) => author.name).join(', ')}</p>
      <p className="book-genres">{book.genres.join(', ')}</p>
    </div>
  );
};

export default BookDetails;
