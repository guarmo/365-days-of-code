import React from "react";

const Default = ({ setDefaultMode, setDetailsMode }) => {
  return (
    <>
      <h1 className="text-2xl">Shopping history</h1>

      <div className="mt-4">
        <span className="text-sm">August 2020</span>
        <div className="flex p-3 px-2 bg-white shadow rounded-lg justify-between text-sm mt-2 mb-4">
          <span className="text-base">Grocery List</span>
          <div className="flex items-center">
            <span className="material-icons text-cGray-standard">
              event_note
            </span>
            <span className="ml-2 text-cGray-standard">Mon 27.8.2020</span>
            <div className="mx-4 border-2 border-cBlue-main text-cBlue-main px-1 rounded-lg">
              completed
            </div>
            <button
              onClick={() => {
                setDefaultMode(false);
                setDetailsMode(true);
              }}
              className="material-icons text-cYellow-main"
            >
              keyboard_arrow_right
            </button>
          </div>
        </div>

        <div className="flex p-3 px-2 bg-white shadow rounded-lg justify-between text-sm mt-2 mb-4">
          <span className="text-base">Eero's farewell party</span>
          <div className="flex items-center">
            <span className="material-icons text-cGray-standard">
              event_note
            </span>
            <span className="ml-2 text-cGray-standard">Mon 27.8.2020</span>
            <div
              style={{ width: "80.6px" }}
              className="mx-4 border-2 border-cRed-main text-cRed-main px-1 rounded-lg text-center"
            >
              cancelled
            </div>
            <button
              onClick={() => {
                setDefaultMode(false);
                setDetailsMode(true);
              }}
              className="material-icons text-cYellow-main"
            >
              keyboard_arrow_right
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Default;
