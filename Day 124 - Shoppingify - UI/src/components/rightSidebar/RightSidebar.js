import React from "react";
import Default from "./Default";
import Desc from "./Desc";
import Form from "./Form";

const RightSidebar = () => {
  return (
    <div
      style={{ width: "30%" }}
      className="flex flex-col justify-between relative"
    >
      {/* Display conditionally based on state */}
      <Default />
      {/* <Desc /> */}
      {/* <Form /> */}
    </div>
  );
};

export default RightSidebar;
