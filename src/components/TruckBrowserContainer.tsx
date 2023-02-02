import { FunctionComponent } from "react";
import "./TruckBrowserContainer.css";

const TruckBrowserContainer: FunctionComponent = () => {
  return (
    <div className="browse-by-brand2">
      <div className="browse-by-brand-inner" />
      <div className="how-to-buy-container">
        <p className="how-to">How to</p>
        <p className="buy-your-next">buy your next truck on Cavalo?</p>
      </div>
      <div className="frame-parent33">
        <div className="frame-parent34">
          <div className="wrapper">
            <div className="div4">1</div>
          </div>
          <div className="find-the-perfect-container">
            <span className="find-the">{`Find the `}</span>
            <span className="perfect-truck">perfect truck</span>
            <span className="find-the"> for you through our website/app.</span>
          </div>
        </div>
        <div className="frame-parent34">
          <div className="wrapper">
            <div className="div5">2</div>
          </div>
          <div className="test-drive-the-container">
            <span className="perfect-truck">Test drive</span>
            <span className="find-the">{` the selected truck & check for any irregularities for free.`}</span>
          </div>
        </div>
        <div className="frame-parent34">
          <div className="wrapper">
            <div className="div5">3</div>
          </div>
          <div className="find-the-perfect-container">
            <span className="perfect-truck">Buy it in your own way</span>
            <span className="find-the">
              , you can pay in full or have it financed.
            </span>
          </div>
        </div>
      </div>
      <img className="image-83-icon" alt="" src="../image-83@2x.png" />
      <img className="browse-by-brand-child1" alt="" src="../group-13@2x.png" />
    </div>
  );
};

export default TruckBrowserContainer;
