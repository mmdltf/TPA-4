import React, { useState } from "react";

import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,

  MDBRipple,
} from "mdb-react-ui-kit";
const Navbar = () => {
  const [showBasic, setShowBasic] = useState(false);


  return (
    <header>
      <MDBNavbar
        expand="lg"
        className="shadow-5"
        id="navbarId"
        style={{ backgroundColor: "white" }}
      >
        <MDBContainer fluid>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <MDBCollapse
            navbar
            show={showBasic}
            className="d-flex justify-content-between ms-5 "
          >
            <img
              src="https://i.postimg.cc/mDXVDMhr/MMD-LTF-1.png"
              height={80}
              alt=""
            />
            <MDBNavbarNav
              right
              className="d-flex justify-content-center mb-5 mb-lg-3 mt-3 mx-5 "
            >
              <MDBRipple>
                <MDBNavbarItem>
                  <Link to="/">
                    <MDBNavbarLink className="h3 text-dark hover-shadow shadow-2 rounded">
                      Home
                    </MDBNavbarLink>
                  </Link>
                </MDBNavbarItem>
              </MDBRipple>
              <MDBRipple>
                <MDBNavbarItem>
                  <Link to="/about">
                    <MDBNavbarLink className="h3 text-dark hover-shadow shadow-2 rounded ">
                      About
                    </MDBNavbarLink>
                  </Link>
                </MDBNavbarItem>
              </MDBRipple>
              <MDBRipple>
                <MDBNavbarItem>
                  <Link to="/portofolio">
                    <MDBNavbarLink className="h3 text-dark hover-shadow shadow-2 rounded">
                      Portofolio
                    </MDBNavbarLink>
                  </Link>
                </MDBNavbarItem>
              </MDBRipple>
              <MDBRipple>
                <MDBNavbarItem>
                  <Link to="/gallery">
                    <MDBNavbarLink className="h3 text-dark hover-shadow shadow-2 rounded">
                      Gallery
                    </MDBNavbarLink>
                  </Link>
                </MDBNavbarItem>
              </MDBRipple>
            </MDBNavbarNav>
            
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
};
export default Navbar;
