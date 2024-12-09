import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [hide, setHde] = useState(false);
  const toggle = () => {
    hide ? setHde(false) : setHde(true);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          Edu<span>vaa</span>
        </h1>
      </div>
      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Courses</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
      </ul>
      <div className="signup">
        <button className="primary-btn-2">Sign Up</button>
      </div>
      <div className="menu">
        {hide ? (
          <IoMdClose
            style={{ color: "white", fontSize: "40px" }}
            onClick={toggle}
          />
        ) : (
          <IoMdMenu
            style={{ color: "white", fontSize: "40px" }}
            onClick={toggle}
          />
        )}
        {hide && (
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <button className="primary-btn-2">Sign Up</button>

            </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
