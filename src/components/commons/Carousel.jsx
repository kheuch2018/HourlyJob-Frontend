import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators" />
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.pexels.com/photos/905873/pexels-photo-905873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="d-block w-100"
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
