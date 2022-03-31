import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buy_cake } from "../redux/cake/cakeAction";

const HooksCakeContainer = () => {
  let numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      USe Selector Hook
      <h2>Number of cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(buy_cake())}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
