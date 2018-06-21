import React, { Component } from 'react';
import {
  BrowserRouter as Router
  // Switch,
  // Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';



import Navbar from './components/Navbar';
import Main from './components/Main';
import Company from './components/Company';



class App extends Component {
  render() {
    return (
      <Router>
        <main>
          {/* <Navbar /> */}
          <br></br>
          <p>A taster of what we get up to<span className="dots">...</span></p>
          <Main />
          <p>See <u>more</u></p>
          <Company />
        </main>
      </Router>
    );
  }
}

export default App;
