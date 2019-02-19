import React, { Component } from 'react';
import Navigation from "./Navigation";
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import {Fragment} from 'react';
import MainPage from './MainPage';
import CardDetails from './CardDetails';
import About from './About';
import Basket from './Basket';



class App extends Component {
  render() {
    return (
        <div>
            <BrowserRouter>
                <Fragment>
                <Navigation/>
                    <Route path="/About" component={About}/>
                    <Route path="/Basket" component={Basket}/>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/page:id" component={CardDetails}/>
                </Fragment>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
