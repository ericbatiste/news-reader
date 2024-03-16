import './Search.css';
import { useState } from 'react';

export default function Search({ handleSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit(e);
  }

  return (
    <form 
      className='search-form'
      onSubmit={handleChange}
    >
      <input 
        type='text'
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder='Search available articles'
      />
    </form>
  )
}