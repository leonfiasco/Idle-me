import React from 'react';


class Dropdown extends React.Component {
  render() {
    return (
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="a">Who We Are</a>
    <a class="dropdown-item" href="a">Who We Work With</a>
    <a class="dropdown-item" href="a">Our Story</a>
  </div>
</div>
    );
  }
}


export default Dropdown;
