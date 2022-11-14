
import PropTypes from "prop-types";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
const Gallerycard = ({ name, img }) => {
  return (
    <div>
      <MDBRipple>
        <div
        class="d-flex shadow-2-strong mb-3 my-3 mt-3 pt-2 mx-5 hover-shadow hover-zoom"
        id="cardGallery"
      >
        <MDBCard>
          <MDBCardImage src={img} alt={name} position="top" />
          <MDBCardBody>
            <MDBCardText id="galleryCardCP">© MMDLTF</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
      </MDBRipple>
      
    </div>
  );
};
Gallerycard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Gallerycard;
