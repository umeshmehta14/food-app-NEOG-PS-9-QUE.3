import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../Contexts/DataProvider';

const VideoInformation = () => {
    const {videoList,LikeHandler,WatchListHandler} = useContext(DataContext);
    const {videoId} = useParams();
    const selectedVideo = videoList.find(({id}) => id === parseInt(videoId))
    const {id,title,description,thumbnail,duration, url,isLike,is_watchLater} = selectedVideo;

    
  return (
    <div className='ind-videoContainer'>
        {
            <div className='indb-box'>
            <img src={thumbnail} alt="Image Not available" />
            <p>{title}</p>
            <strong style={{textAlign:"center"}}>Description:{" "}{description}</strong>
            <a href={url} target="_blank">Watch Here</a>
            <p><strong>Duration:</strong>{duration}</p>
            <button className="btn" onClick={()=> LikeHandler(id)}> {isLike ?"Added to like": "Like"}</button>
            <button className="btn" onClick={()=> WatchListHandler(id)}>{is_watchLater ?"Added to Watch Later": "Add to Watch Later"}</button>
            </div>

        }
      </div>
  )
}

export default VideoInformation
