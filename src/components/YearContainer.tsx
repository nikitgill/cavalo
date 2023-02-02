import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./YearContainer.css";

type YearContainerType = {
  yearDriven?: string;
  frameImageUrl?: string;
  kmDriven?: string;
  frameImageUrl66?: string;
  yearRange?: string;
  frameImageUrl67?: string;
  frameImageUrl68?: string;
  kmRange?: string;
  yearRangeText?: string;
  frameImageUrl69?: string;
  yearRangeText65?: string;
  yearRangeText66?: string;
  frameImageUrl70?: string;
  yearRangeText67?: string;
  yearRangeText68?: string;

  /** Style props */
  propTop?: Property.Top;
};

const YearContainer: FunctionComponent<YearContainerType> = ({
  yearDriven,
  frameImageUrl,
  kmDriven,
  frameImageUrl66,
  yearRange,
  frameImageUrl67,
  frameImageUrl68,
  kmRange,
  yearRangeText,
  frameImageUrl69,
  yearRangeText65,
  yearRangeText66,
  frameImageUrl70,
  yearRangeText67,
  yearRangeText68,
  propTop,
}) => {
  const frameDiv9Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="year-group" style={frameDiv9Style}>
      <b className="above">{yearDriven}</b>
      <div className="frame-parent140">
        <div className="frame-parent141">
          <img className="frame-icon51" alt="" src={frameImageUrl} />
          <div className="above-parent">
            <div className="above">{kmDriven}</div>
            <div className="div31">(18)</div>
          </div>
        </div>
        <div className="frame-parent141">
          <img className="frame-icon51" alt="" src={frameImageUrl66} />
          <div className="above-parent">
            <div className="above">{yearRange}</div>
            <div className="div31">{frameImageUrl67}</div>
          </div>
        </div>
        <div className="frame-parent141">
          <img className="frame-icon51" alt="" src={frameImageUrl68} />
          <div className="above-parent">
            <div className="above">{kmRange}</div>
            <div className="div31">{yearRangeText}</div>
          </div>
        </div>
        <div className="frame-parent141">
          <img className="frame-icon51" alt="" src={frameImageUrl69} />
          <div className="above-parent">
            <div className="above">{yearRangeText65}</div>
            <div className="div31">{yearRangeText66}</div>
          </div>
        </div>
        <div className="frame-parent141">
          <img className="frame-icon51" alt="" src={frameImageUrl70} />
          <div className="above-parent">
            <div className="above">{yearRangeText67}</div>
            <div className="div31">{yearRangeText68}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearContainer;
