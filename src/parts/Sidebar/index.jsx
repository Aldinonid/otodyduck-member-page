import React from "react";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import users from "constants/api/users";

import { Avatar, Gap } from "components";
import { SidebarWrapper, AvatarFrame, MainMenu, Footer } from "./Sidebar";

const Sidebar = ({ history, match }) => {
  const user = useSelector((state) => state.users);
  const paramsPath = `/${match?.path?.split("/")[1]}`;

  const getNavLinkClass = (path) => {
    return paramsPath === path ? "active" : "";
  };

  function logout(e) {
    e.preventDefault();
    users
      .logout()
      .then((res) => {
        localStorage.removeItem("OTODYDUCK:token");
        const expires = new Date(new Date().getTime() - 99999);
        document.cookie = `OTODYDUCK:user=; expired=${expires.toUTCString()};`;
        history.push("/login");
      })
      .catch((err) => console.log(err));
  }

  return (
    <SidebarWrapper>
      <Gap height={32} />
      <AvatarFrame>
        <div className="frame">
          <Avatar user={user} />
        </div>
        <h3>{user ? user?.name : "User Name"}</h3>
        <p>{user ? user?.job : "User Occupation"}</p>
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
          <Link to="/" className={`nav-link ${getNavLinkClass("/")}`}>
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
            to="/orders"
            className={`nav-link ${getNavLinkClass("/orders")}`}
          >
            Transaction
          </Link>
        </li>

        {user?.role === "teacher" ? (
          <>
            <li>
              <Link
                to="/class"
                className={`nav-link ${getNavLinkClass("/class")}`}
              >
                My Courses
              </Link>
            </li>

            <li>
              <Link
                to="/tools"
                className={`nav-link ${getNavLinkClass("/tools")}`}
              >
                Tools
              </Link>
            </li>

            <li>
              <Link
                to="/journey"
                className={`nav-link ${getNavLinkClass("/journey")}`}
              >
                Flow Learn
              </Link>
            </li>
          </>
        ) : (
          ""
        )}

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
      <Footer onClick={logout}>Logout</Footer>
    </SidebarWrapper>
  );
};

export default withRouter(Sidebar);
