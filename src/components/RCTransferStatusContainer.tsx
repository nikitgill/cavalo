import { FunctionComponent } from "react";
import ContainerCard from "../components/ContainerCard";
import "./RCTransferStatusContainer.css";

const RCTransferStatusContainer: FunctionComponent = () => {
  return (
    <div className="rc-transfer-landing3">
      <div className="breadcrumbs-group">
        <div className="breadcrumbs4">
          <div className="tabs4">
            <div className="breadcrumb-button-base21">
              <img className="home-icon4" alt="" src="../home2.svg" />
            </div>
            <img
              className="chevron-right-icon17"
              alt=""
              src="../chevronright.svg"
            />
            <img
              className="chevron-right-icon18"
              alt=""
              src="../chevronright.svg"
            />
            <div className="breadcrumb-button-base22">
              <div className="text19">Programming</div>
            </div>
            <div className="breadcrumb-button-base22">
              <div className="text19">...</div>
            </div>
            <img
              className="chevron-right-icon18"
              alt=""
              src="../chevronright.svg"
            />
            <div className="breadcrumb-button-base24">
              <div className="text21">RC Transfer Status</div>
            </div>
          </div>
        </div>
        <div className="check-your-rc-transfer-status-parent">
          <div className="check-your-rc-container">
            <span>{`Check your `}</span>
            <span className="rc-transfer">RC Transfer</span>
            <span> Status</span>
          </div>
          <div className="at-cavalo-we-understand-that-parent">
            <div className="the-policy-provides-container">
              At Cavalo, we understand that transferring ownership of a truck
              can be a daunting task. That's why we've made the process quick
              and easy for you. Simply fill the form, provide the necessary
              details and documents, and we'll handle the rest. With Cavalo, you
              can trust that your truck's ownership transfer will be hassle-free
              and efficient. So why wait? Transfer your truck's ownership with
              Cavalo today
            </div>
            <div className="the-policy-provides-container">
              <p className="the-policy-provides-you-multif">
                <span>
                  The policy provides you multifold benefits once you sell your
                  truck with us. For
                </span>
              </p>
              <p className="more-details-on-the-same-read">
                <span>{`more details on the same, read the `}</span>
                <span className="faqs2">FAQs</span>
                <span className="or">{` or `}</span>
                <span className="faqs2">Contact Us!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent121">
        <div className="login-to-check-rc-transfer-sta-wrapper">
          <b className="login-to-check">Login To Check RC Transfer Status</b>
        </div>
        <div className="frame-parent122">
          <div className="frame-parent123">
            <div className="frame-parent124">
              <img className="frame-icon36" alt="" src="../frame37.svg" />
              <div className="enter-mobile-number">Enter Mobile Number</div>
            </div>
            <div className="frame-parent124">
              <img className="frame-icon36" alt="" src="../frame38.svg" />
              <div className="enter-mobile-number">Enter Password</div>
            </div>
          </div>
          <div className="frame-parent126">
            <div className="verify-continue-to-login-wrapper">
              <b className="login-to-check">{`Verify & Continue to Login`}</b>
            </div>
            <div className="by-clicking-login-container">
              <span className="by-clicking-login">{`By clicking ‘Login’, you agree to our `}</span>
              <span className="terms-conditions1">{`Terms & Conditions`}</span>
            </div>
          </div>
        </div>
      </div>
      <img className="vector-icon" alt="" src="../vector-215.svg" />
      <img
        className="rc-transfer-landing-child1"
        alt=""
        src="../vector-216.svg"
      />
      <img
        className="rc-transfer-landing-child2"
        alt=""
        src="../vector-217.svg"
      />
      <div className="frame-parent127">
        <ContainerCard
          supportText="../flatcoloriconscustomersupport.svg"
          assistanceText={`Quick & Fast Assistance`}
          legalSupportText="At every step till the RC Transfer process is complete, we are here to help."
          propJustifyContent="center"
          propWidth="69px"
          propWidth1="146px"
        />
        <div className="frame-child51" />
        <ContainerCard
          supportText="../flatcoloriconsreading.svg"
          assistanceText="Full-Fledged Legal Support"
          legalSupportText="In any rare scenario fith issue in the process we are here with Full Legal Support."
          propJustifyContent="flex-start"
          propWidth="64px"
          propWidth1="161px"
        />
        <div className="frame-child51" />
        <ContainerCard
          supportText="../flatcoloriconssalesperformance.svg"
          assistanceText="All Finances Covered"
          legalSupportText="For any expenses incurred due to challan, or an accident with the vehicle."
          propWidth="64px"
          propWidth1="153px"
        />
      </div>
    </div>
  );
};

export default RCTransferStatusContainer;
