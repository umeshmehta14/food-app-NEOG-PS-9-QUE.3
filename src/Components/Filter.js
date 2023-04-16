import React, { useContext } from 'react'
import { DataContext } from '../Contexts/DataProvider'

const Filter = () => {
  const {HandleSearch,HandleSort,HandleCheck} = useContext(DataContext);
  return (
    <div>
      <h1>Filters:</h1>
      <div class="filter-box">
        <input type="text" className='search' placeholder='Search Food Here' onChange={HandleSearch} />
        <label htmlFor="veg">
            <input type="checkbox"  value = "veg"  id="veg" onChange={HandleCheck}/>
            Veg
        </label>
        <label htmlFor="spicy">
            <input type="checkbox"  value="spicy"  id="spicy" onChange={HandleCheck} />
            Spicy
        </label>

        <label htmlFor="LH">
            <input type="radio" name="sort" id="LH" value="LowToHigh" onChange={HandleSort} />
            Sort (Price) Low To High
        </label>
        <label htmlFor="HL">
            <input type="radio" name="sort" id="HL" value="HighToLow" onChange={HandleSort}/>
            Sort (Price) High To Low
        </label>
      </div>
    </div>
  )
}

export default Filter
