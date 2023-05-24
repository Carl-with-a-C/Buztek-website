import HeaderScroll from "./HeaderScroll";

const Landing = () => {
  return (
    <main>
      <div className="landing-container">
        <div className="header">
          <HeaderScroll />;
        </div>
        <div className="splash-image-container">
          <img
            className="splash-image"
            src="https://img.freepik.com/free-photo/sharp-stinging-insect-close-up-yellow-black-striped-generated-by-ai_188544-17689.jpg?w=2000&t=st=1684767234~exp=1684767834~hmac=4ef1a295bd00b7397d3230644dd75befd344fa125eee202e47ca966e6cfa4275"
            alt="hardware computer board"
          />
        </div>
        <div className="splash-blurb-container">
          <div className="splash-blurb">
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
              vel elit.
            </h5>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
