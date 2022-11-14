import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
import Dataporto from "../data porto/dataPorto";
const SectionPortofolio = () => {

  return (
    <div
      className="d-flex  p-5  "
      title="Portofolio"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/4499765/pexels-photo-4499765.jpeg' )",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {Dataporto.map((item, index) => {
        return (
          <div key={item.index}>
            <MDBRow
              className=" row-cols-1 row-cols-md-1 g-1 hover-overlay hover-zoom hover-shadow  "
              
            >

                
              <MDBCol>
                <MDBCard className="   h-80 mx-5 my-5 mt-6 mb-6" id="cardPorto">
                  <MDBCardImage className="opacity-50"  src={item.img} alt="" position="top" 
                 />
                  <MDBCardBody color ='black' >
                    <MDBCardTitle className="d-flex justify-content-center">
                      {item.name}
                    </MDBCardTitle>
                    <MDBCardText
                      className="d-flex justify-content-center"
                      color="link"
                    >
                      {item.text}
                    </MDBCardText>

                    <div className="text-center  ">
                      <MDBBtn  rippleColor='dark' color='light' href={item.link}>
                        Goto Website
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </div>
        );
      })}
    </div>
  );
};

export default SectionPortofolio;
