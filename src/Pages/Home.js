import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to video library</h1>
      <h2>To Browse all videos, click the below button or go to the videos page</h2>
      <button className='btn '>
      <NavLink className="goTo-btn" to="/videolist">Explore Videos</NavLink>
      </button>
    </div>
  )
}

export default Home
