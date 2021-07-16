import React from "react";
import mind from "../imgs/minddump.png";
import meme from "../imgs/mementopic.png";
import qol from "../imgs/qolpic.png";

function Carousel() {
  return (
    <div
      className="carousel slide justify-content-center"
      data-bs-ride="carousel"
      id="carouselMain"
    >
      <div className="carousel-inner justify-content-center">
        <div className="carousel-item active">
          <img
            src={mind}
            id="minddump"
            className="img-responsive justify-content-center"
            alt="mind-dump-img"
          ></img>
          <div className="carousel-caption d-none d-md-block">
            <h4>Mind Dump</h4>
            <p>
              A blog post webiste where users can interact with one another by
              posting and commenting on blogs. Users are required to create and
              account, which gives them access to a dashboard showing all of
              their blog posts
            </p>
            <h5>My Contribution:</h5>
            <p>Entire Project</p>
            <p>
              Skills/Languages used: Handlebars.js, Javascript, Node, Express,
              MYSQL, Bootstrap.
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={meme}
            className="d-block w-100"
            alt="screenshot of memento application"
          ></img>
          <div className="carousel-caption d-none d-md-block">
            <h4>MEMEnto</h4>
            <p>
              A meme generator website which allows users to create their own
              memes using templates we provide on the server. This application
              uses routing and manipulation of a MYSQL database to function.
            </p>
            <h5>My Contribution:</h5>
            <p>
              My Contribution: Handling the login/logout function allowing for
              users to create an account in order to access the website. I also
              contributed in setting up all of the routing and giving the meme
              text the ability to be dragged.
            </p>
            <p>
              Skills/Languages Used: Javascript, Database Manipulation, CSS,
              Handlebars, MYSQL.
            </p>
          </div>
        </div>

        <div class="carousel-item">
          <img
            src={qol}
            className="d-block w-100"
            alt="image of qol project"
          ></img>
          <div className="carousel-caption d-none d-md-block">
            <h4>QOL Generator</h4>
            <p>
              An application which manipulates the google maps API in order to
              display information based on users selected parameters.
            </p>
            <h5>My Contribution:</h5>
            <p>
              Linking the google maps API to our local storage and pulling data
              from the API to populate the map.
            </p>
            <p>
              Skills/Languages Used: Javascript, API manipulation, CSS, HTML
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
