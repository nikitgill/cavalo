import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./DI241Container.css";

type DI241ContainerType = {
  /** Style props */
  propTop?: Property.Top;
};

const DI241Container: FunctionComponent<DI241ContainerType> = ({ propTop }) => {
  const frameDiv7Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="product-cards-group" style={frameDiv7Style}>
      <div className="product-cards1">
        <div className="main6">
          <div className="pic2">
            <div className="tags3">
              <div className="tractor-wrapper1">
                <div className="tractor3">Tractor</div>
              </div>
              <div className="tractor-wrapper1">
                <div className="tractor3">petrol</div>
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="text22">
              <div className="title2">
                <div className="ferguson-241-di3">Ferguson 241 DI Tonn..</div>
                <div className="km-parent2">
                  <div className="km5">4500 Km</div>
                  <div className="frame-child53" />
                  <div className="km5">50 HP</div>
                  <div className="frame-child53" />
                  <div className="km5">Detail 3</div>
                  <div className="frame-child53" />
                  <div className="km5">Detail 4</div>
                </div>
              </div>
              <div className="price2">
                <div className="div17">₹3,00,000</div>
                <div className="inclusive-of-all4">Inclusive of all taxes</div>
              </div>
              <div className="div18">₹3,29,000</div>
            </div>
          </div>
        </div>
      </div>
      <div className="component-71">
        <div className="main6">
          <div className="pic2">
            <div className="tags3">
              <div className="tractor-wrapper1">
                <div className="tractor3">Tractor</div>
              </div>
              <div className="tractor-wrapper1">
                <div className="tractor3">petrol</div>
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="text22">
              <div className="title2">
                <div className="ferguson-241-di3">Ferguson 241 DI Tonn..</div>
                <div className="km-parent2">
                  <div className="km5">4500 Km</div>
                  <div className="frame-child53" />
                  <div className="km5">50 HP</div>
                  <div className="frame-child53" />
                  <div className="km5">Detail 3</div>
                  <div className="frame-child53" />
                  <div className="km5">Detail 4</div>
                </div>
              </div>
              <div className="price2">
                <div className="div17">₹3,00,000</div>
                <div className="inclusive-of-all4">Inclusive of all taxes</div>
              </div>
              <div className="div18">₹3,29,000</div>
            </div>
          </div>
        </div>
      </div>
      <div className="component-6">
        <div className="main6">
          <div className="pic2">
            <div className="tags3">
              <div className="tractor-wrapper1">
                <div className="tractor3">Tractor</div>
              </div>
              <div className="tractor-wrapper1">
                <div className="tractor3">petrol</div>
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="text22">
              <div className="title2">
                <div className="ferguson-241-di3">Ferguson 241 DI Tonn..</div>
                <div className="km-parent2">
                  <div className="km5">4500 Km</div>
                  <div className="frame-child53" />
                  <div className="km5">50 HP</div>
                  <div className="frame-child53" />
                  <div className="km5">Detail 3</div>
                  <div className="frame-child53" />
                  <div className="km5">Detail 4</div>
                </div>
              </div>
              <div className="price2">
                <div className="div17">₹3,00,000</div>
                <div className="inclusive-of-all4">Inclusive of all taxes</div>
              </div>
              <div className="div18">₹3,29,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DI241Container;
