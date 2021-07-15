import React from "react";
import mind from "../imgs/minddump.png";

function Carousel() {
  return (
    <div className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={mind}
            id="minddump"
            className="img-responsive"
            alt="mind-dump-img"
          ></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..."></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="..." className="d-block w-100" alt="..."></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
