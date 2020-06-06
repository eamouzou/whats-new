import React from 'react';
import './NewsContainer.css'
import local from '../../data/local.js'
import NewsArticle from '../NewsArticle/NewsArticle.js'

// NEWSCONTAINER COMPONENT CODE GOES HERE
const NewsContainer = () => {
  return (
    <div>
      {local.map(article => <NewsArticle info={article} />)}
    </div>
  )
}

export default NewsContainer;
