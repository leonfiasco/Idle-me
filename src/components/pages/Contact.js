import React from 'react';

import Navbar from './../Navbar1';
import Footer from './../Footer';

class Contact extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <br></br>
        <div className="d-flex flex-column bd-highlight mb-3">
          <div className="p-2 bd-highlight"></div>
            <div className="p-2 bd-highlight"><p className="taster1" id="taster1">Blah blah blah<span className="dots">...</span></p></div>
            <div className="p-2 bd-highlight"></div>
        </div>
        <div className="contact-txt container" id="contact-txt">
          <div className="row">
            <div className="col">
              <section>
              <p id="con-txt1"><span className="con-txt">Email:</span> create@on-idle</p>
              <p id="con-txt1"><span className="con-txt">Phone:</span> +44 (0) 20 8980 8960</p>
              </section>
              <br></br>
              <section>
              <p id="con-txt1"><span className="con-txt">Address:</span></p>
              <p id="con-txt1">Lincoln House, 75 Brokesley Street.</p>
              <p>London, UK E3 4QJ</p>
            </section>
            <br></br>
              <p className="con-txt" id="con-txt">Foll<u>ow us</u></p>

            </div>
            <div className="col">
              <form className="contact-form" action="index.html" method="post">
              <input className="field-box1" type="text" name="fname" placeholder="Firstname"></input><br></br>
              <input className="field-box1"  type="text" name="Surname" placeholder="Surname"></input><br></br>
              <input className="field-box"  type="text" name="Comp" placeholder="Company name"></input><br></br>
              <input className="field-box"  type="text" name="number" placeholder="Phone number"></input><br></br>
              <input className="field-box1"  type="text" name="email" placeholder="Email address"></input><br></br>
              <input className="field-box"  type="text" name="project" placeholder="Your project"></input><br></br>
              <input className="field-box1" id="message" type="text" name="message" placeholder="Your message"></input>
            </form>
            <button id="submit-button" type="button" class="btn btn-danger">Danger</button>            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }
}


export default Contact;
