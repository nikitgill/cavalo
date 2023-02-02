import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./BrandContainer.css";

type BrandContainerType = {
  /** Style props */
  propZIndex?: Property.ZIndex;
};

const BrandContainer: FunctionComponent<BrandContainerType> = ({
  propZIndex,
}) => {
  const browseByBrandStyle: CSS.Properties = useMemo(() => {
    return {
      zIndex: propZIndex,
    };
  }, [propZIndex]);

  return (
    <div className="browse-by-brand5" style={browseByBrandStyle}>
      <div className="happy-customers-served-container1">
        <span>{`3000+ `}</span>
        <span className="happy-customers1">{`Happy Customers `}</span>
        <span>Served By Cavalo</span>
      </div>
      <div className="frame-parent49">
        <div className="frame-parent50">
          <img
            className="frame-child12"
            alt=""
            src="../frame-10000016743@2x.png"
          />
          <div className="lorem-ipsum-dolor-sit-amet-con-parent">
            <div className="lorem-ipsum-dolor-container">
              <p className="lorem-ipsum-dolor1">{`Lorem ipsum dolor sit amet consectetur. Mauris cursus purus aliquet phasellus `}</p>
              <p className="sapin-enim-nisi">
                sapin enim nisi dignissim lectus. Tempor scelerisque cum urna
                purus etiam mi aliquam dictum. Ut tempor vel mauris commodo
                nulla risus. Amet duis vel augue elementum tristique neque in.
              </p>
            </div>
            <div className="samvrant-parent">
              <b className="samvrant">Samvrant</b>
              <div className="frame-child13" />
              <b className="samvrant">Gurgaon</b>
            </div>
          </div>
        </div>
        <div className="frame-parent51">
          <img
            className="frame-child14"
            alt=""
            src="../frame-10000016744@2x.png"
          />
          <div className="lorem-ipsum-dolor-sit-amet-con-parent">
            <div className="lorem-ipsum-dolor-container">
              <p className="lorem-ipsum-dolor1">{`Lorem ipsum dolor sit amet consectetur. Mauris cursus purus aliquet phasellus `}</p>
              <p className="sapin-enim-nisi">
                sapin enim nisi dignissim lectus. Tempor scelerisque cum urna
                purus etiam mi aliquam dictum. Ut tempor vel mauris commodo
                nulla risus. Amet duis vel augue elementum tristique neque in.
              </p>
            </div>
            <div className="samvrant-parent">
              <b className="samvrant">Aman</b>
              <div className="frame-child13" />
              <b className="samvrant">Dehradun</b>
            </div>
          </div>
        </div>
        <div className="frame-parent51">
          <img
            className="frame-child14"
            alt=""
            src="../frame-10000016745@2x.png"
          />
          <div className="lorem-ipsum-dolor-sit-amet-con-parent">
            <div className="lorem-ipsum-dolor-container">
              <p className="lorem-ipsum-dolor1">{`Lorem ipsum dolor sit amet consectetur. Mauris cursus purus aliquet phasellus `}</p>
              <p className="sapin-enim-nisi">
                sapin enim nisi dignissim lectus. Tempor scelerisque cum urna
                purus etiam mi aliquam dictum. Ut tempor vel mauris commodo
                nulla risus. Amet duis vel augue elementum tristique neque in.
              </p>
            </div>
            <div className="samvrant-parent">
              <b className="samvrant">Yash</b>
              <div className="frame-child13" />
              <b className="samvrant">Jaipur</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandContainer;
