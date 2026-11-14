import React from "react";

function Universe() {
  const products = ["Kite", "Console", "Coin", "Kite Connect", "Varsity", "Smallcase"];

  return (
    <section className="container section-space">
      <div className="text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row g-3 universe-grid">
          {products.map((product) => (
            <div className="col-6 col-md-4" key={product}>
              <div className="universe-item">{product}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Universe;
