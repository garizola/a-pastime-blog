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
            <p>these change a lot</p>
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
      {/* <div className="mypic"></div> */}
      <div className="random-about"></div>
      <div className="blurb">
        {/* <div className="mypic"></div> */}
        <div className="box-text-about-blurb">
          <ul>
            <li>
              My name is Giovanni, and I'm a recently graduated software
              developer looking for my next opportunity! My resume details my
              skills and experience as well as links to my portfolio, LinkedIn,
              and&nbsp;GitHub.
            </li>
            <br />
            <li>
              I'm looking for a position where I can make an immediate impact
              while continuing to learn and grow as both a developer and an
              individual! I'm genuinely passionate about development and really
              enjoy the every challenge associated with&nbsp;it.
            </li>
            <br />
            <li>
              I am open to relocating (I don't expect relocation assistance) and
              do hope my career will lead me somewhere&nbsp;new!
            </li>
            <br />
            <li>
              I'm a fast learner and confident in my ability to quickly pick up
              new skills! I am always eager to embrace new challenges and tackle
              anything new that is thrown my&nbsp;way.
            </li>
            <br />
            <li>
              Outside of work, I enjoy playing chess, running, collecting, art,
              and hiking!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
