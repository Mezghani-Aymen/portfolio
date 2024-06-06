import React from 'react';
import { Link } from 'react-router-dom';

function NavItems(props) {
    const { type, href, active, children, value, action, shadow } = props;
    const className = (active ? "nav-link active " : "nav-link" && shadow ? " shadow" : "");
    const element = type === "link" && href !== "null" ?
        <Link to={href} className={className} onClick={action}>{children || value}</Link>
        :
        action ? < a className="nav-link shadow" onClick={action} > {children} {value}</a>
            :
            < a className="nav-link shadow"> {children} {value}</a>
    return (
        <li>
            {element}
        </li>
    );
}

export default NavItems;
