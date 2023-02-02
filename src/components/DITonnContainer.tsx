import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./DITonnContainer.css";

type DITonnContainerType = {
  /** Style props */
  propLeft?: Property.Left;
  propBackgroundImage?: Property.BackgroundImage;
};

const DITonnContainer: FunctionComponent<DITonnContainerType> = ({
  propLeft,
  propBackgroundImage,
}) => {
  const component7Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const picStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className="component-7" style={component7Style}>
      <div className="main4">
        <div className="pic" style={picStyle}>
          <div className="tags">
            <div className="tractor-container">
              <div className="tractor1">Tractor</div>
            </div>
            <div className="tractor-container">
              <div className="tractor1">petrol</div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="text14">
            <div className="title">
              <div className="ferguson-241-di">Ferguson 241 DI Tonn..</div>
              <div className="km-group">
                <div className="km1">4500 Km</div>
                <div className="frame-child30" />
                <div className="km1">50 HP</div>
                <div className="frame-child30" />
                <div className="km1">Detail 3</div>
                <div className="frame-child30" />
                <div className="km1">Detail 4</div>
              </div>
            </div>
            <div className="price">
              <div className="div10">₹3,00,000</div>
              <div className="inclusive-of-all1">Inclusive of all taxes</div>
            </div>
            <div className="div11">₹3,29,000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DITonnContainer;
