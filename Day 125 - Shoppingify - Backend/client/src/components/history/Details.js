import React from "react";

const Details = ({ setDefaultMode, setDetailsMode }) => {
  return (
    <div>
      {/* Back */}
      <div className="flex items-center text-sm text-cYellow-main">
        <span class="material-icons text-sm">keyboard_backspace</span>
        <button
          onClick={() => {
            setDefaultMode(true);
            setDetailsMode(false);
          }}
        >
          back
        </button>
      </div>

      {/* Name */}
      <h1 className="text-2xl">Eero's farewell party</h1>

      {/* Date */}
      <div className="text-sm flex items-center">
        <span className="material-icons text-cGray-standard">event_note</span>
        <span className="ml-2 text-cGray-standard">Mon 27.8.2020</span>
      </div>

      {/* Title */}
      <span>Cookies</span>

      {/* Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
        <div className="bg-white flex justify-between items-center p-1 px-3 shadow rounded-lg mb-2">
          <h1>Avocado</h1>
          <span className="text-cYellow-main">3pcs</span>
        </div>
        <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
          <h1>Banana</h1>
          <span className="text-cYellow-main">3pcs</span>
        </div>
        <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
          <h1>Bunch of carrots</h1>
          <span className="text-cYellow-main">3pcs</span>
        </div>
        <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
          <h1>Chicken 1kg</h1>
          <span className="text-cYellow-main">3pcs</span>
        </div>
        <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
          <h1>Pre-cooked corn 450g</h1>
          <span className="text-cYellow-main">3pcs</span>
        </div>
        <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
          <h1>Mandaring Nadorcott</h1>
          <span className="text-cYellow-main">3pcs</span>
        </div>
        <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
          <h1>Piele De Sapo Melon</h1>
          <span className="text-cYellow-main">3pcs</span>
        </div>
        <div className="bg-white flex justify-between p-1 px-3 shadow rounded-lg mb-2">
          <h1>Watermelon</h1>
          <span className="text-cYellow-main">3pcs</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
