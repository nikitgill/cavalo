import { FunctionComponent } from "react";
import Header from "../components/Header";
import "./Header1.css";

const Header1: FunctionComponent = () => {
  return (
    <div className="nav-bar">
      <Header
        groupSvgUrl="../group.svg"
        frameSvgUrl="../frame.svg"
        frameSvgUrl1="../frame1.svg"
        frameSvgUrl2="../frame2.svg"
      />
      <div className="explore-by-parent">
        <div className="explore-by">Explore by</div>
        <div className="frame-parent31">
          <div className="payload-parent">
            <div className="payload">Payload</div>
            <img className="frame-icon13" alt="" src="../frame3.svg" />
          </div>
          <div className="payload-parent">
            <div className="payload">Cargo length</div>
            <img className="frame-icon13" alt="" src="../frame4.svg" />
          </div>
          <div className="payload-parent">
            <div className="payload">{`Make `}</div>
            <img className="frame-icon13" alt="" src="../frame5.svg" />
          </div>
          <div className="payload-parent">
            <div className="payload">Year</div>
            <img className="frame-icon13" alt="" src="../frame6.svg" />
          </div>
          <div className="payload-parent">
            <div className="payload">Fuel</div>
            <img className="frame-icon13" alt="" src="../frame7.svg" />
          </div>
          <div className="payload-parent">
            <div className="payload">km Driven</div>
            <img className="frame-icon13" alt="" src="../frame8.svg" />
          </div>
          <div className="payload-parent">
            <div className="payload">Transimission</div>
            <img className="frame-icon13" alt="" src="../frame9.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
