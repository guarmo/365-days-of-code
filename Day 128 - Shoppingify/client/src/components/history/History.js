import React, { useState, useEffect } from "react";
import Default from "./Default";
import Details from "./Details";
import { connect } from "react-redux";
import { getHistoryLists } from "../../actions/historyList";

const History = ({ historyList, getHistoryLists }) => {
  const [defaultMode, setDefaultMode] = useState(true);
  const [detailsMode, setDetailsMode] = useState(false);

  useEffect(() => {
    getHistoryLists();
  }, []);

  return (
    <div
      style={{ width: "65%" }}
      className="bg-gray-100 py-4 px-16 overflow-scroll"
    >
      {defaultMode && (
        <Default
          setDefaultMode={setDefaultMode}
          setDetailsMode={setDetailsMode}
          historyList={historyList}
        />
      )}
      {detailsMode && (
        <Details
          setDefaultMode={setDefaultMode}
          setDetailsMode={setDetailsMode}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  historyList: state.historyList,
});

export default connect(mapStateToProps, { getHistoryLists })(History);
