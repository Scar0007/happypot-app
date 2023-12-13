import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import WishList from './pages/WishList'
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import SingleProduct from './pages/SingleProduct'
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShipppingPolicy from './pages/ShipppingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermandConditions from './pages/TermandConditions';
import Rent from './pages/Rent';
import GardeningServices from './pages/GardeningServices';
import Bag from './pages/Bag'
import Checkout from './pages/Checkout';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element= {<Layout />}>
             <Route index element={<Home />} />
             <Route path='about' element={<About />} />
             <Route path='contact' element={<Contact />} />
             <Route path='product' element={<OurStore />} />
             <Route path='product/:id' element={<SingleProduct />} />
             <Route path='blogs' element={<Blog />} />
             <Route path='blog/:id' element={<SingleBlog />} />
             <Route path='bag' element={<Bag />} />
             <Route path='checkout' element={<Checkout />} />
             <Route path='wishlist' element={<WishList />} />
             <Route path='login' element={<Login />} />
             <Route path='forgot-password' element={<Forgotpassword />} />
             <Route path='signup' element={<Signup />} />
             <Route path='reset-password' element={<Resetpassword />} />
             <Route path='privacy-policy' element={<PrivacyPolicy />} />
             <Route path='shipping-policy' element={<ShipppingPolicy />} />
             <Route path='refund-policy' element={<RefundPolicy />} />
             <Route path='term-conditions' element={<TermandConditions />} />
             <Route path='rent' element={<Rent />} />
             <Route path='gardening-services' element={<GardeningServices />} />


          </Route>
      </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App;
