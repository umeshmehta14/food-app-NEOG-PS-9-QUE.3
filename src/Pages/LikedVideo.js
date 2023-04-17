import React, { useContext } from 'react'
import { DataContext } from '../Contexts/DataProvider';

const LikedVideo = () => {
  const {state,LikeHandler} = useContext(DataContext);
  const {videoList} = state;
  const likedVideo = videoList.filter(({isLike})=> isLike);
  return (
    <div>
      <div className="container">
      <h1>Liked Videos</h1>
      </div>
      <div className='menu-container'>
        {
          likedVideo.map((item)=> {
            const {id,title,thumbnail, url} = item;
          return <div className='menu-box'>
            <img src={thumbnail} alt="Image Not available" />
            <p>{title}</p>
            <a href={url}>watch here</a>
            <button className="btn" onClick={()=> LikeHandler(id,true)}> Remove From Like</button>
            </div>
        } )
        }
      </div>
    </div>
  )
}

export default LikedVideo
