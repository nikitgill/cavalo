import { FunctionComponent } from "react";
import TruckValueEstimatorContainer from "../components/TruckValueEstimatorContainer";
import BuyFromUsContainer from "../components/BuyFromUsContainer";
import FAQsContainer from "../components/FAQsContainer";
import FooterContainer from "../components/FooterContainer";
import FrameComponent1 from "../components/FrameComponent1";
import "./SellPage2.css";

const SellPage2: FunctionComponent = () => {
  return (
    <div className="sell-page-2">
      <div className="rc-transfer-page">
        <TruckValueEstimatorContainer />
        <div className="process2">
          <div className="how-selling-works-container">
            <span>{`How `}</span>
            <span className="selling">selling</span>
            <span> works?</span>
          </div>
          <div className="sell-cards-parent">
            <BuyFromUsContainer
              transactionProcessText="../viewdetails-1.svg"
              buyingSellingText="Enter truck details online"
              quickEasyBuyingSellingTex="Looking to sell you old  truck? Don’t worry, Sell "
              sellingProcessText="your truck in minutes "
              transactionProcessDescrip="from your home"
            />
            <BuyFromUsContainer
              transactionProcessText="../moneytransfer-22.svg"
              buyingSellingText="Get the final price in a click!"
              quickEasyBuyingSellingTex="We will provide you  a great  deal to sell "
              sellingProcessText="your truck, depending "
              transactionProcessDescrip="on the car details"
              propWhiteSpace="pre-wrap"
            />
            <div className="sell-cards">
              <img className="home-1-icon" alt="" src="../home-1.svg" />
              <div className="doorstep-pickup-parent">
                <b className="doorstep-pickup">Doorstep Pickup</b>
                <div className="we-have-verified2">{`We will verify the entered truck details, papers at your home pick up the truck & transfer the money`}</div>
              </div>
            </div>
          </div>
        </div>
        <FAQsContainer
          truckQuestions="What’s the process of picking up my truck?"
          truckDeliveryQuestions={`Is there any extra fee for the checkup and pickup of my old truck>`}
          truckDeliveryFAQs="How to avail home-delivery for the ordered trucks?"
          propHeight="733px"
          propTop="77px"
          propTop1="180px"
        />
        <div className="need-help2">
          <div className="need-help-with-container2">
            <span>
              <b>Need help with anything?</b>
            </span>
            <span className="mail-us-your-queries-at-helpc2">
              <span>{` `}</span>
              <span className="mail-us-your2">{`Mail us your queries `}</span>
              <span className="at2">at</span>
              <span className="span6">{` `}</span>
              <span className="selling">help@cavalo.in</span>
              <span className="span6">{` `}</span>
              <span className="at2">{`or call us at `}</span>
              <span className="selling">{`1800 190 1321 `}</span>
              <span>and we'll be happy to assist!</span>
            </span>
          </div>
        </div>
        <FooterContainer
          copyrightText="© Copyright 2021, All Rights Reserved"
          appStoreImageUrl="../app-store1.svg"
          googlePlayImageUrl="../google-play-logo2.svg"
          getItOnImageUrl="../get-it-on2.svg"
          googlePlayLogoImageUrl="../google-play2.svg"
          instagramImageUrl="../instagram-black1.svg"
          twitterImageUrl="../twitter-black1.svg"
          propZIndex="unset"
        />
      </div>
      <img
        className="conference-call-2-icon2"
        alt=""
        src="../conferencecall-22.svg"
      />
      <FrameComponent1
        groupImageUrl="../group6.svg"
        frameImageUrl="../frame30.svg"
        frameImageUrls="../frame31.svg"
        propLeft="calc(50% - 720.5px)"
      />
      <img className="sell-page-2-child" alt="" src="../group-48097578.svg" />
    </div>
  );
};

export default SellPage2;
