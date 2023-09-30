import React from 'react';

import "./index.scss";
import Product from '../Product';

const ProductList = () => {
  return (
    <div className='productList'>
      <div className="productList-header">
        <div className="productList-header-info">Product Info</div>
        <div className="productList-header-total">Total</div>
        <div className="productList-header-priceEach">Unit Price</div>
        <div className="productList-header-priceTotal">Total Price</div>
      </div>
      <div className="productList-items">
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default ProductList;