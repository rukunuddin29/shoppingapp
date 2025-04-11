import React from 'react';
import styles from '../styles/Search.module.css';
import { FiSearch } from 'react-icons/fi';

function Search({ searchQuery, setSearchQuery }) {
  return (
    <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        <FiSearch size={18} />
      </button>
    </form>
  );
}

export default Search;
