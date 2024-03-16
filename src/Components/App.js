
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import data from '../build-data';
import Articles from './Articles';
import Details from './Details';
import './App.css';

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    setArticles(data.articles)
  }, [])

  return (
    <>
      <header>
        <NavLink to="/" className="app-title">Whoa, News!</NavLink>
      </header>
      <main>
        <Routes>
            <Route path="/" element={ <Articles articles={articles}/> }/>
            <Route path="/article/:id" element={ <Details articles={articles} /> } />
        </Routes> 
      </main>
    </>
  )
}

export default App;
