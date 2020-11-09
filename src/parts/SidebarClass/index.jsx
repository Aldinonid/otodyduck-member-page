import React from "react";
import { Gap } from "components";

import { Link, withRouter } from "react-router-dom";

import styled from "styled-components";

const SidebarWrapper = styled.aside`
  position: fixed;
  color: #ffffff;
  height: 100vh;
  width: 280px;
  background-color: #101b52;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .back-home {
    color: white;
    text-decoration: none;
    font-weight: 600;
    padding-left: 50px;
    font-size: 20px;

    :hover {
      text-decoration: underline;
    }
  }
`;

const MainMenu = styled.ul`
  flex: 1;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: list-item;

    .course {
      color: #b0b0b0;
      display: flex;
      align-items: center;
      padding: 10px 0 10px 20px;
      text-decoration: none;

      &.course-header {
        background-color: #17808a;
        font-weight: 600;
        color: #ffffff;
      }

      &.course-item {
        padding-left: 30px;

        &.active {
          color: #30c8d6;
          font-weight: 600;
        }
      }
    }
  }
`;

const SidebarClass = ({ data, match, defaultUri }) => {
  const getNavLinkClass = (path) => {
    return match.url === path || defaultUri === path ? " active" : "";
  };

  const list = [];
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
                "course course-item truncate ...",
                getNavLinkClass(
                  `/courses/${data.slug}/${chapter.id}/${lesson.video}`
                ),
              ].join(" ")}
              to={`/courses/${data.slug}/${chapter.id}/${lesson.video}`}
            >
              {lesson?.name ?? "Lesson Name"}
            </Link>
          </li>
        );
      });
    }
  });

  return (
    <SidebarWrapper>
      <Gap height={32} />
      <Link to="/" className="back-home">
        Back to Home
      </Link>
      <Gap height={32} />
      <MainMenu>{list}</MainMenu>
    </SidebarWrapper>
  );
};

export default withRouter(SidebarClass);
