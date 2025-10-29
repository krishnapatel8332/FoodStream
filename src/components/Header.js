import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginbtn, setloginbtn] = useState("login");

  useEffect(() => {
    console.log("useEffect Rendered");
  }, [loginbtn]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO}></img>
      </div>
      <div className="nav-bar">
        <ul className="nav-tools">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <button
              className="btnlogin"
              onClick={() => {
                loginbtn == "login"
                  ? setloginbtn("logout")
                  : setloginbtn("login");
              }}
            >
              {loginbtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
