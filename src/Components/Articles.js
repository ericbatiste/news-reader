import Article from "./Article";
import './Articles.css';

export default function Articles({ articles }) {
  const articleCards = articles.map(article => {
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
      {articleCards}
    </>
  )
}