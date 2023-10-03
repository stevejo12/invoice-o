import React from 'react';
import { Link } from 'react-router-dom';

import "./index.scss";

interface IProps {
  id: number;
  info: string;
  productURL: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

const Product = ({ 
  id, info, productURL, quantity, unitPrice, totalPrice
}: IProps) => {
  return (
    <div className="product">
      <Link to={productURL} className="product-info">
        {info}
      </Link>
      <div className="product-total">
        {quantity}
      </div>
      <div className="product-priceEach">
        {unitPrice}
      </div>
      <div className="product-priceTotal">
        {totalPrice}
      </div>
    </div>
  )
}

export default Product;