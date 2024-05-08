import React, { useState } from "react";

const Count = ({ text }) => {
  console.log("Count rendering");

  return <div>count {text}</div>;
};

export default React.memo(Count);
