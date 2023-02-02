import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./BuyFromUsContainer.css";

type BuyFromUsContainerType = {
  transactionProcessText?: string;
  buyingSellingText?: string;
  quickEasyBuyingSellingTex?: string;
  sellingProcessText?: string;
  transactionProcessDescrip?: string;

  /** Style props */
  propWhiteSpace?: Property.WhiteSpace;
};

const BuyFromUsContainer: FunctionComponent<BuyFromUsContainerType> = ({
  transactionProcessText,
  buyingSellingText,
  quickEasyBuyingSellingTex,
  sellingProcessText,
  transactionProcessDescrip,
  propWhiteSpace,
}) => {
  const quickEasyContainerStyle: CSS.Properties = useMemo(() => {
    return {
      whiteSpace: propWhiteSpace,
    };
  }, [propWhiteSpace]);

  return (
    <div className="why-buy-from-us-cards3">
      <img className="in-transit-1-icon" alt="" src={transactionProcessText} />
      <div className="faster-buying-selling-parent">
        <b className="faster-buying">{buyingSellingText}</b>
        <div className="quick-easy-container" style={quickEasyContainerStyle}>
          <p className="quick-easy">{quickEasyBuyingSellingTex}</p>
          <p className="quick-easy">{sellingProcessText}</p>
          <p className="efficient-convenient">{transactionProcessDescrip}</p>
        </div>
      </div>
    </div>
  );
};

export default BuyFromUsContainer;
