import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
                  <Text />
        </header>
      </div>
    );
  }
}

class Text extends Component {
  render() {
    return (
      <div className="SomeText">
      Hello sir!
      </div>
    );
  }
}

export default App;
