import { FunctionComponent } from "react";
import Ferguson241DITonnerContainer from "../components/Ferguson241DITonnerContainer";
import ContainerForm from "../components/ContainerForm";
import FooterContainer from "../components/FooterContainer";
import Header from "../components/Header";
import "./FinanceApp1.css";

const FinanceApp1: FunctionComponent = () => {
  return (
    <div className="finance-app1">
      <div className="main3">
        <div className="browse-by-brand1">
          <div className="breadcrumbs1">
            <div className="tabs1">
              <div className="breadcrumb-button-base6">
                <img className="home-icon1" alt="" src="../home4.svg" />
              </div>
              <img
                className="chevron-right-icon5"
                alt=""
                src="../chevronright.svg"
              />
              <img
                className="chevron-right-icon6"
                alt=""
                src="../chevronright.svg"
              />
              <div className="breadcrumb-button-base7">
                <div className="text5">Programming</div>
              </div>
              <div className="breadcrumb-button-base7">
                <div className="text5">...</div>
              </div>
              <img
                className="chevron-right-icon6"
                alt=""
                src="../chevronright.svg"
              />
              <div className="breadcrumb-button-base9">
                <div className="text7">Trucks In New Delhi</div>
              </div>
              <img
                className="chevron-right-icon5"
                alt=""
                src="../chevronright.svg"
              />
              <div className="breadcrumb-button-base9">
                <div className="text7">Ferguson 241 DL</div>
              </div>
              <img
                className="chevron-right-icon5"
                alt=""
                src="../chevronright.svg"
              />
              <div className="breadcrumb-button-base11">
                <div className="text7">Book Now</div>
              </div>
            </div>
          </div>
          <div className="browse-by-brand-item" />
          <Ferguson241DITonnerContainer
            frameSvgUrl="../frame98.svg"
            frameSvgUrl94="../frame99.svg"
          />
          <div className="frame-parent19">
            <div className="line-group">
              <div className="line-div" />
              <div className="frame-child4" />
              <div className="frame-parent20">
                <img
                  className="frame-child5"
                  alt=""
                  src="../frame-10000017523.svg"
                />
                <div className="payment-method1">Payment method</div>
              </div>
              <div className="frame-parent21">
                <div className="frame-child6" />
                <div className="verify-details1">Verify details</div>
              </div>
              <div className="frame-parent22">
                <div className="frame-child6" />
                <div className="confirm1">Confirm</div>
              </div>
            </div>
            <div className="frame-parent23">
              <div className="frame-parent24">
                <div className="book-your-truck-parent">
                  <div className="book-your-truck">Book your truck</div>
                  <div className="select-a-payment">
                    Select a payment method to book your vehicle
                  </div>
                </div>
                <div className="frame-parent25">
                  <ContainerForm
                    frameText="../frame100.svg"
                    frameText100="../frame-1000001837.svg"
                    paymentOptionText="Pay in full-cash"
                    propWidth1="29px"
                  />
                  <ContainerForm
                    frameText="../frame101.svg"
                    frameText100="../frame102.svg"
                    paymentOptionText="Request finance"
                    propWidth="236px"
                    propWidth1="24px"
                    propOverflow="hidden"
                    propFlex="1"
                  />
                </div>
              </div>
              <div
                className="select-method-wrapper"
                onClick={() => window.open("./finance-app", "_self")}
              >
                <b className="select-method">Select method</b>
              </div>
            </div>
          </div>
        </div>
        <div className="need-help8">
          <div className="select-method">
            <span>
              <b>Need help with buying?</b>
            </span>
            <span className="mail-us-your-queries-at-helpc8">
              <span>{` `}</span>
              <span className="mail-us-your8">{`Mail us your queries `}</span>
              <span className="at8">at</span>
              <span className="span25">{` `}</span>
              <span className="helpcavaloin8">help@cavalo.in</span>
              <span className="span25">{` `}</span>
              <span className="at8">{`or call us at `}</span>
              <span className="helpcavaloin8">{`1800 190 1321 `}</span>
              <span>and we'll be happy to assist!</span>
            </span>
          </div>
        </div>
        <FooterContainer
          copyrightText="© Copyright 2022, All Rights Reserved"
          appStoreImageUrl="../app-store1.svg"
          googlePlayImageUrl="../google-play-logo8.svg"
          getItOnImageUrl="../get-it-on8.svg"
          googlePlayLogoImageUrl="../google-play8.svg"
          instagramImageUrl="../instagram-black1.svg"
          twitterImageUrl="../twitter-black1.svg"
          propZIndex="unset"
        />
      </div>
      <Header
        groupSvgUrl="../group12.svg"
        frameSvgUrl="../frame103.svg"
        frameSvgUrl1="../frame104.svg"
        frameSvgUrl2="../frame105.svg"
        groupPosition="absolute"
        groupTop="0px"
        groupLeft="calc(50% - 720px)"
      />
    </div>
  );
};

export default FinanceApp1;
