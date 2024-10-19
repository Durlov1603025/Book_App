import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ handleSearchChange, handleFilterChange }) => {
  const genres = ['Fiction', 'Non-Fiction', 'Poetry', 'Drama', 'Science Fiction', 'Fantasy', 'Mystery', 'Romance', 'Historical Fiction'];

  return (
    <nav className="navbar">
      <div className="search-bar">
        <input type="text" placeholder="Search for books" onChange={handleSearchChange} />
      </div>
      <div className="filter-dropdown">
        <select 
          className="filter-select" 
          onChange={(event) => handleFilterChange(event.target.value)}
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;



// const Navbar = ({ handleSearchChange, handleFilterChange }) => { // Ensure handleFilterChange is destructured
//   return (
//     <nav className="navbar">
//       <SearchBar handleSearchChange={handleSearchChange} />
//       <FilterDropdown handleFilterChange={handleFilterChange} /> {/* Pass it here */}
//     </nav>
//   );
// };


// export default Navbar;


// import React from 'react';
// import '../styles/Navbar.css';
// import FilterDropdown from './FilterDropdown'; // Import the FilterDropdown

// const Navbar = ({ handleSearchChange, handleFilterChange }) => {
//   return (
//     <nav className="navbar">
//       <div className="search-bar">
//         <input type="text" placeholder="Search for books" onChange={handleSearchChange} />
//       </div>
//       <FilterDropdown handleFilterChange={handleFilterChange} /> {/* Pass the prop here */}
//     </nav>
//   );
// };

// export default Navbar;
