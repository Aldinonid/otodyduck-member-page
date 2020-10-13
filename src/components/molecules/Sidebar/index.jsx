import React from "react";
import { Avatar, Gap } from "components";
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

const Footer = styled.a`
  text-align: center;
  background-color: #68bced;
  padding: 10px 0;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;

  :hover {
    text-decoration: underline;
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Gap height={32} />
      <AvatarFrame>
        <div className="frame">
          <Avatar />
        </div>
        <h3>Aldino Efendi</h3>
        <p>Frontend Developer</p>
      </AvatarFrame>
      <Gap height={50} />
      <MainMenu>
        <li>
          <a href="/my-class" className="nav-link active">
            My Class
          </a>
        </li>
        <li>
          <a href="/library" className="nav-link">
            Library
          </a>
        </li>
        <li>
          <a href="/transaction" className="nav-link">
            Transaction
          </a>
        </li>
        <li>
          <a href="/settings" className="nav-link">
            Settings
          </a>
        </li>
      </MainMenu>
      <Footer href="/logout">Logout</Footer>
    </SidebarWrapper>
  );
};

export default Sidebar;
