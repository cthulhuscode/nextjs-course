import { TAddToCart } from "./actionTypes"

export const addToCart = (payload: {id: string, amount: number}) => ({
    type: TAddToCart,
    payload
})
