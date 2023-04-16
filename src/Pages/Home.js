import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container home'>
      <h1>Welcome to neoG Food Ordering App</h1>
      <button className='btn '>
      <NavLink className="goTo-btn" to="/menu">Order Something</NavLink>
      </button>
    </div>
  )
}

export default Home
