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
                  <div className="comp-logo1" alt="virgin-media" href=""></div>
                </div>
                <div className="circle">
                  <div className="comp-logo2" alt="four-corners" href=""></div>
                </div>
                <div className="circle">
                  <div className="comp-logo3" alt="american-express" href=""></div>
                </div>
                <div className="circle">
                  <div className="comp-logo4" alt="foundry" href=""></div>
                </div>
                <div className="circle">
                  <div className="comp-logo5" alt="twin-smile" href=""></div>
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
