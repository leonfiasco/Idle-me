import React from 'react';


class Company extends React.Component {
  render() {
    return (

      <div id="comp-box">
        <div className="row">
      <p className="comp-txt" id="comp-txt">Those we associate with<span className="dots1">...</span></p>
    </div>
<div className="container">
<div className="row">
<div className="col-sm">
  <div id="circle1">
    <img id="associate-logo1" src="/images/Bima-logo.png" alt="Bima-logo" ></img>
  </div>
</div>
<div className="col-sm">
  <div id="circle1">
    <img id="associate-logo2" src="/images/BDInno-logo.png" alt="Bdinno"></img>
  </div>
</div>
<div className="col-sm">
  <div id="circle1">
    <img id="associate-logo3" src="/images/istd_logo.png" alt="istd"></img>
  </div>
</div>
<div className="col-sm">
  <div id="circle1">
    <img id="associate-logo4" src="/images/UKWDA-logo.png" alt="ukwda"></img>
  </div>
</div>
<div className="col-sm">
  <div id="circle1">
    <img id="associate-logo5" src="/images/CRJ-logo.png" alt="chartered"></img>
  </div>
</div>
</div>
</div>
</div>
    );
  }
}








export default Company;
