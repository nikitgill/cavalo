import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./ContainerCard.css";

type ContainerCardType = {
  supportText?: string;
  assistanceText?: string;
  legalSupportText?: string;

  /** Style props */
  propJustifyContent?: Property.JustifyContent;
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
};

const ContainerCard: FunctionComponent<ContainerCardType> = ({
  supportText,
  assistanceText,
  legalSupportText,
  propJustifyContent,
  propWidth,
  propWidth1,
}) => {
  const frameDiv6Style: CSS.Properties = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
    };
  }, [propJustifyContent]);

  const flatColorIconscustomerSuppStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const atEveryStepStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className="flat-color-iconscustomer-supp-parent"
      style={frameDiv6Style}
    >
      <img
        className="flat-color-iconscustomer-supp"
        alt=""
        src={supportText}
        style={flatColorIconscustomerSuppStyle}
      />
      <div className="quick-fast-assistance-parent">
        <b className="quick-fast">{assistanceText}</b>
        <div className="at-every-step" style={atEveryStepStyle}>
          {legalSupportText}
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
