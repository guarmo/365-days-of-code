import React, { useState } from "react";
import Default from "./Default";
import Details from "./Details";

const History = () => {
  const [defaultMode, setDefaultMode] = useState(true);
  const [detailsMode, setDetailsMode] = useState(false);
  return (
    <div
      style={{ width: "65%" }}
      className="bg-gray-100 py-4 px-16 overflow-scroll"
    >
      {defaultMode && (
        <Default
          setDefaultMode={setDefaultMode}
          setDetailsMode={setDetailsMode}
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

export default History;
