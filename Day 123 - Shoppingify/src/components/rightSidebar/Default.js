import React from "react";
import bottle from "../../assets/bottle.svg";

const Default = () => {
  return (
    <div>
      <div className="px-6 h-full">
        {/* Purple section */}
        <div className="bg-cPurple-main flex justify-center mt-4 mb-6 rounded-lg h-1/5">
          <img
            style={{ transform: "translateY(-20px)" }}
            className=""
            src={bottle}
            alt=""
          />
          <div className="flex flex-col justify-center items-start ml-4">
            <h1 className="text-white">Don't find what you need?</h1>
            <button className="bg-white text-xs px-4 py-1 rounded-lg mt-2">
              Add item
            </button>
          </div>
        </div>

        {/* List */}
        <div style={{ maxHeight: "700px" }} className="overflow-scroll ">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl">Shopping list</h1>
            <span class="material-icons">create</span>
          </div>
          <h3 className="text-sm text-cGray-standard">Fruit and vegetables</h3>
          <div>
            {/* @todo add hover effect */}
            {/* Single element (with buttons to show on hover) */}
            <div className="flex justify-between items-center my-4">
              <h1>Avocado</h1>
              <div className="flex items-center bg-white pr-1 rounded-lg">
                <div className="bg-cYellow-main mr-2 p-1 rounded-lg">
                  <span class="material-icons text-sm text-white">
                    delete_outline
                  </span>
                </div>
                <button className="text-cYellow-main">-</button>
                <div className="border-2 mx-2 border-cYellow-main text-cYellow-main rounded-lg text-xs px-2">
                  3 pcs
                </div>
                <button className="text-cYellow-main">+</button>
              </div>
            </div>
            {/* Plain single element */}
            <div className="flex justify-between items-center my-4">
              <h1>Salmon 1kg</h1>
              <div className="border-2 mx-2 border-cYellow-main text-cYellow-main rounded-lg text-xs px-2">
                3 pcs
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input section */}
      <div className="h-32 w-full bg-white flex flex-col justify-center px-4 absolute bottom-0">
        <div class="bg-white shadow flex text-sm border-2 border-cYellow-main rounded-lg">
          <input
            class="w-full rounded p-2 px-3 outline-none"
            type="text"
            placeholder="Enter a name"
          />
          <button class="bg-cYellow-main hover:bg-yellow-600 rounded text-white p-2 pl-4 pr-4">
            <p class="font-semibold text-xs">Save</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Default;
