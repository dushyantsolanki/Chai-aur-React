import React, { useContext } from "react";

import { AddToCartContext } from "../../Contexts/AddToCartContext";

function Depth() {
  const { item } = useContext(AddToCartContext);
  return <div>{item}</div>;
}

export default Depth;
