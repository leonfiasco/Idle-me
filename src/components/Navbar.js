import React from 'react';
import { /*Link */ withRouter } from 'react-router-dom';
import { facebook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Navbar extends React.Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
        <a className="navbar-brand text-white align-baseline" href=""><span className="font-weight-bold">ON-</span>IDLE</a>
        <div className="icon d-flex flex-row bd-higlight mb-3 text-right">
          <div className="icon-box d-flex flex-row bd-highlight">
        <a className="nav-item nav-link text-white p-2 bd-highlight" href="">ABOUT</a>
        <a className="nav-item nav-link text-white p-2"  href="">OUR WORK</a>
        <a className="nav-item nav-link text-white p-2"  href="">BLOG</a>
        <a className="nav-item nav-link text-white p-2"  href="">CONTACT</a>
        <FontAwesomeIcon icon="facebook" />
      </div>
        </div>
        {/* <div className="vl"> */}
          {/* <p className="text-white">We are ar creative digital and print agency -
          experts in <span className="line">branding</span>, <span className="line">graphic design</span>, <span className="line">print</span>, <span className="line">website development</span> & building powerful
           <span className="line"> web applications</span>.
          </p> */}
        {/* </div> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
        </div>
        {/* <p className="text-white">Get in touch</p> */}
      </nav>

    );
  }
}

export default withRouter(Navbar);
