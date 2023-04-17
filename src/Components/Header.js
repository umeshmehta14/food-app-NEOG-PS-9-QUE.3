import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../Contexts/DataProvider'

const Header = () => {
  const {state} = useContext(DataContext);
  const {videoList} = state;
  const getStyle = ({isActive}) =>{
    return isActive?{
      textDecoration:"underline"
    }:{};
  }
  const likedVideoLength = videoList.reduce((acc, {isLike})=> isLike ? acc+1:acc,0);
  const watchListLength = videoList.reduce((acc, {is_watchLater})=> is_watchLater ? acc+1:acc,0);
  return (
    <nav>
      <ul>
        <li>
      <NavLink style={getStyle} to="/">Home</NavLink>
        </li>
        <li>
      <NavLink style={getStyle} to="/videolist">Videos</NavLink>
        </li>
        <li>
      <NavLink style={getStyle} to="/likedvideo">Liked Videos{likedVideoLength>0 &&`(${likedVideoLength})`}</NavLink>

        </li>
        <li>
      <NavLink style={getStyle} to="/watchlater">Watch Later{watchListLength>0 &&`(${watchListLength})`}</NavLink>

        </li>
      </ul>
    </nav>
  )
}

export default Header
