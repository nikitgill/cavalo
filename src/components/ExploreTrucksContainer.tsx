import { FunctionComponent } from "react";
import DITonnContainer from "../components/DITonnContainer";
import "./ExploreTrucksContainer.css";

const ExploreTrucksContainer: FunctionComponent = () => {
  return (
    <div className="process4">
      <div className="explore-similar-trucks">Explore Similar Trucks</div>
      <div className="product-cards-parent">
        <div className="product-cards">
          <div className="main5">
            <div className="pic1">
              <div className="tags1">
                <div className="tractor-frame">
                  <div className="tractor2">Tractor</div>
                </div>
                <div className="tractor-frame">
                  <div className="tractor2">petrol</div>
                </div>
              </div>
            </div>
            <div className="content1">
              <div className="text15">
                <div className="title1">
                  <div className="ferguson-241-di1">Ferguson 241 DI Tonn..</div>
                  <div className="km-container">
                    <div className="km2">4500 Km</div>
                    <div className="frame-child33" />
                    <div className="km2">50 HP</div>
                    <div className="frame-child33" />
                    <div className="km2">Detail 3</div>
                    <div className="frame-child33" />
                    <div className="km2">Detail 4</div>
                  </div>
                </div>
                <div className="price1">
                  <div className="div12">₹3,00,000</div>
                  <div className="inclusive-of-all2">
                    Inclusive of all taxes
                  </div>
                </div>
                <div className="div13">₹3,29,000</div>
              </div>
            </div>
          </div>
        </div>
        <DITonnContainer
          propLeft="calc(50% - 314.67px)"
          propBackgroundImage={`url("pic1@3x.png")`}
        />
        <DITonnContainer
          propLeft="calc(50% + 10.67px)"
          propBackgroundImage={`url("pic2@3x.png")`}
        />
        <DITonnContainer
          propLeft="calc(50% + 336px)"
          propBackgroundImage={`url("pic@3x.png")`}
        />
      </div>
    </div>
  );
};

export default ExploreTrucksContainer;
