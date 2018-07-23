import React from 'react';

import Navbar from './../Navbar3';
import Footer from './../Footer';


class Blog extends React.Component {
  render() {
    return (
      <main>
        <Navbar />

        <div className="d-flex flex-column bd-highlight mb-3">
          <div className="p-2 bd-highlight"></div>
            <div className="p-2 bd-highlight"><p className="taster1">Blah Blah Blah<span className="dots">...</span></p></div>
            <div className="p-2 bd-highlight"></div>
        </div>
        <div className="wrapper">
        <div className="container-fluid">
  <div className="work row">
    <div className="col">
      <img className="place-img" alt="place" src="https://uca8664c3cd48c4cde70bb4e7aef.previews.dropboxusercontent.com/p/thumb/AAKN8yn-vQFMLFgjcz1M-wGI0SvKdmjISo254vZmf8GvbflW5fOlmwBAu-LPP9TJKm95KIli4B2dDYeTwHz9AhpqWFZiyDFCLLobkWIB_Iy48RA6JP-3KzrgvtWpGPSJTz95TRR_kqndplnaQRwtRiElgmNzdVxZA2XBe5iuEKApsObAZsjTGM7FQcC5veeiTw-47du9yOqx1_4fPvAKbrYI5PoIfRiR3o0MBQRrFvMAOQ/p.jpeg?size=1280x960&size_mode=3"></img>
      <h6>Working with Swiss Standard German text as a British designer</h6>
      <p>A guide to typographic and punctuation rules in Swiss text.</p>
    </div>

    <div className="col">
      <img className="place-img" alt="place" src="https://uc33bbe9ac93e768d7f62a33cff0.previews.dropboxusercontent.com/p/thumb/AALPOxLE5HcvWSNjXt105Hznv-rhPzrLK06GfhFqrv6dZ-BpAwRtHgjGpjv2qKEq9ANacu6Z9HUxx-x8Tb_y3ejJjvMXzevoQB44oss4Z_fkRO03JqwfNlTcsSvh7xuptyTMmvFBCd-NakV-rZH5GIi-t3YpVr81ZCmy08kvcrfyZISIq9bV8buQElwd7oG0EexQV272ucW_FKQ1g0xWzp0ODVd7ikGN3BWlMZzZ8h3hZQ/p.jpeg?size=1280x960&size_mode=3"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>
    </div>
    <div className="col">
      <img className="place-img" alt="place" src="https://uca985bebc58e300c4eeb7e7c933.previews.dropboxusercontent.com/p/thumb/AAKeZh26DcHDnltKdLdDrvSGELwHIMA43I1XDfpOhA57Hq4rx-jrszT0ctey74G00O2VHoL7MXapTkX6K8UQ9KBekBDAG7_IgPYfWePraJ_ZjEw9HqiVuXEkNJXpdHfKx0tvDt9aTNhk8stetWiHVjLlTo-mBXH1NOUl7pbEcjoz8z8qSGgGCsSRNk-oCNOY3uMi9z725hnwbNQTtD8J-BCyE_X8wUDakiq4qY9QYt4ykw/p.png?size=1280x960&size_mode=3"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>
    </div>
  </div>
  <div className="work row">
    <div className="col">
      <img className="place-img" alt="place" src="https://uc1423bc66760fdb2a51daf27790.previews.dropboxusercontent.com/p/thumb/AALH5ZA3_gGrXbxvQ9Ih3eqZnqZH2CjBRQqJetUNBrE1EPO-YrRgGvHe0xnkTstDeHYC32nK7i7rcdsUlfg-kP7I6OtNlvlxawlSalNngVUPY2JrwKLobWUbh01b4RS_TXq_8BrRu2mXmjwlSwWZMqmaihV79SyN66w7TRg74nU74cQUJrAAeJL5heHvQBKNTv707rt1B9qPWLnYqawnIv8fKNPOs8kPsRYnzo7rNqDQSg/p.jpeg?size=1280x960&size_mode=3"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>
    </div>
    <div className="col">
      <img className="place-img" alt="place" src="https://uca2e8593d7d3fb0091058697e5e.previews.dropboxusercontent.com/p/thumb/AALk_GCRmlNMVsGI9s6YQvmKu8z4-GrcD1CcUYdhsemCVlhXEGNSp00czY4Y_mje4Gpi5IP17zhpmflgtULOy1lvfTE0CzAdhugxB3aZSmBQGzRpkEe5WOWpKYFGigcOhpKT3qDJkMt4k8Wt5gvm3ZBTOprT2h7_625SdlpNAUI3yG3Y5GXNVR-fw5xvRfWQqfRNmqBtZ4p61sPKEIBJzhLu0RLmoOYou-NY7mGsmBkUUg/p.jpeg?size=1280x960&size_mode=3"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>
    </div>
  </div>
</div>
</div>

        <Footer />
      </main>
    )
  }
}



export default Blog;
