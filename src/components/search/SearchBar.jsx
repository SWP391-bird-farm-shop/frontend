import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

  const [keyword, setKeyword] = useState('');
  // const navigate = useNavigate();

  const handleSearchButton = (event) => {
    event.preventDefault();
    window.location.replace(`/search/${keyword}`);
    console.log(keyword)
  }

  return (
    <form className="search-bar" onSubmit={handleSearchButton}>
      <input className="form-control me-2 search-bar-input search-bar-round" type='text' aria-label="Search" placeholder={'Tìm kiếm ...'} onChange={(event) => setKeyword(event.target.value)} />
      <button className='search-icon search-icon-round' type="submit"><FaSearch /></button>
    </form>
  );
};

export default SearchBar;