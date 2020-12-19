import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Sidebar, SettingForm } from "parts";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;

export default function SettingsPage() {
  useEffect(() => {
    document.title = "Settings | Otodyduck";
  }, []);

  const USERS = useSelector((state) => state.users);

  return (
    <Wrapper>
      <Sidebar />
      <SettingForm details={USERS.data} />
    </Wrapper>
  );
}
