import React from 'react';

import Navbar from './../Navbar2';
import Footer from './../Footer';


class Blog extends React.Component {
  render() {
    return (
      <main>
        <Navbar />

        <div className="d-flex flex-column bd-highlight mb-3">
          <div className="p-2 bd-highlight"></div>
            <div className="p-2 bd-highlight"><p className="taster1" id="taster1">Blah Blah Blah<span className="dots">...</span></p></div>
            <div className="p-2 bd-highlight"></div>
        </div>
        <div className="wrapper" id="wrapper">
        <div className="container-fluid">
  <div className="work row">
    <div className="col">
      <a href="http://localhost:3000/blog1"><img className="place-img" alt="place" src="/images/blog-placeholder-1.jpg"></img></a>
      <h6>Working with Swiss Standard German text as a British designer</h6>
      <p>A guide to typographic and punctuation rules in Swiss text.</p>
    </div>

    <div className="col">
      <img className="place-img" alt="place" src="/images/blog-placeholder-2.jpg"></img>
      <h6>Jost Hochuli
Rebecca Lydamore | 28. September 2017</h6>
      <p>A week before starting my placement at on-
IDLE, I got my hands on a copy of the recently
republished ‘Detail in typography’ by Jost [...]</p>
    </div>
    <div className="col">
      <a href="http://localhost:3000/blog2"><img className="place-img" alt="place" src="/images/third-placeholder.png"></img></a>
      <h6>We win awards for our customers!
Ane-Mari Peter | 7. September 2017</h6>
      <p>2017 WEBAWARD FOR OUTSTANDING
ACHIEVEMENT in Web Development</p>
    </div>
    <div className="col">
      <img className="place-img" alt="place" src="/images/shuffle-fest.jpeg"></img>
      <h6>Shuffle Festival presents ‘Eat with your<br></br>
hands’<br></br>
Rebecca Lydamore | 23. August 2017</h6>
      <p>Last Thursday, the on-IDLE team attended<br></br>
the first event of the annual Shuffle festival in<br></br>
Mile End.</p>
    </div>
    <div className="col">
      <img className="place-img" id="b-street" alt="place" src="/images/brokesley.jpeg"></img>
      <h6 id="b-street">How to be a Graphic Designer<br></br>
Rebecca Lydamore | 25. July 2017</h6>
      <p id="b-street">Beginning my fourth week as an intern at<br></br>
on-IDLE, it is time to reflect on some of the<br></br>
important lessons that I have learnt so far.</p>
    </div>
  </div>
</div>
</div>

        <Footer />
      </main>
    )
  }
}



export default Blog;
