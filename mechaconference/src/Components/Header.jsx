import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import { Menuitems } from './Menuitems.js';
import { useState,setState } from "react";
export function Header() {
    
    return (
        
        <nav className="NavbarItems">
            <h1 className="navbar-logo">ConferenceName</h1>
            
            <ul className="nav-menu">
                {Menuitems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.url} className={item.cName}>
                                <i className={item.icon}></i>{item.title}
                            </a>
                        </li>
                    );
                })}
            
            </ul>

        </nav>
    )
}
