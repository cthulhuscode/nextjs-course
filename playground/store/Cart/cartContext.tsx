import { ReactNode, createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";

type CartProviderProps = { children: ReactNode };
export type Action = { type: string; payload: any | undefined };
type Dispatch = (action: Action) => void;
export type State = {
  items: { product: TProduct; amount: number; price: number }[];
  count: number;
  totalPrice: number;
};

const initialState: State = {
  items: [],
  count: 0,
  totalPrice: 0,
};

const CartStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = { state, dispatch };
  return (
    <CartStateContext.Provider value={value}>
      {children}
    </CartStateContext.Provider>
  )
}

export function useCart(){
  const context = useContext(CartStateContext);

  if(context === undefined)
    throw new Error("useCart must be used withing a CartProvider");

  return context;
}