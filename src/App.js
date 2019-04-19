import React, { Component } from 'react';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Body from './components/Body';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="room-and-rates">
        <NavBar />
        <SearchBar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
