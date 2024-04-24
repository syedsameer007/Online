import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
/* yeh file kyu bhanaya? jo bhi cart se add karoge voh sara ka sara data yaha manage hoga */
export const StoreContext= createContext(null)

const StoreContextProvider =(props)=>{
    const [cartItems,setCartItems]=useState({});

    const addToCart = (itemId)=>{
        /*if the user will add first time into cart this statement will executed*/ 
        /*basically first this if statement will create a new entry for our food product, if that product id is not available in cart item then only,  if that product id is available in cart item then this else wll increase the value by 1  */
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1})) /*here the itemId will be number of quantity */
        }
        else{/*if any product is already available and quantity is 1 then in that case we will increase that */
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    /* uppar addto cart logic create kiya, similarly creating remove from cart */
   /*this removeFromCart functionality decrease the value by 1  */
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    //removed this and added cart total
    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])

    const getTotalCartAmount=()=>{ /*this is a function which returns  calulates total amount in  cart */
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){/*extra checking samjho */
                let itemInfo = food_list.find((product)=>product._id === item)/*if our product item is matching our item which is nothing but key value of items then it means this product is available in cart*/
                totalAmount += itemInfo.price* cartItems[item];
            }     
        }
        return totalAmount;
    }

    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
