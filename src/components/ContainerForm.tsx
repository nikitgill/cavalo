import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./ContainerForm.css";

type ContainerFormType = {
  frameText?: string;
  frameText100?: string;
  paymentOptionText?: string;

  /** Style props */
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
  propOverflow?: Property.Overflow;
  propFlex?: Property.Flex;
};

const ContainerForm: FunctionComponent<ContainerFormType> = ({
  frameText,
  frameText100,
  paymentOptionText,
  propWidth,
  propWidth1,
  propOverflow,
  propFlex,
}) => {
  const frameDiv11Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameIcon1Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
      overflow: propOverflow,
    };
  }, [propWidth1, propOverflow]);

  const payInFullCashStyle: CSS.Properties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className="frame-parent162">
      <img className="frame-icon61" alt="" src={frameText} />
      <div className="frame-parent163">
        <div className="frame-parent164" style={frameDiv11Style}>
          <img
            className="frame-child86"
            alt=""
            src={frameText100}
            style={frameIcon1Style}
          />
          <b className="pay-in-full-cash" style={payInFullCashStyle}>
            {paymentOptionText}
          </b>
        </div>
        <div className="at-netus-dapibus1">
          At netus dapibus porttitor vestibulum ac nisl ultricies. Scelerisque
          nibh ipsum quam curabitur varius blandit cursus tellus ipsum.
          ellentesque neque ullamcorper ornare.
        </div>
      </div>
    </div>
  );
};

export default ContainerForm;
