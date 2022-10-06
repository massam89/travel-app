import { Link } from "react-router-dom";

const Header = (props) => {
  const clickButtonHandler = () => {
    props.changeBucket();
  };

  return (
    <header>
      <h1>Travel Agency App</h1>
      <Link to={props.isBucketPage ? "/" : "/Bucket"}>
        <button onClick={clickButtonHandler}>
          {props.isBucketPage ? "Resort list page" : "Bucket page"}
        </button>
      </Link>
    </header>
  );
};

export default Header;
