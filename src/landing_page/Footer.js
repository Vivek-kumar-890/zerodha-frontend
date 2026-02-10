/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" alt="logo" style={{ width: "50%" }} />
            <p>
              &copy; 2010 - 2025, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p style={{ fontWeight: "bold" }}>Company</p>
            <Link to="/about">About</Link><br /><br />
            <Link to="/products">Products</Link><br /><br />
            <Link to="/pricing">Pricing</Link><br /><br />
            <Link to="/referral">Referral programme</Link><br /><br />
            <Link to="/careers">Careers</Link><br /><br />
            <Link to="/tech">Zerodha.tech</Link><br /><br />
            <Link to="/press">Press & media</Link><br /><br />
            <Link to="/csr">Zerodha cares (CSR)</Link><br /><br />
          </div>

         <div className="col second">
            <p style={{ fontWeight: "bold" }}>Support</p>
            <Link to="/contact">Contact</Link><br /><br />
            <Link to="/support">Support portal</Link><br /><br />
            <Link to="/blog">Z-Connect blog</Link><br /><br />
            <Link to="/charges">List of charges</Link><br /><br />
            <Link to="/downloads">Downloads & resources</Link><br /><br />
          </div>
          
          <div className="col third">
            <p style={{ fontWeight: "bold" }}>Account</p>
            <Link to="/signup">Open an account</Link><br /><br />
            <Link to="/fund-transfer">Fund transfer</Link><br /><br />
            <Link to="/challenge">60 day challenge</Link><br />
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
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
            create a ticket here.
          </p>
        </div>
      </div>
      <div className="mt-5" style={{marginLeft:"150px"}}>
         <a
          href="https://www.nseindia.com"
          target="_blank"
          rel="noreferrer"
        >
          NSE
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
          href="https://www.bseindia.com"
          target="_blank"
          rel="noreferrer"
        >
          BSE
        </a>
        &nbsp;&nbsp;&nbsp;
        <Link to="/terms">Terms & Condition</Link>
        &nbsp;&nbsp;&nbsp;

        <Link to="/policies">Policies & procedures</Link>
        &nbsp;&nbsp;&nbsp;

        <Link to="/privacy">Privacy policy</Link>
        &nbsp;&nbsp;&nbsp;

        <Link to="/disclosure">Disclosure</Link>
        &nbsp;&nbsp;&nbsp;

        <Link to="/investor-attention">For investor's attention</Link>
        &nbsp;&nbsp;&nbsp;

        <Link to="/investor-charter">Investor charter</Link>
      </div>
    </footer>
  );
}

export default Footer;
