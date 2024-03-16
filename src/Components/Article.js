import { Link } from 'react-router-dom';
import './Article.css';

export default function Article({ headline, image, description, id }) {
  return (
    <Link to={`/article/${id}`} className="article-container">
      <img className="article-image" src={image}/>
      <div>
        <h2>{headline}</h2>
        <p>{description}</p>
      </div>
    </Link>
  )
}