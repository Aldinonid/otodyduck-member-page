import styled from "styled-components";

const SidebarWrapper = styled.aside`
  position: fixed;
  color: #ffffff;
  height: 100vh;
  width: 280px;
  background-color: #101b52;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;

  .back-home {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
    padding: 20px 0 0 19px;

    .arrow {
      fill: white;
      margin-right: 20px;
    }

    :hover {
      text-decoration: underline;
    }
  }
`;

const MainMenu = styled.ul`
  flex: 1;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: list-item;

    .course {
      color: #b0b0b0;
      display: flex;
      align-items: center;
      padding: 10px 0 10px 20px;
      text-decoration: none;

      &.course-header {
        margin-top: 20px;
        font-weight: 600;
        color: #ffffff;
      }

      &.course-item {
        margin: 5px 10px 10px;
        border-radius: 5px;
        background-color: #142366;

        &.active {
          color: #ffffff;
          font-weight: 600;
          background-color: #30c8d6;
        }

        &.active:hover {
          background-color: #34deed;
        }
      }

      &.course-item:hover {
        background-color: #18297a;
      }
    }
  }

  li:last-child {
    margin-bottom: 100px;
  }
`;

export { SidebarWrapper, MainMenu };
