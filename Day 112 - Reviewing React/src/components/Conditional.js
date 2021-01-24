import React from "react";

const Conditional = (props) => {
  return props.isLoading ? <h1>Loading...</h1> : <h1>Cool stuff</h1>;
};

export default Conditional;
