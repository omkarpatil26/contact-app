import React from "react";

const ContactCard = (props) => {
  const { id, name, mail } = props.contact;
  return (
    <div className="item">
      <div className="content">
        <div className="header">{name}</div>
        <div>{mail}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
      ></i>
    </div>
  );
};
export default ContactCard;
