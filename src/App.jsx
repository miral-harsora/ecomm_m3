
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
import Carousel from './pages/Carousel'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
function App() {
  const location = useLocation()
  const hideFooterRoutes = ['/login', '/cart']
  const hideNavbarRoutes = ['/cart']
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
  return (

    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/category/:name" element={<SelectedProducts />} />
        <Route path="/:name" element={<SelectedProducts />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        {/* <Route path="/:name" element={<SearchProducts/>}/> */}
        <Route path="/Carousel" element={<Carousel />} />
      </Routes>
      {!shouldHideFooter && <Footer >

      </Footer>}
    </>


  )
}

export default AppWrapper
