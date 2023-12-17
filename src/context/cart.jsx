import { createContext, useReducer, useState } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart";
export const CartContex = createContext()





export function CartProvider ({children}) {
    
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({
            type: 'ADD_TO_CART',
            payload: product
        }
    )
    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })
    const clearCart = () => dispatch({
        type: 'CLEAR_CART',
    })
      
    return (
        <CartContex.Provider value={{cart: state, addToCart, clearCart, removeFromCart}}>
            {children}
        </CartContex.Provider>
    )
}