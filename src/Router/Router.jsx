import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Contacto from '../Page/Contacto'
import Inicio from '../Page/Inicio'
import Ofertas from '../Page/Ofertas'
import Cart from '../Components/Cart'
import Descripcion from '../Page/description/Descripcion'

const Router = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    console.log (cart);
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <BrowserRouter>
    <Header setShow={setShow} size = {cart.length}/>


    <Routes>
    {show ? ( 
        <Route path='/' element={<Inicio handleClick={handleClick} />} /> 
        ) : ( 
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} /> 
      )}
        <Route path='/ofertas' element={<Ofertas/>} />
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/descripcion' element={<Descripcion/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Router
