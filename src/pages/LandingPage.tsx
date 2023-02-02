import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import TruckMarketplaceHeroSectionCon from "../components/TruckMarketplaceHeroSectionCon";
import BestPriceContainer from "../components/BestPriceContainer";
import BuyFromUsContainer from "../components/BuyFromUsContainer";
import TruckBrowserContainer from "../components/TruckBrowserContainer";
import TruckExplorerContainer from "../components/TruckExplorerContainer";
import TruckBrandContainer from "../components/TruckBrandContainer";
import BrandBrowserContainer from "../components/BrandBrowserContainer";
import BrandContainer from "../components/BrandContainer";
import FAQContainer from "../components/FAQContainer";
import FooterContainer from "../components/FooterContainer";
import "./LandingPage.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className="landing-page">
      <Header1 />
      <TruckMarketplaceHeroSectionCon />
      <div className="process">
        <div className="why-buy-from-container">
          <span>{`Why `}</span>
          <span className="buy">buy</span>
          <span> from us?</span>
        </div>
        <div className="why-buy-from-us-cards-parent">
          <BestPriceContainer />
          <BuyFromUsContainer
            transactionProcessText="../intransit-1.svg"
            buyingSellingText={`Faster Buying & Selling`}
            quickEasyBuyingSellingTex={`Quick & easy buying & `}
            sellingProcessText="selling process with "
            transactionProcessDescrip={`Efficient & convenient transaction process`}
          />
          <div className="why-buy-from-us-cards">
            <img
              className="conference-call-2-icon"
              alt=""
              src="../conferencecall-2.svg"
            />
            <div className="professional-dealers-parent">
              <b className="professional-dealers">Professional Dealers</b>
              <div className="we-have-verified">{`We have verified & approved professional dealers on our platform, so you don’t have to worry on trustability `}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-bar-cta-parent">
        <div className="search-bar-cta">
          <div className="search-bar-cta-inner">
            <div className="frame-parent">
              <img className="frame-icon" alt="" src="../frame10.svg" />
              <div
                className="sell-truck"
                onClick={() => window.open("./rc-transfer-page", "_self")}
              >
                Sell Truck
              </div>
            </div>
          </div>
          <div className="frame-group">
            <div className="frame-wrapper">
              <div className="frame-container">
                <img className="frame-icon" alt="" src="../frame11.svg" />
                <b className="buy-truck">Buy Truck</b>
              </div>
            </div>
            <div className="frame-div">
              <div className="frame-parent1">
                <div className="select-payload-parent">
                  <div className="select-payload">Select Payload</div>
                  <img className="frame-icon2" alt="" src="../frame12.svg" />
                </div>
                <div className="select-cargo-length-parent">
                  <div className="select-cargo-length">Select Cargo Length</div>
                  <img className="frame-icon2" alt="" src="../frame13.svg" />
                </div>
                <div className="select-cargo-length-parent">
                  <div className="select-cargo-length">Select Make</div>
                  <img className="frame-icon2" alt="" src="../frame14.svg" />
                </div>
              </div>
              <div className="frame-parent2">
                <img className="frame-icon5" alt="" src="../frame15.svg" />
                <b className="select-cargo-length">Search</b>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper1">
          <div className="frame-parent">
            <img
              className="frame-icon"
              alt=""
              src="../systemuiconsreverse.svg"
            />
            <div className="sell-truck">Exchange</div>
          </div>
        </div>
      </div>
      <TruckBrowserContainer />
      <TruckExplorerContainer />
      <TruckBrandContainer />
      <BrandBrowserContainer />
      <BrandContainer propZIndex="8" />
      <FAQContainer propZIndex="9" />
      <div className="need-help">
        <div className="select-cargo-length">
          <span>
            <b>Need help with buying?</b>
          </span>
          <span className="mail-us-your-queries-at-helpc">
            <span>{` `}</span>
            <span className="mail-us-your">{`Mail us your queries `}</span>
            <span className="at">at</span>
            <span className="span">{` `}</span>
            <span className="buy">help@cavalo.in</span>
            <span className="span">{` `}</span>
            <span className="at">{`or call us at `}</span>
            <span className="buy">{`1800 190 1321 `}</span>
            <span>and we'll be happy to assist!</span>
          </span>
        </div>
      </div>
      <FooterContainer
        copyrightText="© Copyright 2021, All Rights Reserved"
        appStoreImageUrl="../app-store.svg"
        googlePlayImageUrl="../google-play-logo.svg"
        getItOnImageUrl="../get-it-on.svg"
        googlePlayLogoImageUrl="../google-play.svg"
        instagramImageUrl="../instagram-black.svg"
        twitterImageUrl="../twitter-black.svg"
        propZIndex="11"
      />
    </div>
  );
};

export default LandingPage;
