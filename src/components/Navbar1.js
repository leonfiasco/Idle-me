import React from 'react';
import { Link,  withRouter } from 'react-router-dom';



class Navbar extends React.Component {
  render() {
    return (
      <div className="pos-f-t">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="group1 d-flex justify-content-start">
            <span className="logo-icon d-block p-2">
              <Link className="home-logo" to="/">
                <img className="idle-logo" alt="logo" src="https://uc48455ccc83b85f4ba6a1189731.previews.dropboxusercontent.com/p/thumb/AAG3IhsaFGTg66wsmcfzpiV0QXsZ_YwlgqmK2xk-AW4BZ-uxzw-OcIyYcqGYS4M4VJn4g950SsR3OTrhsc5eriP66ScbyahNDXHWtfzuN5XQG4sBMD-bSWXeTTkCgsC3HmP87e5X6unYDf0bnxZsScYWRC_aGbFBX2PDQd4ia6iAJ2GkLbeHcd8KMHf0pjhRQvrZXlPinK4wC-awMklSlmwZRgfgOp5YxS2EoSajMDJ0cw/p.png?preserve_transparency=1&size=1280x960&size_mode=3"></img>
              </Link>
                <div className="vl1">
                    <div className="nav-text text-white ">We're innately curious
                    </div>
                </div>
            </span>
          </div>
            <div className="icon-box1 d-flex flex-row bd-highlight d-inline">
              <a className="nav-item nav-link m-2" href="http://localhost:3000/about">ABOUT</a>
              <a className="nav-item nav-link m-2"  href="http://localhost:3000/ourwork">OUR<span className="work">WORK</span></a>
              <a className="nav-item nav-link m-2"  href="http://localhost:3000/blog">BLOG</a>
              <a className="nav-item nav-link m-2"  href="http://localhost:3000/contact">CONTACT</a>
                <a href="https://www.facebook.com/onanything/" rel="noopener noreferrer" target="_blank"><i className="icons nav-item nav-link text-muted m-2 fa fa-facebook" ></i></a>
                <a href="https://twitter.com/aneon" rel="noopener noreferrer" target="_blank"><i className="icons nav-item nav-link text-muted m-2 fa fa-twitter"></i></a>
                <a href="https://www.instagram.com/onidledesign/?hl=en" rel="noopener noreferrer" target="_blank"><i className="icons nav-item nav-link text-muted m-2 fa fa-instagram"></i></a>
            </div>
            <div className="get-box">
                <p className="get-in-touch1 text-white d-flex justify-content-end">Get in <span className="u-line"> touch</span></p>
            </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
