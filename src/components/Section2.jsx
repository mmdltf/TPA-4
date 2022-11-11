import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
const Section2 = () => {
  return <div >
    <h1 className="h1 d-flex justify-content-center  img-fluid hover-shadow rounded-10 mb-7 mt-5 " id="galerryId" >gallery</h1>
    <MDBCarousel showControls fade>
      <MDBCarouselItem
        className='w-100 d-block galleryItem'
        itemId={1}
        src='https://i.postimg.cc/9XLYz9QZ/IMG-0006.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block galleryItem '
        itemId={2}
        src='https://i.postimg.cc/gJY32c9g/lamp-2.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block galleryItem'
        itemId={3}
        src='https://i.postimg.cc/k5STbgp9/DSCF8629.jpg'
        alt='...'
      />
    </MDBCarousel>
  </div>;
};

export default Section2;
