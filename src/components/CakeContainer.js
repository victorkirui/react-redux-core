import React from "react";
import { connect } from "react-redux";
import { buy_cake } from "../redux/cake/cakeAction";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buy_cake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buy_cake: () => dispatch(buy_cake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
