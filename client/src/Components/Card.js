import React from 'react'
import './static/Card.css'

function Card(props) {

const {news} = props

  return (
      <div className='card'>
        <img className='img' src={news.urlToImage}/>
        <div>
          <h2>{news.title}</h2>
          <h4>By:{news.author}</h4>
          <p>{news.description}</p>
          <a className='link' href={news.url}>Read More...</a>
        </div>
        

    </div>
  )
}

export default Card