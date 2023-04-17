import React, { createContext, useEffect, useReducer, useState } from 'react'
import { fakeFetch } from '../Data/Data';

export const DataContext = createContext();

const DataReducer = (state,action)=>{
    switch(action.type)
    {
        case "videoList" :
            return {...state, videoList: action.payload}
        case "loading":
            return {...state, loading: action.payload}
        case "error":
            return {...state, error: action.payload}
        default:
            return;
    }

}

export const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(DataReducer, {videoList:[], loading: true, error: false});
    const {videoList} = state;
    // const [videoList, setVideoList] = useState([]);

    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);
    const getData= async ()=>{
        try {
            const response = await fakeFetch("https://example.com/api/videos");
            dispatch({type:"videoList", payload: response.data.videos})
            dispatch({type:"loading", payload: false})
            // setVideoList(response.data.videos);
            // setLoading(false);

        } catch (err) {
            dispatch({type:"error", payload: err})
            dispatch({type:"loading", payload: false})
            // setError(err);
            // setLoading(false);
        }
    }

    const LikeHandler = (item,remove) =>{
        let LikeData = [];
        if(remove)
        {
            LikeData = videoList.map((element)=> element.id === item ? {...element, isLike: false} : element)
        }
        else{
            LikeData = videoList.map((element)=> element.id === item ? {...element, isLike: (!element.isLike || true)} : element)
        }
        dispatch({type:"videoList", payload:LikeData});
    }
    const WatchListHandler = (item,remove) =>{
        let WatchLaterData = []; 
        if(remove)
        {
             WatchLaterData = videoList.map((element)=> element.id === item ? {...element, is_watchLater: false} : element)
        }
        else{
            WatchLaterData = videoList.map((element)=> element.id === item ? {...element, is_watchLater: true} : element)
        }
        dispatch({type:"videoList", payload:WatchLaterData});

    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <DataContext.Provider value={{state,LikeHandler,WatchListHandler}}>
      {children}
    </DataContext.Provider>
  )
}

