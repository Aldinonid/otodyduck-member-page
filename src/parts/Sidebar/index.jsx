import React from "react";
import { Avatar, Gap } from "components";
import { SidebarWrapper, AvatarFrame, MainMenu, Footer } from "./Sidebar";

import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? "active" : "";
  };

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
          <Link
            to="/my-progress"
            className={`nav-link ${getNavLinkClass("/my-progress")}`}
          >
            My Progress
          </Link>
        </li>

        <li>
          <Link
            to="/my-class"
            className={`nav-link ${getNavLinkClass("/my-class")}`}
          >
            My Class
          </Link>
        </li>

        <li>
          <a
            href={`${process.env.REACT_APP_FRONTPAGE_URL}/class`}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Class Catalog
          </a>
        </li>

        <li>
          <Link
            to="/settings"
            className={`nav-link ${getNavLinkClass("/settings")}`}
          >
            Settings
          </Link>
        </li>
      </MainMenu>

      {/* TODO : Logout pake button, jadi nanti buat onclick logoutnya */}
      <Footer>Logout</Footer>
    </SidebarWrapper>
  );
};

export default Sidebar;
