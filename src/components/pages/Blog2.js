import React from 'react';

import Navbar from './../Navbar1';
import Footer from './../Footer';


class Blog2 extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="box-1">
                  <div className="p-2 bd-highlight">
                      <div className="dot-1A" id="dot-1A">
                        <div className="cross">
                          <div className="line1"></div>
                            <div className="line2"></div>
                        </div>
                      </div>
                       <p className="name-txt" id="name-txt">Ane-Mari Peter<br></br>
                       7.September 2017
                       </p>
                  </div>
                 <div className="share-box">
                   <p className="share" id="share">SHARE</p>
                   <i id="icons1 text-muted m-2 fa fa-twitter"></i>
                   <i id="icons1 text-muted m-2 fa fa-facebook"></i>
                   <i id="icons1 text-muted m-2 fa fa-envelope"></i>
                 </div>
               </div>
            </div>
            <div className="col">
            <div className="box-2">
                 <div className="p-2 bd-highlight d-flex justify-content-center">
             <h1 id="blog1-header">Working with Swiss Standard German text<br></br>
               as a British designer
             </h1>

            </div>
           </div>
         </div>
      </div>
    <div className="behance d-flex justify-content-center">
    <img  alt="blog-placeholder" src="/images/third-placeholder.png"></img>
  </div>
</div>
<div className="blog-text d-flex justify-content-center" id="blog-text">
<p>
  <h6>Dates</h6>
  <br></br>
  Through updating the warehouse construction images on the Guntensperger
  Cheese website, I learnt that when writing the date using the ‘little endian form’
  (i.e. 27th September 2017), the suffix is replaced by a dot (ie. 27. September
  2017). I figured that the reasoning behind could be because every number
  would otherwise end with ‘er’, which I suppose could get quite tedious
  <br></br>
  <br></br>
  <br></br>
</p>
</div>
<hr className="blog-line"></hr>

          <Footer />
      </main>
    )

  }
}

export default Blog2;
