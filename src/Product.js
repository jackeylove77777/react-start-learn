import React from 'react';
import {Link,Outlet} from "react-router-dom";

function Product(props) {
    return (
        <div>
            <ul>
                <li><Link to='1'>Product 1</Link></li>
                <li><Link to='2'>Product 2</Link></li>
                <li><Link to='3'>Product 3</Link></li>
            </ul>
            <Outlet context={{parent:"Products",son:3}}></Outlet>
        </div>
    );
}

export default Product;