
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import data from '../build-data';
import Search from './Search';
import Articles from './Articles';
import Details from './Details';
import './App.css';

function App() {
  const [articles, setArticles] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])

  useEffect(() => {
    setArticles(data.articles)
  }, [])

  const handleSearch = (query) => {
    const filtered = articles.filter(article => {
      return article.title.toLowerCase().includes(query.toLowerCase())
    });
    setFilteredArticles(filtered)
  }

  return (
    <>
      <header>
        <NavLink to="/" className="app-title">Whoa, News!</NavLink>
      </header>
      <main>
        <Search handleSearch={handleSearch} />
        <Routes>
            <Route path="/" element={ 
              <Articles articles={!filteredArticles.length ? articles : filteredArticles}/>}/>
            <Route path="/article/:id" element={ <Details articles={articles} /> } />
        </Routes> 
      </main>
    </>
  )
}

export default App;
