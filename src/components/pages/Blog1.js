import React from 'react';

import Navbar from './../Navbar3';
import Footer from './../Footer';


class Blog1 extends React.Component {
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
                   <p className="name-txt">Jade Innes<br></br>
                   17.October 2017
                   </p>
                 </div>
                 <div className="share-box">
                   <p className="share">SHARE</p>
                   <i className="icons1 text-muted m-2 fa fa-twitter"></i>
                   <i className="icons1 text-muted m-2 fa fa-facebook"></i>
                   <i className="icons1 text-muted m-2 fa fa-envelope"></i>
                 </div>
               </div>
            </div>
            <div className="col">
              <div className="box-2">
                 <div className="p-2 bd-highlight d-flex justify-content-center">
             <h1>Working with Swiss Standard German text<br></br>
               as a British designer
             </h1>
             <div className="w-100">
           </div>
           </div>
         </div>
            </div>
            <img alt="blog-placeholder" src="https://uc16d8ffc87452479db7ed309552.previews.dropboxusercontent.com/p/thumb/AAKrUKkM4ymZB3mTvOPhKVGBh4PPnU74QekLwDFTY3zdAv088FlDqwtoxXwYxkpYoBVaSUiV0XKXpWca6JL67rjU98GgM-aWDoo6PItoyv1724SzpoyModVBd3iQjYHxfPyr8rwatr2YYZB1yjHhCO_0oYN3GEyOEpIcvZh9M8oWdVHQDUXeBDhzS7esObOZU9db5Cfy2KffwIclSxtdwR0mo18PzzzdtBWbDNL__Eo7Cw/p.png?size=1280x960&size_mode=3"></img>

          </div>
        </div>



        <Footer />
      </main>
    )
  }
}













export default Blog1;
