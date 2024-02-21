import React from 'react';
import "./NavBarStyles.css"
import {MenuItems} from "./MenuItems"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navigation-bar-items">
            <h1 className="logo">ECOM</h1>

            <ul className="changeable-items">
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>{item.title}</Link>
                        </li>
                    )
                })}
                <button>Login</button>
                <button>Sign-in</button>
            </ul>
        </div>
    );
}

export default NavBar;
