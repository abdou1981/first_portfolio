import "./Button.css";

const Button = ({ title , ref , clas }) => {
  return (
    <button className= {`button ${clas}`} href={ref}>
      {title}
    </button>
  );
};

export default Button;