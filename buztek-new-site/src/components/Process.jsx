import Carousel from "./Carousel.jsx";

const Process = () => {
  return (
    <section>
      <div className="process-container">
        <div className="main-sec-container">
          <div className="process-title-sec">
            <h4>Our Process</h4>
            <p>
              LORUM Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Aenean vel elit scelerisque mauris pellentesque pulvinar Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Aenean vel
              elit scelerisque mauris pellentesque pulvinar pellentesque. Nulla
              posuere sollicitudin aliquam ultrices. Sed velit dignissim sodales
              ut eu.{" "}
            </p>
          </div>
          <div className="process-carousel-sec">
            <Carousel />
          </div>
        </div>
        <div className="process-img-container">
          <img
            src="https://images.pexels.com/photos/1123349/pexels-photo-1123349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="a bee"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
