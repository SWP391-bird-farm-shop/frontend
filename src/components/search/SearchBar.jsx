import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css'

const SearchBar = () => {
  return (
    <form className="search-bar">
      <input className="form-control me-2 search-bar-input search-bar-round" type='text' aria-label="Search" />
      <button className='search-icon search-icon-round' type="submit"><FaSearch /></button>
    </form>
  );
};

export default SearchBar;