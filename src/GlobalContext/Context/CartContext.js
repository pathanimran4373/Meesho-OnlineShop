import { useEffect, useReducer } from 'react';
import { createContext } from 'react'
import reducer from '../Reducer/CartReducer'

export const cartContextForCartPage = createContext();
// stor data in locale storage

const getLocalCartData = () => {
  let localeCartData = localStorage.getItem("cartData");
  if(localeCartData === []){
    return [];
  }else{
    return JSON.parse(localeCartData);
  }
};

const initialState = {
cart:[],
// cart: getLocalCartData(),
totalItem:"",
totalAmount: "",
shippingFees:100,
};

const CartContext = ({children}) => {

const [state,dispatch] =useReducer (reducer,initialState);

const addToCart =(id,color,amount,product)=>{
dispatch({type:"ADD_PRODUCT_IN_CART", payload:{id,color,amount,product}})
};

// save cart data in local storage
useEffect(()=>{
  dispatch({type:"CART_TOTAL_ITEM"});
  dispatch({type:"CART_TOTAL_ITEM_PRICE"});
  localStorage.setItem("cartData",JSON.stringify(state.cart));

},[state.cart]);

const removeItem = (id) =>{
  dispatch({type: "REMOVE_ITEM",payload:id})
}

const clearCart = ()=>{
  dispatch({type:"CLEAR_CART"});
}

// increment and decrement function
const setDecrement = (id)=>{
  dispatch({type:"SET_DECREMENT", payload:id});
}
const setIncrement = (id) =>{
  dispatch({type: "SET_INCREMENT", payload:id});
}

  return (
    <cartContextForCartPage.Provider value={{...state,addToCart,removeItem,clearCart,setDecrement,setIncrement}}>
      {children}
    </cartContextForCartPage.Provider>
  )
}

export default CartContext
