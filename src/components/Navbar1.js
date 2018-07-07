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
                <img className="idle-logo" alt="logo" src="https://www.dropbox.com/pri/get/on-ilde/on-idle_logo_white.svg?_subject_uid=1250722080&raw=1&size=1280x960&size_mode=3&w=AADgXDSe_T2KK3gZhjKNWQ2q4wzvNRq05ai2_Ryk9Zd8Xg"></img>
              </Link>
                <div className="vl1">
                    <div className="nav-text text-white ">We're innately curious
                    </div>
                </div>
            </span>
          </div>
            <div className="icon-box d-flex flex-row bd-highlight d-inline">
                <a className="nav-item nav-link m-2" href="localhost:3000/about">ABOUT</a>
                <a className="nav-item nav-link m-2"  href="">OUR<span className="work">WORK</span></a>
                <a className="nav-item nav-link m-2"  href="">BLOG</a>
                <a className="nav-item nav-link m-2"  href="">CONTACT</a>
                <a href="https://www.facebook.com/onanything/"><i className="icons nav-item nav-link text-muted m-2 fa fa-facebook" ></i></a>
                <a href="https://twitter.com/aneon"><i className="icons nav-item nav-link text-muted m-2 fa fa-twitter"></i></a>
                <a href="https://www.instagram.com/onidledesign/?hl=en"><i className="icons nav-item nav-link text-muted m-2 fa fa-instagram"></i></a>
            </div>
            <div className="get-box">
                <p className="get-in-touch text-white d-flex justify-content-end">Get in <span className="u-line"> touch</span></p>
            </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
