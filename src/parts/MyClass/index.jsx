import React from "react";
import { MyClassWrapper, CardList } from "./MyClass";
import { Gap, ClassCard } from "components";

const MyClass = ({ data }) => {
  return (
    <MyClassWrapper>
      <h2 className="title">My Class</h2>
      <p className="sub-title">Continue learning to pursue your dreams</p>
      <Gap height={20} />
      <CardList>
        {Object.values(data.data)?.map?.((item, index) => (
          <ClassCard key={index} data={item.course} />
        ))}
      </CardList>
    </MyClassWrapper>
  );
};

export default MyClass;
