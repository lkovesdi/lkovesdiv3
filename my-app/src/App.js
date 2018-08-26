import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/mainbody/Main'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
