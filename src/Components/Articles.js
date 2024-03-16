import Article from "./Article";
import Search from "./Search";
import { useState } from 'react';
import './Articles.css';

export default function Articles({articles}) {
  const [filteredArticles, setFilteredArticles] = useState([])

  const handleSearch = (query) => {
    const filtered = articles.filter(article => {
      return article.title.toLowerCase().includes(query.toLowerCase())
    });
    setFilteredArticles(filtered)
  }

  const articlesToRender = () => {
    if (filteredArticles.length) return filteredArticles;
    return articles;
  }

  const articleCards = articlesToRender().map(article => {
    return (
      <Article 
        headline={article.title}
        image={article.urlToImage}
        description={article.description}
        id={articles.indexOf(article)}
        key={articles.indexOf(article)}
      />
    )
  })

  return (
    <>
      <Search handleSearch={handleSearch} />
      {articleCards}
    </>
  )
}