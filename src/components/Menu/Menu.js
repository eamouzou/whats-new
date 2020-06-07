import React from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE
function Menu(props){
  return(
    <navbar>
      <ul>
      {props.news.map(category => <button id={category} onClick={props.changeCategory}>{category}</button>)}
      </ul>
    </navbar>
  )
}
export default Menu;
