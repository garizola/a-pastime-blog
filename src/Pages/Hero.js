import React, { useState } from "react";
import "../css/hero.css";
import { FaArrowDownLong } from "react-icons/fa6";

const Hero = () => {
  const [headingColor, setHeadingColor] = useState("");
  return (
    <div class="container" id="home">
      <div
        class="color-box__beige box"
        onMouseOver={() => setHeadingColor("rgba(248, 246, 198, 1)")}
        onMouseOut={() => setHeadingColor("")}
      >
        <div className="box-text bottom-right">
          <span>
            <p>HEX</p> <p>FAF7CC</p>
          </span>
          <span>
            <p>RGB</p> <p>250 247 204</p>
          </span>
          <span>
            <p>CMYK</p> <p>0 11 18 2</p>
          </span>
        </div>
      </div>
      <div
        class="color-box__green box"
        onMouseOver={() => setHeadingColor("rgba(77, 170, 73, 1)")}
        onMouseOut={() => setHeadingColor("")}
      >
        <div className="box-text bottom-right ">
          <span>
            <p>HEX</p> <p>00AD38</p>
          </span>
          <span>
            <p>RGB</p> <p>0 173 56</p>
          </span>
          <span>
            <p>CMYK</p> <p>100 0 68 32</p>
          </span>
        </div>
      </div>
      <div
        class="color-box__navy box "
        onMouseOver={() => setHeadingColor("rgba(41, 58, 104, 1)")}
        onMouseOut={() => setHeadingColor("")}
      >
        <a href="#about">
          <FaArrowDownLong className="iconnn" />
        </a>

        <div className="box-text top-left box-text-light">
          <span>
            <p>HEX</p> <p>233A6C</p>
          </span>
          <span>
            <p>RGB</p> <p>35 58 108</p>
          </span>
          <span>
            <p>CMYK</p> <p>68 46 0 58</p>
          </span>
        </div>
      </div>
      <div
        class="color-box__orange box"
        onMouseOver={() => setHeadingColor("rgba(237, 95, 42, 1)")}
        onMouseOut={() => setHeadingColor("")}
      >
        <div className="box-text bottom-left">
          <span>
            <p>HEX</p> <p>FF5200</p>
          </span>
          <span>
            <p>RGB</p> <p>255 82 0</p>
          </span>
          <span>
            <p>CMYK</p> <p>0 0 0 88</p>
          </span>
        </div>
      </div>
      <div class="color-box__black box">
        <h1 style={{ color: headingColor }} className="anton">
          a Title
        </h1>
        <div className="box-text top-left box-text-light">
          <span>
            <p>HEX</p> <p>1E1E1E</p>
          </span>
          <span>
            <p>RGB</p> <p>30 30 30</p>
          </span>
          <span>
            <p>CMYK</p> <p>0 68 100 1</p>
          </span>
        </div>
      </div>
      <div
        class="color-box__yellow box"
        onMouseOver={() => setHeadingColor("rgba(242, 169, 67, 1)")}
        onMouseOut={() => setHeadingColor("")}
      >
        <div className="box-text bottom-right ">
          <span>
            <p>HEX</p> <p>255 165 30</p>
          </span>
          <span>
            <p>RGB</p> <p>0 35 88</p>
          </span>
          <span>
            <p>CMYK</p> <p>100 60 0 35</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
