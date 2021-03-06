import React from "react";
import Youtube from "react-youtube";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Gap } from "components";
import { Certificate } from "pages";
import { CourseVideo } from "./Course";

const Course = ({
  chapterName,
  lessonName,
  videoId,
  nextVideo,
  endChapter,
}) => {
  const COURSES = useSelector((state) => state.courses.data);
  const USERS = useSelector((state) => state.users.data);
  let params = useParams();

  return (
    <CourseVideo>
      <div className="header">
        <h1 className="title">{lessonName ?? "Lesson Name"}</h1>
        {endChapter ? (
          <PDFDownloadLink
            document={
              <Certificate
                studentName={USERS.name}
                courseName={COURSES[params.class].name}
              />
            }
            fileName={`${
              COURSES[params.class].slug
            }-${USERS.name.toLowerCase().split(" ").join("-")}.pdf`}
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Finish Learning!"
            }
          </PDFDownloadLink>
        ) : (
          ""
        )}
      </div>
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
