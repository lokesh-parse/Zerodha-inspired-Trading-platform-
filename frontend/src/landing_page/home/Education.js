import React from "react";
import AssetImage from "../AssetImage";

function Education() {
  return (
    <section className="container section-space">
      <div className="row align-items-center g-5">
        <div className="col-12 col-lg-6">
          <AssetImage
            src="media/images/education.svg"
            alt="Market education illustration"
            className="section-image education-image"
          />
        </div>
        <div className="col-12 col-lg-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="https://zerodha.com/varsity/">Varsity <span aria-hidden="true">→</span></a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="https://tradingqna.com/">TradingQ&amp;A <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}

export default Education;
