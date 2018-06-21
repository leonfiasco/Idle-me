import React from 'react';
import { /*Link */ withRouter } from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
        <a className="navbar-brand text-white align-baseline" href="#"><span className="font-weight-bold">ON-</span>IDLE</a>
        <div className="vl">
          <p className="text-white">We are ar creative digital and print agency -
          perts in branding, graphic design, print, website development & building powerful
          web applications.
          </p>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link text-white"  href="#">ABOUT</a>
            <a className="nav-item nav-link text-white"  href="#">OUR WORK</a>
            <a className="nav-item nav-link text-white"  href="#">BLOG</a>
            <a className="nav-item nav-link text-white"  href="#">CONTACT</a>
          </div>
        </div>
      </nav>

    );
  }
}

export default withRouter(Navbar);
