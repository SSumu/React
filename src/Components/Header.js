import { useState } from "react";
import closeMenu from "../image/close-svgrepo-com.svg";
import menu from "../image/menu-svgrepo-com.svg";

const Header = () => {
  const [menuClick, setMenuClick] = useState(false); // useState() to control the opening and closing of the menu bar.

  return (
    <header className="header__container">
      <h1>
        SADEEPAL <span>DEV</span>
      </h1>
      <nav>
        <ol>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Project</li>
        </ol>
        <img
          className="header__menuClick"
          src={menu}
          alt="menu"
          style={{
            width: "30px",
            cursor: "pointer",
          }}
          onClick={() => {
            setMenuClick(
              // true
              (pre) => (!pre ? true : pre)
            ); /* This means that menu button was clicked. setMenuClick is true means sidebar is opened. */
          }}
        />
        <ul
          style={{
            // Styles are given as an object.Conditional styles are given in here.
            right /*top*/: `${menuClick ? "-20px" : "-250px"}`, // Here the curly brackets are used to write JavaScript. It is not for an object.
            display: `${menuClick ? "flex" : "none"}`,
          }}
        >
          <div
            className="header__menuClose"
            onClick={() => {
              setMenuClick(
                // false
                (pre) => (pre ? false : pre)
              ); /* This means that menu button was clicked. setMenuClick is false means sidebar is closed. */
            }}
          >
            <img
              src={closeMenu}
              alt="close menu"
              // onClick={() => {
              //   setMenuClick(
              //     false
              //   ); /* This means that menu button was clicked. setMenuClick is false means sidebar is closed. */
              // }}
            />
          </div>
          <div className="header__menu">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Project</li>
          </div>
          {/*<li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Project</li>*/}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
