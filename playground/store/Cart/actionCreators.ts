import { TAddToCart, TRemoveProductFromCart, TSetItemAmount } from "./actionTypes";

export const addToCart = (payload: {product: TProduct, amount: number}) => ({
    type: TAddToCart,
    payload
})

export const setItemAmount = (payload: {product: TProduct, amount: number}) => ({
    type: TSetItemAmount,
    payload
})

export const removeProductFromCart = (
    payload: {product: TProduct, amount: number, price: number}
) => ({
    type: TRemoveProductFromCart,
    payload
})
    
    

    
