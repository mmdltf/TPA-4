import React from "react";

import Datagallery from "../data gallery/Datagallery";

import Gallerycard from "../data gallery/Gallerycard";
const Gallery2 = () => {
  return (
    <div
      className="p-3 d-flex flex-wrap text-center bg-image"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/48606/pexels-photo-48606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",

        height: "100vh",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
      id='Gallery2'
    >
      {Datagallery.map((item, index) => {
        return (
          <div key={item.index}>
            <Gallerycard img={item.img} name={item.name}  />
            
          </div>
        );
      })}

    </div>
  );
};

export default Gallery2;
