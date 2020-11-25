import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { courses, tools } from "constants/api";
import { statusClass, fetchClass } from "store/actions/classes";
import { fetchTools, statusTools } from "store/actions/tools";

import { Sidebar, Loading, MyCourseDetail } from "parts";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;

const MyCourseDetailsPage = ({ history }) => {
  const dispatch = useDispatch();
  const slug = history.location.pathname.split("/")[2];
  const CLASSES = useSelector((state) => state.classes);
  const TOOLS = useSelector((state) => state.tools);
  const USER = useSelector((state) => state.users);

  if (USER?.role === "student") {
    history.push("/");
  }

  useEffect(() => {
    document.title = "Class | Otodyduck";

    dispatch(statusClass("loading"));
    courses
      .details(slug)
      .then((res) => {
        dispatch(fetchClass(res));
      })
      .catch((err) => history.goBack());
    dispatch(statusTools("loading"));
    tools.get().then((res) => dispatch(fetchTools(res.data)));
  }, [history, dispatch, slug]);

  return (
    <Wrapper>
      <Sidebar />
      {CLASSES.status === "loading" && TOOLS.status === "loading" && (
        <Loading />
      )}
      {CLASSES.status === "ok" && TOOLS.status === "ok" && (
        <MyCourseDetail data={CLASSES.data} />
      )}
    </Wrapper>
  );
};

export default MyCourseDetailsPage;
