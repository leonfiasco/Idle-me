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
      <img className="place-img" alt="place" src="https://uc070854feb229ab25309e2a1252.previews.dropboxusercontent.com/p/thumb/AAF2N5W0OD3HdYgbeVeTDgQYx0WoM4avNC6vqGinBSFxMup-jcNk8LyD2elDwx7QmKj6JXthe-tPBKsTmcCbqY8vISgJsY-yEfZskL83nvqIMlHTx__m8-dmb7MYeclcxVQ-_KLtJ3QwhIH9GLoL8vSmX91IB-jBjOw5SF9FPOMLu_g7VHyhYuOHFacL4GuESCjna_fgWw5XGqHRj2-UASRgAZ-P8SuoDzd16KAf_PRHGw/p.jpeg?size=1280x960&size_mode=3"></img>
      <h6>Working with Swiss Standard German text as a British designer</h6>
      <p>A guide to typographic and punctuation rules in Swiss text.</p>
    </div>

    <div className="col">
      <img className="place-img" alt="place" src="https://uc5ed67e38b756a5e538a102999d.previews.dropboxusercontent.com/p/thumb/AAHxhkrINhjbjATrop4gqzdRUOqxoYVxJEZK7QWN4rc21DiHcJ4VQaHKMuAgbsEJznRHV54aHFBSvXBZxDo5yLF0sLE4-7WDqd5STwSbz6rLa64BxdDfZok2vI6GQDtb1pK9o2XehkcUA8a-vDh8rUc6zFzRh6-3aTzZ1yeHf9WUhoMjeQlJDfm5_rqbLNflWwiSXXtz03he-HkBDwChUuBtLTXJ835Uyt6NlnYqFo4zIQ/p.jpeg?size=1280x960&size_mode=3"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>
    </div>
    <div className="col">
      <img className="place-img" alt="place" src="https://uc447ea21f770de0bd8ba98ebd0e.previews.dropboxusercontent.com/p/thumb/AAFsEYx80XgEsZTsItg_fp49_Y8PsGYT_FDm5xDZW-G0850LUsrtJ4pa0nWO9ylIyFauQdSqr2ELY-myHo1XmYaC_FyDRnfKHBVDXAUZ1XWLN1t7pID3DHgl01XD9zMWDVlTyQ-6_MRyhqH41Sy_H0VMEYp2vJBHEWjRh0tRQ5KxgkNqmRL5lkidJPtAkolFq5rNVH1mSQDBPIPbTyJMD7zPitUjCxxm8V_lt9kcVq8Kbw/p.png?preserve_transparency=1&size=1280x960&size_mode=3"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>
    </div>
  </div>
  <div className="work row">
    <div className="col">
      <img className="place-img" alt="place" src="https://ucd946c7fecfe1bd274157201cee.previews.dropboxusercontent.com/p/thumb/AAE1XDo5Enhwh-cGXENSiuQwNLno9BSQ0b8Z3H_9FAqxupNVGl9UbE5Mc9kPoenuAche_5tGR87a4OFW-5fYJkXEIcr-2ZQvjsWB61JHrjlZ15n5O2q1xsJYUveeoDm6IinpT6k7UFrp1bat2XZUDyOG2WXlimDKdD3VHhynf7S9cz7_ibaHMRyyLYMEPxRTkIV57Tn9JoOY-AAUilDSifZlnVp9598qRWZVigz8I5oq1w/p.jpeg?size=1280x960&size_mode=3"></img>
      <h6>Title goes here!</h6>
      <p>Some text goes here!!</p>
    </div>
    <div className="col">
      <img className="place-img" alt="place" src="https://ucc037bd508c31c2ef39b2040b86.previews.dropboxusercontent.com/p/thumb/AAHSaG1yeggX4tgARPA89wiT2oXK6MkwK6PgDIqKwXwRlneP9hJ7Rzfaf7Ap4OUkYXW3z7okTVKY9xpv6ioZ-X2xlkC4bkTcZG-HEQom0D8DsNaEl9qNDBdM0uysTIbe42m0IPmmKveOheGhSN20_1_EeoP2bNQZvADKHg0IG3z2wnxGkv3F-Njm40Rhh6yLErmOWDQkuwnMHe3btCy7cM-MyKZu1zyJ2Y5wbvTdqgB9wg/p.jpeg?size=1280x960&size_mode=3"></img>
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
