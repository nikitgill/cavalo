import { FunctionComponent } from "react";
import BrandFilter from "../components/BrandFilter";
import BrandContainer from "../components/BrandContainer";
import FAQsContainer from "../components/FAQsContainer";
import FooterContainer from "../components/FooterContainer";
import PriceRangeContainer from "../components/PriceRangeContainer";
import Header from "../components/Header";
import "./ExplorePage.css";

const ExplorePage: FunctionComponent = () => {
  return (
    <div className="explore-page">
      <div className="main1">
        <BrandFilter />
        <BrandContainer propZIndex="unset" />
        <FAQsContainer
          truckQuestions="How do you ensure the quality of refurbished trucks?"
          truckDeliveryQuestions="How to avail home-delivery for the ordered trucks?"
          truckDeliveryFAQs="Can I contact Cavalo-experts in case I have any query?"
          propHeight="764px"
          propBackgroundColor="#fff"
          propTop="64px"
          propTop1="167px"
        />
        <div className="need-help6">
          <div className="need-help-with-container6">
            <span>
              <b>Need help with buying?</b>
            </span>
            <span className="mail-us-your-queries-at-helpc6">
              <span>{` `}</span>
              <span className="mail-us-your6">{`Mail us your queries `}</span>
              <span className="at6">at</span>
              <span className="span19">{` `}</span>
              <span className="helpcavaloin6">help@cavalo.in</span>
              <span className="span19">{` `}</span>
              <span className="at6">{`or call us at `}</span>
              <span className="helpcavaloin6">{`1800 190 1321 `}</span>
              <span>and we'll be happy to assist!</span>
            </span>
          </div>
        </div>
        <FooterContainer
          copyrightText="© Copyright 2022, All Rights Reserved"
          appStoreImageUrl="../app-store.svg"
          googlePlayImageUrl="../google-play-logo6.svg"
          getItOnImageUrl="../get-it-on1.svg"
          googlePlayLogoImageUrl="../google-play6.svg"
          instagramImageUrl="../instagram-black.svg"
          twitterImageUrl="../twitter-black.svg"
          propZIndex="unset"
        />
      </div>
      <PriceRangeContainer />
      <Header
        groupSvgUrl="../group10.svg"
        frameSvgUrl="../frame86.svg"
        frameSvgUrl1="../frame87.svg"
        frameSvgUrl2="../frame88.svg"
        groupPosition="absolute"
        groupTop="0px"
        groupLeft="calc(50% - 720px)"
      />
    </div>
  );
};

export default ExplorePage;
