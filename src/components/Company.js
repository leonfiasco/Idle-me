import React from 'react';


class Company extends React.Component {
  render() {
    return (
      <div id="comp-banner">
      <div className="row">
          <p className="text-white" id="txt">Some businesses we've switched on<span className="dots1">...</span></p>
        </div>
      <div id="container">
          <img className="comp-logo1" alt="virgin-media" src="./images/vm-Logo.png"></img>
            <img className="comp-logo2" alt="four-corners" src="./images/four-corners-logo-2.png" href=""></img>
            <img className="comp-logo3" alt="american-express" src="./images/American-Express-logo.png" href=""></img>
            <img className="comp-logo4" alt="foundry" src="./images/the-foundry-logo.png" href=""></img>
          <img className="comp-logo5" alt="TwinSmile" src="./images/TwinSmile-Logo-B2B.png" href=""></img>
      </div>
    </div>
    );
  }
}








export default Company;
