import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch } from '../Data/Data';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [menuItem, setMenuItem] = useState([]);
    const [menu, setMenu] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [checkBoxValue, setCheckBoxValue] = useState();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const getData= async ()=>{
        try {
            const response = await fakeFetch("https://example.com/api/menu");
            setMenuItem(response.data.menu);
            setMenu(response.data.menu);
            setLoading(false);

        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }

    const HandleSearch = (event) =>{
        const searchedItem = event.target.value;
        setSearchValue(searchedItem);
        if(searchedItem !== '')
        {
            setMenuItem(()=> menuItem.filter((item)=> item.name.toLowerCase().includes(searchedItem.toLowerCase())));
        }
        else{
            setMenuItem(menu);
        }
    }

    const HandleSort = (event) =>{
        setMenuItem(()=> [...menuItem].sort((a,b)=> event.target.value === "LowToHigh" ?a.price - b.price : b.price - a.price));
    }

    const HandleCheck = (event) =>{
        const checkValue = event.target.value;
        const isChecked = event.target.checked;
        setCheckBoxValue(checkValue);
        if(isChecked){
            setMenuItem(()=> menuItem.filter(({is_vegetarian,is_spicy})=> checkValue === "veg"? is_vegetarian: is_spicy ))
        }
        else{
            setMenuItem(menu);
        }
    }
    const HandleCart = (item)=>{
        const cartItem = menu.map((element)=> element.id === item.id ? {...element, inCart: true}:element)
        setMenuItem(cartItem);
        setMenu(cartItem);
    }

    const RemoveFromCart = (id)=>{
        const itemRemovedData = menu.map((element)=> element.id === id ? {...element, inCart:false}: element )
        setMenuItem(itemRemovedData);
        setMenu(itemRemovedData);
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <DataContext.Provider value={{menuItem,loading, error,HandleSearch,searchValue,HandleSort,HandleCheck,checkBoxValue,HandleCart,RemoveFromCart}}>
      {children}
    </DataContext.Provider>
  )
}

