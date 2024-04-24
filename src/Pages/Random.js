import React from "react";
import "../css/random.css";
import video from "../assests/854037-hd_1920_1080_30fps.mp4";

const Random = () => {
  return (
    <div className="container-random" id="random">
      <div className="inside-random">
        <div className="box-text-random box-text-random-video">
          <div className="box-text-random-blurb">
            <span>
              <p>
                In the quest of knowledge, I watched night create day. While we
                seemed unchanged. Beloved of all, beloved of one alone. Your
                mouth silently promised to be happy. Sentiments adrift… away,
                away says hate; closer, closer says love.
              </p>
            </span>
          </div>
        </div>
        <video src={video} autoPlay loop muted className="random-video" />
        <div className="box-text-random bottom-right ">
          <span>
            <p>alphaville</p> <p>godard</p>
          </span>
          <span>
            <p>test</p> <p>video</p>
          </span>
          <span>
            <p>something</p> <p>random</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Random;
