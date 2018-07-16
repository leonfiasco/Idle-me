import React, {  } from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route
} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Home from './components/pages/Home';
import About from './components/pages/About';




class App extends React.Component {
  render() {
    return (
      <Router>
        <main>

        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        </main>
      </Router>
    );
  }
}

export default App;
