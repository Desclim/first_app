import React from 'react';
import {Link} from "react-router-dom";

const NavMenu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/tableMinus">Список расходов</Link>
                </li>
                <li>
                    <Link to="/tablePlus">Список доходов</Link>
                </li>
            </ul>

        </div>
    );
};

export default NavMenu;