import React, { Component } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content'

class App extends Component {
  render() {
    return(
      <div>
        <Header></Header>
        <Content></Content>
      </div>
    );
  }

}

export default App;
