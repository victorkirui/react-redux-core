import React from "react";
import { buy_icecCream } from "../redux/iceCream/iceCreamAction";
import { connect } from "react-redux";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of icecreams - {props.numOfIceCream} </h2>
      <button onClick={props.buy_icecCream}>Buy icecream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buy_icecCream: () => dispatch(buy_icecCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
