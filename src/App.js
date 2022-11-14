import "./App.css";
import 'animate.css';
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Router from "./Routes";

function App() {
  return (
    <>
      <Navbar/>

      <Router/>


      <Footer />
    </>
  );
}

export default App;
