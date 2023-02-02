import { FunctionComponent } from "react";
import RCTransferStatusContainer from "../components/RCTransferStatusContainer";
import FooterContainer from "../components/FooterContainer";
import Header from "../components/Header";
import "./RCTransferPage.css";

const RCTransferPage: FunctionComponent = () => {
  return (
    <div className="rc-transfer-page2">
      <div className="rc-transfer-page3">
        <RCTransferStatusContainer />
        <div className="need-help4">
          <div className="need-help-with-container4">
            <span>
              <b>Need help with anything?</b>
            </span>
            <span className="mail-us-your-queries-at-helpc4">
              <span>{` `}</span>
              <span className="mail-us-your4">{`Mail us your queries `}</span>
              <span className="at4">at</span>
              <span className="span13">{` `}</span>
              <span className="helpcavaloin4">help@cavalo.in</span>
              <span className="span13">{` `}</span>
              <span className="at4">{`or call us at `}</span>
              <span className="helpcavaloin4">{`1800 190 1321 `}</span>
              <span>and we'll be happy to assist!</span>
            </span>
          </div>
        </div>
        <FooterContainer
          copyrightText="© Copyright 2021, All Rights Reserved"
          appStoreImageUrl="../app-store1.svg"
          googlePlayImageUrl="../google-play-logo4.svg"
          getItOnImageUrl="../get-it-on2.svg"
          googlePlayLogoImageUrl="../google-play2.svg"
          instagramImageUrl="../instagram-black1.svg"
          twitterImageUrl="../twitter-black1.svg"
          propZIndex="unset"
        />
      </div>
      <Header
        groupSvgUrl="../group8.svg"
        frameSvgUrl="../frame39.svg"
        frameSvgUrl1="../frame40.svg"
        frameSvgUrl2="../frame41.svg"
        groupPosition="absolute"
        groupTop="0px"
        groupLeft="calc(50% - 720px)"
      />
    </div>
  );
};

export default RCTransferPage;
