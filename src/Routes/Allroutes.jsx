import React from 'react'
import { Route, Routes } from 'react-router'
import Description from '../Components/Description'
import About from '../pages/About'
import Access from '../pages/Access'
import Cards from '../pages/Cards'
import Cart from '../pages/Cart'
import Food from '../pages/Food'
import Fun from '../pages/Fun'
import Gifts from '../pages/Gifts'
import Home from '../pages/Home'
import Jewelry from '../pages/Jewelry'
import Kids from '../pages/Kids'
import New from '../pages/New'
import Other from '../pages/Other'
import Thehome from '../pages/Thehome'
import Vermont from '../pages/Vermont'
import Login from '../pages/Login'
import Privatepage from '../Components/Privatepage'

const Allroutes = () => {
  return (
     <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/new' element={
            <Privatepage>
            <New/>
            </Privatepage>
        }></Route>
          <Route path='/gifts' element={<Gifts/>}></Route>
          <Route path='/cards' element={<Cards/>}></Route>
          <Route path='/vermot' element={<Vermont/>}></Route>
          <Route path='/thehome' element={<Thehome/>}></Route>
          <Route path='/fun' element={<Fun/>}></Route>
          <Route path='/access' element={<Access/>}></Route>
          <Route path='/jewelry' element={<Jewelry/>}></Route>
          <Route path='/kids' element={<Kids/>}></Route>
          <Route path='/food' element={<Food/>}></Route>
          <Route path='/other' element={<Other/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/Description/:id' element={<Description />}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          
     </Routes>
  )
}

export default Allroutes
