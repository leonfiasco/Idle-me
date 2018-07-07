import React from 'react';


class Social extends React.Component {

  render() {
    return (


      <div className="container">
        <div className="row">
          <div className="col">
            <img className="img-fluid" alt="" src="https://photos-2.dropbox.com/t/2/AABEXy1kyOCBl7n4dzMftKf9jGRcle0U1fNSan3xeqg8Xg/12/1250722080/jpeg/32x32/1/_/1/2/blog-placeholder-1.jpg/EIDI3tUMGBQgAigC/aWHYwNO0KE1Xutn5I0KXNpFn5BbwMKRL1UH5Dq_mh6w?size=1280x960&size_mode=3"></img>
            <div className="on-logo1"></div>

            <h6 className="social-h6">Working with Swiss Standard German text as a British designer</h6>
            <p className="social-p">Jade Innes | 17.October 2017</p>
          </div>
          <div className="col">
            <img className="img-fluid" alt="" src="https://photos-2.dropbox.com/t/2/AABRVaZacFGain1PVD0yTRumRekbwTY4Zl8z2GnRuSFj4w/12/1250722080/jpeg/32x32/1/_/1/2/blog-placeholder-2.jpg/EIDI3tUMGBMgAigC/Tac4jF187fi7VlZWxGB-nEl48IQAAWvviAeiCulhKdM?size=1280x960&size_mode=3"></img>
            <div className="on-logo2"></div>

            <h6 className="social-h6">Jost Hochuli</h6>
            <p className="social-p">Rebecca Lydamore | 28. September 2017</p>
               <p className="more1" href="">See <u>more</u></p>
          </div>
          <div className="col">
            <a href="https://www.facebook.com/onanything/photos/a.449589151746663.95770.137316622973919/1616435561728677/?type=3&theater"><img className="img-fluid" alt="" src="https://scontent.flhr3-1.fna.fbcdn.net/v/t1.0-9/25552327_1616435561728677_793891311986865138_n.jpg?_nc_cat=0&oh=60f39b8b4eea976f5d1e656b59d94f12&oe=5BECA760"></img></a>
            <a href="https://www.facebook.com/onanything/photos/a.449589151746663.95770.137316622973919/1616435561728677/?type=3&theater"><div className="fb-icon1"></div></a>

            <h6 className="social-h6">#Festive #Season #Xmas on-IDLE</h6>
            <p className="social-p">20. December 2017</p>
          </div>
          <div className="col">
          <a href="https://www.facebook.com/onanything/photos/a.449589151746663.95770.137316622973919/1583097095062524/?type=3&theater"><img className="img-fluid" src="http://i68.tinypic.com/2djx6py.jpg"  alt=""></img></a>
            <a href="https://www.facebook.com/onanything/photos/a.449589151746663.95770.137316622973919/1583097095062524/?type=3&theater"><div className="fb-icon1"></div></a>
            <h6 className="social-h6">Taking @onidledesign to the #tabaccodock #WorldCheeseAwards @loveswisscheese won 2 x Gold & 2 X Bronze... Congrats...</h6>
            <p className="social-p">19. November 2017</p>
            <span className="more2" onClick={this.openNav}>Foll<u>ow</u><u> </u><u>us</u></span>
      </div>
      </div>
    </div>
    );
  }
}





export default Social;
