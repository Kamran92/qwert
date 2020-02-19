import React from 'react';

import './header.css';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          StarDB
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people/">Люди</Link>
        </li>
        <li>
          <Link to="/planets/">Планеты</Link>
        </li>
        <li>
          <Link to="/starhips/">Звездолеты</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;