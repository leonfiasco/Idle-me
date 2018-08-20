import React from 'react';
import { Link,  withRouter } from 'react-router-dom';




class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm navbar-light">
        <a href="#" class="navbar-brand">
          <img className="idle-logo" id="idle-logo1"></img>
        </a>
        <div class="vl"></div>
        <p id="nav-text">We are a creative digital and print agency -<br></br>
          experts in <span class="line">branding</span>, <span class="line" href="">graphic design</span>, <span class="line" href="">print</span>,<br></br> <span class="line" href="">website development</span> & building powerful<br></br>
          <span class="line" href=""> web applications</span>.
        </p>
        {/* <p>
          Get in <span>touch</span>
        </p> */}
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#" class="nav-link">ABOUT</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">OUR WORK</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">BLOG</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">CONTACT</a>
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
      </nav>
    );
  }
}

export default withRouter(Navbar);
