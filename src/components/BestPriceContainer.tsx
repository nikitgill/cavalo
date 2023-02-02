import { FunctionComponent } from "react";
import "./BestPriceContainer.css";

const BestPriceContainer: FunctionComponent = () => {
  return (
    <div className="why-buy-from-us-cards2">
      <img
        className="money-transfer-2-icon"
        alt=""
        src="../moneytransfer-2.svg"
      />
      <div className="best-price-in-the-market-parent">
        <b className="best-price-in-the-container">
          <p className="best-price">Best Price</p>
          <p className="in-the-market">In The Market</p>
        </b>
        <div className="shop-with-confidence-container">
          <p className="best-price">{`Shop with confidence on our platform knowing that you `}</p>
          <p className="in-the-market">
            will get the best possible deal available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestPriceContainer;
