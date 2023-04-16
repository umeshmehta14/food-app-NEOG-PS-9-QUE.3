import React, { useContext } from 'react'
import { DataContext } from '../Contexts/DataProvider'

const Error = () => {
  const {error} = useContext(DataContext);
  return (
    <div className='home'>
      <h1>{error.status}</h1>
      <p>{error.message}</p>
    </div>
  )
}

export default Error
