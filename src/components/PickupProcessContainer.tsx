import { FunctionComponent } from "react";
import "./PickupProcessContainer.css";

type PickupProcessContainerType = {
  pickupProcessText?: string;
};

const PickupProcessContainer: FunctionComponent<PickupProcessContainerType> = ({
  pickupProcessText,
}) => {
  return (
    <div className="frame-wrapper18">
      <div className="whats-the-process-of-picking-group">
        <b className="whats-the-process1">{pickupProcessText}</b>
        <img
          className="akar-iconscircle-chevron-down9"
          alt=""
          src="../akariconscirclechevrondown1.svg"
        />
      </div>
    </div>
  );
};

export default PickupProcessContainer;
