import styled from "styled-components";

const CourseVideo = styled.section`
  flex: 1;
  margin: 25px 25px 25px 350px;
  color: #101b52;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-size: 30px;
  }

  .sub-chapter {
    color: #b0b0b0;
  }

  a {
    text-decoration: none;
    border: 1px solid ${(props) => (props.remove ? "#d63030" : "#30c8d6")};
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    background-color: ${(props) => (props.remove ? "#d63030" : "#30c8d6")};
    border-radius: 5px;
    padding: 6px 12px;
  }
`;

export { CourseVideo };
