import React from 'react'
import './FoodDisplay.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Recommended Items for you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                if(category==="All" || category===item.category){/*yeh ek line sey sare filter hokar arhae hai */
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                }
                
            })}
        </div>
    </div>
  )
}

export default FoodDisplay