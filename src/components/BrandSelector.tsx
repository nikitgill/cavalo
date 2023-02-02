import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./BrandSelector.css";

type BrandSelectorType = {
  brandName?: string;
  brandSearchText?: string;
  stateName?: string;
  brandImageUrl?: string;
  stateSearchText?: string;
  brandStateImageUrl?: string;
  brandStateName?: string;
  brandStateImageUrl2?: string;
  brandStateName2?: string;
  brandStateImageUrl3?: string;
  brandStateName3?: string;
  frameImageUrl?: string;
  brandStateName4?: string;
  frameImageUrl57?: string;
  brandName5?: string;

  /** Style props */
  propTop?: Property.Top;
};

const BrandSelector: FunctionComponent<BrandSelectorType> = ({
  brandName,
  brandSearchText,
  stateName,
  brandImageUrl,
  stateSearchText,
  brandStateImageUrl,
  brandStateName,
  brandStateImageUrl2,
  brandStateName2,
  brandStateImageUrl3,
  brandStateName3,
  frameImageUrl,
  brandStateName4,
  frameImageUrl57,
  brandName5,
  propTop,
}) => {
  const frameDiv8Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="brands-parent" style={frameDiv8Style}>
      <b className="brands">{brandName}</b>
      <div className="search-top-brands-parent">
        <div className="search-top-brands">{brandSearchText}</div>
        <img className="frame-icon44" alt="" src={stateName} />
      </div>
      <div className="frame-parent133">
        <div className="frame-parent134">
          <img className="frame-icon45" alt="" src={brandImageUrl} />
          <div className="ferguson-group">
            <div className="brands">{stateSearchText}</div>
            <div className="div25">(18)</div>
          </div>
        </div>
        <div className="frame-parent134">
          <img className="frame-icon45" alt="" src={brandStateImageUrl} />
          <div className="ferguson-group">
            <div className="brands">{brandStateName}</div>
            <div className="div25">(4)</div>
          </div>
        </div>
        <div className="frame-parent134">
          <img className="frame-icon45" alt="" src={brandStateImageUrl2} />
          <div className="ferguson-group">
            <div className="brands">{brandStateName2}</div>
            <div className="div25">(6)</div>
          </div>
        </div>
        <div className="frame-parent134">
          <img className="frame-icon45" alt="" src={brandStateImageUrl3} />
          <div className="ferguson-group">
            <div className="brands">{brandStateName3}</div>
            <div className="div25">(32)</div>
          </div>
        </div>
        <div className="frame-parent134">
          <img className="frame-icon45" alt="" src={frameImageUrl} />
          <div className="ferguson-group">
            <div className="brands">{brandStateName4}</div>
            <div className="div25">(9)</div>
          </div>
        </div>
        <div className="frame-parent134">
          <img className="frame-icon45" alt="" src={frameImageUrl57} />
          <div className="ferguson-group">
            <div className="brands">{brandName5}</div>
            <div className="div25">(41)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSelector;
