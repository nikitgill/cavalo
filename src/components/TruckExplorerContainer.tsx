import { FunctionComponent } from "react";
import TruckContainer from "../components/TruckContainer";
import "./TruckExplorerContainer.css";

const TruckExplorerContainer: FunctionComponent = () => {
  return (
    <div className="explore-trucks">
      <div className="frame-parent40">
        <div className="explore-amazing-trucks-parent">
          <div className="explore-amazing-trucks-container">
            <span>{`Explore `}</span>
            <span className="amazing">amazing</span>
            <span> trucks</span>
          </div>
          <div className="view-all-parent">
            <b className="view-all">View all</b>
            <img className="frame-icon20" alt="" src="../frame16.svg" />
          </div>
        </div>
        <div
          className="component-2-parent"
          onClick={() => window.open("./product-description-page", "_blank")}
        >
          <TruckContainer
            tractorModelName="Ferguson 241 DI Tonn.."
            propBackgroundImage={`url("frame-1000001674@3x.png")`}
            propColor="#7d808e"
          />
          <TruckContainer
            tractorModelName="Tata Restro 56 Tempo "
            propBackgroundImage={`url("frame-10000016741@3x.png")`}
            propColor="unset"
          />
          <TruckContainer
            tractorModelName="Mahindra T161 Truck"
            propBackgroundImage={`url("frame-10000016742@3x.png")`}
            propColor="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default TruckExplorerContainer;
