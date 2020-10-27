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
  display: flex;
  flex-wrap: wrap;

  > div {
    margin: 10px 20px;
  }
`;

export { MyClassWrapper, CardList };
