import React from 'react';
import { /*Link */ withRouter } from 'react-router-dom';
import { facebook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Navbar extends React.Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      <img className="idle-logo .img-responsive mx-auto d-block" alt="" src="https://dl.dropboxusercontent.com/content_link/9BvL6QfLi2HbK7KKAr9d70QBtOyc6b6wRZVIrIVLW1h5ePKSjmCL3dmCKNKr5Tn6/file?dl=0&duc_id=yORe94gXx1rWRSzXBQYDvArUUqmH9WKewCG1IbH3S2enTNih2pPW1r28OzLOJND1&raw=1&size=1280x960&size_mode=3"></img>
        <div className="icon d-flex flex-row bd-higlight mb-3 text-right">
          <div className="icon-box d-flex flex-row bd-highlight">
        <a className="nav-item nav-link text-white p-2 bd-highlight" href="">ABOUT</a>
        <a className="nav-item nav-link text-white p-2"  href="">OUR WORK</a>
        <a className="nav-item nav-link text-white p-2"  href="">BLOG</a>
        <a className="nav-item nav-link text-white p-2"  href="">CONTACT</a>
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
