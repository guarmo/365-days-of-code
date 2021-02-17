import React from "react";
import Default from "./Default";
import Desc from "./Desc";
import Form from "./Form";

const RightSidebar = () => {
  return (
    <div
      style={{ width: "30%" }}
      className="bg-cYellow-bg min-h-full flex flex-col justify-between relative"
    >
      <Default />
      {/* <Desc /> */}
      {/* <Form /> */}
    </div>
  );
};

export default RightSidebar;
