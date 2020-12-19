import React from "react";
import { Gap, UserCard } from "components";
import { Wrapper, CardList } from "./Users";

const Tools = ({ data }) => {
  return (
    <Wrapper>
      <h1 className="title">User Management</h1>
      <Gap height={20} />
      <Gap height={20} />
      <CardList>
        {Object.values(data)?.map?.((item, index) => (
          <UserCard key={index} data={item} />
        ))}
      </CardList>
    </Wrapper>
  );
};

export default Tools;
