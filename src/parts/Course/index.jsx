import React from "react";
import Youtube from "react-youtube";

import { Gap } from "components";
import { CourseVideo } from "./Course";

const Course = () => {
  return (
    <CourseVideo>
      <h1 className="title">Introduction React JS</h1>
      <p className="sub-chapter">Course from Chapter 1</p>
      <Gap height={20} />
      <Youtube
        videoId="ZNVRETPPW24"
        id="ZNVRETPPW24"
        opts={{
          height: 793,
          width: 1410,
          playerVars: {
            autoplay: 1,
            controls: 1,
            showinfo: 0,
            rel: 0,
          },
        }}
      />
    </CourseVideo>
  );
};

export default Course;
