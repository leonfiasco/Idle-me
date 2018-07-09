import React from 'react';

import Navbar from './../Navbar1';
import Footer from './../Footer';
import Company from './../Company1';


class About extends React.Component {
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
              <p className="hover we">What we do</p>
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
    <div className="col">
      <ul>
        <li>Branding</li>
        <li>Print Design</li>
        <li>Print Buying</li>
        <li>UX and UI Design</li>
        <li>Website Design & Build</li>
        <li>Content Management Systems</li>
        <li>Search Engine Optimisation</li>
        <li>Mobile App Design</li>
        <li>Web Apps Design & Programming</li>
        <li>Responsive Design</li>
        <li>Mobile Website Versions<br></br>(smartphones & tablets)</li>
        <li>Consultancy</li>
        <li>Tutoring & Induction Training</li>
      </ul>
    </div>
    <div className="col">
      <p className="about-txt">There are lots of companies out there that are
        talented at design and bring in specialists to do
        technical work, while others are good technicians
        but need assistance with the arty bits.<br></br>
        <br></br>
        From the start, our vision was to cultivate an agency
        that mixed quality design and leading technology
        across all media platforms. We bring both together
        under one roof, along with some communications,
        publishing and strategic clout</p>
    </div>
  </div>
</div>
<Company />

<Footer />
      </main>
    )
  }
}


export default About;
