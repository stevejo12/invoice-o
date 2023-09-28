import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const Home = () => {
  return (
    <div className="home__container">
      Welcome to Invoice Generator
      <Link to="/login">
        <button>Login to your account</button>
      </Link>
      <Link to="/invoice">
        <button>Create an Invoice</button>
      </Link>
    </div>
  );
};

export default Home;
