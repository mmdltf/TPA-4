import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center d-flex justify-content-between"
      color="white"
      bgColor="dark"
      id="footerId"
    >
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.instagram.com/mmdltf/"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.linkedin.com/in/luthfi-shafwan-a973b5226/"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://github.com/mmdltf"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>

        <section className="">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol size="auto">
              <p className="pt-2 h3">
                <strong>Find me on social media</strong>
              </p>
            </MDBCol>
          </MDBRow>
        </section>
        <MDBCol md="3" lg="2" xl="2" id="linkFooter" className="mx-auto mb-4 fw-light">
          <Link to="/">
            {" "}
            <p className="text-white"> Home </p>{" "}
          </Link>
          <Link to="/about">
            {" "}
            <p className="text-white"> About </p>{" "}
          </Link><Link to="/portofolio">
            {" "}
            <p className="text-white"> Portofolio </p>{" "}
          </Link><Link to="/gallery">
            {" "}
            <p className="text-white"> Gallery </p>{" "}
          </Link>
          
        </MDBCol>

        <section className=""></section>
      </MDBContainer>
    </MDBFooter>
  );
}
