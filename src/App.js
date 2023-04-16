
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Cart from './Pages/Cart';
import Header from './Components/Header';
import { useContext } from 'react';
import { DataContext } from './Contexts/DataProvider';
import Error from './Pages/Error';

function App() {
  const {loading, error} = useContext(DataContext);
  return (
    <>
      {loading ? "Loading..." : <> { !error && <Header/>}
      <Routes>
        {error ? <Route path="/" element={<Error/>}/>:<Route path="/" element={<Home/>}/>   }
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes></>}
    </>
  );
}

export default App;
