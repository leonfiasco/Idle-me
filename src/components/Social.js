import React from 'react';


class Social extends React.Component {

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <img class="img-fluid" src="/images/blog-placeholder-1.jpg" alt=""></img>
            <div>
              <img className="on-logo" id="on-logo" alt="on-logo" src="/images/on_white.svg"></img>
            </div>
            <h6 className="social-h6" id="social-h6">Working with Swiss Standard German text as a British designer</h6>
            <p className="social-p" id="social-p">Jade Innes | 17.October 2017</p>
          </div>
          <div class="col-sm">
            <img class="img-fluid" src="/images/blog-placeholder-2.jpg" alt=""></img>
            <div>
              <img className="on-logo" id="on-logo" alt="on-logo" src="/images/on_white.svg"></img>
            </div>
            <h6 className="social-h6" id="social-h6">Jost Hochuli</h6>
            <p className="social-p" id="social-p">Rebecca Lydamore | 28. September 2017</p>
          </div>
          <div class="col-sm">
            <img class="img-fluid" src="/images/facebook-pic1 .jpg" alt=""></img>
            <div>
              <img className="on-logo" id="on-logo" alt="on-logo" src="/images/facebook_white.svg"></img>
            </div>
            <h6 className="social-h6" id="social-h6">#Festive #Season #Xmas on-IDLE</h6>
            <p className="social-p" id="social-p">20. December 2017</p>
          </div>
          <div class="col-sm">
            <img class="img-fluid" src="/images/tobacco.jpg" alt=""></img>
            <div>
              <img className="on-logo" id="on-logo" alt="on-logo" src="/images/facebook_white.svg"></img>
            </div>
            <h6 className="social-h6-1" id="social-h6-1">Taking @onidledesign to the #tabaccodock #WorldCheeseAwards @loveswisscheese won 2 x Gold & 2 X Bronze... Congrats...</h6>
            <p className="social-p" id="social-p">19. November 2017</p>
        </div>
        <div>
          <div className="more-div">
        <p className="more1" id="more1" href="">See <u>more</u></p>
      </div>
        <div className="lower d-flex justify-content-end">
        <label for="op"><span className="more2">Foll<u>ow</u><u> </u><u>us</u></span></label>
        </div>

        <input type="checkbox" id="op"></input>
        <div className="overlay overlay-hugeinc">
          <label for="op"></label>
          <nav>
            <ul>
                 <div className="o-circle1"><i className="social fa fa-facebook"></i></div>
                 <div className="o-circle1"><i className="social fa fa-twitter"></i></div>
                 <div className="o-circle1"><i className="social fa fa-instagram"></i></div>
                 <div className="o-circle1"><i className="social fa fa-behance"></i></div>

            </ul>
          </nav>
          </div>
      </div>
        </div>
      </div>
    );
  }
}





export default Social;
