import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./Header.css";

type HeaderType = {
  groupSvgUrl?: string;
  frameSvgUrl?: string;
  frameSvgUrl1?: string;
  frameSvgUrl2?: string;

  /** Style props */
  groupPosition?: Property.Position;
  groupTop?: Property.Top;
  groupLeft?: Property.Left;
};

const Header: FunctionComponent<HeaderType> = ({
  groupSvgUrl,
  frameSvgUrl,
  frameSvgUrl1,
  frameSvgUrl2,
  groupPosition,
  groupTop,
  groupLeft,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      position: groupPosition,
      top: groupTop,
      left: groupLeft,
    };
  }, [groupPosition, groupTop, groupLeft]);

  return (
    <div className="frame-parent26" style={frameDivStyle}>
      <div className="group-group">
        <img className="group-icon" alt="" src={groupSvgUrl} />
        <div className="frame-parent27">
          <img className="frame-icon10" alt="" src={frameSvgUrl} />
          <div className="select-city">Select City</div>
          <img className="frame-icon10" alt="" src={frameSvgUrl1} />
        </div>
      </div>
      <div className="search-by-model-type-name-parent">
        <div className="search-by-model">Search by Model, Type, Name...</div>
        <img className="frame-icon10" alt="" src={frameSvgUrl2} />
      </div>
      <div className="frame-parent28">
        <div className="frame-parent29">
          <div className="about-wrapper">
            <div className="select-city">About</div>
          </div>
          <div className="about-wrapper">
            <div className="select-city">Auction Portal</div>
          </div>
        </div>
        <div className="frame-parent30">
          <div className="login-wrapper">
            <div className="select-city">Login</div>
          </div>
          <div className="sign-up-wrapper">
            <b className="search-by-model">Sign Up</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
