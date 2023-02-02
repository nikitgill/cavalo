import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./TruckContainer.css";

type TruckContainerType = {
  tractorModelName?: string;

  /** Style props */
  propBackgroundImage?: Property.BackgroundImage;
  propColor?: Property.Color;
};

const TruckContainer: FunctionComponent<TruckContainerType> = ({
  tractorModelName,
  propBackgroundImage,
  propColor,
}) => {
  const frameDiv1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="component-2">
      <div className="frame-parent37">
        <div className="frame-wrapper4" style={frameDiv1Style}>
          <div className="frame-parent38">
            <div className="tractor-wrapper">
              <div className="tractor">Tractor</div>
            </div>
            <div className="tractor-wrapper">
              <div className="tractor">petrol</div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper5">
          <div className="frame-parent39">
            <div className="tata-restro-56-tempo-parent">
              <div className="tata-restro-56">{tractorModelName}</div>
              <div className="km-parent">
                <div className="km">4500 Km</div>
                <div className="frame-child9" />
                <div className="km">50 HP</div>
                <div className="frame-child9" />
                <div className="km">Detail 3</div>
                <div className="frame-child9" />
                <div className="km">Detail 4</div>
              </div>
            </div>
            <div className="parent">
              <div className="div7">₹3,00,000</div>
              <div className="inclusive-of-all">Inclusive of all taxes</div>
            </div>
            <div className="div8" style={divStyle}>
              ₹3,29,000
            </div>
          </div>
        </div>
      </div>
      <div className="know-more-wrapper">
        <b className="know-more">Know more</b>
      </div>
    </div>
  );
};

export default TruckContainer;
