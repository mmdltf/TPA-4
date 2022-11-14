import { Route, Routes } from "react-router-dom";
import Aboutpage from "./pages/about";
import Gallerypage from "./pages/gallery";
import Homepage from "./pages/home";
import Portofoliopage from "./pages/portofolio";



const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/> } />
        <Route path="about" element={<Aboutpage/> } />
        <Route path="portofolio" element={<Portofoliopage/> } />
        <Route path="gallery" element={<Gallerypage/> } />
      </Routes>
    </div>
  );
};

export default Router;
