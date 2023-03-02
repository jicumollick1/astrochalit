import React from "react";

const ExpectCard = ({ service }) => {
  return (
    <div
      className={`row col-10 mt-5 ${service.id % 2 === 0 ? "offset-1" : ""}`}
      style={{
        background: "#25262B",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "25px",
      }}
    >
      <div
        className="col col-1 text-center"
        style={{
          background: "#F0EAD5",
          borderRadius: "20px 0px 0px 20px",
        }}
      >
        <p className="h4 mt-4">{service.id}</p>
      </div>
      <div className="col col-11 text-light p-4 pe-0">
        <div className="row">
          <div className="col-10">
            <h3>{service.title}</h3>
            <p
              className="mt-4 w-md-75"
              style={{ color: "rgba(255, 255, 255, 0.75)" }}
            >
              {service.description}
            </p>
          </div>
          <div className="col-2 ">
            <img src={service.img} className="img-fluid " alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpectCard;
