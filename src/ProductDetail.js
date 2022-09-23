import React from 'react';
import {useOutletContext, useParams} from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams()
  const a = useOutletContext()
    return (
        <div>
        <h1>产品详情 This is Product-{id}    --all={a.son}</h1>
        </div>
    );
};

export default ProductDetail;