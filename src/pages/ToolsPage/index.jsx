import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import tools from "constants/api/tools";

import { statusTools, fetchTools } from "store/actions/tools";

import { Sidebar, Loading, Tools } from "parts";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;

const ToolsPage = ({ history }) => {
  const dispatch = useDispatch();
  const USER = useSelector((state) => state.users);
  const TOOLS = useSelector((state) => state.tools);

  if (USER?.role === "student") {
    history.push("/");
  }

  useEffect(() => {
    document.title = "Tools | Otodyduck";

    dispatch(statusTools("loading"));

    tools
      .get()
      .then((res) => {
        dispatch(fetchTools(res.data));
      })
      .catch();
  }, [dispatch]);

  return (
    <Wrapper>
      <Sidebar />
      {TOOLS.status === "loading" && <Loading />}
      {TOOLS.status === "ok" && <Tools data={TOOLS} />}
    </Wrapper>
  );
};

export default withRouter(ToolsPage);
