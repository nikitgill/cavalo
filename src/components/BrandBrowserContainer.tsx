import { FunctionComponent } from "react";
import "./BrandBrowserContainer.css";

const BrandBrowserContainer: FunctionComponent = () => {
  return (
    <div className="browse-by-brand4">
      <div className="sell-your-old">Sell your old trucks</div>
      <div className="frame-parent45">
        <div className="frame-parent46">
          <div className="cavalo-deals-parent">
            <b className="cavalo-deals">CAVALO DEALS</b>
            <div className="get-best-value-container">
              <span>
                <b>Get</b>
              </span>
              <span className="best-practices">
                <span>{` `}</span>
                <span className="best-value2">best value</span>
              </span>
              <span>
                <b>{` for your truck in just `}</b>
                <span className="mins">5 mins!</span>
              </span>
            </div>
          </div>
          <div className="frame-parent47">
            <img className="frame-icon22" alt="" src="../frame18.svg" />
            <b className="get-estimate">Get estimate</b>
          </div>
          <img className="group-icon1" alt="" src="../group1.svg" />
          <img className="group-icon2" alt="" src="../group2.svg" />
          <img className="arrow-icon" alt="" src="../arrow-2.svg" />
        </div>
        <div className="frame-parent48">
          <div className="cavalo-blogs-parent">
            <b className="cavalo-deals">CAVALO BLOGS</b>
            <div className="best-practices-to-container">
              <span className="best-practices">{`Best practices `}</span>
              <b>to know when selling your truck!</b>
            </div>
          </div>
          <div className="know-more-parent">
            <b className="get-estimate">Know more</b>
            <img className="frame-icon23" alt="" src="../frame19.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandBrowserContainer;
