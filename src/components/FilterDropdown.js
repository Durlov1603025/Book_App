import React from 'react';
import '../styles/FilterDropdown.css';

const FilterDropdown = ({ handleFilterChange }) => {
  const genres = ['Fiction', 'Non-Fiction', 'Poetry', 'Drama', 'Science Fiction', 'Fantasy', 'Mystery', 'Romance', 'Historical Fiction'];

  return (
    <div className="filter-dropdown">
      <select 
        className="filter-select"  // Applying the filter-select class here
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
  );
};

export default FilterDropdown;
