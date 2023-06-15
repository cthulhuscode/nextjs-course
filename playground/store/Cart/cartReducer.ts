import { TAddToCart } from "./actionTypes";
import { Action, State } from "./cartContext";

export function cartReducer(state: State, action: Action) { 

  switch (action.type) {
    case TAddToCart: {
      const { product, amount } = action.payload;      
      const productExists = state.items?.find((item) => item.product.id === product.id);

      let newState: State = {
        items: [],
        count: 0,
        totalPrice: 0
      };
      if(!productExists && state.items.length === 0){
        const newItem = { product, amount, price: amount * product.price };
        newState = { ...state, items: [newItem] };
      }
      else if (!productExists) {
        const newItem = { product, amount, price: amount * product.price };
        newState = { ...state, items: [...state.items, newItem] };
      } else {
        const cartWithoutCurrentProduct = state.items?.filter(
          (item) => item.product.id !== product.id
        );

        const newAmount = productExists.amount + amount;
        const itemUpdated = {
          product,
          amount: newAmount,
          price: product * newAmount,
        };

        newState = { ...state, items: [...cartWithoutCurrentProduct, itemUpdated] };
      }

      // Calculate the amount of items in the cart
      newState.count += amount;
      // Calculate the cart's total price
      newState.totalPrice += product.price * amount;

      return {
        ...newState,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
