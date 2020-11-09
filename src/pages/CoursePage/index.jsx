import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  statusCourses,
  watchCourse,
  messageCourse,
} from "store/actions/courses";

import courses from "constants/api/courses";

import styled from "styled-components";

import { SidebarClass, Course } from "parts";

const CourseWrapper = styled.section`
  display: flex;
`;

export default function CoursePage({ history, match }) {
  const dispatch = useDispatch();
  const COURSES = useSelector((state) => state.courses);

  useEffect(() => {
    document.title = "Class Name | Otodyduck";
    window.scroll(0, 0);

    dispatch(statusCourses("loading"));
    courses
      .details(match.params.class)
      .then((res) => {
        if (res.chapter.length === 0)
          throw new Error("Class might be not ready yet");
        else dispatch(watchCourse(res));
      })
      .catch((err) =>
        dispatch(messageCourse(err?.response?.data?.message ?? "error"))
      );
  }, [match.params.class, dispatch]);

  if (COURSES.status === "loading") return <section>Loading...</section>;
  if (COURSES.status === "error")
    return <section>{COURSES?.message ?? "Error Here"}</section>;

  let currentChapter, currentLesson;
  if (COURSES.status === "ok" && COURSES?.data?.[match.params.class]?.chapter) {
    currentChapter =
      COURSES?.data?.[match.params.class]?.chapter?.find(
        (chapter) => +chapter.id === +match.params.chapter
      ) ?? COURSES.data[match.params.class]?.chapter[0];

    currentLesson =
      currentChapter?.lesson?.find(
        (lesson) => lesson.video === match.params.uid
      ) ?? currentChapter?.lesson?.[0];
  }

  function nextVideo() {}

  return (
    <CourseWrapper>
      {COURSES.data?.[match.params.class]?.chapter?.length > 0 && (
        <>
          <SidebarClass
            data={COURSES.data[match.params.class]}
            defaultUri={`/courses/${match.params.class}/${currentChapter.id}/${currentLesson.video}`}
          />
          <Course
            chapterName={currentChapter?.name}
            lessonName={currentLesson?.name}
            videoId={currentLesson?.video}
            nextVideo={nextVideo}
          />
        </>
      )}
    </CourseWrapper>
  );
}
