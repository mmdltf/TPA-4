import Card from "react-bootstrap/Card";

function Section3() {
  return (
    <div>
      <h1 className="d-flex justify-content-center " id='portofolioId' > Portofolio</h1>

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
