import React, { Component } from 'react';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Body from './components/Body';
import Footer from './components/Footer';

import './App.css';

import { observer, inject } from 'mobx-react';
import { withCookies } from 'react-cookie';


@inject("HotelStore")
@observer
class App extends Component {
  
  changePromo = (event) => {
    this.props.HotelStore.setPromo(this.props.match.params.promo);
  }

  getCookies = (event) => {
    this.props.HotelStore.setCookies(this.props.cookies);
  }


  render() {
    return (
            <div className="room-and-rates">
              <NavBar />
              <SearchBar />
              <Body />
              <Footer />
              {this.changePromo()}
              {this.getCookies()}
            </div>        
    );
  }
  
}

export default withCookies(App);
