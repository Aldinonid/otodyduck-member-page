import React from "react";
import { Link } from "react-router-dom";

import formatThousands from "helpers/formatThousands";
import formatDate from "helpers/formatDate";

import { Wrapper, CourseProgress } from "./Transaction";
import { Gap } from "components";

const Transaction = ({ data }) => {
  return (
    <Wrapper>
      <h2 className="title">My Transaction</h2>
      <p className="sub-chapter">Keep on track what you've invested</p>
      <Gap height={20} />
      {Object.values(data)?.map?.((item, index) => {
        return (
          <CourseProgress key={index}>
            <img
              src={item?.metadata?.course_thumbnail}
              alt={item.metadata.course_name}
            />
            <div className="col">
              <p className="title-course">{item.metadata?.course_name}</p>
              <p className="sub-title">{item.metadata?.course_level}</p>
            </div>
            <h6>Rp. {formatThousands(item?.metadata?.course_price ?? 0)}</h6>
            <h6>{item?.created_at ? formatDate(item?.created_at) : "-"}</h6>

            {item?.status === "pending" && (
              <Link to={`/joined/${item?.metadata?.course_slug}`}>
                Pay Course
              </Link>
            )}

            {item?.status === "success" && (
              <Link
                to={`/courses/${item?.metadata?.course_slug}`}
                className="secondary"
              >
                Watch Course
              </Link>
            )}
          </CourseProgress>
        );
      })}
    </Wrapper>
  );
};

export default Transaction;
