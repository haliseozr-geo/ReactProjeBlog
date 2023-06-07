import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default class Navbarr extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            {/* <a href="/">Anasayfa</a> */}
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
