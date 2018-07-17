import React, {  } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import OurWork from './components/pages/OurWork';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';



class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
        <Switch />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/ourwork" component={OurWork} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Switch />
        </main>
      </Router>
    );
  }
}

export default App;
