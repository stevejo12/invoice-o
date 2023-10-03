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
      <ProductList />
      <div className="priceBreakdown">
        <div className="totalItems">
          <span>Total Price (2 Items)</span>
          <p>Rp131.980</p>
        </div>
        <div className="deliveryFeeBreakdown">
          <div className="deliveryFee">
            <span>Total Delivery Fee (1.50 kg)</span>
            <p>Rp17.000</p>
          </div>
          <div className="deliveryDiscountFee">
            <span>Delivery Fee Discount</span>
            <p>{"-"}Rp17.000</p>
          </div>
          <div className="deliveryInsuranceFee">
            <span>Delivery Insurance Fee</span>
            <p>Rp1.000</p>
          </div>
        </div>
        <div className="totalSpending dashed-bottom dashed-top">
          <span>Total Spending</span>
          <p>Rp132.980</p>
        </div>
        <div className="applicationFee">
          <span>Application Fee</span>
          <p>Rp2.000</p>
        </div>
        <div className="totalBill dashed-bottom dashed-top">
          <span>Total Bill</span>
          <p>Rp134.980</p>
        </div>
        <div className="promo-typeOne">
          <p className="promoLabel">
            Promo Tokopedia
          </p>
          <div className="promoDescription">
            <span>Free Delivery Up to Rp.20.000</span>
            <p>Rp17.000</p>
          </div>
        </div>
        <div className="promo-typeTwo">
          <div className="promoLabel">
            <p className='promoCompany'>Promo Tokopedia</p>
            <p className="promoLabel-name">Promo GoPay Hemat June</p>
          </div>
          <div className="promoValue">
            <p>Rp1.329</p>
            <p>(1.329 GoPay Coins)</p>
          </div>
        </div>
      </div>
      <div className="deliveryInfo">
        <div className="courierInfo">
          <p className='title-description'>Courier:</p>
          <p className='text-bold'>GoSend Bike - Same Day</p>
          <p>Insured By Tokopedia</p>
        </div>
        <div className="paymentMethod">
          <p className='title-description'>Payment Method:</p>
          <p className='text-bold'>GoPay</p>
        </div>
      </div>
    </div>
  )
}

export default InvoicePreview;