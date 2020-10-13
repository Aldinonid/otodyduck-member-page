import React from "react";
import { Gap, ClassCard } from "components";
import styled from "styled-components";

const MyClassWrapper = styled.section`
  flex: 1;
  margin: 25px 25px 25px 300px;
  color: #101b52;

  .title {
    font-size: 30px;
  }

  .sub-title {
    color: #b0b0b0;
  }
`;

const CardList = styled.div`
  display: grid;
  column-gap: 20px;
  row-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(284px, 1fr));
`;

const MyClass = () => {
  return (
    <MyClassWrapper>
      <h2 className="title">My Class</h2>
      <p className="sub-title">Continue learning to pursue your dreams</p>
      <Gap height={20} />
      <CardList>
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
      </CardList>
    </MyClassWrapper>
  );
};

export default MyClass;
