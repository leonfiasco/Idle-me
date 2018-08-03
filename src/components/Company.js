import React from 'react';


class Company extends React.Component {
  render() {
    return (
      <div className="box-model">
        <div className="container">
          <div className="row align-items-center">
            <div className="row">
              <p className="txt text-white">Some businesses we've switched on<span className="dots1">...</span></p>
            </div>
              <div className="row-9">
                <div className="circle">
                  <img className="comp-logo1" alt="virgin-media" id="virgin-logo" src="/images/vm-Logo.png"></img>
                </div>
                <div className="circle">
                  <img className="comp-logo2" alt="four-corners" src="/images/four-corners-logo-2.png" href=""></img>
                </div>
                <div className="circle">
                  <img className="comp-logo3" alt="american-express" src="/images/American-Express-logo.png" href=""></img>
                </div>
                <div className="circle">
                  <img className="comp-logo4" alt="foundry" src="/images/the-foundry-logo.png" href=""></img>
                </div>
                <div className="circle">
                  <img className="comp-logo5" alt="TwinSmile" src="/images/TwinSmile-Logo-B2B.png" href=""></img>
                </div>
              </div>
              <div className="row">
              </div>
          </div>
          </div>
        </div>
    );
  }
}








export default Company;
