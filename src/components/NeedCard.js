import React from "react";

const NeedCard = ({ img, title, description }) => {
  return (
    <div
      className="p-4"
      style={{ background: "#25262B", borderRadius: "10px" }}
    >
      <img src={img} className="img-fluid p-4" alt=""></img>
      <h3 className="my-4" style={{ color: "#E3B773", lineHeight: "40px" }}>
        {title}
      </h3>
      <p className="text-light" style={{ lineHeight: "30px" }}>
        Vedic Kundali can provide insights into your life story by analyzing the
        positions of the planets and other celestial bodies at the time of your
        birth. Your Vedic Kundali can reveal information about your personality,
        strengths and weaknesses, relationships, career, and other important
        aspects of your life. By understanding the influences of the cosmos on
        your life, you can gain a deeper understanding of yourself and your life
        story
      </p>
    </div>
  );
};

export default NeedCard;
