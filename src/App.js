import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carosoul";

import profile from "./imgs/Mario-wedding-help.jpg";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="row justify-content-evenly" id="abMe">
        <div className="col-5">
          <img
            id="profilePic"
            className="img-responsive"
            src={profile}
            alt="profilePic"
          ></img>
        </div>
        <div className="col-7">
          <h2>About Me</h2>
          <p>
            My name is Mario Cabrera, and welcome to my portfolio page. Use the
            NavBar to automatically scroll to where you want to be directed to,
            or click the "Resume" link to open my resume in a seperate tab. I
            keep this page consistantly updated with my latest projects/contact
            information, so feel free to check them out or reach out at any
            time.
          </p>
          <p>
            <p>
              In summer 2020 I graduated from Georgia College & State University
              with a Bachelors Degree of Science in Psychology as well as a
              minor in Criminal Justice. I currently live in Marietta, Georgia,
              working on my programing skills from home while looking for work.
            </p>
            <p>
              I was fortunate enough to have game consoles, computers, and cell
              phones go through revolutionary changes while still in my youth,
              exposing me to all sorts of amazing technology at a young age. As
              I grew up, I learned how to use all of this amazing technology.
              After learning how to use it, I became interested in learning how
              it functions. This led me to build my own PC in middle school,
              teaching myself how the hardware interacted. I used this kowledge
              to make a bit of money by fixing hardware issues with my neighbors
              and friends PC's. Although my degree is in Psychology, I am now
              persuing a career in programming. I have self-taught throughout
              the years, however more recently I have taken a bootcamp from
              Georgia Tech, which has skyrocketed my knowledge. The idea of
              becoming a developer and gaining more knowledge has been one of
              the most exciting prospects in my life, once which I am commited
              to persue. I hope to one day use my Psychology degree paired with
              programming knowledge and experience to begin work in AI
              development.
            </p>
          </p>
        </div>
      </div>
      <container>
        <div class="row" id="projDiv">
          <h1 className="row justify-content-center">Projects:</h1>
          <div id="carousel" className="col">
            <Carousel />
          </div>
        </div>
      </container>
    </>
  );
}

export default App;
