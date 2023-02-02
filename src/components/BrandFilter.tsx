import { FunctionComponent } from "react";
import DITonnContainer from "../components/DITonnContainer";
import DI241Container from "../components/DI241Container";
import "./BrandFilter.css";

const BrandFilter: FunctionComponent = () => {
  return (
    <div className="browse-by-brand8">
      <div className="product-cards-container">
        <div className="product-cards2">
          <div className="main9">
            <div className="pic5">
              <div className="tags6">
                <div className="tractor-wrapper4">
                  <div className="tractor6">Tractor</div>
                </div>
                <button className="frame-button">
                  <div className="petrol7">petrol</div>
                </button>
              </div>
            </div>
            <div className="content5">
              <div className="text25">
                <div className="title5">
                  <div className="ferguson-241-di6">Ferguson 241 DI Tonn..</div>
                  <div className="km-parent5">
                    <div className="km8">4500 Km</div>
                    <div className="frame-child62" />
                    <div className="km8">50 HP</div>
                    <div className="frame-child62" />
                    <div className="km8">Detail 3</div>
                    <div className="frame-child62" />
                    <div className="km8">Detail 4</div>
                  </div>
                </div>
                <div className="price5">
                  <div className="div23">₹3,00,000</div>
                  <div className="inclusive-of-all7">
                    Inclusive of all taxes
                  </div>
                </div>
                <div className="div24">₹3,29,000</div>
              </div>
            </div>
          </div>
        </div>
        <DITonnContainer
          propLeft="calc(50% - 152px)"
          propBackgroundImage={`url("pic@3x.png")`}
        />
        <DITonnContainer
          propLeft="calc(50% + 173px)"
          propBackgroundImage={`url("pic@3x.png")`}
        />
      </div>
      <DI241Container propTop="1741px" />
      <DI241Container propTop="1086px" />
      <DI241Container propTop="2137px" />
      <DI241Container propTop="294px" />
      <div className="browse-by-brand-child3" />
      <div className="breadcrumbs-container">
        <div className="breadcrumbs5">
          <div className="tabs5">
            <div className="breadcrumb-button-base25">
              <img className="home-icon5" alt="" src="../home.svg" />
            </div>
            <img
              className="chevron-right-icon20"
              alt=""
              src="../chevronright.svg"
            />
            <img
              className="chevron-right-icon21"
              alt=""
              src="../chevronright.svg"
            />
            <div className="breadcrumb-button-base26">
              <div className="text26">Programming</div>
            </div>
            <div className="breadcrumb-button-base26">
              <div className="text26">...</div>
            </div>
            <img
              className="chevron-right-icon21"
              alt=""
              src="../chevronright.svg"
            />
            <div className="breadcrumb-button-base28">
              <div className="text28">Trucks In New Delhi</div>
            </div>
          </div>
        </div>
        <div className="frame-parent128">
          <div className="frame-parent129">
            <div className="frame-parent130">
              <img className="frame-icon38" alt="" src="../frame45.svg" />
              <div className="clear-all">Clear All</div>
            </div>
            <div className="lac-20-lac-parent">
              <div className="clear-all">1 Lac - 20 Lac</div>
              <img className="frame-icon38" alt="" src="../frame46.svg" />
            </div>
            <div className="lac-20-lac-parent">
              <div className="clear-all">Ferguson</div>
              <img className="frame-icon38" alt="" src="../frame47.svg" />
            </div>
            <div className="lac-20-lac-parent">
              <div className="clear-all">{`40,000 Km & Less`}</div>
              <img className="frame-icon38" alt="" src="../frame48.svg" />
            </div>
            <div className="lac-20-lac-parent">
              <div className="clear-all">New</div>
              <img className="frame-icon38" alt="" src="../frame49.svg" />
            </div>
          </div>
          <div className="frame-parent131">
            <div className="parent3">
              <b className="sort-by">18</b>
              <div className="trucks-available-in">
                Trucks available in New Delhi
              </div>
            </div>
            <div className="frame-parent132">
              <img className="frame-icon43" alt="" src="../frame50.svg" />
              <div className="sort-by">Sort By</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandFilter;
