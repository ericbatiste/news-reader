import { useEffect, useState } from 'react';
import { useParams } from "react-router";
import './Details.css';

export default function Details({ articles }) {
  const [article, setArticle] = useState(null);
  const id = Number(useParams().id)

  useEffect(() => {
    const foundArticle = articles.find(article => articles.indexOf(article) === id)
    setArticle(foundArticle)
  }, [])

  if (!article) return <></>
  return (
    <article className='article-details-container'>
      <h2>{article.title}</h2>
    </article>
  )
}