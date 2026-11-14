import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 footer-main">
          <div className="col-12 col-lg-4">
            <Link className="brand footer-brand" to="/" aria-label="Zerodha home">
              <span className="brand-mark" aria-hidden="true">Z</span>
              <span>Zerodha</span>
            </Link>
            <p className="footer-copy">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col-6 col-lg-2">
            <h2 className="footer-heading">Company</h2>
            <Link to="/about">About</Link>
            <Link to="/product">Products</Link>
            <Link to="/pricing">Pricing</Link>
            <a href="https://zerodha.tech/">Zerodha.tech</a>
            <span>Referral programme</span>
            <span>Careers</span>
            <span>Press &amp; media</span>
            <span>Zerodha cares (CSR)</span>
          </div>
          <div className="col-6 col-lg-2">
            <h2 className="footer-heading">Support</h2>
            <Link to="/support">Contact and support</Link>
            <a href="https://support.zerodha.com/">Support portal</a>
            <a href="https://zerodha.com/charges/">List of charges</a>
            <span>Z-Connect blog</span>
            <span>Downloads &amp; resources</span>
          </div>
          <div className="col-6 col-lg-2">
            <h2 className="footer-heading">Account</h2>
            <Link to="/signup">Open an account</Link>
            <span>Fund transfer</span>
            <span>60 day challenge</span>
          </div>
        </div>
        <div className="footer-legal">
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket through the support portal.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
