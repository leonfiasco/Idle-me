import React from 'react';
import { /*Link */ withRouter } from 'react-router-dom';



class Navbar extends React.Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="group1 d-flex justify-content-start">
        {/* <a className="navbar-brand text-white align-baseline" href="">ON-IDLE</a> */}
        <span className="logo-icon d-block p-2">
          <div className="idle-logo"></div>
        <div className="vl">
        <div className="nav-text text-white ">We are a creative digital and print agency -
        experts in <span className="line">branding</span>, <span className="line" href="">graphic design</span>, <span className="line" href="">print</span>, <span className="line" href="">website development</span> & building powerful
         <span className="line" href=""> web applications</span>.
       </div>
        </div>
      </span>
    </div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
        <div className="group1 d-flex justify-content-start">
        {/* <a className="navbar-brand text-white align-baseline" href="">ON-IDLE</a> */}
        {/* <span className="logo-icon d-block p-2">
        <img className="idle-logo" alt="idle-logo" src="https://www.dropbox.com/pri/get/on-idle_logo_white.svg?_subject_uid=1250722080&raw=1&size=1280x960&size_mode=3&w=AADC8u_eV_7JhmcIlS4UheiKYz17jUi2B2HeqBMScqUCXQ"></img>
        <div className="vl">
        <p className="nav-text text-white ">We are ar creative digital and print agency -
        experts in <span className="line">branding</span>, <span className="line" href="">graphic design</span>, <span className="line" href="">print</span>, <span className="line" href="">website development</span> & building powerful
         <span className="line" href=""> web applications</span>.
        </p>
        </div>
      </span>
    </div>  */}



          <div className="icon-box d-flex flex-row bd-highlight d-inline">

          <a className="nav-item nav-link m-2" href="">ABOUT</a>

          <a className="nav-item nav-link m-2"  href="">OUR<span className="work">WORK</span></a>

          <a className="nav-item nav-link m-2"  href="">BLOG</a>

            <a className="nav-item nav-link m-2"  href="">CONTACT</a>

            <i className="nav-item nav-link text-muted m-2 fa fa-facebook" href=""></i>

            <i className="nav-item nav-link text-muted m-2 fa fa-twitter" href=""></i>

            <i className="nav-item nav-link text-muted m-2 fa fa-instagram" href=""></i>



          </div>


        {/* <img className="facebook" alt="fb-icon" src="https://dl.dropboxusercontent.com/content_link/lAPVwA51gWHx4FPOwFqk7h0ax9ZAbC9joWsWaSm672xUqzOgjQLv9chV5rCsptTF/file?dl=0&duc_id=WPXK7rtQywlvfRRZsrjcXUupV3uoob7XdCh0NxChrlkjTqAXgIVJpzJwHTAkoXsq&raw=1&size=1280x960&size_mode=3"></img> */}
      {/* </div> */}
        {/* </div> */}




        {/* </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
        </div> */}
        <div className="get-box">
        <p className="get-in-touch text-white d-flex justify-content-end">Get in <span className="u-line"> touch</span></p>
      </div>
      </nav>

    );
  }
}

export default withRouter(Navbar);
