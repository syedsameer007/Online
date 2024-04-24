import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  
    const {cartItems,food_list,removeFromCart, getTotalCartAmount}= useContext(StoreContext)

    const navigate = useNavigate();

    return (
    <div className='cart'>
        <div className="cart-items">
            <div className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item,index)=>{/* isse one by one list ayega food items ka */
            if(cartItems[item._id]>0){/*if our cart items contain 1 item with product id  in that case we will return 1 div*/
                return(
                    <div>
                         <div className='cart-items-title cart-items-item'>
                        {/* yeh line se jo bhi tum cart meh add karoge voh cart meh dikhe gi, aur yeh uppar wale if logic se hi araha hai*/}
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p>₹{item.price}</p>
                        <p>{cartItems[item._id]}</p>
                        <p>₹{item.price*cartItems[item._id]}</p>
                        <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>{/*issey X par click karoge tho item remove hoga and also ek cursor pointer laga diya .css file meh*/}
                    </div>
                    <hr /> {/* isse horizontal line ayega rows par voh bhi sub koo */}
                    </div>
                )
            }
            })}
        </div>
        <div className="cart-bottom">
            <div className="cart-total">
                <h2>Cart Totals</h2>
                <div>
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>₹{getTotalCartAmount()}</p>{/*storeContext meh calculate kiye the cart ka total amount*/}
                    </div>
                    <hr />
                    <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>₹{getTotalCartAmount()===0?0:100}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                    <b>Total</b>
                    <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+100}</b> {/*same here also cart ka function call karum and adding delivery price too*/}
                    </div>
                </div>
                <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cart-promocode">
                <div>
                    <p>If you have a promo code, Enter it here</p>
                    <div className='cart-promocode-input'>
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart