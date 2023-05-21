import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer/cartReducer";
import { useEffect } from "react";

const CartContext = createContext();

const getLocalCartData = () =>  {
    let localCartData = localStorage.getItem("cartData")
    if(localCartData === []){
        return [];
    }else {
        return JSON.parse(localCartData)
    }
}

const initialState = {
//   cart: [],
  cart:getLocalCartData(),  
  total_item: "",
  total_price: "",
  shipping_fee: 500,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  //increment and decrement thr product
  const setDecrease = (id) => {
    dispatch({type:"SET_DECREMENT", payload:id})
  }

  const setIncrease = (id) => {
    dispatch({type:"SET_INCREMENT", payload:id})
  }

  //to remove individual item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //USE local storage to sav add to cart data
  useEffect(() => {
    dispatch({type:"CART_TOTAL_ITEM"})
    dispatch({type:"CART_TOTAL_PRICE"})
    localStorage.setItem("cartData",JSON.stringify(state.cart))
  },[state.cart])

  // to clear cart
  const clearCart = () => {
    dispatch({ type:"CLEAR_CART" })
  }


  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setIncrease, setDecrease }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
