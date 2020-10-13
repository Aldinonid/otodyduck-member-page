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
`;

const AvatarFrame = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  .frame {
    margin: 0 auto;
  }

  p {
    color: #b0b0b0;
  }
`;

const MainMenu = styled.ul`
  flex: 1;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: list-item;

    .nav-link {
      font-weight: 600;
      color: #ffffff;
      display: flex;
      align-items: center;

      padding: 10px 0 10px 30px;
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }

      &.active {
        background-color: #30c8d6;
      }
    }
  }
`;

const Footer = styled.button`
  border: none;
  cursor: pointer;
  text-align: center;
  background-color: #68bced;
  padding: 10px 0;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 17px;

  :hover {
    text-decoration: underline;
  }
`;

export { SidebarWrapper, AvatarFrame, MainMenu, Footer };
