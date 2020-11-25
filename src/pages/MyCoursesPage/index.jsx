import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { courses, tools } from "constants/api";
import { statusClass, fetchClass } from "store/actions/classes";
import { fetchTools } from "store/actions/tools";

import { Sidebar, MyCourses, Loading } from "parts";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;

const MyCoursesPage = ({ history }) => {
  const dispatch = useDispatch();
  const USER = useSelector((state) => state.users);
  const CLASSES = useSelector((state) => state.classes);

  if (USER?.role === "student") {
    history.push("/");
  }

  // TODO: Fetch course list based on mentor //

  useEffect(() => {
    document.title = "Courses | Otodyduck";

    dispatch(statusClass("loading"));
    courses.getBasedOnMentor(USER?.id).then((res) => {
      dispatch(fetchClass(res));
    });

    tools.get().then((res) => dispatch(fetchTools(res.data)));
  }, [dispatch, USER]);

  return (
    <Wrapper>
      <Sidebar />
      {CLASSES.status === "loading" && <Loading />}
      {CLASSES.status === "ok" && <MyCourses data={CLASSES.data} />}
    </Wrapper>
  );
};

export default withRouter(MyCoursesPage);
