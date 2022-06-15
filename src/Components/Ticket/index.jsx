import React from "react";
import "./index.scss";

const Ticket = (props) => {
  const { content, type } = props;

  return (
    <button className={`ticket-label ${content} ${type}`}>{content}</button>
  );
};

export default Ticket;
