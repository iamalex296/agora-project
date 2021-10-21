import React from "react";
import { CardWrapper } from "../../../atoms/CardWrapper/CardWrapper";

import HouseImage from "../../../../../assets/house.png";

import "./LiveOfferingsCard.scss";
import Button from "../../../atoms/Button/Button";

const LiveOfferingsCard = () => {
  return (
    <CardWrapper cardWrapperClass="cardWrapper-box">
      <div>
        <div className="live-offerings-box">
          <h3>Live Offerings</h3>
          <p>View All</p>
        </div>

        <div>
          <img
            src={HouseImage}
            alt="house"
            style={{ borderRadius: "10px", width: "100%" }}
          />
        </div>

        <div>
          <div className="box">
            <p>Currency</p>
            <h4>USD</h4>
          </div>

          <div className="box">
            <p>Min Amount</p>
            <h4>120,200</h4>
          </div>

          <div className="box">
            <p>Max Amount</p>
            <h4>420,320</h4>
          </div>

          <div className="box">
            <p>Rase Target</p>
            <h4>10,420,320</h4>
          </div>

          <div className="box">
            <p>Closing Date</p>
            <h4>10/23/11</h4>
          </div>

          <div className="invest-now-box">
            <Button>Invest Now</Button>
            <p>Learn More</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default LiveOfferingsCard;
