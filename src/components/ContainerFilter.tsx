import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./ContainerFilter.css";

type ContainerFilterType = {
  frame1000001674?: string;
  samvrant?: string;
  gurgaon?: string;

  /** Style props */
  propMaxWidth?: Property.MaxWidth;
  propOverflow?: Property.Overflow;
  propWidth?: Property.Width;
};

const ContainerFilter: FunctionComponent<ContainerFilterType> = ({
  frame1000001674,
  samvrant,
  gurgaon,
  propMaxWidth,
  propOverflow,
  propWidth,
}) => {
  const frameIconStyle: CSS.Properties = useMemo(() => {
    return {
      maxWidth: propMaxWidth,
      overflow: propOverflow,
      width: propWidth,
    };
  }, [propMaxWidth, propOverflow, propWidth]);

  return (
    <div className="frame-parent120">
      <img
        className="frame-child49"
        alt=""
        src={frame1000001674}
        style={frameIconStyle}
      />
      <div className="lorem-ipsum-dolor-sit-amet-con-parent1">
        <div className="lorem-ipsum-dolor-container3">
          <p className="lorem-ipsum-dolor6">{`Lorem ipsum dolor sit amet consectetur. Mauris cursus purus aliquet phasellus `}</p>
          <p className="sapin-enim-nisi3">
            sapin enim nisi dignissim lectus. Tempor scelerisque cum urna purus
            etiam mi aliquam dictum. Ut tempor vel mauris commodo nulla risus.
            Amet duis vel augue elementum tristique neque in.
          </p>
        </div>
        <div className="samvrant-group">
          <b className="samvrant1">{samvrant}</b>
          <div className="frame-child50" />
          <b className="samvrant1">{gurgaon}</b>
        </div>
      </div>
    </div>
  );
};

export default ContainerFilter;
