import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Content from './Pages/Content';
import Product from './Pages/Product';
import Productdetails from './Pages/Productdetails';
import Cart from './Pages/Cart';
import { CartProvider } from './Context/CartContext';
import Footer from './Components/Footer';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {




  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar title="Home" /> <Home /> <Footer/></>,
    },
    {
      path: "/Product",
      element: <> <Navbar title="Product" /> <Product /><Footer/> </>,
    },
    {
      path: "/Product/:id",
      element: <> <Navbar title="Product" /> <Productdetails /><Footer/> </>,
    },
    {
      path: "/Content",
      element: <> <Navbar title="Content" /> <Content /><Footer/> </>,
    },
    {
      path: "/Contact",
      element: <> <Navbar title="Contact" /> <Contact /><Footer/> </>,
    },
    {
      path: "/Cart",
      element: <> <Navbar title="Cart" /> <Cart /><Footer/> </>,
    },


  ]);

  return (
    <>
      {/* <RouterProvider router={router} /> */}

      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>

  )
}

export default App


// This is Created by Nishikant Pawar