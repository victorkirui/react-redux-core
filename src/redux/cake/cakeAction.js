import { BUY_CAKE } from "./actionType";

export const buy_cake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
