import React, { Component } from "react";
import { Sidebar } from "parts";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;

export default class SettingsPage extends Component {
  componentDidMount() {
    document.title = "Settings | Otodyduck";
  }

  render() {
    return (
      <Wrapper>
        <Sidebar {...this.props} />
      </Wrapper>
    );
  }
}
