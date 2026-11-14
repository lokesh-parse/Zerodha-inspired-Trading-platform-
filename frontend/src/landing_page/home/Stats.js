import React from "react";
import { Link } from "react-router-dom";
import AssetImage from "../AssetImage";

function Stats() {
  return (
    <section className="container section-space">
      <div className="row align-items-center g-5">
        <div className="col-12 col-lg-6">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <AssetImage
            src="media/images/ecosystem.svg"
            alt="Zerodha investment products ecosystem"
            className="section-image"
          />
          <div className="text-center">
            <Link to="/product" className="mx-3">
              Explore our products{" "}
              <span aria-hidden="true">→</span>
            </Link>
            <span className="text-muted">Try Kite demo</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
