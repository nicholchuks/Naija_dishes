import React from "react";
import "./header.css";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";
// import { BiMenu } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="header">
      <div className="nav_desktop">
        <div className="nav_left">
          <img src={logo} width="122px" height="29.83px" alt="logo" />

          <ul className="menu_lists">
            <li>
              <NavLink to="#home">Home</NavLink>
            </li>
            <li>
              <NavLink to="#home">Menu</NavLink>
            </li>
            <li>
              <NavLink to="#home">Meal Plan</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav_right">
          <div className="nav_right_1">
            <NavLink to="#">
              <button className="box">
                <FiSearch className="icon" />
              </button>
            </NavLink>

            <NavLink to="#">
              <button className="box">
                <AiOutlineShoppingCart className="icon" />
              </button>
            </NavLink>
          </div>
          <div className="nav_right_2">
            <NavLink to="#">
              <button>Sign In</button>
            </NavLink>
          </div>
          <div className="nav_right_3">
            <NavLink to="#">
              <button>Create Account</button>
            </NavLink>
          </div>
        </div>
      </div>
      {/* <div className="nav_mobile">
        <img
          src={logo}
          className="menu_logo"
          width="122px"
          height="29.83px"
          alt="logo"
        />
        <div className="nav_mobile_right">
          <NavLink to="#">
            <button className="box">
              <AiOutlineShoppingCart className="icon" />
            </button>
          </NavLink>
          <div className="toggle_div">
            <BiMenu width="33px" height="31px" className="menu-icon icon" />
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
