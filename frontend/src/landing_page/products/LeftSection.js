import React from "react";
import AssetImage from "../AssetImage";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="container section-space">
      <div className="row align-items-center g-5">
        <div className="col-12 col-lg-6">
          <AssetImage src={imageURL} alt={`${productName} product`} className="section-image" />
        </div>
        <div className="col-12 col-lg-6">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          {(tryDemo || learnMore) && <div className="product-links">
            {tryDemo && <a href={tryDemo}>Try Demo</a>}
            {learnMore && <a href={learnMore}>
              Learn More
            </a>}
          </div>}
          {(googlePlay || appStore) && <div className="mt-3 app-store-links">
            {googlePlay && <a href={googlePlay} aria-label="Get it on Google Play">
              <AssetImage src="media/images/googlePlayBadge.svg" alt="Get it on Google Play" />
            </a>
            }
            {appStore && <a href={appStore} aria-label="Download on the App Store">
              <AssetImage src="media/images/appstoreBadge.svg" alt="Download on the App Store" />
            </a>
            }
          </div>}
        </div>
      </div>
    </section>
  );
}

export default LeftSection;
