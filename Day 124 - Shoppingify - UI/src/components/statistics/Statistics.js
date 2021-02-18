import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Modal from "./Modal";

const Statistics = () => {
  const [showModal, setShowModal] = useState(false);

  const state = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Items",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#FFFFFF",
        borderColor: "#F9A109",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 12, 30],
      },
    ],
  };

  return (
    <div
      style={{ width: "65%" }}
      className="bg-gray-100 py-4 px-16 overflow-scroll"
    >
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Col 1 */}
        <div>
          <h1 className="text-2xl mb-6">Top items</h1>
          {/* Bars */}
          <div>
            <div>
              {/* Group */}
              <div>
                <div className="w-full flex justify-between text-sm">
                  <span>Banana</span>
                  <span>12%</span>
                </div>
                {/* Progress bar */}
                <div class="relative pt-1">
                  <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-cGray-light">
                    <div
                      style={{ width: "12%" }}
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cYellow-main"
                    ></div>
                  </div>
                </div>
              </div>

              {/* Group */}
              <div>
                <div className="w-full flex justify-between text-sm">
                  <span>Rice</span>
                  <span>10%</span>
                </div>
                {/* Progress bar */}
                <div class="relative pt-1">
                  <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-cGray-light">
                    <div
                      style={{ width: "10%" }}
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cYellow-main"
                    ></div>
                  </div>
                </div>
              </div>

              {/* Group */}
              <div>
                <div className="w-full flex justify-between text-sm">
                  <span>Chicken 1kg</span>
                  <span>8%</span>
                </div>
                {/* Progress bar */}
                <div class="relative pt-1">
                  <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-cGray-light">
                    <div
                      style={{ width: "8%" }}
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cYellow-main"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h1 className="text-2xl mb-6">Top Categories</h1>
          {/* Bars */}
          <div>
            <div>
              {/* Group */}
              <div>
                <div className="w-full flex justify-between text-sm">
                  <span>Fruit and vegetables</span>
                  <span>23%</span>
                </div>
                {/* Progress bar */}
                <div class="relative pt-1">
                  <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-cGray-light">
                    <div
                      style={{ width: "23%" }}
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cBlue-main"
                    ></div>
                  </div>
                </div>
              </div>

              {/* Group */}
              <div>
                <div className="w-full flex justify-between text-sm">
                  <span>Meat and fish</span>
                  <span>14%</span>
                </div>
                {/* Progress bar */}
                <div class="relative pt-1">
                  <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-cGray-light">
                    <div
                      style={{ width: "14%" }}
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cBlue-main"
                    ></div>
                  </div>
                </div>
              </div>

              {/* Group */}
              <div>
                <div className="w-full flex justify-between text-sm">
                  <span>Pets</span>
                  <span>11%</span>
                </div>
                {/* Progress bar */}
                <div class="relative pt-1">
                  <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-cGray-light">
                    <div
                      style={{ width: "11%" }}
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cBlue-main"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className="">
        <h1 className="text-2xl my-6">Monthly Summary</h1>
        <div>
          <Line
            data={state}
            options={{
              title: {
                display: false,
              },
              legend: {
                display: true,
                position: "bottom",
              },
            }}
          />
        </div>
      </div>

      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Statistics;
