import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/menu.scss";

const items = [
  {
    path: "/",
    text: "Main"
  },
  {
    path: "/login",
    text: "Login"
  },
  {
    path: "/profileview",
    text: "ProfileView"
  },
  {
    path: "/createprofile",
    text: "CreateProfile"
  },
  {
    path: "/choose-login",
    text: "ChooseLogin"
  },
  {
    path: "/register",
    text: "Register"
  },
  {
    path: "/child-profiles-dialog",
    text: "Profile Dialog Test"
  },
  {
    path: "/child-profiles-main",
    text: "Main Child Profiles Test"
  }
];

function Menu(props) {
  function handleClick(path) {
    props.history.push(path);
  }

  return (
    <ul className="menu">
      {items.map(item => (
        <li
          key={item.path}
          onClick={handleClick.bind(null, item.path)}
          className={
            props.location.pathname === item.path
              ? "menu__item menu__item--active"
              : "menu__item"
          }
        >
          <Link to={item.path}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
}

export default withRouter(Menu);
