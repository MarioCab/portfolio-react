import React from "react";

function Contact() {
  return (
    <footer id="ContactPg" className="content-align-center">
      <h1>Contact Me</h1>
      <div class="row align-items-center">
        <div class="col-4">
          <p>
            <a href="mailto:yankeescab@gmail.com">yankeescab@gmail.com</a>
          </p>
        </div>
        <div class="col-4">
          <p>
            <a href="https://github.com/MarioCab" target="_blank">
              Github
            </a>
          </p>
        </div>
        <div class="col-4">
          <p>
            <a
              href="www.linkedin.com/in/mario-cabrera-7b6120204"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
