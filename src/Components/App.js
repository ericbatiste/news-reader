
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import { fetchArticles } from '../apiCalls';
import Articles from './Articles';
import Details from './Details';
import NotFound from './NotFound';
import './App.css';

function App() {
  const [articles, setArticles] = useState([])
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles(renderCategory());
        setArticles(data.articles)
      } catch (error) {
        setError(error.message);
      }
    }
    getArticles();
  }, [category])

  const renderCategory = () => {
    if (category.length) {
      return `category=${category}&`
    }
  }

  return (
    <>
      <header>
        <NavLink to="/" className="app-title">Whoa, News!</NavLink>
      </header>
      <main>
        <Routes>
            <Route path="/" element={ 
              <Articles 
                articles={articles} 
                category={category} 
                setCategory={setCategory} 
                error={error}/> 
              }/>
            <Route path="/article/:id" element={ <Details articles={articles} /> } />
            <Route path="*" element={ <NotFound />}/>
        </Routes> 
      </main>
    </>
  )
}

export default App;
