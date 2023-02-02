import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./OwnerForm.css";

type OwnerFormType = {
  fuelTypeText?: string;
  fuelTypeImageUrl?: string;
  fuelTypeOptionText?: string;
  fuelTypeOptionImageUrl?: string;
  fuelTypeSecondHandText?: string;
  fuelTypeRefurbishedText?: string;
  fuelTypeCNGText?: string;

  /** Style props */
  propTop?: Property.Top;
};

const OwnerForm: FunctionComponent<OwnerFormType> = ({
  fuelTypeText,
  fuelTypeImageUrl,
  fuelTypeOptionText,
  fuelTypeOptionImageUrl,
  fuelTypeSecondHandText,
  fuelTypeRefurbishedText,
  fuelTypeCNGText,
  propTop,
}) => {
  const frameDiv10Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="owner-parent" style={frameDiv10Style}>
      <b className="owner">{fuelTypeText}</b>
      <div className="frame-parent146">
        <div className="frame-parent147">
          <img className="frame-icon56" alt="" src={fuelTypeImageUrl} />
          <div className="new-group">
            <div className="owner">{fuelTypeOptionText}</div>
            <div className="div36">(18)</div>
          </div>
        </div>
        <div className="frame-parent147">
          <img className="frame-icon56" alt="" src={fuelTypeOptionImageUrl} />
          <div className="new-group">
            <div className="owner">{fuelTypeSecondHandText}</div>
            <div className="div36">(18)</div>
          </div>
        </div>
        <div className="frame-parent147">
          <img className="frame-icon56" alt="" src={fuelTypeRefurbishedText} />
          <div className="new-group">
            <div className="owner">{fuelTypeCNGText}</div>
            <div className="div36">(18)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerForm;
