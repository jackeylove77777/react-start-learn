import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link ,Outlet} from "react-router-dom";
export default function () {
  return (
    <>
      <nav className="nav">
        <Link to="">Home</Link>
        <Link to='Context'>Context</Link>
        <Link to="Checkout">Checkout</Link>
        <Link to="Product">Product</Link>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
