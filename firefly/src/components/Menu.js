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
        path: "/child-profiles",
        text: "WHY DID YOU DO THIS"
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
