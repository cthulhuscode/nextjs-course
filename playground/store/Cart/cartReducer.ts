import { TAddToCart } from "./actionTypes";
import { Action, State } from "./cartContext";

export function cartReducer(state: State, action: Action) {
    switch (action.type) {
      case TAddToCart: {
        return {
          ...state
        };
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  }