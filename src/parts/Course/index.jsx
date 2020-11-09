import React from "react";
import Youtube from "react-youtube";

import { Gap } from "components";
import { CourseVideo } from "./Course";

const Course = ({ chapterName, lessonName, videoId, nextVideo }) => {
  return (
    <CourseVideo>
      <h1 className="title">{lessonName ?? "Lesson Name"}</h1>
      <p className="sub-chapter">Course from {chapterName ?? "Chapter Name"}</p>
      <Gap height={20} />
      {videoId && (
        <Youtube
          videoId={videoId}
          id={videoId}
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
          onEnd={nextVideo}
        />
      )}
    </CourseVideo>
  );
};

export default Course;
