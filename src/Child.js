// import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Child = () => {
  const location = useLocation()
  return (
    <>
      <h1>Child</h1>
      <h1>hi my name is {location.state.name}</h1>
    </>
  );
};

export default Child;
