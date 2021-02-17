import React from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/shopping_cart-white.svg";
import assessment from "../assets/assessment.svg";
import replay from "../assets/replay.svg";
import list from "../assets/list.svg";
import BoxPopup from "../components/layout/BoxPopup";

const LeftSidebar = () => {
  return (
    <div
      style={{ width: "5%" }}
      className="min-h-full py-4 flex flex-col items-center justify-between"
    >
      <img src={logo} alt="" />
      <div>
        <div className="relative my-6 hover-trigger">
          <BoxPopup text={"items"} />
          <img className="w-6 h-6 cursor-pointer" src={list} alt="" />
        </div>
        <div className="relative my-6 hover-trigger">
          <BoxPopup text={"history"} />
          <img className="w-6 h-6 cursor-pointer" src={replay} alt="" />
        </div>
        <div className="relative my-6 hover-trigger">
          <BoxPopup text={"stats"} />
          <img className="w-6 h-6 cursor-pointer" src={assessment} alt="" />
        </div>
      </div>
      <div className="bg-cYellow-main p-2 rounded-full relative">
        <img src={cart} alt="" />
        <div>
          <span
            style={{ fontSize: "12px", top: "-5px", right: "-5px" }}
            className="bg-cRed-main text-white px-1 rounded-sm absolute"
          >
            3
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
