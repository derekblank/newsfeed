import React from 'react'
import './Article.css'

export function Article (props) {
  // Define Article properties from JSON
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
        {/* Display article image, if present */}
        {urlToImage &&
          <img className="Image" src={urlToImage} alt={title} />
        }
        <div className="ArticleMeta">
          {/* Display article title, description, and author */}
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
