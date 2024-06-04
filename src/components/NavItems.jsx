// import React from 'react'
// import { Link } from 'react-router-dom';



// function NavItems(props) {
//     const { type, href, active, children, value, action } = props;
//     const className = active ? "nav-link active " : "nav-link"

//     const element = type === "link" && href !== "null" ?
//         <Link to={href} className={className}>{children || value}</Link>
//         :
//         <a className="nav-link shadow" onClick={action} >{children} {value}</a>;
//     // <span className="nav-link shadow">{children || value}</span>

//     return (
//         <li  >
//             {element}
//         </li >
//     );
// }
// export default NavItems

import React from 'react';
import { Link } from 'react-router-dom';

function NavItems(props) {
    const { type, href, active, children, value, action } = props;
    const className = active ? "nav-link active" : "nav-link";

    const element = type === "link" && href !== "null" ?
        <Link to={href} className={className}>{children || value}</Link>
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
