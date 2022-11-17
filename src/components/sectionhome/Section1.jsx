import "./Section2.css";
import React from "react";
import { MDBTypography  } from "mdb-react-ui-kit";
import Swal from "sweetalert2";
import { MDBRipple } from "mdb-react-ui-kit";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
function Section1() {
  const Popupsweetalert = () => {
    Swal.fire({
      title: "Hai!",
      text: "Welcome to my personal website!",
      imageUrl: "https://i.postimg.cc/xCL33HFg/DSCF9131.jpg ",
      imageWidth: 400,
      imageHeight: 200,
    });
  };
  return (
    <div
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/4590386/pexels-photo-4590386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' )",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
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
              <button class="btn btn-white" onClick={Popupsweetalert}>
                Click Me !
              </button>
            </div>
          </div>
        </div>
      </div>
      <MDBContainer id="aboutId" >
        <MDBRow start style={{ margin: 0 }}>
          <h1 className="d-flex justify-content-center fw-bold text-light img-fluid hover-shadow rounded-4 mb-5 mt-5 ">
            {" "}
            About
          </h1>
          <MDBCol className="h4 d-flex justify-content-start mt-5 mb-5 text-light hover-overlay hover-shadow hover-shadow ripple"
           size="6">
            <p  className="lh-lg hover-zoom" style={{marginRight: 0, marginLeft: 0 }}>
              saya merupakan seorang mahasiswa ilmu kelautan di universitas hasanuddin yang memiliki banyak 
              ketertarikan diluar studi saya mulai dari seni, desain, fotografi, pengelasan sampai dunia web-engineering. 
              Sekarang saya sedang mengikuti program bootcamp frontend developer tech4impact batch#2 dengan skilvul

            </p>

          </MDBCol>
          <MDBCol size="6">
            <MDBRipple
              className="bg-image hover-zoom mb-7"
              rippleTag="div"
              rippleColor="light"
            >
              <img style={{marginBottom: 40}}
                src="https://i.postimg.cc/28pSGWvk/20151024143904-IMG-0389.jpg"
                alt=""
              />
              <a href="#!">
                <div
                  className="mask"
                  // style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </MDBRipple>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Section1;
