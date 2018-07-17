import React from 'react';

import Navbar from './../Navbar3';
import Footer from './../Footer';


class Blog extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <br></br>
        <div className="d-flex flex-column bd-highlight mb-3">
          <div className="p-2 bd-highlight"></div>
            <div className="p-2 bd-highlight"><p className="taster1">Blah Blah Blah<span className="dots">...</span></p></div>
            <div className="p-2 bd-highlight"></div>
        </div>
        <div className="container-fluid">
  <div className="work row">
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/400/400/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>


    </div>
    <br></br>
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/400/400/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>

    </div>
    <br></br>
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/400/400/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>

      <br></br>
    </div>
  </div>
  <div className="work row">
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/400/400/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>


    </div>
    <div className="col">
      <img className="place-img" alt="place" src="https://picsum.photos/400/400/?random"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>


    </div>
  </div>
</div>

        <Footer />
      </main>
    )
  }
}



export default Blog;
