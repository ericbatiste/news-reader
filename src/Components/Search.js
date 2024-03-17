import './Search.css';
import { useState } from 'react';

export default function Search({ handleSearch, category, setCategory }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit(e);
  }

  return (
    <section className='search-filter-container'>
      <select
        className='select-category' 
        value={category} 
        onChange={e => setCategory(e.target.value)}
        >
        <option value="">Select category...</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="general">General</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>

      <form 
        className='search-form'
        onSubmit={handleSubmit}
        >
        <input 
          type='text'
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder='Search available articles'
          />
      </form>
    </section>
  )
}