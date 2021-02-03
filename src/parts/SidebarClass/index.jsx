import React from "react";
import { Link, withRouter } from "react-router-dom";

import { Gap } from "components";
import { ReactComponent as ArrowBack } from "assets/images/icon-arrow-back.svg";
import { SidebarWrapper, MainMenu } from "./SidebarClass";

const SidebarClass = ({ data, match, defaultUri }) => {
  const getNavLinkClass = (path) => {
    return match.url === path || defaultUri === path ? " active" : "";
  };

  const list = [];
  const MAX_LENGTH = 21;
  data.chapter.forEach((chapter, index) => {
    list.push(
      <li key={`${chapter.course_id}-${index}`}>
        <span className="course course-header">
          {chapter?.name ?? "Chapter Name"}
        </span>
      </li>
    );
    if (chapter?.lesson?.length > 0) {
      chapter.lesson.forEach((lesson, index2) => {
        list.push(
          <li key={`${chapter.course_id}-${lesson.id}-${index2}`}>
            <Link
              className={[
                "course course-item",
                getNavLinkClass(
                  `/courses/${data.slug}/${chapter.id}/${lesson.video}`
                ),
              ].join(" ")}
              to={`/courses/${data.slug}/${chapter.id}/${lesson.video}`}
            >
              {lesson?.name.length > MAX_LENGTH
                ? lesson?.name.substring(0, MAX_LENGTH - 3) + " ..."
                : lesson?.name}
            </Link>
          </li>
        );
      });
    }
  });

  return (
    <SidebarWrapper>
      <Link to="/" className="back-home">
        <ArrowBack className="arrow" />
        Back to Home
      </Link>
      <MainMenu>
        <Gap height={50} />
        {list}
      </MainMenu>
    </SidebarWrapper>
  );
};

export default withRouter(SidebarClass);
