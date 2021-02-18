import React from "react";
import Default from "./Default";
import Details from "./Details";

const History = () => {
  return (
    <div
      style={{ width: "65%" }}
      className="bg-gray-100 py-4 px-16 overflow-scroll"
    >
      <Default />
      {/* <Details /> */}
    </div>
  );
};

export default History;
