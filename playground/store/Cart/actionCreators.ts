import { TAddToCart } from "./actionTypes";

export const addToCart = (payload: {product: TProduct, amount: number}) => {    
    return {
        type: TAddToCart,
        payload
    }
}