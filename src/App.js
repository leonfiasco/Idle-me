import React, { Component } from 'react';
import {
  BrowserRouter as Router
  // Switch,
  // Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';



import Navbar from './components/Navbar';
import Main from './components/Main';
import Company from './components/Company';
import Social from './components/Social';
import Footer from './components/Footer';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// library.add(facebook)

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <br></br>
          <p className="taster">A taster of what we get up to<span className="dots">...</span></p>
          <Main />
          <p className="more">See <u>more</u></p>
          <Company />
          <p className="shout">What we shout about<span className="dots">...</span></p>
          <Social />
          {/* <Footer /> */}
          {/* <FontAwesomeIcon icon="stroopwafel" /> */}
        </main>
      </Router>
    );
  }
}

export default App;
