import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getHistoryLists } from "../../actions/historyList";
import formatDate from "../../utils/formatDate";

const Default = ({
  setDefaultMode,
  setDetailsMode,
  historyList,
  // getHistoryLists,
}) => {
  return (
    <>
      <h1 className="text-2xl">Shopping history</h1>

      <div className="mt-4">
        <span className="text-sm">August 2020</span>
        {historyList &&
          historyList.lists.map((el, index) => (
            <div
              key={index}
              className="flex p-3 px-2 bg-white shadow rounded-lg justify-between text-sm mt-2 mb-4"
            >
              <span className="text-base">{el.name}</span>
              <div className="flex items-center">
                <span className="material-icons text-cGray-standard">
                  event_note
                </span>
                <span className="ml-2 text-cGray-standard">
                  {formatDate(el.date)}
                </span>
                {el.completed && (
                  <div className="mx-4 border-2 border-cBlue-main text-cBlue-main px-1 rounded-lg">
                    completed
                  </div>
                )}
                {el.cancelled && (
                  <div
                    style={{ width: "80.6px" }}
                    className="mx-4 border-2 border-cRed-main text-cRed-main px-1 rounded-lg text-center"
                  >
                    cancelled
                  </div>
                )}
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
          ))}
      </div>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   historyList: state.historyList,
// });

export default connect(null, {})(Default);
