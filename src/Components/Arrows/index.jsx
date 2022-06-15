import React from "react";
import "./index.scss";

const Arrows = (props) => {
  const { onClick, prev, next } = props;

  return (
    <>
      {prev && next ? (
        <>
          <img className="arrows__prev" src={prev} alt="prev-button" />
          <img className="arrows__next" src={next} alt="next-button" />
        </>
      ) : (
        <div className="arrows" onClick={onClick}>
          <span className="prev"></span>
        </div>
      )}
    </>
  );
};

export default Arrows;
