import React, { useState } from "react";
import { connect } from "react-redux";
import { buy_cake } from "../redux/cake/cakeAction";

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buy_cake(number)}>Buy Cake</button>
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
    buy_cake: (number) => dispatch(buy_cake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
