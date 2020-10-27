import React from "react";

import { Gap } from "components";
import Image from "assets/images/img-class-1.jpg";

import styled from "styled-components";

const Wrapper = styled.section`
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

const CourseProgress = styled.div`
  margin: 29px 0;
  display: flex;
  flex-wrap: wrap;

  > img {
    border-radius: 25px;
  }

  > .col {
    width: 450px;
    padding: 0 15px;

    > .title-course {
      font-size: 25px;
      font-weight: 600;
    }
    > .sub-title {
      color: #b0b0b0;
    }

    > .progress {
      margin: 0.5rem 0;
      display: flex;
      height: 25px;
      background-color: #e9ecef;
      border-radius: 0.25rem;
      color: #ffffff;
      text-align: center;
      vertical-align: middle;
    }
  }
`;

const ProgressBar = styled.div`
  background-color: #101b52;
  width: ${({ value }) => value || 0};
  border-radius: 0.25rem;

  &.completed {
    background-color: #1abc9c;
  }
`;

const Progress = () => {
  return (
    <Wrapper>
      <h2 className="title">My Progress Learning</h2>
      <p className="sub-chapter">
        Finish all course to get your high skill demand
      </p>
      <Gap height={20} />
      <CourseProgress>
        <img src={Image} alt="React" />
        <div className="col">
          <p className="title-course">
            Web Development Microservice: Website Kelas Online
          </p>
          <div className="progress">
            <ProgressBar value="4%" className="">
              4%
            </ProgressBar>
          </div>
          <p className="sub-title">129 from 243 lessons done</p>
        </div>
      </CourseProgress>
    </Wrapper>
  );
};

export default Progress;
