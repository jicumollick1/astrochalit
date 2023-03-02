import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Report = ({
  img,
  title,
  description,
  price,
  btnTitle,
  btnBg,
  bgColor,
  color,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="mb-5"
      style={{ background: bgColor, color: color, borderRadius: "43px" }}
    >
      <div className="row p-3 p-md-4">
        <div className="col-md-4">
          <img src={img} className="img-fluid p-5" alt=""></img>
        </div>
        <div className="col-md-8">
          <h2>{title}</h2>
          <p className="my-5 col-md-9" style={{ lineHeight: "2rem" }}>
            {description}
          </p>
          <h2>
            <span style={{ textDecoration: "line-through", color: "#939395" }}>
              ₹ {parseInt(price) + 100}
            </span>{" "}
            <span className="ms-4">₹ {price}</span>
          </h2>
          <button
            className="mt-5 text-light px-5 py-2 fw-bold"
            style={{ background: btnBg, borderRadius: "10px", border: "none" }}
            onClick={() => navigate(`/payment/${title.toLowerCase()}`)}
          >
            {btnTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Report;
