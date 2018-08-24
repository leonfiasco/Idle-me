import React from 'react';


class Main extends React.Component {
  render() {
    return (
      <main>
<div className="container">
  <div className="row">
    <div className="col">
      <div className="contain">
      <img className="img-fluid first-img" id="lady-smiling" alt="lady-smiling" src="/images/lady-smiling.jpg"></img>
        <div className="middle">
          <div className="circle" id="circle">
            <p className="text" id="text">
              Migros aareMAGAZIN<br></br>
              Dezember 2017<br></br>
              <span className="print">Print Design</span><span className="dot">•</span><span className="print">Typography</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col">
      <div className="contain">
      <img className="img-fluid sec-img" id="four-corners" alt="four-corners" src="/images/four-corners-cover-image-3.jpg"></img>
      <div className="middle-1">
        <div className="circle-1" id="circle-1">
            <p className="text-1" id="text-1">
              Aldersgate Group<br></br>
              Report<br></br>
              <span className="print-1">Print Design</span><span className="dot">•</span><span className="print-1">Typography</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="contain">
      <img className="img-fluid third-img" id="park-grove" alt="park-grove" src="/images/park-grove-placeholder.jpg"></img>
      <div className="middle-2">
        <div className="circle-2" id="circle-2">
            <p className="text-2" id="text-2">
              Park Grove Venison<br></br>
              & Charcuterie<br></br>
              <span className="print-2">Branding</span><span className="dot">•</span><span className="print-2">Typography</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="contain">
      <img className="img-fluid fourth-img" id="fisher-mag" alt="fisher-mag" src="/images/harry-fisher-cover-image-5.jpg"></img>
      <div className="middle-3">
        <div className="circle-3" id="circle-3">
            <p className="text-3" id="text-3">
               Gutensperger Cheese<br></br>
              <span className="print-3">Web Design</span><span className="dot">•</span><span className="print-3">Branding</span><br></br>
              Web Development
            </p>
          </div>
        </div>
    </div>
  </div>
  </div>
</div>
      </main>
    );
  }
}

export default Main;
