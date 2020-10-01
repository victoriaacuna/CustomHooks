import React from 'react';
import {
    Link, NavLink
  } from "react-router-dom";

// La diferencia entre el NavLink y el Link es que el NavLink permite saber en qué ruta me 
// encuentro y activar clases de css

export const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to ="/" className="nav-item nav-link">
                        Home
                    </Link>
                </li>
                <li>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to ="/about">
                        About
                    </NavLink>
                </li>
                <li>
                    <Link to ="/login" className="nav-item nav-link">
                        Login
                    </Link>
                </li>
            </ul>
        </div>
    )
}
