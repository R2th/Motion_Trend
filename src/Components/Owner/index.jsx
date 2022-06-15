import Images from "../../Constants/Images";
import Button from "../Button";
import InfoMovie from "../Common/InfoMovie";
import Ticket from "../Ticket";
import "./index.scss";

const Owner = () => (
  <>
    <div className="owner-profile border-bt">
      <p>Owner</p>
      <div className="owner-profile__wrap">
        <div className="avatar">
          <img src={Images.PROFILE_BIG} alt="" />
        </div>
        <div className="owner-info">
          <p>Kim Aeyong</p>
          <div className="owner-info__location">
            <img src={Images.LOCATION} alt="location" />
            <p>Korea, Republic of</p>
          </div>
        </div>
      </div>
    </div>
    <div className="owner-portfolio border-bt">
      <InfoMovie title="The first portfolio movement." />
    </div>

    <div className="owner-creative border-bt">
      <p>Creative field</p>
      <div className="tickets">
        <Ticket content="Premiere" />
        <Ticket content="Photoshop" />
        <Ticket content="Illustrator" />
      </div>
    </div>
    <div className="labels border-bt">
      <div className="tickets">
        <Ticket content="Editing" type="trans-border" />
        <Ticket content="Camera action, Angle" type="trans-border" />
        <Ticket content="Sound, Beat" type="trans-border" />
        <Ticket content="Graphical" type="trans-border" />
        <Ticket content="Experimental" type="trans-border" />
        <Ticket content="Editing" type="trans-border" />
      </div>
    </div>
    <div className="report-btn">
      <Button content="Report" icon={Images.REPORT} type="white" />
    </div>
  </>
);

export default Owner;
