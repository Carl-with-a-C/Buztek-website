import { useState } from "react";

import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      number: "01",
      title: "AQUAINTANCE",
      details:
        "You describe your idea and your needs and we will prepare a proposal with the recommended team, timeline and budget.",
    },
    {
      number: "02",
      title: "ANALYTICS",
      details:
        "We conduct a deep analysis of your project, industry and competitive environment. This will identify opportunities to make you stand out of the crowd and deliver a strategy to bring your vision to market. ",
    },
    {
      number: "03",
      title: "STRUCTURE",
      details:
        "We work together to draw a sitemap and wireframe the main screens. (Wireframes are low-fidelity designs that focus on layout and content, rather than on the final style, colors, illustrations or photography) ",
    },
    {
      number: "04",
      title: "DESIGN",
      details:
        "This is where the fun starts! Our creative team will explore two or three interesting and unique design concepts for your homepage and we will present them for your final decision and approval.",
    },
    {
      number: "05",
      title: "DEVELOPING",
      details:
        "After we settle on the look and feel, we will get all the screens ready for the web; focusing on consistent style, interactivity, animation and responsiveness (making sure it adapts to mobile and tablet views).",
    },
    {
      number: "06",
      title: "SETUP AND LAUNCH",
      details:
        "Before the launch we make sure that the favicon is on brand, request and feedback forms are routed to the correct sales and support personnel, the security is locked down (SSL certificate), domain is registered, and google analytics is setup.",
    },
    {
      number: "07",
      title: "Aquaintance",
      details:
        "You will not be alone… During the handoff we will provide detailed instructions for updating and troubleshooting your brand new website. And, of course, we will be on call to provide free technical support for up to two weeks after site launch!",
    },
  ];

  const updateIndex = (newIndex) => {
    console.log(newIndex);

    if (newIndex < 0) {
      newIndex = 0;
    }
    if (newIndex > 6) {
      newIndex = 6;
    } else if (newIndex >= items.length) {
      newIndex = items.lenmgth - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel-container">
      <div className="carousel-btns">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >{`<`}</button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
                className={
                  index === activeIndex
                    ? "indicator-numbers-active"
                    : "indicator-numbers"
                }
                key={index}
              >
                <p>{item.number}</p>
              </button>
            );
          })}
        </div>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >{`>`}</button>
      </div>
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>
    </div>
  );
};

export default Carousel;
