import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../Contexts/DataProvider'

const Header = () => {
  const {menuItem} = useContext(DataContext);
  const cartItemLength = menuItem.reduce((acc,{inCart})=> inCart ? acc+1:acc,0);
  const getStyle = ({isActive}) =>{
    return isActive?{
      textDecoration:"underline"
    }:{};
  }
  return (
    <nav>
      <ul>
        <li>
      <NavLink style={getStyle} to="/">Home</NavLink>
        </li>
        <li>
      <NavLink style={getStyle} to="/menu">Menu</NavLink>
        </li>
        <li>
      <NavLink style={getStyle} to="/cart">Cart{cartItemLength > 0 && `(${cartItemLength})`}</NavLink>

        </li>
      </ul>
    </nav>
  )
}

export default Header
