import React from 'react';
import {BrowserRouter as Router,Route,Routes,Link,useRoutes} from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import Checkout from "./Checkout";
import ProductDetail from "./ProductDetail";
import Product from "./Product";
import NavLayout from './NavLayout';
import ContextHome from './pages/Context';
function App() {
  //use Route Hook
  let routes = useRoutes([
    {
      path: '/',
      element: <NavLayout />,
      children: [
        {
          index: true,
          element:<Home/>
        },
        {
          path: 'Context',
          element:<ContextHome></ContextHome>
        },
        {
          path: 'Checkout',
          element: <Checkout/> 
        },
        {
          path: 'Product',
          element: <Product />,
          children: [
            {
              path: ':id',
              element:<ProductDetail/>
            }
          ]
        },
        {
          path: '*',
          element: <h1>Not Found</h1>
        }
      ]
    },
  ])
    return (
      <div>
        {/* <Routes >
          <Route path='/Checkout' element={<h1>the line appear when Checkout path</h1>}></Route>
            </Routes> */}
            {/* <NavLayout></NavLayout>
            <Routes>
                    <Route path="/" element={<Home/>} ></Route>
                    <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
                    <Route path="/Product" element={<Product></Product>}>
                        <Route path=":id" element={<ProductDetail></ProductDetail>}></Route>
                    </Route>
            </Routes>  */}
        
        {routes}
        </div>
    );
}

export default App;