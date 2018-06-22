import React from 'react';


class Footer extends React.Component {
  render() {
    return (
      <nav className="footer navbar-inverse navbar-bottom bg-dark">
    <div className="container-fluid">
      <div className="navbar-header">
        <p className="logo-txt text-white text-center">
          Not swithced on yet?
        </p>
        <p className="text-white text-center">
          Get in touch with on-IDLE HQ
        </p>
        <img className="on-logo .img-responsive mx-auto d-block" alt=""  src="https://dl.dropboxusercontent.com/content_link/Uodk5baWZUsqXsy3EzqqcxD68mfTBG9PxN67Bd6umhp7nKJo3eNdtVe73AF5qRkc/file?dl=0&duc_id=fnMv2aziFCc2TXKGo7YsaD1vueOjQc0B7zKCtt18GN87iIBmKoHsJPhkU23Gw6XF&raw=1&size=800x600&size_mode=3"></img>
        {/* <a className="navbar-brand" href=""></a> */}
      </div>
      <ul className="nav navbar-nav">
      </ul>
      <hr className="hr-line bg-white"></hr>
      <div className="copyright-txt">
      <footer className="footer-txt text-white">© 2018 on-IDLE Ltd.</footer>
      </div>
    </div>
  </nav>
    );
  }
}





export default Footer;
