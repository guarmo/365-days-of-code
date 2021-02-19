import React from "react";

const Form = ({ setDescMode, setDefaultMode, setAddItemMode }) => {
  return (
    <form className="bg-gray-100 min-h-full p-4 flex flex-col justify-between">
      <div>
        <h1>Add a new item</h1>
        <div className="my-6">
          <label
            className="block mb-1 text-sm"
            htmlFor="forms-labelOverInputCode"
          >
            Name
          </label>
          <input
            className="w-full h-12 px-3 text-cgGray-standard text-sm placeholder-gray-600 border rounded-lg focus:outline-none"
            type="text"
            placeholder="Enter a name"
            id="forms-labelOverInputCode"
          />
        </div>
        <div className="my-6">
          <label
            className="block mb-1 text-sm"
            htmlFor="forms-labelOverInputCode"
          >
            Note (optional)
          </label>
          <textarea
            className="w-full h-40 px-3 text-cgGray-standard text-sm placeholder-gray-600 border rounded-lg focus:outline-none"
            type="text"
            placeholder="Enter a note"
            id="forms-labelOverInputCode"
          />
        </div>
        <div className="my-6">
          <label
            className="block mb-1 text-sm"
            htmlFor="forms-labelOverInputCode"
          >
            Image (optional)
          </label>
          <input
            className="w-full h-12 px-3 text-cgGray-standard text-sm placeholder-gray-600 border rounded-lg focus:outline-none"
            type="text"
            placeholder="Enter a url"
            id="forms-labelOverInputCode"
          />
        </div>

        <div className="relative inline-block w-full text-gray-700 my-6">
          <select
            className="w-full h-12 pl-3 pr-6 text-sm placeholder-cGray-standard border rounded-lg appearance-none focus:shadow-outline"
            placeholder="Regular input"
          >
            <option disabled defaultValue>
              Enter a category
            </option>
            <option>A regular sized select input</option>
            <option>Another option</option>
            <option>And one more</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => {
            setAddItemMode(false);
            setDefaultMode(true);
          }}
          className="w-24 bg-gray-100 hover:bg-cGray-standard hover:text-white text-black rounded p-2 py-3 pl-4 pr-4"
        >
          <p className="font-semibold text-xs">Cancel</p>
        </button>

        <button
          onClick={() => {
            setAddItemMode(false);
            setDescMode(true);
          }}
          className="ml-4 w-24 bg-cYellow-main hover:bg-yellow-600 rounded text-white p-2 py-3 pl-4 pr-4"
        >
          <p className="font-semibold text-xs">Save</p>
        </button>
      </div>
    </form>
  );
};

export default Form;
