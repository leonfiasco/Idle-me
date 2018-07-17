import React from 'react';

import Navbar from './../Navbar1';
import Footer from './../Footer';
import Company from './../Company1';


class About extends React.Component {
  toggle_visibility = (id) => {
      var e = document.getElementById(id);
      var myClasses = document.querySelectorAll('.income'),
      i = 0,
      l = myClasses.length;

  for (i; i < l; i++) {
      myClasses[i].style.display = 'none';
  }
      if (e.style.display === 'none') e.style.display = 'block';
      // if (img2.style.display === 'block') img2.style.display = 'none';


  }

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
              <div id="income">
              <p className="hover we" onClick={this.toggle_visibility.bind(this, 'incometoggle')}>What we do</p>
                <div id="incometoggle" className="income">
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

    <div className="col no-gutters">
      <hr className="dotted1"/>
      <p className="hover we1" onClick={this.toggle_visibility.bind(this, 'incometoggle2')}>Who we are</p>
      <div id="incometoggle2" className="income">
        <div className="row-fluid">
      <div className="span9">

              <div className="venn-container">

                       <div className="overlap1">
                         <p className="overtxt1">Design</p>
                         <div className="overlap2">
                           <p className="overtxt2">Tech</p>
                             <div id="center"></div>
                           </div>

                           <div id="dot-1">
                             <div className="cross">
                             <div className="line1"></div>
                             <div className="line2"></div>
                           </div>
                           </div>

                           <div id="dot-2">
                             <div className="cross">
                             <div className="line1"></div>
                             <div className="line2"></div>
                           </div>
                           </div>
                           <div id="dot-3">
                             <div className="cross">
                             <div className="line1"></div>
                             <div className="line2"></div>
                           </div>
                           </div>
                           <div id="dot-4">
                             <div className="cross">
                             <div className="line1"></div>
                             <div className="line2"></div>
                           </div>
                           </div>
                           <div id="dot-5">
                             <div className="cross">
                             <div className="line1"></div>
                             <div className="line2"></div>
                           </div>
                           </div>
                           <div id="dot-6">
                             <div className="cross">
                             <div className="line1"></div>
                             <div className="line2"></div>
                           </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="col no-gutters">
                 <hr className="dotted2"/>
                   <p className="hover we2">Who we work with</p>
                   <div id="incometoggle2" className="">
               </div>

               <div className="col no-gutters">
                 <hr className="dotted3"/>
                 <p className="hover we3">Our Story</p>
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
