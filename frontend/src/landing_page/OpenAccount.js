import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <section className="container section-space account-cta">
      <div className="text-center">
        <h1>Open a Zerodha account</h1>
        <p className="lead">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link className="btn btn-primary primary-action" to="/signup">
          Sign up Now
        </Link>
      </div>
    </section>
  );
}

export default OpenAccount;
