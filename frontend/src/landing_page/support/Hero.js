import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <span>Track tickets</span>
      </div>
      <div className="row p-5 m-3">
        <div className="col-12 col-lg-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="search"
            aria-label="Search support topics"
            placeholder="Eg. how do I activate F&O"
          />
          <br />
          <div className="support-quick-links">
            <span>Track account opening</span>
            <span>Track segment activation</span>
            <span>Intraday margins</span>
            <span>Kite user manual</span>
          </div>
        </div>
        <div className="col-12 col-lg-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              Current Takeovers and Delisting - January 2024
            </li>
            <li>
              Latest Intraday leverages - MIS &amp; CO
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
