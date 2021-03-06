import React from 'react';
import { Link,  withRouter } from 'react-router-dom';




class Navbar extends React.Component {
  render() {
    return (

      <nav className="navbar navbar-expand-sm navbar-light">
        <a href="" className="navbar-brand">
          <img className="idle-logo" id="idle-logo1" alt="" href="http://localhost:3000/"></img>
        </a>
        <div className="vl"></div>
        <p id="nav-text">We love what we do.
        </p>
        <button className="navbar-toggler" data-toggle="collapse" data-target="navbarMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="http://localhost:3000/about" className="nav-link" id="nav-link">ABOUT</a>
            </li>
            <li className="nav-item">
              <a href="http://localhost:3000/ourwork" className="nav-link" id="nav-link">OUR WORK</a>
            </li>
            <li className="nav-item">
              <a href="http://localhost:3000/blog" className="nav-link" id="nav-link">BLOG</a>
            </li>
            <li className="nav-item">
              <a href="http://localhost:3000/contact" className="nav-link" id="nav-link">CONTACT</a>
            </li>
            <div id="icons">
          <a href="https://www.facebook.com/onanything/"><i className="icons nav-item nav-link text-muted m-2 fa fa-facebook" id="font-icon"></i></a>
        </div>
        <div id="icons">
          <a href="https://twitter.com/aneon"><i className="icons nav-item nav-link text-muted m-2 fa fa-twitter" id="font-icon"></i></a>
        </div>
        <div id="icons">
          <a href="https://www.instagram.com/onidledesign/?hl=en"><i className="icons nav-item nav-link text-muted m-2 fa fa-instagram" id="font-icon"></i></a>
        </div>
          </ul>
        </div>
        {/* <div className="in-touch">
          <p>
            Get in <span>touch</span>
          </p>
        </div> */}
      </nav>
    );
  }
}

export default withRouter(Navbar);
