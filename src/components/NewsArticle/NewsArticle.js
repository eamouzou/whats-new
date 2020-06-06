import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE
const NewsArticle = (props) => {
  const article = (
    <div>
      <h1>{props.info.headline}</h1>
      <p>{props.info.description}</p>
      <h3><a href={props.info.url}>Article Link</a></h3>
      <img src={props.info.img}></img>
    </div>
  )
  
  return (
    article
  )
}
export default NewsArticle;
