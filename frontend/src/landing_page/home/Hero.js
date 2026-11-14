import React from "react";
import { Link } from "react-router-dom";
import AssetImage from "../AssetImage";

function Hero() {
  return (
    <section className="container home-hero">
      <div className="text-center">
        <AssetImage
          src="media/images/homeHero.svg"
          alt="Illustration of an investment dashboard with a rising market chart"
          className="home-hero-image"
        />
        <h1>Invest in everything</h1>
        <p className="lead">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <Link className="btn btn-primary primary-action" to="/signup">
          Signup Now
        </Link>
      </div>
    </section>
  );
}

export default Hero;
