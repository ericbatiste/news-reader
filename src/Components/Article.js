import './Article.css';

export default function Article({ headline, image, description }) {
  return (
    <article>
      <h2>{headline}</h2>
      <div>
        <img src={image}/>
      </div>
      <p>{description}</p>
    </article>
  )
}