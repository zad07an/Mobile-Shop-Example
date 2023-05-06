import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Layout from './layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getTotalPrice } from './redux/features/cart-slice'
import SingleProduct from './pages/SingleProduct'

export default function App() {

  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart);
  useEffect(() => {
    dispatch(getTotalPrice());
  }, [dispatch, cartItems])

  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product/:id' element={<SingleProduct/>}/>
        </Route>
      </Routes>
    </div>
  )
}
