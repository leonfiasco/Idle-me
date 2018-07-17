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
                  <img className="comp-logo1" src="./../public/images/virgin-media.svg" alt="virgin-media" href=""></img>
                </div>
                <div className="circle">
                  <img className="comp-logo2" alt="four-corners" href=""></img>
                </div>
                <div className="circle">
                  <img className="comp-logo3" alt="american-express" href=""></img>
                </div>
                <div className="circle">
                  <img className="comp-logo4" src="https://www.dropbox.com/pri/get/on-ilde/the-foundry-logo.svg?_subject_uid=1250722080&raw=1&size=1280x960&size_mode=3&w=AAA0gZnsOKpWioY5DE-0fq93ROMr1FgWdsJxLHeShxiwDg" alt="foundry" href=""></img>
                </div>
                <div className="circle">
                  <img className="comp-logo5" src="https://www.dropbox.com/pri/get/on-ilde/TwinSmile-Logo-B2B.svg?_subject_uid=1250722080&raw=1&size=1280x960&size_mode=3&w=AADxqRJZgcccnS2pqNCrstm0tla2CctJ71AUvVCXufqI8A" alt="twin-smile" href=""></img>
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
