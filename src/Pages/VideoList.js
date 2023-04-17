import React, { useContext } from 'react'
import { DataContext } from '../Contexts/DataProvider'
import { NavLink } from 'react-router-dom';

const VideoList = () => {
  const {state,LikeHandler,WatchListHandler} = useContext(DataContext);
  const {videoList} = state;
  return (
    <div>
      <div className="container">
      <h1>All Videos</h1>
      </div>
      <div className='menu-container'>
        {
          videoList.map((item)=> {
            const {id,title,thumbnail,isLike,is_watchLater} = item;
          return <div className='menu-box'>
            <img src={thumbnail} alt="Khana Khaa loo" />
            <p>{title}</p>
            <NavLink to={`/videoinformation/${id}`}>Watch Here</NavLink>

            <button className="btn" onClick={()=> LikeHandler(id)}> {isLike ?"Added to like": "Like"}</button>
            <button className="btn" onClick={()=> WatchListHandler(id)}>{is_watchLater ?"Added to Watch Later": "Add to Watch Later"}</button>
            </div>
        } )
        }
      </div>
    </div>
  )
}

export default VideoList
