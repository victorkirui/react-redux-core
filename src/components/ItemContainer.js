import React from "react";
import { connect } from "react-redux";
import { buy_cake } from "../redux/cake/cakeAction";
import { buy_icecCream } from "../redux/iceCream/iceCreamAction";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item} </h2>
      <button onClick={props.buyItem}>Buy items</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const initialState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;

  return {
    item: initialState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buy_cake())
    : () => dispatch(buy_icecCream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
