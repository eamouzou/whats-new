import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

// NEWSCONTAINER COMPONENT CODE GOES HERE
const NewsContainer = (props) => {
  return (
    <div>
      {props.display.map(article => <NewsArticle info={article} />)}
    </div>
  )
}

export default NewsContainer;
