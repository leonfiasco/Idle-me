import React from 'react';

import Navbar from './../Navbar3';
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
                      <div id="dot-1A">
                        <div className="cross">
                          <div className="line1"></div>
                            <div className="line2"></div>
                        </div>
                      </div>
                       <p className="name-txt">Ane-Mari Peter<br></br>
                       7.September 2017
                       </p>
                  </div>
                 <div className="share-box">
                   <p className="share">SHARE</p>
                   <i id="icons1 text-muted m-2 fa fa-twitter"></i>
                   <i id="icons1 text-muted m-2 fa fa-facebook"></i>
                   <i id="icons1 text-muted m-2 fa fa-envelope"></i>
                 </div>
               </div>
            </div>
            <div className="col">
            <div className="box-2">
                 <div className="p-2 bd-highlight d-flex justify-content-center">
             <h1>Working with Swiss Standard German text<br></br>
               as a British designer
             </h1>

            </div>
           </div>
         </div>
      </div>
    <div className="behance d-flex justify-content-center">
    <img  alt="blog-placeholder" src="https://ucb05fe50717cb1c4de37ffb04e8.previews.dropboxusercontent.com/p/thumb/AAJxzAeMdTabsEyQFzUy7mH7xXBChECVXUj8raT2pr3CiIn4dvcNYZX7Ax857uHv5IouT_81zWIEBIn62a5uUPDaaam0ILLMGBVnoK24LjAhWL-lJsJn_wrw14an2I9Bw_jRK9sivP7KLkwE1p23kSSjfvQzNvCCw9ieMi1uzrJ0z87wQhj8QLwCO_AcifZzKu4Kzvr-_rZzzFhEfeBRmU1BBEwhi2kisi9QRYBzAiKUfw/p.png?size=1280x960&size_mode=3"></img>
  </div>
</div>
<div className="blog-text d-flex justify-content-center">
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
