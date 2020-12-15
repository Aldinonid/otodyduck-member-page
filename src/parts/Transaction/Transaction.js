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
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  > img {
    border-radius: 10px;
    height: 130px;
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
  }

  h6 {
    font-size: 25px;
    font-weight: normal;
  }

  a {
    text-decoration: none;
    border: 1px solid #30c8d6;
    cursor: pointer;
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
    background-color: #30c8d6;
    border-radius: 5px;
    padding: 6px 12px;
  }
`;

export { Wrapper, CourseProgress };
