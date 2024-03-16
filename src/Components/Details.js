import { useEffect, useState } from 'react';
import { useParams } from "react-router";
import './Details.css';

export default function Details({ articles }) {
  const [article, setArticle] = useState(null);
  const id = Number(useParams().id)
  
  useEffect(() => {
    const foundArticle = articles.find(article => articles.indexOf(article) === id);
    if (foundArticle) setArticle(foundArticle)
  }, [articles, id])

  if (!article) return <></>
  
  return (
    <article className='article-details-container'>
      <h2>{article.title}</h2>
      <p>Published: {article.publishedAt.slice(0, 10)}</p>
      <p>Author: {article.author}</p>
      <p>Source: {article.source.name}</p>
      <img src={article.urlToImage} />
      <p>{article.content}</p>
      <a href={article.url}>Click here to visit article.</a>
    </article>
  )
}