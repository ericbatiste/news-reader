
import { useState, useEffect } from 'react';
import data from '../build-data'
import Articles from './Articles';
import './App.css';

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    setArticles(data.articles)
  }, [])

  return (
   <>
      <Articles articles={articles}/>
   </> 
  )
}

export default App;
