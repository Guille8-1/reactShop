import { useContext } from "react";
import { CartContex } from "../context/cart.jsx";

export const useCart = () => {
    const cart = useContext(CartContex)
    if (cart === undefined) {
        throw new Error("Cart Vacio")
    }
    return cart
}