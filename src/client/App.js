// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import Home from './pages/Home';
import MyCart from './pages/MyCart';
import NavBarMenu from './components/NavBarMenu';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {

  const [myCartList, setMyCartList] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('state'));
    if (items) {
      setMyCartList(items)
    } else {
      window.localStorage.setItem('state', JSON.stringify([]))
    }
  }, []);

  const addToCart = (item) => {
    const names = JSON.parse(localStorage.getItem('state')).map((el) => el.name);
    if (names.includes(item.name)) {
      return;
    } else {
      setMyCartList((prev) => [...prev, item])
      window.localStorage.setItem('state', JSON.stringify([...myCartList, item]))
    }
  }

  return (
    <BrowserRouter>
      <NavBarMenu itemsAmount={itemsAmount} setItemsAmount={setItemsAmount}/>
        <Routes>
          <Route path='/' element={<Home addToCart={addToCart}/>} />
          <Route path='/mycart' element={<MyCart setItemsAmount={setItemsAmount}/>} 
          /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
