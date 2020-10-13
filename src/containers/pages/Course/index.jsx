import React from "react";
import { SidebarClass, Gap } from "components";
import Youtube from "react-youtube";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styled from "styled-components";

const CourseWrapper = styled.section`
  display: flex;
`;

const CourseVideo = styled.section`
  flex: 1;
  margin: 25px 25px 25px 350px;
  color: #101b52;

  .title {
    font-size: 30px;
  }

  .sub-chapter {
    color: #b0b0b0;
  }
`;

const Course = (props) => {
  return (
    <CourseWrapper>
      <SidebarClass />
      <Router>
        <Switch>
          <Route>
            <CourseVideo>
              <h1 className="title">Introduction React JS</h1>
              <p className="sub-chapter">Course from Chapter 1</p>
              <Gap height={20} />
              <Youtube
                videoId="ySF7pvXFz3Q"
                id="ySF7pvXFz3Q"
                opts={{
                  height: 793,
                  width: 1410,
                  playerVars: {
                    autoplay: 1,
                    controls: 1,
                    showinfo: 0,
                    rel: 0,
                  },
                }}
              />
            </CourseVideo>
          </Route>
        </Switch>
      </Router>
    </CourseWrapper>
  );
};

export default Course;
