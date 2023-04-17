import React, { useContext } from 'react'
import { DataContext } from '../Contexts/DataProvider'
import { NavLink } from 'react-router-dom';

const WatchLater = () => {
    const {state,WatchListHandler} = useContext(DataContext);
  const watchLaterVideo = state.videoList.filter(({is_watchLater})=> is_watchLater);
  return (
    <div>
      <div className="container">
      <h1>Watch Later Videos</h1>
      </div>
      <div className='menu-container'>
        {
          watchLaterVideo.map((item)=> {
            const {id,title,thumbnail, url} = item;
          return <div className='menu-box'>
            <img src={thumbnail} alt="Image Not available" />
            <p>{title}</p>
            <NavLink to={`/videoinformation/${id}`}>Watch Here</NavLink>
            <button className="btn" onClick={()=> WatchListHandler(id,true)}> Remove From Watch Later</button>
            </div>
        } )
        }
      </div>
    </div>
  )
}

export default WatchLater
