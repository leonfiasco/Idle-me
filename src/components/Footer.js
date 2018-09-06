import React from 'react';


class Footer extends React.Component {
  render() {
    return (

      <div className="nav justify-content-center ">
        <div className="container-fluid">
         <div className="navbar-header">
           <p className="logo-txt1 text-white text-center">
             Not swithced on yet?
           </p>
           <p className="logo-txt text-white text-center">
             Get in touch with on-IDLE HQ
           </p>
           {/* <button className="footer-button"> */}
             <div className="footer-logo .img-responsive mx-auto d-block" alt="on-logo"></div>
           {/* </button> */}
            <hr className="hr-line bg-white"></hr>
            <div className="copyright-txt">
            <footer className="footer-txt text-white">© 2018 on-IDLE Ltd.</footer>
            </div>
          </div>
        </div>
      </div>

    );
  }
}



export default Footer;
