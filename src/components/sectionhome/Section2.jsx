import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const Section2 = () => {
  return (
    <div>
      <h1
        className="h1 d-flex justify-content-center  img-fluid hover-shadow rounded-10 pb-2 pt-3 "
        id="galerryId"
      >
        gallery
      </h1>
      <div>
        <Link to="/gallery">
          <div class="text-center">
            <button type="button" class="btn btn-primary">
              Click me!
            </button>
          </div>
        </Link>

        <MDBCarousel showControls fade>
          <MDBCarouselItem
            className="w-100 d-block galleryItem"
            itemId={1}
            src="https://i.postimg.cc/9XLYz9QZ/IMG-0006.jpg"
            alt="..."
          />

          <MDBCarouselItem
            className="w-100 d-block galleryItem "
            itemId={2}
            src="https://i.postimg.cc/gJY32c9g/lamp-2.jpg"
            alt="..."
          />
          <MDBCarouselItem
            className="w-100 d-block galleryItem"
            itemId={3}
            src="https://i.postimg.cc/k5STbgp9/DSCF8629.jpg"
            alt="..."
          />
        </MDBCarousel>
      </div>
    </div>
  );
};

export default Section2;
