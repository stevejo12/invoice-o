import React from 'react';

import "./index.scss";
import Product from '../Product';
import Products from "../../mockData/product.json";

const ProductList = () => {
  return (
    <div className='productList dashed-bottom'>
      <div className="productList-header">
        <div className="productList-header-info">Product Info</div>
        <div className="productList-header-total">Total</div>
        <div className="productList-header-priceEach">Unit Price</div>
        <div className="productList-header-priceTotal">Total Price</div>
      </div>
      <div className="productList-items">
        {Products.map((item, key) => {
          return (
            <Product
              key={key}
              id={item.id}
              info={item.info}
              productURL={item.productURL}
              quantity={item.quantity}
              unitPrice={item.unitPrice}
              totalPrice={item.totalPrice}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProductList;