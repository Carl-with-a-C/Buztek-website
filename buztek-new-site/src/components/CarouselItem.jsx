import React from "react";

const CarouselItem = ({ item }) => {
  return (
    <div className="carousel-item">
      <div className="carousel-item-header">
        <h1>{item.number}</h1>
        <h3>{item.title}</h3>
      </div>
      <div className="carousel-item-footer">
        <h4>{item.details}</h4>
      </div>
    </div>
  );
};

export default CarouselItem;
