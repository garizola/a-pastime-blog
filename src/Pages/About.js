import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <div className="container-about" id="about">
      <div className="aboutText">
        <h2 className="anton">about</h2>
      </div>
      <div className="copy-about">
        {/* <div className="box-text-about top-left bt-about">
          <span className="myname">
            <p>giovanni</p> <p>arizola</p>
          </span>
        </div> */}
        <div className="box-text-about top-right bt-about">
          <span className="myname">
            <p>giovanni</p> <p>arizola</p>
          </span>
          <br />
          <span>
            <p>current</p>
            <p>favorites:</p>
          </span>
          <br />
          <span>
            <p>song:</p>
          </span>
          <span>
            <p>silence</p> <p>is</p>
            <p>loud</p>
          </span>
          <span>
            <p>nia archives</p>
          </span>
          <br />
          <span>
            <p>movie:</p>
          </span>
          <span>
            <p>anatomy</p> <p>of</p> <p>a</p> <p>fall</p>
          </span>
          <span>
            <p>justine triet</p>
          </span>
          <br />
          <span>
            <p>lol idk yet</p>
          </span>
        </div>

        <div className="box-text-about bottom-left">
          <span>
            <p>HEX</p> <p>1E1E1E</p>
          </span>
          <span>
            <p>RGB</p> <p>31 32 30</p>
          </span>
          <span>
            <p>CMYK</p> <p>0 68 100 1</p>
          </span>
        </div>
      </div>
      <div className="thumbprint"></div>
      <div className="random-about"></div>
      <div className="blurb">
        <div className="box-text-about-blurb">
          <span>
            <p>
              idk yet - Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
