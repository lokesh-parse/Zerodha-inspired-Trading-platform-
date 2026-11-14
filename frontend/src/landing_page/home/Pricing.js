import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <section className="container section-space">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <Link to="/pricing">
            See Pricing{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="col-12 col-lg-2" />
        <div className="col-12 col-lg-6">
          <div className="row text-center">
            <div className="col p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
