import React, { useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import orders from "constants/api/orders";
import { statusOrders, fetchOrders, messageOrder } from "store/actions/orders";

import { Gap } from "components";
import { Wrapper } from "pages/MyClassPage/MyClassPage";
import { Sidebar, Loading, Transaction } from "parts";

const PageWrapper = styled.section`
  display: flex;
`;

function EmptyState() {
  return (
    <Wrapper>
      <img
        src={`${process.env.REACT_APP_BASE_URL}/images/illustration-myclass-empty.jpg`}
        alt="Success join class"
      />
      <Gap height={50} />
      <h1>Time to Invest</h1>
      <Gap height={10} />
      <p>
        It seems you don't have any class yet <br /> so let's get then and grow
        your skills
      </p>
      <Gap height={30} />
      <a
        href={`${process.env.REACT_APP_FRONTPAGE_URL}/class`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Search Class
      </a>
    </Wrapper>
  );
}

function Congratulation({ data }) {
  return (
    <Wrapper>
      <Gap height={150} />
      <img
        src={data?.metadata?.course_thumbnail}
        alt="Success join class"
        style={{ borderRadius: "10px" }}
      />
      <Gap height={50} />
      <h1>Welcome to Class</h1>
      <Gap height={10} />
      <p>
        You have successfully joined our <br />{" "}
        <strong>{data?.metadata?.course_name}</strong> class
      </p>
      <Gap height={30} />
      <Link to={`/courses/${data?.metadata?.course_slug}`} className="link">
        Start Learn
      </Link>
    </Wrapper>
  );
}

const TransactionPage = ({ location }) => {
  const dispatch = useDispatch();
  const ORDERS = useSelector((state) => state.orders);

  const params =
    location?.search.length > 0 &&
    location?.search
      ?.substring(1, location.length)
      ?.split?.("&")
      ?.reduce?.((acc, item) => {
        const [key, value] = item.split("=");
        acc[key] = value;
        return acc;
      }, {});

  useEffect(() => {
    document.title = "Transaction | Otodyduck";

    dispatch(statusOrders("loading"));

    orders
      .all()
      .then((res) => {
        dispatch(fetchOrders(res.data));
      })
      .catch((err) => {
        dispatch(messageOrder(err?.response?.data?.message ?? "Error"));
      });
  }, [dispatch]);

  return (
    <PageWrapper>
      <Sidebar />
      {ORDERS.status === "loading" && <Loading />}
      {ORDERS.status === "error" && ORDERS.message}
      {ORDERS.status === "ok" &&
        (params.order_id ? (
          <Congratulation data={ORDERS.data[params.order_id]} />
        ) : ORDERS.total > 0 ? (
          <Transaction data={ORDERS.data} />
        ) : (
          <EmptyState />
        ))}
    </PageWrapper>
  );
};

export default withRouter(TransactionPage);
