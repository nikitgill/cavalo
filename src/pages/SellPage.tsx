import { FunctionComponent } from "react";
import BuyFromUsContainer from "../components/BuyFromUsContainer";
import CalculatorContainer from "../components/CalculatorContainer";
import ContainerFilter from "../components/ContainerFilter";
import PickupProcessContainer from "../components/PickupProcessContainer";
import FooterContainer from "../components/FooterContainer";
import FrameComponent1 from "../components/FrameComponent1";
import "./SellPage.css";

const SellPage: FunctionComponent = () => {
  return (
    <div className="sell-page">
      <div className="rc-transfer-page1">
        <div className="rc-transfer-landing">
          <div className="process3">
            <div className="how-does-selling-container">
              <span>{`How does `}</span>
              <span className="selling1">selling</span>
              <span> work?</span>
            </div>
            <div className="sell-cards-group">
              <BuyFromUsContainer
                transactionProcessText="../viewdetails-11.svg"
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
              <div className="sell-cards1">
                <img className="home-1-icon1" alt="" src="../home-1.svg" />
                <div className="doorstep-pickup-group">
                  <b className="doorstep-pickup1">Doorstep Pickup</b>
                  <div className="we-have-verified3">{`We will verify the entered truck details, papers at your home pick up the truck & transfer the money`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-section">
            <img className="image-64-icon" alt="" src="../image-64@2x.png" />
            <div className="sell-your-old-truck-get-its-parent">
              <div className="sell-your-old-container">
                <p className="sell-your-old-truck">
                  <span>Sell your old truck</span>
                </p>
                <p className="get-its-best-value">
                  <span>{`& get its `}</span>
                  <span className="best-value">best value.</span>
                </p>
              </div>
              <div className="get-an-accurate">
                Get an accurate estimate for the market value of your truck
              </div>
            </div>
          </div>
          <CalculatorContainer />
          <div className="happy-customers-served-by-cava-parent">
            <div className="happy-customers-served-container">
              <span>200+</span>
              <span className="span9">{` `}</span>
              <span className="best-value">{`Happy Customers `}</span>
              <span>Served By Cavalo</span>
            </div>
            <div className="frame-parent4">
              <ContainerFilter
                frame1000001674="../frame-10000016743@2x.png"
                samvrant="Samvrant"
                gurgaon="Gurgaon"
                propMaxWidth="100%"
                propOverflow="hidden"
              />
              <ContainerFilter
                frame1000001674="../frame-10000016744@2x.png"
                samvrant="Aman"
                gurgaon="Dehradun"
                propMaxWidth="unset"
                propOverflow="unset"
                propWidth="338px"
              />
              <ContainerFilter
                frame1000001674="../frame-10000016745@2x.png"
                samvrant="Yash"
                gurgaon="Jaipur"
                propMaxWidth="unset"
                propOverflow="unset"
                propWidth="338px"
              />
            </div>
          </div>
          <div className="frequently-asked-questions">
            Frequently Asked Questions
          </div>
          <div className="frame-parent5">
            <div className="frame-wrapper3">
              <div className="frame-parent6">
                <div className="how-can-i-sell-a-truck-parent">
                  <b className="how-can-i">How can I sell a truck?</b>
                  <img
                    className="akar-iconscircle-chevron-down"
                    alt=""
                    src="../akariconscirclechevrondown.svg"
                  />
                </div>
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet consectetur. Et semper ullamcorper
                  urna convallis at adipiscing eget. Eu eu aliquam sagittis
                  velit malesuada dui. Tortor fusce eget eu in. Quis lacus
                  nascetur enim nulla dictum eget et laoreet. Cursus eu cursus
                  nisl convallis ut in scelerisque a mattis. Facilisi morbi
                  placerat mi donec lectus ultrices risus. Libero sit amet
                  interdum dolor sed. Viverra ut elementum pellentesque et.
                  Laoreet vestibulum id sed tristique vulputate nam elit pretium
                  duis. Dui augue ultrices vulputate gravida pellentesque.
                  Tristique neque faucibus augue diam urna cum mi nulla ipsum.
                </div>
              </div>
            </div>
            <PickupProcessContainer pickupProcessText="What’s the process of picking up my truck?" />
            <PickupProcessContainer
              pickupProcessText={`Is there any extra fee for the checkup and pickup of my old truck>`}
            />
            <PickupProcessContainer pickupProcessText="How to avail home-delivery for the ordered trucks?" />
          </div>
          <img
            className="rc-transfer-landing-child"
            alt=""
            src="../group-480975781.svg"
          />
        </div>
        <div className="need-help3">
          <div className="need-help-with-container3">
            <span>
              <b>Need help with anything?</b>
            </span>
            <span className="mail-us-your-queries-at-helpc3">
              <span>{` `}</span>
              <span className="mail-us-your3">{`Mail us your queries `}</span>
              <span className="at3">at</span>
              <span className="span9">{` `}</span>
              <span className="selling1">help@cavalo.in</span>
              <span className="span9">{` `}</span>
              <span className="at3">{`or call us at `}</span>
              <span className="selling1">{`1800 190 1321 `}</span>
              <span>and we'll be happy to assist!</span>
            </span>
          </div>
        </div>
        <FooterContainer
          copyrightText="© Copyright 2021, All Rights Reserved"
          appStoreImageUrl="../app-store1.svg"
          googlePlayImageUrl="../google-play-logo3.svg"
          getItOnImageUrl="../get-it-on3.svg"
          googlePlayLogoImageUrl="../google-play3.svg"
          instagramImageUrl="../instagram-black1.svg"
          twitterImageUrl="../twitter-black1.svg"
          propZIndex="unset"
        />
      </div>
      <FrameComponent1
        groupImageUrl="../group7.svg"
        frameImageUrl="../frame35.svg"
        frameImageUrls="../frame36.svg"
        propLeft="calc(50% - 720px)"
      />
    </div>
  );
};

export default SellPage;
