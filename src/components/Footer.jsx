import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark" id="footerId" >
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" className="" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>

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
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2 h3">
                  <strong>Find me on social media</strong>
                </p>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4">
          <p></p>
        </section>

        <section className=""></section>
      </MDBContainer>

      <div
        className="d-flex justify-content-xl-between   "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <h5 className="text-left lg-lh">Jl. H Amar no 32A RT6 RW8 <br/> kel. Pondok Kelapa kec. Duren Sawit <br/> Jakarta Timur DKI Jakarta</h5>
        <h2>d</h2>
        <h2>d</h2>
      </div>
    </MDBFooter>
  );
}
