import { MDBRipple } from "mdb-react-ui-kit";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
const Aboutpage = () => {
  return (
    <div
    
      style={{
        backgroundImage:"url( 'https://images.pexels.com/photos/4929994/pexels-photo-4929994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' )"
          ,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <MDBContainer id="aboutId">
        <MDBRow start style={{ margin: 0 }}>
          <h1 className="d-flex justify-content-center fw-bold text-light img-fluid hover-shadow rounded-4 mb-5 mt-5 ">
            {" "}
            About
          </h1>
          <MDBCol
            className="h4 d-flex justify-content-start mt-5 mb-5 text-light hover-overlay hover-shadow hover-shadow ripple"
            size="6"
          >
            <p
              className="lh-lg hover-zoom"
              style={{ marginRight: 0, marginLeft: 0 }}
            >
              <span className="h1 fw-bold text-warning" id="kolomAbout1" > Tentang Saya </span> <br/>
              saya merupakan seorang mahasiswa ilmu kelautan di universitas
              hasanuddin yang memiliki banyak ketertarikan diluar studi saya
              mulai dari seni, desain, fotografi, pengelasan sampai dunia
              web-engineering. Sekarang saya sedang mengikuti program bootcamp
              frontend developer tech4impact batch#2 dengan skilvul <br/>

              <span className="h1 fw-bold text-warning kolomAbout2 " id="kolomAbout2"> Apa yang menjadi kesukaan dan sesuatu yang sedang saya fokusi? </span> <br/>
              Bermusik dan fotografi merupakan sesuai kesenangan tersendiri bagi saya. Kini saya sedang mengikuti program bootcamp front-end developer dengan harapan bisa menjadi 
              dimasa yang akan datang saya dapat menjadi seorang developer dari sebuah perusahaan. Tidak hanya menggeluti dunia programming, sekarang saya sedang menekuni pengelasan dimana merupakan
              dambaan saya bisa menjadi seorang underwater welder 

            </p>
          </MDBCol>
          <MDBCol size="6">
            <MDBRipple
              className="bg-image hover-zoom mb-7"
              rippleTag="div"
              rippleColor="light"
            >
              <img
                style={{ marginBottom: 40 }}
                src="https://i.postimg.cc/28pSGWvk/20151024143904-IMG-0389.jpg" width={700}
                alt=''
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
};

export default Aboutpage;
