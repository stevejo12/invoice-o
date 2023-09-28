import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const Invoice = () => {
  const [invoiceNumber, setInvoiceNumber] = useState("0035/INV/IX/2023");
  const [sellerFirstName, setSellerFirstName] = useState("");
  const [sellerLastName, setSellerLastName] = useState("");

  return (
    <div className="invoice">
      <div className="invoice__header">
        <span className="invoice__title">INVOICE-O</span>
        <div className="invoice__info">
          <span className="invoice__info-text">I N V O I C E</span>
          <span className="invoice__info-number">{invoiceNumber}</span>
        </div>
      </div>
      <form className="invoice__form">
        <label htmlFor="sellerFirstName">First Name</label>
        <input
          className="input-primary"
          type="text"
          name="sellerFirstName"
          value={sellerFirstName}
          onChange={(e) => setSellerFirstName(e.target.value)}
        />
        <label htmlFor="sellerLastName">Password</label>
        <input
          className="input-primary"
          type="text"
          name="sellerLastName"
          value={sellerLastName}
          onChange={(e) => setSellerLastName(e.target.value)}
        />
        <button className="btn-primary" type="submit">
          Login
        </button>
      </form>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default Invoice;
