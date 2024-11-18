/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ name, age, role }) => {
  return (
    <div className="w-[300px] border-2 border-white mt-[20px] pl-[10px]">
      <h1>Name:{name}</h1>
      <h2>Age:{age}</h2>
      <h2>Role:{role}</h2>
    </div>
  );
};

export default Card;
