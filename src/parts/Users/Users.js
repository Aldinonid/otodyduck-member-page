import styled from "styled-components";

const Wrapper = styled.section`
  flex: 1;
  margin: 25px 25px 25px 350px;
  color: #101b52;

  .title {
    font-size: 30px;
  }
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    margin: 10px 20px;
  }
`;

export { Wrapper, CardList };
