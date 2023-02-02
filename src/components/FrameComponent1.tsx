import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./FrameComponent1.css";

type FrameComponent1Type = {
  groupImageUrl?: string;
  frameImageUrl?: string;
  frameImageUrls?: string;

  /** Style props */
  propLeft?: Property.Left;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  groupImageUrl,
  frameImageUrl,
  frameImageUrls,
  propLeft,
}) => {
  const frameDiv5Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="frame-parent111" style={frameDiv5Style}>
      <div className="group-parent1">
        <img className="group-icon5" alt="" src={groupImageUrl} />
        <div className="frame-parent112">
          <img className="frame-icon31" alt="" src={frameImageUrl} />
          <div className="select-city1">Select City</div>
          <img className="frame-icon31" alt="" src={frameImageUrls} />
        </div>
      </div>
      <div className="frame-parent113">
        <div className="frame-parent114">
          <div className="about-container">
            <div className="select-city1">About</div>
          </div>
          <div className="about-container">
            <div className="select-city1">Auction Portal</div>
          </div>
        </div>
        <div className="frame-parent115">
          <div className="login-container">
            <div className="select-city1">Login</div>
          </div>
          <div className="sign-up-container">
            <b className="sign-up1">Sign Up</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
