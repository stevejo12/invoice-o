import React from 'react'

import "./index.scss";
import ProductList from '../../components/ProductList';

const InvoicePreview = () => {
  return (
    <div className="invoicePreview">
      <div className="invoicePreview__header">
        <span className="invoicePreview__title">INVOICE-O</span>
        <div className="invoicePreview__invoiceInfo">
          <span className="invoicePreview__info-text">I N V O I C E</span>
          <span className="invoicePreview__info-number">0035/INV/IX/2023</span>
        </div>
      </div>
      <div className="invoicePreview__info">
        <div className="invoicePreview__info-seller">
          <div className="invoicePreview__info-seller-header">
            PUBLISHED ON BEHALF OF
          </div>
          <div className="invoicePreview__info-seller-grid">
            <span>Seller</span>
            <p>INVOICE-O CORP.</p>
          </div>
        </div>
        <div className="invoicePreview__info-buyer">
          <div className="invoicePreview__info-buyer-header">
            BILLED TO
          </div>
          <div className="invoicePreview__info-buyer-grid">
            <span>Buyer</span>
            <p>Steve Jo</p>
          </div>
          <div className="invoicePreview__info-buyer-grid">
            <span>Purchase Date</span>
            <p>16 Agustus 2023</p>
          </div>
          <div className="invoicePreview__info-buyer-grid">
            <span>Shipping Address</span>
            <div>
              <p className="buyer-info">
                Steve Jo{" "}
                <span className="buyer-info-phone">(6281296927075)</span>
              </p>
              <p className="address">
                Jl. Pengukiran III no 107 Tambora, Kota Administrasi Jakarta Barat, 11240 DKI Jakarta
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="invoicePreview__products">
        <ProductList />
      </div>
    </div>
  )
}

export default InvoicePreview;