import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./FooterContainer.css";

type FooterContainerType = {
  copyrightText?: string;
  appStoreImageUrl?: string;
  googlePlayImageUrl?: string;
  getItOnImageUrl?: string;
  googlePlayLogoImageUrl?: string;
  instagramImageUrl?: string;
  twitterImageUrl?: string;

  /** Style props */
  propZIndex?: Property.ZIndex;
};

const FooterContainer: FunctionComponent<FooterContainerType> = ({
  copyrightText,
  appStoreImageUrl,
  googlePlayImageUrl,
  getItOnImageUrl,
  googlePlayLogoImageUrl,
  instagramImageUrl,
  twitterImageUrl,
  propZIndex,
}) => {
  const footerStyle: CSS.Properties = useMemo(() => {
    return {
      zIndex: propZIndex,
    };
  }, [propZIndex]);

  return (
    <div className="footer" style={footerStyle}>
      <div className="copyright-2021-all-rights-res-parent">
        <div className="copyright-2021-all">{copyrightText}</div>
        <div className="image-54-parent">
          <img className="image-38-icon" alt="" src="../image-541@2x.png" />
          <img className="image-38-icon" alt="" src="../image-551@2x.png" />
          <img className="image-38-icon" alt="" src="../image-38@2x.png" />
        </div>
      </div>
      <div className="frame-parent55">
        <div className="overview-parent">
          <b className="overview">Overview</b>
          <div className="about-us-group">
            <div
              className="faqs"
              onClick={() => window.open("./about-us-page", "_self")}
            >
              About Us
            </div>
            <div className="faqs">FAQs</div>
            <div className="faqs">Privacy Policy</div>
            <div className="faqs">{`Terms & Conditions`}</div>
            <div className="faqs">Corporate Policies</div>
            <div className="faqs">Investors</div>
          </div>
        </div>
        <div className="overview-parent">
          <b className="overview">others</b>
          <div className="about-us-group">
            <div className="become-a-partner">Become a Partner</div>
            <div
              className="faqs"
              onClick={() => window.open("./rc-transfer-page", "_self")}
            >
              RC Transfer Status
            </div>
            <div className="faqs">Testimonials</div>
            <div className="faqs">Customer Care</div>
          </div>
        </div>
        <div className="overview-parent">
          <b className="overview">Connect with us</b>
          <div className="about-us-group">
            <div className="faqs">+91 9876543210</div>
            <div className="become-a-partner">support@cavalo.in</div>
            <div className="faqs">Contact Us</div>
            <div className="faqs">For Businesses</div>
            <div className="faqs">Feedback</div>
          </div>
        </div>
        <div className="overview-parent">
          <b className="overview">get our app</b>
          <div className="frame-parent56">
            <div className="apple-logo-parent">
              <img className="apple-logo-icon" alt="" src="../apple-logo.svg" />
              <div className="download-on-the-parent">
                <img
                  className="download-on-the"
                  alt=""
                  src="../download-on-the.svg"
                />
                <img className="app-store-icon" alt="" src={appStoreImageUrl} />
              </div>
            </div>
            <div className="google-play-logo-parent">
              <img
                className="google-play-logo"
                alt=""
                src={googlePlayImageUrl}
              />
              <div className="download-on-the-parent">
                <img className="get-it-on" alt="" src={getItOnImageUrl} />
                <img
                  className="google-play-icon"
                  alt=""
                  src={googlePlayLogoImageUrl}
                />
              </div>
            </div>
          </div>
          <div className="follow-us-parent">
            <b className="follow-us">Follow us</b>
            <div className="facebook-black-parent">
              <img
                className="facebook-black-icon"
                alt=""
                src="../facebook-black.svg"
              />
              <img
                className="facebook-black-icon"
                alt=""
                src={instagramImageUrl}
              />
              <img
                className="facebook-black-icon"
                alt=""
                src={twitterImageUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
