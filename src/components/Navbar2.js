import React from 'react';
import { Link,  withRouter } from 'react-router-dom';




class Navbar extends React.Component {
  render() {
    return (

      <nav className="navbar navbar-expand-xl navbar-light">
<table>
    <tr>
      <div className="section">
      <td>
          <a className="navbar-brand" href="/">
            <img className="idle-logo" id="idle-logo2"></img>
          </a>
      </td>
        <td className="divider2"></td>
        <td>
          <p id="nav-text" className="nav-text">
            We love what we do.
        </p>
      </td>
    </div>
    <td>
      <div className="touch">
        <p>Get in <span id="touch-line">touch</span></p>
      </div>
    </td>
      <td>
        <div className="social-icons">
          <div className="flex-container">
             <div className="nav-item" id="nav-items">
               <a className="nav-link text-white" id="touch-line1" href="http://localhost:3000/about">ABOUT</a>
             </div>
             <div className="nav-item" id="nav-items">
               <a className="our-work nav-link text-white" id="touch-line1" href="http://localhost:3000/ourwork">OUR WORK</a>
             </div>
           <div className="nav-item" id="nav-items">
             <a className="nav-link text-white" id="touch-line1" href="http://localhost:3000/blog">BLOG</a>
           </div>
           <div className="nav-item" id="nav-items">
             <a className="nav-link text-white" id="touch-line1" href="http://localhost:3000/contact">CONTACT</a>
           </div>
             <div id="icons">
           <a href="https://www.facebook.com/onanything/"><i className="icons nav-item nav-link text-muted m-2 fa fa-facebook" id="font-icon"></i></a>
         </div>
         <div id="icons">
           <a href="https://twitter.com/aneon"><i className="icons nav-item nav-link text-muted m-2 fa fa-twitter" id="font-icon"></i></a>
         </div>
         <div id="icons">
           <a href="https://www.instagram.com/onidledesign/?hl=en"><i className="icons nav-item nav-link text-muted m-2 fa fa-instagram" id="font-icon"></i></a>
         </div>
       </div>
        </div>
      </td>
        <td>
      </td>
    </tr>
    </table>
  </nav>

    );
  }
}

export default withRouter(Navbar);
