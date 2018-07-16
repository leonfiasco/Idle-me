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
            <div className="p-2 bd-highlight"><p className="taster1">I want to know<span className="dots">...</span></p></div>
            <div className="p-2 bd-highlight"></div>
        </div>
        <div class="work-dot row">
  <div class="work-line1 col-sm-6">
    <div class="business row">
      <div class="col">
        <p>Business</p>
      </div>
      <div class="col">
        <p>Media</p>
      </div>
      <div class="col">
        <p>Not-for-profit</p>
          </div>
          <div class="w-100 d-none d-md-block"></div>
      <div class="col">
        <p>Finance</p>
      </div>
        <div class="col">
        <p>Culture</p>
      </div>
      <div class="retail col">
        <p>Retail</p>
        </div>
    </div>
  </div>
  <div class="work-line2 col-sm-6">
    <div class="business row ">
      <div class="col">
        <p>Web Design</p>
      </div>
      <div class="col">
        <p>Branding</p>
      </div>
      <div class="col">
        <p>Graphic Design</p>
          </div>
          <div class="w-100 d-none d-md-block"></div>
      <div class="col">
        <p>Print Design</p>
      </div>
        <div class="col">
        <p>Typography</p>
      </div>
      <div class="col">
        <p>Web Development</p>
        </div>
    </div>
  </div>
  </div>


        <div class="container-fluid">
  <div class="work row">
    <div class="col">
      <img alt="place" src="https://picsum.photos/400/400/?random"></img>
    </div>
    <br></br>
    <div class="col">
      <img alt="place" src="https://picsum.photos/400/400/?random"></img>
    </div>
    <br></br>
    <div class="col">
      <img alt="place" src="https://picsum.photos/400/400/?random"></img>
      <br></br>
    </div>
  </div>
  <div class="work row">
    <div class="col">
      <img alt="place" src="https://picsum.photos/400/400/?random"></img>

    </div>
    <div class="col">
      <img alt="place" src="https://picsum.photos/400/400/?random"></img>

    </div>
    <div class="col">
      <img alt="place" src="https://picsum.photos/400/400/?random"></img>

    </div>
  </div>
  <br></br>
  <div class="work row">
    <div class="col">
      <img alt="place" src="https://picsum.photos/400/400/?random"></img>

    </div>
    <div class="col">
      <img alt="place" src="https://picsum.photos/400/400/?random"></img>

    </div>
    <div class="col">
      <img alt="place" src="https://picsum.photos/400/400/?random"></img>

    </div>
  </div>
  <br></br>
  <div class="work row">
    <div class="col">
      <img alt="place" src="https://picsum.photos/400/400/?random"></img>

    </div>
    <div class="col">
      <img alt="place" src="https://picsum.photos/400/400/?random"></img>

    </div>
    <div class="col">
      <img alt="place" src="https://picsum.photos/400/400/?random"></img>

    </div>
  </div>
  <br></br>
  <div class="work row">
    <div class="col">
      <img alt="place" src="https://picsum.photos/400/400/?random"></img>

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
