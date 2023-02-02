import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./FeaturesContainer.css";

type FeaturesContainerType = {
  featuresAndSpecsText?: string;
  mileageAndEngineText?: string;
  inspectionReportText?: string;
  torqueAndTyreConditionTex?: string;
  fuelTankCapacityText?: string;
  cylindersAndDriveTrainTex?: string;
  interiorConditionText?: string;
  fuelTankCapacityText2?: string;
  fuelTankCapacityText3?: string;
  seatingCapacityText?: string;
  peopleText?: string;
  transmissionText?: string;
  powerAndMechanicalText?: string;
  powerText?: string;
  loadCapacityText?: string;
  maxTorqueText?: string;
  complianceAndRTOText?: string;
  bS6AndMH49Text?: string;

  /** Style props */
  propBorderRadius?: Property.BorderRadius;
  propLeft?: Property.Left;
};

const FeaturesContainer: FunctionComponent<FeaturesContainerType> = ({
  featuresAndSpecsText,
  mileageAndEngineText,
  inspectionReportText,
  torqueAndTyreConditionTex,
  fuelTankCapacityText,
  cylindersAndDriveTrainTex,
  interiorConditionText,
  fuelTankCapacityText2,
  fuelTankCapacityText3,
  seatingCapacityText,
  peopleText,
  transmissionText,
  powerAndMechanicalText,
  powerText,
  loadCapacityText,
  maxTorqueText,
  complianceAndRTOText,
  bS6AndMH49Text,
  propBorderRadius,
  propLeft,
}) => {
  const frameDiv2Style: CSS.Properties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const frameDiv3Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="features-specs-parent">
      <b className="features-specs">{featuresAndSpecsText}</b>
      <div className="frame-parent57" style={frameDiv2Style}>
        <div className="frame-parent58">
          <div className="frame-parent59">
            <div className="mileage-arai-wrapper">
              <div className="mileage-arai">{mileageAndEngineText}</div>
            </div>
            <div className="kmpl-wrapper">
              <b className="features-specs">{inspectionReportText}</b>
            </div>
          </div>
          <div className="frame-parent59">
            <div className="mileage-arai-wrapper">
              <div className="mileage-arai">{torqueAndTyreConditionTex}</div>
            </div>
            <div className="kmpl-wrapper">
              <b className="features-specs">{fuelTankCapacityText}</b>
            </div>
          </div>
          <div className="frame-parent59">
            <div className="mileage-arai-wrapper">
              <div className="mileage-arai">{cylindersAndDriveTrainTex}</div>
            </div>
            <div className="kmpl-wrapper">
              <b className="features-specs">{interiorConditionText}</b>
            </div>
          </div>
        </div>
        <div className="frame-parent62" style={frameDiv3Style}>
          <div className="frame-parent59">
            <div className="mileage-arai-wrapper">
              <div className="mileage-arai">{fuelTankCapacityText2}</div>
            </div>
            <div className="kmpl-wrapper">
              <b className="features-specs">{fuelTankCapacityText3}</b>
            </div>
          </div>
          <div className="frame-parent59">
            <div className="mileage-arai-wrapper">
              <div className="mileage-arai">{seatingCapacityText}</div>
            </div>
            <div className="kmpl-wrapper">
              <b className="features-specs">{peopleText}</b>
            </div>
          </div>
          <div className="frame-parent59">
            <div className="mileage-arai-wrapper">
              <div className="mileage-arai">Transmission</div>
            </div>
            <div className="kmpl-wrapper">
              <b className="features-specs">{transmissionText}</b>
            </div>
          </div>
        </div>
        <div className="frame-parent66">
          <div className="frame-parent59">
            <div className="mileage-arai-wrapper">
              <div className="mileage-arai">{powerAndMechanicalText}</div>
            </div>
            <div className="kmpl-wrapper">
              <b className="features-specs">{powerText}</b>
            </div>
          </div>
          <div className="frame-parent59">
            <div className="mileage-arai-wrapper">
              <div className="mileage-arai">{loadCapacityText}</div>
            </div>
            <div className="kmpl-wrapper">
              <b className="features-specs">{maxTorqueText}</b>
            </div>
          </div>
          <div className="frame-parent59">
            <div className="mileage-arai-wrapper">
              <div className="mileage-arai">{complianceAndRTOText}</div>
            </div>
            <div className="kmpl-wrapper">
              <b className="features-specs">{bS6AndMH49Text}</b>
            </div>
          </div>
        </div>
        <img className="line-icon" alt="" src="../line-5.svg" />
        <div className="frame-child18" />
      </div>
    </div>
  );
};

export default FeaturesContainer;
