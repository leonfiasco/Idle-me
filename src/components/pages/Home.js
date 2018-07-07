import React from 'react';

import Navbar from './../Navbar';
import Main from './../Main';
import Company from './../Company'
import Social from './../Social';
import Footer from './../Footer';


class Home extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <br></br>
        <div className="d-flex flex-column bd-highlight mb-3">
          <div className="p-2 bd-highlight"></div>
          <div className="p-2 bd-highlight"><p className="taster">A taster of what we get up to<span className="dots">...</span></p></div>
          <div className="p-2 bd-highlight"></div>
        </div>
        <Main />
        <p className="more">See <u>more</u></p>
        <Company />
        <p className="shout">What we shout about<span className="dots">...</span></p>
        <Social />
        <Footer />
      </main>
    )
  }
}

export default Home;
