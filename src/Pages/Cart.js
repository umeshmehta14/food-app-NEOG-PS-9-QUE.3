import React, { useContext, useState } from 'react'
import { DataContext } from '../Contexts/DataProvider'

const Cart = () => {
  const [click, setClick] = useState(false);
  const {menuItem,RemoveFromCart} = useContext(DataContext);
  const cart = menuItem.filter(({inCart})=> inCart);
  const TotalCost = cart.reduce((acc,{price})=> acc+price,0);
  const TotalTime = cart.reduce((acc,{delivery_time})=> acc+delivery_time,0);
  return (
    <>
    <div className="container">
      {
        cart.length === 0 ? <h1>Your Cart is Empty Select some food</h1> :
        <>
      <h1>Cart</h1>
      <h2>Total Delivery Time:{TotalTime}</h2>
      <h2>Total Price:${click ? TotalCost - 5 : TotalCost}</h2>
      <button className="btn coupon" disabled={click} onClick={()=> setClick(true)}>Apply Coupon</button>
        </>
}
    </div>
    <div className='menu-container'>
      {
        cart.map((item)=> {
          const {id,name, description, image, price,delivery_time} = item;
        return<div className='menu-box'>
        <img src={image} alt="Khana Khaa loo" />
        <p><strong>Name:</strong>{name}</p>
        <p><strong>Description:</strong>{description}</p>
        <p><strong>Price:</strong>${price}</p>
        <p><strong>Delivery Time:</strong>{delivery_time}min.</p>
        <button className="btn" onClick={()=> RemoveFromCart(id)}>Remove From Cart</button>
        </div>

      })
    }
    </div>
    </>
  )
}

export default Cart
