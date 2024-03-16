
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import { fetchArticles } from '../apiCalls';
import data from '../build-data';
import Articles from './Articles';
import Details from './Details';
import './App.css';

function App() {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState('');

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data.articles)
      } catch (error) {
        setError(error.message);
      }
    }
    getArticles();
  }, [])

  return (
    <>
      <header>
        <NavLink to="/" className="app-title">Whoa, News!</NavLink>
      </header>
      <main>
        <Routes>
            <Route path="/" element={ <Articles articles={articles} error={error}/> }/>
            <Route path="/article/:id" element={ <Details articles={articles} /> } />
        </Routes> 
      </main>
    </>
  )
}

export default App;
