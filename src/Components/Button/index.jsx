import "./index.scss";

const Button = (props) => {
  const { icon, content, type } = props;
  const color = type || "black";

  return (
    <button className={`btn ${content} ${color}`}>
      <img src={icon} alt="" />
      <p>{content}</p>
    </button>
  );
};

export default Button;
