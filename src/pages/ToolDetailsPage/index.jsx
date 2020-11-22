import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import tools from "constants/api/tools";
import { statusTools, fetchTools } from "store/actions/tools";

import { Sidebar, Loading, ToolDetail } from "parts";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;

const ToolDetailsPage = ({ location }) => {
  const toolId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const TOOLS = useSelector((state) => state.tools);

  useEffect(() => {
    document.title = "Tool | Otodyduck";

    dispatch(statusTools("loading"));
    tools.getTool(toolId).then((res) => dispatch(fetchTools(res.data)));
  }, [dispatch, toolId]);

  return (
    <Wrapper>
      <Sidebar />
      {TOOLS.status === "loading" && <Loading />}
      {TOOLS.status === "ok" && <ToolDetail details={TOOLS.data} />}
    </Wrapper>
  );
};

export default ToolDetailsPage;
