const Gallery1 = () => {
  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/533424/pexels-photo-533424.jpeg')",

        height: "100vh",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <img
          src="https://i.postimg.cc/k4CkWK7v/2015-11-14-08-23-22-2.jpg"
          height={400}
          alt=""
          className="mt-5"
        />

        <h2 className="text-white mt-5 " id="footerId">
          {" "}
          “It’s one thing to make a picture of what a person looks like, it’s
          another thing to make a portrait of who they are.” <br/>— Paul Caponigro{" "}
        </h2>
      </div>
    </div>
  );
};

export default Gallery1;
