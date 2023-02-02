import { FunctionComponent } from "react";
import "./TruckMarketplaceHeroSectionCon.css";

const TruckMarketplaceHeroSectionCon: FunctionComponent = () => {
  return (
    <div className="hero-section1">
      <img className="bg-icon" alt="" src="../bg@2x.png" />
      <img
        className="dlbeatsnoop-10-icon"
        alt=""
        src="../dlbeatsnoop-10@2x.png"
      />
      <div className="frame-parent32">
        <div className="rectangle-parent">
          <div className="rectangle-div" />
          <div className="frame-child8" />
        </div>
        <div className="best-marketplace-for-preowned-parent">
          <div className="best-marketplace-for-container">
            <span>{`Best marketplace for `}</span>
            <span className="preowned">preowned</span>
            <span> trucks.</span>
          </div>
          <div className="get-the-best">
            Get the best value on the purchase of refurbished trucks.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckMarketplaceHeroSectionCon;
