import React, { Component } from "react";
import { MainAppWrapper } from "./MyClassPage";
import { Sidebar, MyClass } from "parts";

export default class MyClassPage extends Component {
  componentDidMount() {
    document.title = "My Class | Otodyduck";
  }

  render() {
    return (
      <MainAppWrapper>
        <Sidebar {...this.props} />
        <MyClass />
      </MainAppWrapper>
    );
  }
}
