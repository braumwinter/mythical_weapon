import React from 'react';
import './catalog.scss';

import {Link} from "react-router-dom";

function Catalog() {
    return (
        <div id="Catalog">
            <ul className="CatalogList">
                <Link to="/AllCategory">
                    <li key="CatalogList1">
                        все товары
                    </li>
                </Link>
                <Link to="/Weapon">
                    <li key="CatalogList2">
                        оружие
                    </li>
                </Link>
                <Link to="/Armor">
                    <li key="CatalogList3">
                        доспехи
                    </li>
                </Link>
                <Link to="/Spell">
                    <li key="CatalogList4">
                        свитки
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default Catalog;