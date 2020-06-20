import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Saved from './components/Saved/Saved';
import Search from './components/Search/Search';
import NavBar from './components/NavBar/NavBar';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Router>
        <div className="App">
          <NavBar />
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
        </div>
      </Router>
    );
  }
}
