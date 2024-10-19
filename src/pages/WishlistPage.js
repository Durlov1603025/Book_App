import React from 'react';
import '../styles/WishlistPage.css';  

const WishlistPage = ({ wishlist, books, removeFromWishlist }) => {
  const wishlistedBooks = wishlist.map((bookId) => books.find((book) => book.id === bookId));

  return (
    <div className="wishlist-container">  {/* Apply class from CSS */}
      <h2>Wishlist</h2>
      {wishlistedBooks.length > 0 ? (
        <ul className="wishlist-books">  {/* Apply class from CSS */}
          {wishlistedBooks.map((book) => (
            <li key={book.id}>
              {book.title}
              <button className="remove-button" onClick={() => removeFromWishlist(book.id)}>Remove</button>  
            </li>
          ))}
        </ul>
      ) : (
        <p className="wishlist-empty">Your wishlist is empty.</p>  
      )}
    </div>
  );
};

export default WishlistPage;
