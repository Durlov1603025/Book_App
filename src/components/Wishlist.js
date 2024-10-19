import React from 'react';
import '../styles/Wishlist.css';
const WishlistPage = ({ wishlist, books, removeFromWishlist }) => {
  const wishlistedBooks = wishlist.map((bookId) => books.find((book) => book.id === bookId));

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlistedBooks.length > 0 ? (
        <ul>
          {wishlistedBooks.map((book) => (
            <li key={book.id}>
              {book.title}
              <button onClick={() => removeFromWishlist(book.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishlistPage;