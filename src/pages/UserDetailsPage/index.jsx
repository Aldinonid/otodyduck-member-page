import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { users } from "constants/api";
import { statusUser, fetchUser } from "store/actions/users";

import { Sidebar, Loading, UserDetail } from "parts";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;

const UserDetailsPage = ({ history }) => {
  const userId = history.location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const USER = useSelector((state) => state.users);

  if (USER.data?.role !== "admin") {
    history.push("/");
  }

  useEffect(() => {
    document.title = "User Management | Otodyduck";

    dispatch(statusUser("loading"));
    users.get(userId).then((res) => dispatch(fetchUser(res.data)));
  }, [dispatch, userId]);

  return (
    <Wrapper>
      <Sidebar />
      {USER.status === "loading" && <Loading />}
      {USER.status === "ok" && <UserDetail details={USER.userData} />}
    </Wrapper>
  );
};

export default UserDetailsPage;
