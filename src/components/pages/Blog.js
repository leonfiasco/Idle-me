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
      <img className="place-img" alt="place" src="https://uc8a97d3caaf2feaac80287abb83.previews.dropboxusercontent.com/p/thumb/AAIcaHBfGQMfEK6tQJFG0eflNDA0SXTTF6y5IFazlGd2rzUqu92WRKqlGhgm0HUs_ivYGQzhYtl-MwNTs9wpIC7ihNXlwV37oE2TqItICwPv2flSciv4fub7UHd3R8ZhIFVjxInzJohMPfgO7wocqz1NO072fR2-OMQfMlJDJqh-hVnXAtWOYOQMTUuhltEZb-fDM7KB2Dq6bY-xAFzYh13P8q2l7WeM4dbbA3QRXYQuZg/p.jpeg?size=1280x960&size_mode=3"></img>
      <h6>Working with Swiss Standard German text as a British designer</h6>
      <p>A guide to typographic and punctuation rules in Swiss text.</p>
    </div>

    <div className="col">
      <img className="place-img" alt="place" src="https://uc1d9907f15a26b98886b19649bb.previews.dropboxusercontent.com/p/thumb/AAJjYZa57pmRp4ha3LTzfaEWpEhwP5hGWZOm4ZGbWVfxOkOKvE1dh3301ogT0VVUIKGqGyoPFJW4szVyGi89ihPf9FaZUi-fj4QVVxTOTyfuPDYGg2DVUIwEuKAqXgABcNtXZoOMESWRNFJ-yZIuRLUTjZsyGexRWh3bL1XpK58irgygS_4pwJPTf71DMFHr7HPi2oBoQDu-daf35gnGVjJZv4dnjmXwXhOr4GeA6Tg-_A/p.jpeg?size=1280x960&size_mode=3"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>
    </div>
    <div className="col">
      <img className="place-img" alt="place" src="https://uc4ee1de3fe735c0d956d4aa852e.previews.dropboxusercontent.com/p/thumb/AALOQAvBnInqqjC_p3HVRmRkvUy8JgYM0UYWAGnIPjiBL9H2GYjFOyOBp2i8lPCEOeB7aED_K7by-bGUO2TacjEnMZipchzdJycTqwaOfj7clYgl5gzlyS1EeAWwP9dTzkwjfREnqEPX0g9mV26gi4CjXyak8xIhrlgHQ3GlBhRLP7y5-OZesNEnrJkidiFNOSdna29AYMMG4X6M9aRIkxZICB_F1LsrH2ZN2EULNfgN6Q/p.png?size=1280x960&size_mode=3"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>
    </div>
  </div>
  <div className="work row">
    <div className="col">
      <img className="place-img" alt="place" src="https://ucb782faddf1ca6b1c86719f99f4.previews.dropboxusercontent.com/p/thumb/AAIE3hywr5Ud5uOYbk9Z4xpVkRvrvdUFI-6RmHu9y4EPnSoSqtrMjVwpvO8_7j8Vn9H2rnk4I-qhOFcaVjjri5im10aJwiQ2FGbFIQT1Ssb9vpRf11AkT6Go-rIOioP9TIV5NjLD0jYNfkqA8U7C0TAnd5VW69AB_7rg4inpZFg9q74PQ4s2dlu7n2Rfz86GGsqOjBmhrS5nqSnNVLrQ16HkuOwrz7v-ooxKGG_loOipzQ/p.jpeg?size=1280x960&size_mode=3"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>
    </div>
    <div className="col">
      <img className="place-img" alt="place" src="https://uc69d089e33a1efd7f55f33ab662.previews.dropboxusercontent.com/p/thumb/AAIquSt3aORX-LnU_aYqxd5bVKfUnhRXxZPPOsMfc_nU87GLgVpcDNkmDtpvDzc5p63qRyJCO8J3U2EsTXoWPVh3shvu32fRwi1ge1oagJe5bWnHcUqtbPQFNL8xJZsTAoAPR6bfiTXPZsfDQ4IPeUnzclt4tLKDUIHd2V5D-F-IcETEPFm9cOQjZuzYwlSIlzLP2G31ik4-zK8scBNRbX4y2Vyjv-WM6Uu8zNqT9nnxWw/p.jpeg?size=1280x960&size_mode=3"></img>
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
