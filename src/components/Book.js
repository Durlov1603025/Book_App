import React from 'react';
import '../styles/BookDetails.css'; 

const Book = ({ book, addToWishlist, wishlist }) => {
  const isInWishlist = wishlist.includes(book.id);

  return (
    <div className="book-card">
      <img src={book.formats['image/jpeg']} alt={book.title} />
      <h3>{book.title}</h3>
      <p>by {book.authors.map((author) => author.name).join(', ')}</p>
      <p>{book.genres.length > 0 ? book.genres.join(', ') : 'No Genres Available'}</p>
      <button onClick={() => addToWishlist(book.id)}>
        {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
      </button>
    </div>
  );
};

export default Book;
