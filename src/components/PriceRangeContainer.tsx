import { FunctionComponent } from "react";
import BrandSelector from "../components/BrandSelector";
import YearContainer from "../components/YearContainer";
import OwnerForm from "../components/OwnerForm";
import "./PriceRangeContainer.css";

const PriceRangeContainer: FunctionComponent = () => {
  return (
    <div className="frame-parent150">
      <div className="price-range-parent">
        <b className="price-range">Price Range</b>
        <div className="frame-parent151">
          <div className="lac-parent">
            <b className="price-range">₹ 1 Lac</b>
            <b className="price-range">₹ 20 Lac</b>
          </div>
          <div className="frame-parent152">
            <div className="ellipse-parent">
              <img className="ellipse-icon" alt="" src="../ellipse-1.svg" />
              <div className="frame-child65" />
              <img className="ellipse-icon" alt="" src="../ellipse-1.svg" />
              <div className="frame-child67" />
            </div>
            <div className="min-price-parent">
              <div className="min-price">Min Price</div>
              <div className="min-price">Max Price</div>
            </div>
          </div>
        </div>
      </div>
      <div className="weight-parent">
        <b className="price-range">Weight</b>
        <div className="frame-parent151">
          <div className="ton-parent">
            <b className="price-range">1 Ton</b>
            <b className="price-range">6 Ton</b>
          </div>
          <div className="frame-parent152">
            <div className="ellipse-parent">
              <img className="ellipse-icon" alt="" src="../ellipse-1.svg" />
              <div className="frame-child69" />
              <img className="ellipse-icon" alt="" src="../ellipse-1.svg" />
            </div>
            <div className="min-weight-parent">
              <div className="min-price">Min Weight</div>
              <div className="min-price">Max Weight</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-child71" />
      <div className="frame-child72" />
      <div className="frame-child73" />
      <div className="frame-child74" />
      <div className="frame-child75" />
      <div className="frame-child76" />
      <div className="frame-child77" />
      <div className="frame-child78" />
      <BrandSelector
        brandName="Brands"
        brandSearchText="Search top brands..."
        stateName="../frame51.svg"
        brandImageUrl="../frame52.svg"
        stateSearchText="Ferguson"
        brandStateImageUrl="../frame53.svg"
        brandStateName="Tata"
        brandStateImageUrl2="../frame54.svg"
        brandStateName2="New Holland"
        brandStateImageUrl3="../frame55.svg"
        brandStateName3="Power Trek"
        frameImageUrl="../frame56.svg"
        brandStateName4="Ashok Leyland"
        frameImageUrl57="../frame57.svg"
        brandName5="John Deere"
        propTop="199px"
      />
      <BrandSelector
        brandName="Registered State"
        brandSearchText="Search states..."
        stateName="../frame58.svg"
        brandImageUrl="../frame59.svg"
        stateSearchText="Uttrakhand"
        brandStateImageUrl="../frame60.svg"
        brandStateName="Rajasthan"
        brandStateImageUrl2="../frame61.svg"
        brandStateName2="Uttar Pradesh"
        brandStateImageUrl3="../frame62.svg"
        brandStateName3="Himachal Pradesh"
        frameImageUrl="../frame63.svg"
        brandStateName4="Telangana"
        frameImageUrl57="../frame64.svg"
        brandName5="Karnataka"
        propTop="1039px"
      />
      <YearContainer
        yearDriven="Year"
        frameImageUrl="../frame65.svg"
        kmDriven={`2020 & Above`}
        frameImageUrl66="../frame66.svg"
        yearRange={`2018 & Above`}
        frameImageUrl67="(4)"
        frameImageUrl68="../frame67.svg"
        kmRange={`2016 & Above`}
        yearRangeText="(6)"
        frameImageUrl69="../frame68.svg"
        yearRangeText65={`2014 & Above`}
        yearRangeText66="(32)"
        frameImageUrl70="../frame69.svg"
        yearRangeText67={`2012 & Above`}
        yearRangeText68="(9)"
        propTop="1419px"
      />
      <YearContainer
        yearDriven="Kms Driven"
        frameImageUrl="../frame70.svg"
        kmDriven={`20,000 Km & Less`}
        frameImageUrl66="../frame71.svg"
        yearRange={`40,000 Km & Less`}
        frameImageUrl67="(4)"
        frameImageUrl68="../frame72.svg"
        kmRange={`60,000 Km & Less`}
        yearRangeText="(6)"
        frameImageUrl69="../frame73.svg"
        yearRangeText65={`80,000 Km & Less`}
        yearRangeText66="(32)"
        frameImageUrl70="../frame74.svg"
        yearRangeText67="Above 80,000 Km"
        yearRangeText68="(9)"
        propTop="770px"
      />
      <OwnerForm
        fuelTypeText="Owner"
        fuelTypeImageUrl="../frame75.svg"
        fuelTypeOptionText="New"
        fuelTypeOptionImageUrl="../frame76.svg"
        fuelTypeSecondHandText="2nd Hand"
        fuelTypeRefurbishedText="../frame77.svg"
        fuelTypeCNGText="Refurbished"
        propTop="579px"
      />
      <OwnerForm
        fuelTypeText="Fuel Type"
        fuelTypeImageUrl="../frame78.svg"
        fuelTypeOptionText="Petrol"
        fuelTypeOptionImageUrl="../frame79.svg"
        fuelTypeSecondHandText="Diesel"
        fuelTypeRefurbishedText="../frame80.svg"
        fuelTypeCNGText="CNG"
        propTop="1688px"
      />
      <YearContainer
        yearDriven="Body Type"
        frameImageUrl="../frame81.svg"
        kmDriven="Lorem Ipsum"
        frameImageUrl66="../frame82.svg"
        yearRange="Lorem Ipsum"
        frameImageUrl67="(18)"
        frameImageUrl68="../frame83.svg"
        kmRange="Lorem Ipsum"
        yearRangeText="(18)"
        frameImageUrl69="../frame84.svg"
        yearRangeText65="Lorem Ipsum"
        yearRangeText66="(18)"
        frameImageUrl70="../frame85.svg"
        yearRangeText67="Lorem Ipsum"
        yearRangeText68="(18)"
        propTop="2054px"
      />
      <div className="line-parent1">
        <div className="frame-child79" />
        <div className="youve-reached-the">You’ve reached the end</div>
        <div className="frame-child79" />
      </div>
    </div>
  );
};

export default PriceRangeContainer;
