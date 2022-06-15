import "./index.scss";

const Card = ({ item }) => {
  const { title } = item;

  return <div className="card">{title}</div>;
};

export default Card;
