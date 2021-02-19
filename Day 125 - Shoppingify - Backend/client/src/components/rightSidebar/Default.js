import React, { useState } from "react";
import bottle from "../../assets/bottle.svg";
import Modal from "./Modal";
import "../../app.css";

const Default = ({ setAddItemMode, setDefaultMode, editMode }) => {
  const [showModal, setShowModal] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-cYellow-bg min-h-full">
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
            <button
              onClick={() => {
                setAddItemMode(true);
                setDefaultMode(false);
              }}
              className="bg-white text-xs px-4 py-1 rounded-lg mt-2"
            >
              Add item
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl">Shopping list</h1>
          <button className="material-icons">create</button>
        </div>

        {/* List */}
        <div
          style={{ maxHeight: "700px" }}
          className="max-h-full overflow-scroll "
        >
          <h3 className="text-sm text-cGray-standard">Fruit and vegetables</h3>
          <div>
            {/* Plain single element */}
            <div className="flex justify-between items-center my-4">
              <h1>Salmon 1kg</h1>
              {!hovered ? (
                /* Plain single element */
                <div
                  onMouseEnter={() => setHovered(true)}
                  className="border-2 mx-2 border-cYellow-main text-cYellow-main rounded-lg text-xs px-2"
                >
                  3 pcs
                </div>
              ) : (
                /* Single element (with buttons to show on hover) */
                <div
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className="flex items-center bg-white pr-1 rounded-lg"
                >
                  <div className="bg-cYellow-main mr-2 p-1 rounded-lg">
                    <button className="material-icons text-sm text-white">
                      delete_outline
                    </button>
                  </div>
                  <button className="text-cYellow-main">-</button>
                  <div className="border-2 mx-2 border-cYellow-main text-cYellow-main rounded-lg text-xs px-2">
                    3 pcs
                  </div>
                  <button className="text-cYellow-main">+</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      {editMode ? (
        // Edit mode
        <div className="h-32 w-full bg-white flex flex-col justify-center px-4 absolute bottom-0">
          <div className="flex justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="w-24 bg-gray-100 hover:bg-cGray-standard hover:text-white text-black rounded p-2 py-3 pl-4 pr-4"
            >
              <p className="font-semibold text-xs">cancel</p>
            </button>

            <button className="ml-4 w-24 text-xs bg-cBlue-main hover:bg-blue-600 rounded text-white p-2 py-3 pl-4 pr-4">
              <p className="font-semibold text-xs">Complete</p>
            </button>
          </div>
        </div>
      ) : (
        // New inputs
        <div className="h-32 w-full bg-white flex flex-col justify-center px-4 absolute bottom-0">
          <div className="bg-white shadow flex text-sm border-2 border-cYellow-main rounded-lg">
            <input
              className="w-full rounded p-2 px-3 outline-none"
              type="text"
              placeholder="Enter a name"
            />
            <button className="w-20 bg-cYellow-main hover:bg-yellow-600 rounded text-white p-2 pl-4 pr-4">
              <p className="font-semibold text-xs">Save</p>
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Default;
