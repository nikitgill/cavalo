import { FunctionComponent } from "react";
import BrandOverviewContainer from "../components/BrandOverviewContainer";
import BestPriceContainer from "../components/BestPriceContainer";
import BuyFromUsContainer from "../components/BuyFromUsContainer";
import ExploreTrucksContainer from "../components/ExploreTrucksContainer";
import BrandContainer from "../components/BrandContainer";
import FAQContainer from "../components/FAQContainer";
import FooterContainer from "../components/FooterContainer";
import DI241Container2 from "../components/DI241Container2";
import Header from "../components/Header";
import "./ProductDescriptionPage.css";

const ProductDescriptionPage: FunctionComponent = () => {
  return (
    <div className="product-description-page">
      <div className="main">
        <BrandOverviewContainer />
        <div className="process1">
          <div className="why-buy-from-container1">
            <span>{`Why `}</span>
            <span className="buy1">buy</span>
            <span> from us?</span>
          </div>
          <div className="why-buy-from-us-cards-group">
            <BestPriceContainer />
            <BuyFromUsContainer
              transactionProcessText="../intransit-1.svg"
              buyingSellingText={`Faster Buying & Selling`}
              quickEasyBuyingSellingTex={`Quick & easy buying & `}
              sellingProcessText="selling process with "
              transactionProcessDescrip={`Efficient & convenient transaction process`}
            />
            <div className="why-buy-from-us-cards1">
              <img
                className="conference-call-2-icon1"
                alt=""
                src="../conferencecall-21.svg"
              />
              <div className="professional-dealers-group">
                <b className="professional-dealers1">Professional Dealers</b>
                <div className="we-have-verified1">{`We have verified & approved professional dealers on our platform, so you don’t have to worry on trustability `}</div>
              </div>
            </div>
          </div>
        </div>
        <ExploreTrucksContainer />
        <BrandContainer propZIndex="unset" />
        <FAQContainer propZIndex="unset" />
        <div className="need-help1">
          <div className="share-with-a">
            <span>
              <b>Need help with buying?</b>
            </span>
            <span className="mail-us-your-queries-at-helpc1">
              <span>{` `}</span>
              <span className="mail-us-your1">{`Mail us your queries `}</span>
              <span className="at1">at</span>
              <span className="span3">{` `}</span>
              <span className="buy1">help@cavalo.in</span>
              <span className="span3">{` `}</span>
              <span className="at1">{`or call us at `}</span>
              <span className="buy1">{`1800 190 1321 `}</span>
              <span>and we'll be happy to assist!</span>
            </span>
          </div>
        </div>
        <FooterContainer
          copyrightText="© Copyright 2022, All Rights Reserved"
          appStoreImageUrl="../app-store1.svg"
          googlePlayImageUrl="../google-play-logo1.svg"
          getItOnImageUrl="../get-it-on1.svg"
          googlePlayLogoImageUrl="../google-play1.svg"
          instagramImageUrl="../instagram-black1.svg"
          twitterImageUrl="../twitter-black1.svg"
          propZIndex="unset"
        />
      </div>
      <div className="frame-parent3">
        <DI241Container2 />
        <div className="frame-wrapper2">
          <div className="share-with-a-friend-parent">
            <b className="share-with-a">Share With a Friend:</b>
            <div className="group-parent">
              <img className="frame-child" alt="" src="../group-5.svg" />
              <img className="frame-child" alt="" src="../facebook.svg" />
              <img className="frame-child" alt="" src="../whatsapp.svg" />
              <img
                className="instagram-colourful-icon-1"
                alt=""
                src="../instagramcolourfulicon-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <Header
        groupSvgUrl="../group5.svg"
        frameSvgUrl="../frame26.svg"
        frameSvgUrl1="../frame27.svg"
        frameSvgUrl2="../frame28.svg"
        groupPosition="absolute"
        groupTop="0px"
        groupLeft="calc(50% - 720px)"
      />
    </div>
  );
};

export default ProductDescriptionPage;
