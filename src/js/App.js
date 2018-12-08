import React, { Component } from 'react';
import '../css/App.css';
import PostAdBtn from './PostAd';
import AdsList from './AdsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
                  <Title />
                  <PostAdBtn />
                  <AdsList />
        </header>
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return (
      <div className="SomeText">
        <h1>Ad Postings!</h1>
        <hr></hr>
      </div>
    );
  }
}





export default App;
