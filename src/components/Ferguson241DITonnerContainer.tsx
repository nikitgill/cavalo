import { FunctionComponent } from "react";
import "./Ferguson241DITonnerContainer.css";

type Ferguson241DITonnerContainerType = {
  frameSvgUrl?: string;
  frameSvgUrl94?: string;
};

const Ferguson241DITonnerContainer: FunctionComponent<
  Ferguson241DITonnerContainerType
> = ({ frameSvgUrl, frameSvgUrl94 }) => {
  return (
    <div className="frame-parent155">
      <div className="frame-parent156">
        <div className="frame-parent157">
          <div className="ferguson-241-di-tonner-group">
            <div className="emi-calculator">{`Ferguson 241 DI Tonner `}</div>
            <div className="tags7">
              <div className="truck-container">
                <div className="truck1">truck</div>
              </div>
              <div className="truck-container">
                <div className="truck1">petrol</div>
              </div>
            </div>
          </div>
          <div className="km-parent6">
            <div className="km9">4500 Km</div>
            <div className="frame-child81" />
            <div className="km9">50 HP</div>
            <div className="frame-child81" />
            <div className="km9">Detail 3</div>
            <div className="frame-child81" />
            <div className="km9">Detail 4</div>
          </div>
        </div>
        <div className="frame-parent158">
          <img className="frame-icon59" alt="" src={frameSvgUrl} />
          <div className="test-drive-available1">Test Drive Available</div>
        </div>
        <div className="frame-parent159">
          <img className="frame-icon59" alt="" src={frameSvgUrl94} />
          <div className="test-drive-available1">Paharganj, New Delhi</div>
        </div>
        <div className="frame-child84" />
        <div className="frame-parent160">
          <div className="parent4">
            <div className="div39">₹3,00,000</div>
            <div className="div40">₹3,29,000</div>
          </div>
          <div className="inclusive-of-all8">Inclusive of all taxes</div>
        </div>
        <img
          className="frame-child85"
          alt=""
          src="../frame-10000017811@2x.png"
        />
      </div>
      <div className="frame-parent161">
        <div className="emi-calculator-parent">
          <div className="emi-calculator">EMI Calculator</div>
          <div className="pellentesque-nisi-venenatis">
            Pellentesque nisi venenatis malesuada tortor feugiat. Praesent diam
            netus massa elementum.
          </div>
        </div>
        <div className="calculate-emi-wrapper">
          <b className="calculate-emi">Calculate EMI</b>
        </div>
      </div>
    </div>
  );
};

export default Ferguson241DITonnerContainer;
