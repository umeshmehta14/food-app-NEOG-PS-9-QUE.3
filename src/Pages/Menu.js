import React, { useContext } from 'react'
import Filter from '../Components/Filter'
import { DataContext } from '../Contexts/DataProvider'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const {menuItem,searchValue,HandleCart} = useContext(DataContext);
  return (
    <div>
      <div className="container">
      <Filter/>
      <h1>Menu</h1>
      </div>
      <div className='menu-container'>
        {
          menuItem.map((item)=> {
            const {name, description, image, price,delivery_time,inCart} = item;
          return <div className='menu-box'>
            <img src={image} alt="Khana Khaa loo" />
            <p><strong>Name:</strong>
                  {searchValue ? (
                      <>{name
                        .split(new RegExp(`(${searchValue})`, "gi"))
                        .map((substring, index) =>
                          substring.toLowerCase() ===
                          searchValue.toLowerCase() ? (
                            <em
                              style={{backgroundColor: "#a5a5f6",
                                fontWeight: "bolder"
                              }}
                              key={index}
                            >
                              {substring}
                            </em>
                          ) : (
                            <strong key={index}>{substring}</strong>
                          )
                        )}</>
                  ) : (
                      <strong>{name}</strong>
                  )}
                </p>
            <p><strong>Description:</strong>{description}</p>
            <p><strong>Price:</strong>${price}</p>
            <p><strong>Delivery Time:</strong>{delivery_time}min.</p>
            <button className="btn" onClick={()=> HandleCart(item)}>{inCart ?<NavLink className="goTo-btn" to="/cart" >Go to Cart</NavLink>
      : "Add to cart"}</button>

            </div>

        
        } )
        }
        <h1>{menuItem.length === 0 && "Item Not Found"}</h1>
      </div>
    </div>
  )
}

export default Menu
