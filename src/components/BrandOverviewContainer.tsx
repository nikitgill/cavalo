import { FunctionComponent } from "react";
import FeaturesContainer from "../components/FeaturesContainer";
import "./BrandOverviewContainer.css";

const BrandOverviewContainer: FunctionComponent = () => {
  return (
    <div className="browse-by-brand7">
      <div className="breadcrumbs2">
        <div className="tabs2">
          <div className="breadcrumb-button-base12">
            <img className="home-icon2" alt="" src="../home.svg" />
          </div>
          <img
            className="chevron-right-icon10"
            alt=""
            src="../chevronright.svg"
          />
          <img
            className="chevron-right-icon11"
            alt=""
            src="../chevronright.svg"
          />
          <div className="breadcrumb-button-base13">
            <div className="text10">Programming</div>
          </div>
          <div className="breadcrumb-button-base13">
            <div className="text10">...</div>
          </div>
          <img
            className="chevron-right-icon11"
            alt=""
            src="../chevronright.svg"
          />
          <div className="breadcrumb-button-base15">
            <div className="text12">Trucks In New Delhi</div>
          </div>
          <img
            className="chevron-right-icon10"
            alt=""
            src="../chevronright.svg"
          />
          <div className="breadcrumb-button-base16">
            <div className="text12">Ferguson 241 DL</div>
          </div>
        </div>
      </div>
      <div className="frame-parent70">
        <div className="frame-wrapper10">
          <div className="group-container">
            <img className="frame-child19" alt="" src="../group-3.svg" />
            <img className="frame-child19" alt="" src="../group-4.svg" />
          </div>
        </div>
        <div className="frame-parent71">
          <img className="frame-child21" alt="" src="../frame-1000001782.svg" />
          <img
            className="frame-child22"
            alt=""
            src="../frame-1000001783@2x.png"
          />
          <img
            className="frame-child22"
            alt=""
            src="../frame-1000001783@2x.png"
          />
          <img
            className="frame-child22"
            alt=""
            src="../frame-1000001783@2x.png"
          />
          <img className="frame-child21" alt="" src="../frame-1000001787.svg" />
          <img
            className="frame-child22"
            alt=""
            src="../frame-1000001786@2x.png"
          />
        </div>
      </div>
      <div className="browse-by-brand-child2" />
      <div className="details-tab-parent">
        <div className="details-tab">
          <div className="frame-parent72">
            <div className="overview-wrapper">
              <b className="kms">Overview</b>
            </div>
            <div className="features-and-specs-wrapper">
              <div className="features-and-specs">Features and Specs</div>
            </div>
            <div className="report-wrapper">
              <div className="features-and-specs">Report</div>
            </div>
            <div className="frame-child27" />
          </div>
          <div className="frame-parent73">
            <div className="frame-parent74">
              <div className="frame-parent75">
                <div className="make-year-wrapper">
                  <div className="features-and-specs">Make Year</div>
                </div>
                <div className="mar-2019-wrapper">
                  <b className="kms">Mar 2019</b>
                </div>
              </div>
              <div className="frame-parent75">
                <div className="make-year-wrapper">
                  <div className="features-and-specs">KM Driven</div>
                </div>
                <div className="mar-2019-wrapper">
                  <b className="kms">36,207 KMs</b>
                </div>
              </div>
              <div className="frame-parent75">
                <div className="make-year-wrapper">
                  <div className="features-and-specs">Insurance Validity</div>
                </div>
                <div className="mar-2019-wrapper">
                  <b className="kms">May 2027</b>
                </div>
              </div>
            </div>
            <div className="frame-parent78">
              <div className="frame-parent75">
                <div className="make-year-wrapper">
                  <div className="features-and-specs">Registration Year</div>
                </div>
                <div className="mar-2019-wrapper">
                  <b className="kms">Mar 2019</b>
                </div>
              </div>
              <div className="frame-parent75">
                <div className="make-year-wrapper">
                  <div className="features-and-specs">Transmission Type</div>
                </div>
                <div className="mar-2019-wrapper">
                  <b className="kms">Automatic</b>
                </div>
              </div>
              <div className="frame-parent75">
                <div className="make-year-wrapper">
                  <div className="features-and-specs">Insurance Type</div>
                </div>
                <div className="mar-2019-wrapper">
                  <b className="kms">Comprehensive</b>
                </div>
              </div>
            </div>
            <div className="frame-parent82">
              <div className="frame-parent75">
                <div className="make-year-wrapper">
                  <div className="features-and-specs">Fuel Type</div>
                </div>
                <div className="mar-2019-wrapper">
                  <b className="kms">Diesel</b>
                </div>
              </div>
              <div className="frame-parent75">
                <div className="make-year-wrapper">
                  <div className="features-and-specs">No. of Owner</div>
                </div>
                <div className="mar-2019-wrapper">
                  <b className="kms">Second Owner</b>
                </div>
              </div>
              <div className="frame-parent75">
                <div className="make-year-wrapper">
                  <div className="features-and-specs">RTO</div>
                </div>
                <div className="mar-2019-wrapper">
                  <b className="kms">MH49</b>
                </div>
              </div>
            </div>
            <img className="frame-child28" alt="" src="../line-5.svg" />
            <div className="frame-child29" />
          </div>
        </div>
        <FeaturesContainer
          featuresAndSpecsText={`Features & Specs`}
          mileageAndEngineText="Mileage (ARAI)"
          inspectionReportText="10.98 kmpl"
          torqueAndTyreConditionTex="Max Torque"
          fuelTankCapacityText="700 nm"
          cylindersAndDriveTrainTex="Cylinders"
          interiorConditionText="6 Units"
          fuelTankCapacityText2="Fuel Tank Capacity"
          fuelTankCapacityText3="80 Litres"
          seatingCapacityText="Seating Capacity "
          peopleText="3 People"
          transmissionText="6 Speed (6F + 1R)"
          powerAndMechanicalText="Power"
          powerText="500 HP"
          loadCapacityText="Load Capacity"
          maxTorqueText="25 Ton"
          complianceAndRTOText="Compilance"
          bS6AndMH49Text="BS6"
          propBorderRadius="8px"
          propLeft="315px"
        />
        <FeaturesContainer
          featuresAndSpecsText="Inspection Report"
          mileageAndEngineText="Engine (51-75%) "
          inspectionReportText="Good "
          torqueAndTyreConditionTex="Tyre Condition "
          fuelTankCapacityText="Good "
          cylindersAndDriveTrainTex="Drive Train"
          interiorConditionText="Excellent"
          fuelTankCapacityText2="Interior"
          fuelTankCapacityText3="Excellent "
          seatingCapacityText="Body Structure"
          peopleText="Good "
          transmissionText="Comprehensive"
          powerAndMechanicalText="Mechanical"
          powerText="Average"
          loadCapacityText="Exterior"
          maxTorqueText="Good "
          complianceAndRTOText="RTO"
          bS6AndMH49Text="MH49"
          propBorderRadius="0px 0px 8px 8px"
          propLeft="307px"
        />
        <div className="get-behind-the-wheel-of-your-d-parent">
          <b className="get-behind-the-container">
            <span>{`Get behind the wheel of your dream truck with our `}</span>
            <span className="hassle-free-emi-options">
              hassle-free EMI options!
            </span>
          </b>
          <div className="frame-parent86">
            <div className="know-more-group">
              <b className="kms">Know More</b>
              <img className="frame-icon24" alt="" src="../frame20.svg" />
            </div>
            <div className="frame-parent87">
              <img className="frame-icon24" alt="" src="../frame21.svg" />
              <b className="kms">Contact Us</b>
            </div>
          </div>
          <img className="group-icon3" alt="" src="../group3.svg" />
          <img className="group-icon4" alt="" src="../group4.svg" />
          <b className="get-it-financed">GET IT FINANCED</b>
        </div>
      </div>
    </div>
  );
};

export default BrandOverviewContainer;
