import {
  TAddToCart,
  TRemoveProductFromCart,
  TSetItemAmount,
} from "./actionTypes";
import { Action, State } from "./cartContext";

export function cartReducer(state: State, action: Action) {
  switch (action.type) {
    case TAddToCart: {
      const { product, amount } = action.payload;
      const productExists = state.items?.find(
        (item) => item.product.id === product.id
      );

      let newState: State = {
        items: [],
        count: 0,
        totalPrice: 0,
      };

      if (!productExists && state.items.length === 0) {
        const newItem = { product, amount, price: amount * product.price };
        newState = { ...state, items: [newItem] };
      } else if (!productExists) {
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
          price: product.price * newAmount,
        };

        newState = {
          ...state,
          items: [...cartWithoutCurrentProduct, itemUpdated],
        };
      }

      // Calculate the amount of items in the cart
      newState.count += amount;
      // Calculate the cart's total price
      newState.totalPrice += product.price * amount;

      return {
        ...newState,
      };
    }

    case TSetItemAmount: {
      const { product, amount } = action.payload;

      const itemUpdated = {
        product,
        amount,
        price: product.price * amount,
      };

      const itemIndex = state.items.findIndex(
        (item) => item.product.id === product.id
      );
      const cartWithoutCurrentProduct = state.items?.filter(
        (item) => item.product.id !== product.id
      );
      // Insert item at the same index
      cartWithoutCurrentProduct.splice(itemIndex, 0, itemUpdated);

      const newState = {
        ...state,
        items: cartWithoutCurrentProduct,
      };

      newState.count = countCartItems(newState);
      newState.totalPrice = getCartTotalPrice(newState);

      return newState;
    }

    case TRemoveProductFromCart: {
      const { product, amount, price } = action.payload;

      const cartWithoutCurrentProduct = state.items?.filter(
        (item) => item.product.id !== product.id
      );

      const newState: State = {
        ...state,
        count: state.count - amount,
        totalPrice: state.totalPrice - price,
        items: [...cartWithoutCurrentProduct],
      };

      return newState;
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function countCartItems(state: State) {
  return state.items.map((item) => item.amount).reduce((a, b) => a + b, 0);
}

function getCartTotalPrice(state: State) {
  return state.items.map((item) => item.price).reduce((a, b) => a + b, 0);
}
