import { FunctionComponent } from "react";
import "./CalculatorContainer.css";

const CalculatorContainer: FunctionComponent = () => {
  return (
    <div className="group-div">
      <div className="frame-parent116">
        <div className="frame-parent117">
          <div className="brand-parent">
            <div className="brand">Brand</div>
            <img className="frame-icon33" alt="" src="../frame32.svg" />
          </div>
          <div className="year-wrapper">
            <div className="brand">Year</div>
          </div>
          <div className="year-wrapper">
            <div className="brand">State</div>
          </div>
          <div className="year-wrapper">
            <div className="brand">Model</div>
          </div>
          <div className="year-wrapper">
            <div className="brand">Variant</div>
          </div>
          <div className="year-wrapper">
            <div className="calculate">Kms Driven</div>
          </div>
        </div>
        <div className="calculate-wrapper">
          <b className="calculate">Calculate</b>
        </div>
      </div>
      <div className="frame-wrapper16">
        <div className="frame-parent118">
          <img className="frame-icon34" alt="" src="../frame33.svg" />
          <b className="sell-truck2">Sell Truck</b>
        </div>
      </div>
      <div className="frame-wrapper17">
        <div className="frame-parent119">
          <img className="frame-icon34" alt="" src="../frame34.svg" />
          <b className="sell-truck2">Buy Truck</b>
        </div>
      </div>
    </div>
  );
};

export default CalculatorContainer;
