import Card from "react-bootstrap/Card";

function Section3() {
  return (
    <div style={{
      backgroundImage: "url('https://images.pexels.com/photos/840185/pexels-photo-840185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' )",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
    }}>
      <h1 className="d-flex justify-content-center fw-bold text-light img-fluid hover-shadow rounded-6 mb-5 pt-5 "  id='portofolioId' > Portofolio</h1>

      <div id="card-section3" className="d-flex justify-content-evenly ">
        <Card style={{ width: "33rem" }} className="bg-image hover-zoom">
          <Card.Img
            variant="top"
            src="https://i.postimg.cc/hjzQj8hp/porto-1.png"
          />
        </Card>
        <Card style={{ width: "33rem" }} className="bg-image hover-zoom">
          <Card.Img
            variant="top"
            src="https://i.postimg.cc/15GLVLqN/porto-2.png    "
          />
        </Card>
        <Card style={{ width: "33rem" }} className="bg-image hover-zoom">
          <Card.Img
            variant="top"
            src="https://i.postimg.cc/15GLVLqN/porto-2.png    "
          />
        </Card>
      </div>
    </div>
  );
}

export default Section3;
