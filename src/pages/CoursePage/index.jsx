import React, { Component } from "react";
import styled from "styled-components";

import { SidebarClass, Course } from "parts";

const CourseWrapper = styled.section`
  display: flex;
`;

export default class CoursePage extends Component {
  componentDidMount() {
    document.title = "Class Name | Otodyduck";
  }

  render() {
    return (
      <CourseWrapper>
        <SidebarClass {...this.props} />
        <Course />
      </CourseWrapper>
    );
  }
}
