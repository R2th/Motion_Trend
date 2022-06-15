import Images from "../../Constants/Images";
import "./index.scss";

const Comment = ({ item }) => {
  const { content, avatar, time, owner } = item;

  return (
    <div className="comment-card">
      <div className="comment-card-header">
        <div className="comment-card__owner">
          <img src={avatar} alt="avatar" />
          <div className="comment-card__owner-info">
            <p>{owner}</p>
            <p>{time}</p>
          </div>
        </div>
        <div className="actions">
          <img src={Images.IC_RM} alt="remove" />
          <img src={Images.IC_RP} alt="report" />
        </div>
      </div>

      <div className="comment-card__content">{content}</div>
    </div>
  );
};

export default Comment;
