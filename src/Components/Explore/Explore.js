import React from "react";
import useWatchData from "../DataLoads/watchData";

import "./explore.css";
import Product from "../Products/Product";
const Explore = () => {
  const [watches] = useWatchData();
  return (
    // data display in cards
    <Product data={watches} padding={"5em"}></Product>
  );
};

export default Explore;
