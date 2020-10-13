import React from "react";
import { Avatar, Gap } from "components";
import { SidebarWrapper, AvatarFrame, MainMenu, Footer } from "./Sidebar";

import { Link } from "react-router-dom";

const Sidebar = ({ match }) => {
  console.log(match);

  // const logout = () => {
  //   users.logout().then(() => {
  //     localStorage.removeItem("OTODYDUCK:token");
  //     history.push("/login")
  //   })
  // }

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
          <Link to="/" className="nav-link">
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
            Library
          </a>
        </li>
        <li>
          <Link to="/transaction" className="nav-link">
            Transaction
          </Link>
        </li>
        <li>
          <Link to="/settings" className="nav-link">
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
