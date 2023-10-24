import React, { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Components/Subcomponents/Navigation';
import SecondPageProducts from './Components/Subcomponents/SecondPageProducts';
import Footer from './Components/Subcomponents/Footer';
import Footer2 from './Components/Subcomponents/Footer2';
import Mainpage from './Components/Subcomponents/Mainpage';
import StyleGuidePage from './Components/Subcomponents/StyleGuidePage';
import ProductDetailPage from './Components/Subcomponents/ProductDetailPage';
import { MainpageproductsApis } from './Components/Subcomponents/MainpageproductsApis';
import FormiksForm from './Components/Subcomponents/Forms/FormiksForm';
import Login from './Components/Subcomponents/Forms/Login';
import ResetPassword from './Components/Subcomponents/Forms/ResetPassword';
import Cart from './Components/Subcomponents/Cart';
import HeaderTextCarousel from './Components/Subcomponents/HeaderTextCarousel';
import WHOWEARE from './Components/Subcomponents/LegalComponentsFolder/WHOWEARE';
import CONTACTUS from './Components/Subcomponents/LegalComponentsFolder/CONTACTUS';
import OURRESPONSIBILITIES from './Components/Subcomponents/LegalComponentsFolder/OURRESPONSIBILITIES';
import { UNSTITCHED, DUPATTAS, READYTOWEAR, SPECIALPRICES, BOTTOMS, SHAWLS } from './Components/Subcomponents/BaroqueApis'
import Wishlist from './Components/Subcomponents/Wishlist';
import HelpButton from './Components/Subcomponents/HelpButton';


export default function App() {
  const [wishlist, setwishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);


  const addOnWishlist = (product) => {
    const exist = wishlist.find((x) => x.ProductId === product.ProductId);
    if (exist) {
      setwishlist(wishlist.filter((x) => x.ProductId !== product.ProductId))
    }
    else {
      setwishlist([...wishlist, { ...product }])
    }
  }

  const onAdd = (product, quantity) => {
    const exist = cartItems.find((x) => x.ProductId === product.ProductId);
    if (exist) {
      setCartItems(
        cartItems.map((x) => x.ProductId === product.ProductId ? { ...exist, qty: exist.qty + quantity } : x)
      );
    }
    else {
      setCartItems([...cartItems, { ...product, qty: quantity }]);
      console.log(cartItems);
    }
  }


  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.ProductId === product.ProductId);
    if (exist.qty === 1)
      setCartItems(cartItems.filter((x) => x.ProductId !== product.ProductId));
    else
      setCartItems(cartItems.map((x) => x.ProductId === product.ProductId ? { ...exist, qty: exist.qty - 1 } : x))
  }

  const onDelete = (product) => {
    setCartItems(cartItems.filter((x) => x.ProductId !== product.ProductId));
  }

  const cartSize = cartItems.reduce((x, y) => x + y.qty, 0);

  return (
    <div>
      <BrowserRouter>
        <HeaderTextCarousel />
        <Navigation WishlistCount={wishlist.length} cartSize={cartSize} />
        <Routes>
          <Route path="/" element={<Mainpage propsss={MainpageproductsApis} />} />
          <Route path="UNSTITCHED" element={<SecondPageProducts propss={UNSTITCHED} propss2={"UN-STITCHED"} addOnWishlist={addOnWishlist} wishlist={wishlist} />} />
          <Route path="DUPATTAS" element={<SecondPageProducts propss={DUPATTAS} propss2={"DUPATTAS"} addOnWishlist={addOnWishlist} wishlist={wishlist} />} />
          <Route path="READYTOWEAR" element={<SecondPageProducts propss={READYTOWEAR} propss2={"READY TO WEAR"} addOnWishlist={addOnWishlist} wishlist={wishlist} />} />
          <Route path="CHANTELLE" element={<SecondPageProducts propss={SPECIALPRICES} propss2={"SPECIAL PRICES"} addOnWishlist={addOnWishlist} wishlist={wishlist} />} />
          <Route path="BOTTOMS" element={<SecondPageProducts propss={BOTTOMS} propss2={"BOTTOMS"} addOnWishlist={addOnWishlist} wishlist={wishlist} />} />
          <Route path="SHAWLS" element={<SecondPageProducts propss={SHAWLS} propss2={"SHAWLS"} addOnWishlist={addOnWishlist} wishlist={wishlist} />} />
          <Route path="StyleGuidePage" element={<StyleGuidePage />} />
          <Route path="ProductDetailPage" element={<ProductDetailPage wishlist={wishlist} onAdd={onAdd} addOnWishlist={addOnWishlist} cartSize={cartSize} />} />
          <Route path="Wishlist" element={<Wishlist addOnWishlist={addOnWishlist} wishlist={wishlist} onAdd={onAdd} props={"Wishlist"} />} />
          <Route path="Cart" element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} props={"Cart"}/>} />
          <Route path="FormiksForm" element={<FormiksForm />} />
          <Route path="Login" element={<Login />} />
          <Route path="ResetPassword" element={<ResetPassword />} />
          <Route path="WHOWEARE" element={<WHOWEARE />} />
          <Route path="CONTACTUS" element={<CONTACTUS />} />
          <Route path="OURRESPONSIBILITIES" element={<OURRESPONSIBILITIES />} />
        </Routes>
        <div className="fixed bottom-7 right-7 z-14900"><HelpButton  /></div>
        <Footer />
        <Footer2 />
      </BrowserRouter>
    </div>
  )
}
