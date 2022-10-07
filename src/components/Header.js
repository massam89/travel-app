import { Link } from "react-router-dom";
import styles from '../css/module/Header.module.css'

const Header = (props) => {
  const clickButtonHandler = () => {
    props.changeBucket();
  };

  return (
    <header className={styles.header}>
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
