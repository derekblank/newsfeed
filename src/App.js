import React, { useState } from 'react'
import useSWR from 'swr'

// Import Article and Spinner components
import { Article } from './components/Article'
import { Spinner } from './components/Spinner'

function App () {
  // Initialize news source using useState hook
  const [ source, setSource ] = useState('abc-news-au')

  // Use vanilla fetch for REST fetching and configure the response to return as JSON
  const fetcher = url => fetch(url).then(r => r.json())

  // Use SWR as data fetching util
  const {
    data: articlesData,
    error,
  } = useSWR(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=96e7efbae84544aca2e40f5834bf2777`, fetcher)

  // Update the source state when source select element changes
  function handleChange (event) {
    setSource(event.target.value)
  }

  return (
    <main className="App">
      <header className="Header">
        <h1>World News</h1>
        <div className="Source">
          {/* Create select element and define a few news sources */}
          <label>Source: </label>
          <select value={source} onChange={handleChange}>
            <option value="abc-news-au">ABC News (AU)</option>
            <option value="bbc-news">BBC News</option>
            <option value="australian-financial-review">Australian Financial Review</option>
            <option value="associated-press">Associated Press</option>
            <option value="ars-technica">Ars Technica</option>
            <option value="google-news-au">Google News (Australia)</option>
            <option value="cnbc">CNBC</option>
            <option value="the-irish-times">The Irish Times</option>
            <option value="the-next-web">The Next Web</option>
            <option value="the-verge">The Verge</option>
          </select>
        </div>
      </header>
      <section className="Container">
        {/* Display a basic error if the network request fails */}
        {error &&
          <div>An error occured.</div>
        }

        {/* Display a loading spinner when no article data is present */}
        {!articlesData &&
          <Spinner />
        }

        {/* Wait for article data, and use map to iterate through article properties into individual articles */}
        {articlesData && articlesData.articles.map((article, index) => {
          return (
            <Article
              description={article.description}
              key={index}
              title={article.title}
              url={article.url}
              content={article.content}
              publishedAt={article.publishedAt}
              urlToImage={article.urlToImage}
              author={article.author}
            />
          )}
        )}
      </section>
    </main>
  )
}

export default App
