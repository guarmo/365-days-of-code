import React from "react";

const Items = () => {
  return (
    <div
      style={{ width: "65%" }}
      className="bg-gray-100 py-4 px-16 overflow-scroll"
    >
      {/* Header */}
      <header className="flex justify-between items-start mb-4">
        <h1 style={{ maxWidth: "65%" }} className="text-2xl">
          <span className="text-cYellow-main font-bold">Shoppingify</span>{" "}
          allows you to take your shopping list wherever you go{" "}
        </h1>

        {/* Input */}
        <div className="shadow flex w-64">
          <span className="flex justify-end items-center text-gray-500 p-2">
            <i className="material-icons text-xl">search</i>
          </span>
          <input
            className="w-full rounded p-2 outline-none placeholder-cGray-extralight text-xs"
            type="text"
            placeholder="Search item"
          />
        </div>
      </header>

      {/* Main */}
      <main>
        <div className="my-4">
          <h1 className="mb-2">Fruits and vegetables</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Banana</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Bunch of carrots</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Chicken 1kg</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Pre-cooked corn 450g</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Mandaring Nadorcott</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Piele De Sapo Melon</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Watermelon</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
          </div>
        </div>
        <div className="my-4">
          <h1 className="mb-2">Meat and fish</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
          </div>
        </div>
        <div className="my-4">
          <h1 className="mb-2">Fruits and vegetables</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
          </div>
        </div>
        <div className="my-4">
          <h1 className="mb-2">Fruits and vegetables</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
          </div>
        </div>
        <div className="my-4">
          <h1 className="mb-2">Fruits and vegetables</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
          </div>
        </div>
        <div className="my-4">
          <h1 className="mb-2">Fruits and vegetables</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
            <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
              <h1>Avocado</h1>
              <span className="text-cGray-light material-icons">add</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Items;
