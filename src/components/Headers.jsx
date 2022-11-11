import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Popup from "./popup";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
  MDBTypography,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBRipple,
} from "mdb-react-ui-kit";
const Headers = () => {
  const [showBasic, setShowBasic] = useState(false);
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
  return (
    <header>
      <MDBNavbar expand="lg" className="shadow-5" id='navbarId' style={{ backgroundColor: "white" }}>
        
        <MDBContainer fluid>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic} className='d-flex justify-content-between ms-5 '>
            <h1>s</h1>
            <MDBNavbarNav
              right
              className="d-flex justify-content-center mb-5 mb-lg-3 mt-3 mx-5 "
            >
              <MDBRipple>
                <MDBNavbarItem>
                  <MDBNavbarLink className="h3 text-dark hover-shadow shadow-2 rounded" >
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBRipple>

              <MDBNavbarItem>
                <MDBNavbarLink className="h3 text-dark hover-shadow shadow-2 rounded " href="#">
                  About
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className="h3 text-dark hover-shadow shadow-2 rounded" href="#">
                  Portofolio
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className="h3 text-dark hover-shadow shadow-2 rounded" href="#">
                  Gallery
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <h1>s</h1>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/W3vQgQFB/Whats-App-Image-2022-11-11-at-00-24-57.jpg')",
          height: "100vh",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <MDBTypography
                tag="div"
                className="display-2 pb-3 mb-3 border-bottom"
              >
                Halo
              </MDBTypography>
              <MDBTypography tag="div" className="display-5 pb-3 mb-3">
                i'm Muhammad Luthfi Shafwan
              </MDBTypography>
              <div className="popup">
                <MDBBtn onClick={toggleShow}>Click me!</MDBBtn>

                <MDBModal
                  tabIndex="-1"
                  show={centredModal}
                  setShow={setCentredModal}
                >
                  <MDBModalDialog centered>
                    <MDBModalContent>
                      <MDBModalHeader>
                        <MDBModalTitle>Modal title</MDBModalTitle>
                        <MDBBtn
                          className="btn-close"
                          color="none"
                          onClick={toggleShow}
                        ></MDBBtn>
                      </MDBModalHeader>
                      <MDBModalBody>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Modsdsdrbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                      </MDBModalBody>
                      <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={toggleShow}>
                          Close
                        </MDBBtn>
                      </MDBModalFooter>
                    </MDBModalContent>
                  </MDBModalDialog>
                </MDBModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Headers;
