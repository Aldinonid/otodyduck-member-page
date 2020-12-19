import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { users } from "constants/api";

import { statusUser, fetchUser } from "store/actions/users";

import { Sidebar, Loading, Users } from "parts";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;

const UserPage = ({ history }) => {
  const dispatch = useDispatch();
  const USER = useSelector((state) => state.users);

  if (USER.data?.role !== "admin") {
    history.push("/");
  }

  useEffect(() => {
    document.title = "User Management | Otodyduck";

    dispatch(statusUser("loading"));

    users
      .all()
      .then((res) => {
        dispatch(fetchUser(res.data));
      })
      .catch();
  }, [dispatch]);

  return (
    <Wrapper>
      <Sidebar />
      {USER.status === "loading" && <Loading />}
      {USER.status === "ok" && <Users data={USER.userData} />}
    </Wrapper>
  );
};

export default withRouter(UserPage);
