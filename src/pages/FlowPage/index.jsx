import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { flows } from "constants/api";
import { statusFlows, fetchFlows } from "store/actions/flows";

import { Sidebar, Loading, Flow } from "parts";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;

const FlowPage = ({ history }) => {
  const dispatch = useDispatch();
  const USER = useSelector((state) => state.users);
  const FLOWS = useSelector((state) => state.flows);

  if (USER.data?.role === "student") {
    history.push("/");
  }

  useEffect(() => {
    document.title = "Flow Learn | Otodyduck";

    dispatch(statusFlows("loading"));

    flows
      .get()
      .then((res) => {
        dispatch(fetchFlows(res));
      })
      .catch();
  }, [dispatch]);

  return (
    <Wrapper>
      <Sidebar />
      {FLOWS.status === "loading" && <Loading />}
      {FLOWS.status === "ok" && <Flow data={FLOWS.data} />}
    </Wrapper>
  );
};

export default withRouter(FlowPage);
