import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { flows, courses } from "constants/api";
import { statusFlows, fetchFlows } from "store/actions/flows";
import { statusClass, fetchClass } from "store/actions/classes";

import { Sidebar, Loading, FlowDetail } from "parts";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;

const FlowDetailsPage = ({ history }) => {
  const dispatch = useDispatch();
  const slug = history.location.pathname.split("/")[2];
  const USER = useSelector((state) => state.users);
  const FLOWS = useSelector((state) => state.flows);
  const CLASSES = useSelector((state) => state.classes);

  if (USER?.role === "student") {
    history.push("/");
  }

  useEffect(() => {
    document.title = "Flow Learn | Otodyduck";

    dispatch(statusFlows("loading"));

    flows
      .details(slug)
      .then((res) => {
        dispatch(fetchFlows(res.data));
      })
      .catch((err) => history.goBack());

    dispatch(statusClass("loading"));
    courses.get().then((res) => dispatch(fetchClass(res)));
  }, [dispatch, history, slug]);

  return (
    <Wrapper>
      <Sidebar />
      {FLOWS.status === "loading" && CLASSES.status === "loading" && (
        <Loading />
      )}
      {FLOWS.status === "ok" && CLASSES.status === "ok" && (
        <FlowDetail data={FLOWS.data} />
      )}
    </Wrapper>
  );
};

export default withRouter(FlowDetailsPage);
