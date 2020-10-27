import React, { Component } from "react";
import { Progress, Sidebar } from "parts";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;

export default class ProgressPage extends Component {
  componentDidMount() {
    document.title = "My Progress | Otodyduck";
  }

  render() {
    return (
      <Wrapper>
        <Sidebar {...this.props} />
        <Progress />
      </Wrapper>
    );
  }
}
