import React from 'react'
import './Article.css'

export function Article (props) {
  const {
    author,
    title,
    description,
    url,
    urlToImage,
  } = props

  return(
    <a href={`${url}`}>
      <div className="Article">
        {urlToImage &&
          <img className="Image" src={urlToImage} alt={title} />
        }
        <div className="ArticleMeta">
          {title &&
            <h2>{title}</h2>
          }
          {description &&
            <p>{description}</p>
          }
          {author &&
            <span className="Author">{author}</span>
          }
        </div>
      </div>
    </a>
  )
}
