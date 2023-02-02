import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./FAQsContainer.css";

type FAQsContainerType = {
  truckQuestions?: string;
  truckDeliveryQuestions?: string;
  truckDeliveryFAQs?: string;

  /** Style props */
  propHeight?: Property.Height;
  propBackgroundColor?: Property.BackgroundColor;
  propTop?: Property.Top;
  propTop1?: Property.Top;
};

const FAQsContainer: FunctionComponent<FAQsContainerType> = ({
  truckQuestions,
  truckDeliveryQuestions,
  truckDeliveryFAQs,
  propHeight,
  propBackgroundColor,
  propTop,
  propTop1,
}) => {
  const fAQsStyle: CSS.Properties = useMemo(() => {
    return {
      height: propHeight,
      backgroundColor: propBackgroundColor,
    };
  }, [propHeight, propBackgroundColor]);

  const frequentlyAskedQuestionsStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const frameDiv4Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  return (
    <div className="faqs1" style={fAQsStyle}>
      <div
        className="frequently-asked-questions2"
        style={frequentlyAskedQuestionsStyle}
      >
        Frequently Asked Questions
      </div>
      <div className="frame-parent109" style={frameDiv4Style}>
        <div className="frame-wrapper12">
          <div className="frame-parent110">
            <div className="how-can-i-sell-a-truck-container">
              <b className="how-can-i2">How can I sell a truck?</b>
              <img
                className="akar-iconscircle-chevron-down5"
                alt=""
                src="../akariconscirclechevrondown.svg"
              />
            </div>
            <div className="lorem-ipsum-dolor5">
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
        <div className="frame-wrapper13">
          <div className="whats-the-process-of-picking-parent">
            <b className="whats-the-process">{truckQuestions}</b>
            <img
              className="akar-iconscircle-chevron-down5"
              alt=""
              src="../akariconscirclechevrondown1.svg"
            />
          </div>
        </div>
        <div className="frame-wrapper13">
          <div className="whats-the-process-of-picking-parent">
            <b className="whats-the-process">{truckDeliveryQuestions}</b>
            <img
              className="akar-iconscircle-chevron-down5"
              alt=""
              src="../akariconscirclechevrondown1.svg"
            />
          </div>
        </div>
        <div className="frame-wrapper13">
          <div className="whats-the-process-of-picking-parent">
            <b className="whats-the-process">{truckDeliveryFAQs}</b>
            <img
              className="akar-iconscircle-chevron-down5"
              alt=""
              src="../akariconscirclechevrondown1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsContainer;
