import React from "react";
import AssetImage from "../AssetImage";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <section className="container section-space">
      <div className="row align-items-center g-5">
        <div className="col-12 col-lg-6">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          {learnMore && <a href={learnMore}>Learn More</a>}
        </div>
        <div className="col-12 col-lg-6">
          <AssetImage src={imageURL} alt={`${productName} product`} className="section-image" />
        </div>
      </div>
    </section>
  );
}

export default RightSection;
