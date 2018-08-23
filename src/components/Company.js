import React from 'react';


class Company extends React.Component {
  render() {
    return (
      <div id="comp-banner">
      <div class="row">
          <p class="text-white" id="txt">Some businesses we've switched on<span className="dots1">...</span></p>
        </div>
      <div id="container">
          <img class="comp-logo1" alt="virgin-media" src="./images/vm-Logo.png"></img>
            <img class="comp-logo2" alt="four-corners" src="./images/four-corners-logo-2.png" href=""></img>
            <img class="comp-logo3" alt="american-express" src="./images/American-Express-logo.png" href=""></img>
            <img class="comp-logo4" alt="foundry" src="./images/the-foundry-logo.png" href=""></img>
          <img class="comp-logo5" alt="TwinSmile" src="./images/TwinSmile-Logo-B2B.png" href=""></img>
      </div>
    </div>
    );
  }
}








export default Company;
