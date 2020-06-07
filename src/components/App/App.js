import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsCategory: ["Local", "Entertainment", "Health", "Science", "Technology"],
      newsData: {local, entertainment, health, science, technology},
      chosenNews: local,
    }
  }

  changeCategory = (event) => {
    this.setState({chosenNews: this.state.newsData[event.target.id.toLowerCase()]})
  }

  render () {
    return (
      <div className="app">
        <Menu news={this.state.newsCategory} changeCategory={this.changeCategory}/>
        <NewsContainer display={this.state.chosenNews} />
      </div>
    );
  }
}

export default App;
