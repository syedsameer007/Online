import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {
    /*now creating a add to cart button */ 
    // const [itemCount,setItemCount]= useState(0) not using this line
    const {cartItems,addToCart, removeFromCart}=useContext(StoreContext)/* with is line we will get the access of cartItems,addToCart, removeFromCart */
    return (
    <div className='food-item'>
       <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        {/*here we will check if our food item count is 0 in that case i will add a add button, if count is greater than1 then i will provide 1 counter */ 
      /*removed  !itemCount below and replaced with */
      !cartItems[id]        /*setItemCount(prev=>prev+1) removed this */
      ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
        : <div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
             </div> /*uppar ka jo scean chala idhar tak it is- add karoge tho ek plus hoga aur minus karoge tho minus hoga*/ 
        }
        </div> 
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">₹{price}</p>
        </div>
    </div>
  )
}

export default FoodItem