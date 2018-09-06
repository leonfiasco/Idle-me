import React from 'react';

import Navbar from './../Navbar2';
import Footer from './../Footer';

class OurWork extends React.Component {


  render() {
    return (
      <main>
        <Navbar />
        <br></br>
        <div className="d-flex flex-column bd-highlight mb-3">
          <div className="p-2 bd-highlight"></div>
            <div className="p-2 bd-highlight"><p className="taster1" id="taster1">Show me<span className="dots">...</span></p></div>
            <div className="p-2 bd-highlight"></div>
        </div>
        <div className="work-dot row" id="work-dot">
  <div className="work-line1 col-sm-6">
    <div className="business row">
      <div className="col">
        <p className="work-hover1">Business</p>
      </div>
      <div className="col">
        <p className="work-hover2">Media</p>
      </div>
      <div className="col">
        <p className="work-hover3">Not-for-profit</p>
          </div>
          <div className="w-100 d-none d-md-block"></div>
      <div className="col">
        <p className="work-hover4">Finance</p>
      </div>
        <div className="col">
        <p className="work-hover5">Culture</p>
      </div>
      <div className="retail col">
        <p className="work-hover6">Retail</p>
        </div>
    </div>
  </div>
  <div className="work-line2 col-sm-6">
    <div className="business row ">
      <div className="col">
        <p className="work-hover7">Web Design</p>
      </div>
      <div className="col">
        <p className="work-hover8">Branding</p>
      </div>
      <div className="col">
        <p className="work-hover9">Graphic Design</p>
          </div>
          <div className="w-100 d-none d-md-block"></div>
      <div className="col">
        <p className="work-hover10">Print Design</p>
      </div>
        <div className="col">
        <p className="work-hover11">Typography</p>
      </div>
      <div className="col">
        <p className="work-hover12">Web Development</p>
        </div>
    </div>
  </div>
  </div>


        <div className="work container-fluid" id="work-container">
  <div className="work row">
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/324/237/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>


    </div>
    <br></br>
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/324/237/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>

    </div>
    <br></br>
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/324/237/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>

      <br></br>
    </div>
  </div>
  <div className="work row">
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/324/237/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>


    </div>
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/324/237/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>


    </div>
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/324/237/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>


    </div>
  </div>
  <br></br>
  <div className="work row">
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/324/237/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>


    </div>
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/324/237/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>


    </div>
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/324/237/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>


    </div>
  </div>
  <br></br>
  <div className="work row">
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/324/237/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>


    </div>
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/324/237/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>


    </div>
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/324/237/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>


    </div>
  </div>
  <br></br>
  <div className="work row">
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/324/237/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>


    </div>

  </div>
  <br></br>
</div>












        <Footer />
      </main>
    )
  }
}

export default OurWork;
