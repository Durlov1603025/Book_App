import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BookDetails.css';  // Import CSS file

const BookDetails = ({ books }) => {
  const { bookId } = useParams();
  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-details">  {/* Apply class from CSS */}
      <h2 className="book-title">{book.title}</h2>  {/* Apply class from CSS */}
      <img className="book-image" src={book.formats['image/jpeg'].thumbnail} alt={book.title} />  {/* Apply class */}
      <p className="book-authors">by {book.authors.map((author) => author.name).join(', ')}</p>
      <p className="book-genres">{book.genres.join(', ')}</p>
    </div>
  );
};

export default BookDetails;
