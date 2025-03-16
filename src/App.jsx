
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import Footer from './components/Footer'
import SelectedProducts from './pages/SelectedProducts'
import ProductDetail from './pages/ProductDetail'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getProducts } from './action'

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const dispatch= useDispatch();
  useEffect(() => {
       dispatch(getProducts());
   }, [dispatch]);
  const location = useLocation()
  const hideFooterRoutes = ['/login', '/cart']
  const hideNavbarRoutes = ['/cart']
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
  return (
    console.log("navbarHeight",navbarHeight),
    <>
      {!shouldHideNavbar && <Navbar setNavbarHeight={setNavbarHeight}/>}
      <Routes>
        <Route path="/" element={<Home navbarHeight={navbarHeight}/>} />
        <Route path="/home" element={<Home navbarHeight={navbarHeight}/>} />
        <Route path="/cart" element={<Cart  />} />
        <Route path="/wishlist" element={<Wishlist   navbarHeight={navbarHeight}/>}/>
        <Route path="/login" element={<Login  navbarHeight={navbarHeight}/>} />
        <Route path="/about" element={<AboutUs  navbarHeight={navbarHeight}/>} />
        <Route path="/contact" element={<Contact  navbarHeight={navbarHeight}/>} />
        <Route path="/faqs" element={<FAQ  navbarHeight={navbarHeight}/>} />
        <Route path="/category/:name" element={<SelectedProducts navbarHeight={navbarHeight}/>} />
        <Route path="/:name" element={<SelectedProducts navbarHeight={navbarHeight}/>} />
        <Route path="/products/:id" element={<ProductDetail  navbarHeight={navbarHeight}/>} />
      </Routes>
      {!shouldHideFooter && <Footer >

      </Footer>}
    </>


  )
}

export default AppWrapper
