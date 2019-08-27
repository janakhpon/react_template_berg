import React, {Component} from 'react';
import Header from './components/header';
import Align from './components/align';
import Banner from './components/banner';
import Button from './components/button';
import Sample from './components/sample';
import Subscription from './components/subscription';
import Footer from './components/footer';

import './App.css';

export default class App extends Component {
  render(){
    return (
      <div>
        <Header/>
        <Align/>
        <Banner/>
        <Button/>
        <Sample/>
        <Subscription/>
        <Footer/>
      </div>
    );
  }
}

