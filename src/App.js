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

      <div className="row justify-content-evenly">
        <div className="col-3">
          <img
            id="profilePic"
            className="img-responsive"
            src={profile}
            alt="profilePic"
          ></img>
        </div>
        <div className="col-9">About me text here</div>
      </div>

      <div class="row">
        <div id="carousel" className="col">
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default App;
