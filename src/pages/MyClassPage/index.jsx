import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MainAppWrapper, Wrapper } from "./MyClassPage";
import { Gap } from "components";
import { Sidebar, MyClass } from "parts";

import courses from "constants/api/courses";
import {
  statusCourses,
  fetchCourses,
  messageCourse,
} from "store/actions/courses";

function EmptyState() {
  return (
    <Wrapper>
      <img
        src={`${process.env.REACT_APP_BASE_URL}/images/illustration-myclass-empty.jpg`}
        alt="Success join class"
      />
      <Gap height={50} />
      <h1>Time to Invest</h1>
      <Gap height={10} />
      <p>
        It seems you don't have any class yet <br /> so let's get then and grow
        your skills
      </p>
      <Gap height={30} />
      <a
        href={`${process.env.REACT_APP_FRONTPAGE_URL}/class`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Search Class
      </a>
    </Wrapper>
  );
}

export default function MyClassPage() {
  const dispatch = useDispatch();
  const COURSES = useSelector((state) => state.courses);

  useEffect(() => {
    document.title = "My Class | Otodyduck";
    window.scroll(0, 0);

    dispatch(statusCourses("loading"));
    courses
      .mine()
      .then((res) => {
        dispatch(fetchCourses(res.data));
      })
      .catch((err) => {
        dispatch(messageCourse(err?.response?.data?.message ?? "Error"));
      });
  }, [dispatch]);

  console.log(COURSES);
  return (
    <MainAppWrapper>
      <Sidebar />
      {COURSES.status === "loading" && "Loading..."}
      {COURSES.status === "error" && COURSES.message}
      {COURSES.status === "ok" &&
        (COURSES.total > 0 ? <MyClass data={COURSES} /> : <EmptyState />)}
    </MainAppWrapper>
  );
}
