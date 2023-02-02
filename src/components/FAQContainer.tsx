import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./FAQContainer.css";

type FAQContainerType = {
  /** Style props */
  propZIndex?: Property.ZIndex;
};

const FAQContainer: FunctionComponent<FAQContainerType> = ({ propZIndex }) => {
  const browseByBrand1Style: CSS.Properties = useMemo(() => {
    return {
      zIndex: propZIndex,
    };
  }, [propZIndex]);

  return (
    <div className="browse-by-brand6" style={browseByBrand1Style}>
      <div className="frequently-asked-questions1">
        Frequently Asked Questions
      </div>
      <div className="frame-parent53">
        <div className="frame-wrapper6">
          <div className="frame-parent54">
            <div className="how-can-i-sell-a-truck-group">
              <b className="how-can-i1">How can I sell a truck?</b>
              <img
                className="akar-iconscircle-chevron-down1"
                alt=""
                src="../akariconscirclechevrondown.svg"
              />
            </div>
            <div className="lorem-ipsum-dolor4">
              Lorem ipsum dolor sit amet consectetur. Et semper ullamcorper urna
              convallis at adipiscing eget. Eu eu aliquam sagittis velit
              malesuada dui. Tortor fusce eget eu in. Quis lacus nascetur enim
              nulla dictum eget et laoreet. Cursus eu cursus nisl convallis ut
              in scelerisque a mattis. Facilisi morbi placerat mi donec lectus
              ultrices risus. Libero sit amet interdum dolor sed. Viverra ut
              elementum pellentesque et. Laoreet vestibulum id sed tristique
              vulputate nam elit pretium duis. Dui augue ultrices vulputate
              gravida pellentesque. Tristique neque faucibus augue diam urna cum
              mi nulla ipsum.
            </div>
          </div>
        </div>
        <div className="frame-wrapper7">
          <div className="how-do-you-ensure-the-quality-parent">
            <b className="how-do-you">
              How do you ensure the quality of refurbished trucks?
            </b>
            <img
              className="akar-iconscircle-chevron-down1"
              alt=""
              src="../akariconscirclechevrondown1.svg"
            />
          </div>
        </div>
        <div className="frame-wrapper7">
          <div className="how-do-you-ensure-the-quality-parent">
            <b className="how-do-you">
              How to avail home-delivery for the ordered trucks?
            </b>
            <img
              className="akar-iconscircle-chevron-down1"
              alt=""
              src="../akariconscirclechevrondown1.svg"
            />
          </div>
        </div>
        <div className="frame-wrapper7">
          <div className="how-do-you-ensure-the-quality-parent">
            <b className="how-do-you">
              Can I contact Cavalo-experts in case I have any query?
            </b>
            <img
              className="akar-iconscircle-chevron-down1"
              alt=""
              src="../akariconscirclechevrondown1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQContainer;
