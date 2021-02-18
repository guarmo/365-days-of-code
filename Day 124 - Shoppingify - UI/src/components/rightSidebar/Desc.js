import React from "react";

const Desc = () => {
  return (
    <div className="p-4 flex flex-col justify-between min-h-full">
      <div>
        <div className="flex items-center text-sm text-cYellow-main">
          <span class="material-icons text-sm">keyboard_backspace</span>
          <span>back</span>
        </div>

        <img
          style={{ maxHeight: "13rem" }}
          className="w-full h-auto rounded-xl my-8"
          src="https://afm-6b83.kxcdn.com/wp-content/uploads/2016/11/avocado-hub.jpg"
          alt=""
        />

        <div className="my-8">
          <span className="text-xs text-cGray-standard">name</span>
          <h1>Avocado</h1>
        </div>

        <div className="my-8">
          <span className="text-xs text-cGray-standard">category</span>
          <h1>Fruit and vegetables</h1>
        </div>

        <div className="my-8">
          <span className="text-xs text-cGray-standard">note</span>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, fugiat
            cum veritatis fugit laboriosam magnam illum unde deleniti reiciendis
            inventore.
          </h1>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button class="w-24 bg-gray-100 hover:bg-cGray-standard hover:text-white text-black rounded p-2 py-3 pl-4 pr-4">
          <p class="font-semibold text-xs">delete</p>
        </button>

        <button class="ml-4 w-24 text-xs bg-cYellow-main hover:bg-yellow-600 rounded text-white p-2 py-3 pl-4 pr-4">
          <p class="font-semibold text-xs">Add to list</p>
        </button>
      </div>
    </div>
  );
};

export default Desc;
