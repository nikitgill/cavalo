import { FunctionComponent } from "react";
import Ferguson241DITonnerContainer from "../components/Ferguson241DITonnerContainer";
import FooterContainer from "../components/FooterContainer";
import Header from "../components/Header";
import "./FinanceApp.css";

const FinanceApp: FunctionComponent = () => {
  return (
    <div className="finance-app">
      <div className="main2">
        <div className="browse-by-brand">
          <div className="breadcrumbs">
            <div className="tabs">
              <div className="breadcrumb-button-base">
                <img className="home-icon" alt="" src="../home4.svg" />
              </div>
              <img
                className="chevron-right-icon"
                alt=""
                src="../chevronright.svg"
              />
              <img
                className="chevron-right-icon1"
                alt=""
                src="../chevronright.svg"
              />
              <div className="breadcrumb-button-base1">
                <div className="text">Programming</div>
              </div>
              <div className="breadcrumb-button-base1">
                <div className="text">...</div>
              </div>
              <img
                className="chevron-right-icon1"
                alt=""
                src="../chevronright.svg"
              />
              <div className="breadcrumb-button-base3">
                <div className="text2">Trucks In New Delhi</div>
              </div>
              <img
                className="chevron-right-icon"
                alt=""
                src="../chevronright.svg"
              />
              <div className="breadcrumb-button-base3">
                <div className="text2">Ferguson 241 DL</div>
              </div>
              <img
                className="chevron-right-icon"
                alt=""
                src="../chevronright.svg"
              />
              <div className="breadcrumb-button-base5">
                <div className="text2">Book Now</div>
              </div>
            </div>
          </div>
          <div className="browse-by-brand-child" />
          <div className="frame-parent7">
            <div className="line-parent">
              <div className="frame-item" />
              <div className="frame-inner" />
              <div className="frame-parent8">
                <img
                  className="frame-child1"
                  alt=""
                  src="../frame-10000017522.svg"
                />
                <div className="payment-method">Payment method</div>
              </div>
              <div className="frame-parent9">
                <img
                  className="frame-child1"
                  alt=""
                  src="../frame-10000017523.svg"
                />
                <div className="verify-details">Verify details</div>
              </div>
              <div className="frame-parent10">
                <div className="frame-child3" />
                <div className="confirm">Confirm</div>
              </div>
            </div>
            <div className="frame-parent11">
              <div className="frame-parent12">
                <div className="verify-kyc-details-parent">
                  <div className="verify-kyc-details">Verify KYC details</div>
                  <div className="specify-your-pan">
                    Specify your PAN details to get financing details
                  </div>
                </div>
                <div className="frame-parent13">
                  <div className="frame-parent14">
                    <img className="home-icon" alt="" src="../frame89.svg" />
                    <div className="pan-number">PAN Number</div>
                  </div>
                  <div className="frame-parent14">
                    <img className="home-icon" alt="" src="../frame90.svg" />
                    <div className="pan-number">Full Name</div>
                  </div>
                  <div className="frame-parent16">
                    <div className="frame-parent17">
                      <img className="home-icon" alt="" src="../frame91.svg" />
                      <div className="pan-number">Date of birth</div>
                    </div>
                    <div className="frame-parent17">
                      <img className="home-icon" alt="" src="../frame92.svg" />
                      <div className="pan-number">unknown</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="get-loan-qoute-wrapper">
                <b className="get-loan-qoute">Get loan qoute</b>
              </div>
            </div>
          </div>
          <Ferguson241DITonnerContainer
            frameSvgUrl="../frame93.svg"
            frameSvgUrl94="../frame94.svg"
          />
        </div>
        <div className="need-help7">
          <div className="get-loan-qoute">
            <span>
              <b>Need help with buying?</b>
            </span>
            <span className="mail-us-your-queries-at-helpc7">
              <span>{` `}</span>
              <span className="mail-us-your7">{`Mail us your queries `}</span>
              <span className="at7">at</span>
              <span className="span22">{` `}</span>
              <span className="helpcavaloin7">help@cavalo.in</span>
              <span className="span22">{` `}</span>
              <span className="at7">{`or call us at `}</span>
              <span className="helpcavaloin7">{`1800 190 1321 `}</span>
              <span>and we'll be happy to assist!</span>
            </span>
          </div>
        </div>
        <FooterContainer
          copyrightText="© Copyright 2022, All Rights Reserved"
          appStoreImageUrl="../app-store1.svg"
          googlePlayImageUrl="../google-play-logo7.svg"
          getItOnImageUrl="../get-it-on7.svg"
          googlePlayLogoImageUrl="../google-play7.svg"
          instagramImageUrl="../instagram-black1.svg"
          twitterImageUrl="../twitter-black1.svg"
          propZIndex="unset"
        />
      </div>
      <Header
        groupSvgUrl="../group11.svg"
        frameSvgUrl="../frame95.svg"
        frameSvgUrl1="../frame96.svg"
        frameSvgUrl2="../frame97.svg"
        groupPosition="absolute"
        groupTop="0px"
        groupLeft="calc(50% - 720px)"
      />
    </div>
  );
};

export default FinanceApp;
