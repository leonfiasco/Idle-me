import React from 'react';

import Navbar from './../Navbar1';
import Footer from './../Footer';
import Company from './../Company1';


class About extends React.Component {

//   function myFunction() {
//   var x = document.getElementById('myDIV');
//   if (x.style.display === 'none') {
//     x.style.display = 'block';
//   } else {
//     x.style.display = 'none';
//   }
// }

  render() {
    return (
      <main>
        <Navbar />
        <br></br>
        <div className="d-flex flex-column bd-highlight mb-3">
          <div className="p-2 bd-highlight"></div>
            <div className="p-2 bd-highlight"><p className="taster1">I want to know<span className="dots">...</span></p></div>
            <div className="p-2 bd-highlight"></div>
        </div>
        <div className="row no-gutters">
          <div className="col no-gutters">
            <hr className="dotted"/>
              <p className="hover we" onclick="myFunction()">What we do</p>
          </div>
          <div className="col no-gutters">
            <hr className="dotted1"/>
              <p className="hover we1">Who we are</p>
          </div>
    <div className="col no-gutters">
      <hr className="dotted2"/>
      <p className="hover we2">Who we work with</p>
    </div>
    <div className="col no-gutters">
      <hr className="dotted3"/>
      <p className="hover we3">Our Story</p>
    </div>
  </div>
  <div className="container">
  <div className="row">
    <div id="myDiv">
    <div className="col">
      <ul>
        <div className="one">
        <li>Branding</li>
      </div>
        <div className="two">
        <li>Print Design</li>
      </div>
        <div className="three">
      <li>Print Buying</li>
      </div>
        <div className="four">
        <li>UX and UI Design</li>
      </div>
        <div className="five">
        <li>Website Design & Build</li>
      </div>
        <div className="six">
        <li>Content Management Systems</li>
      </div>
        <div className="seven">
        <li>Search Engine Optimisation</li>
      </div>
        <div className="eight">
        <li>Mobile App Design</li>
      </div>
        <div className="nine">
        <li>Web Apps Design & Programming</li>
      </div>
        <div className="ten">
        <li>Responsive Design</li>
      </div>
        <div className="eleven">
          <li>Mobile Website Versions<br></br>(smartphones & tablets)</li>
      </div>
        <div className="twelve">
        <li>Consultancy</li>
      </div>
        <div className="thirteen">
          <li>Tutoring & Induction Training</li>
      </div>
      </ul>
    </div>
  </div>
    </div>
  </div>
<hr className="dot-line" />
<Company />

<Footer />
      </main>
    )
  }
}


export default About;
