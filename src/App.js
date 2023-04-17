
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import { useContext } from 'react';
import { DataContext } from './Contexts/DataProvider';
import Error from './Pages/Error';
import WatchLater from './Pages/WatchLater';
import VideoList from './Pages/VideoList';
import LikedVideo from './Pages/LikedVideo';
import VideoInformation from './Pages/VideoInformation';

function App() {
  const {state} = useContext(DataContext);
  const {loading, error} = state
  return (
    <>
      {loading ? "Loading..." : <> { !error && <Header/>}
      <Routes>
        {error ? <Route path="/" element={<Error/>}/>:<Route path="/" element={<Home/>}/>   }
        <Route path="/videolist" element={<VideoList/>}/>
        <Route path="/likedvideo" element={<LikedVideo/>}/>
        <Route path="/watchlater" element={<WatchLater/>}/>
        <Route path="/videoinformation/:videoId" element={<VideoInformation/>}/>
      </Routes></>}
    </>
  );
}

export default App;
