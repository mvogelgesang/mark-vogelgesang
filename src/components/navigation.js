import React, { useState } from "react"; //
import { Link} from "gatsby";
import "./utils/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "./search";

const ListLink = (props) => (
  <Link to={props.to} className={props.className} activeClassName="nav-active" key={props.label}>
    <div className="">{props.children}</div>
  </Link>
);

export default function Navigation(props) {
  const [menuClosed, setActive] = useState(true);
  const navigation = props.props.site.siteMetadata.navigation; 

  return (
    <div className="header">
      <nav className="nav-container">
        <div className={`nav-list ${menuClosed ? "" : "display"}`}>

        {navigation.map((x) => { return (
          <ListLink to={x.path} className={`nav-list-item ${menuClosed ? "" : "display"}`} key={x.label}>
            {x.label}
          </ListLink>
          );
          })}
          <button onClick={() => setActive(!menuClosed)} 
            className={`nav-list-item nav-hamburger ${
              menuClosed ? "" : "display"
            }`} 
            aria-label={`${menuClosed ? "Open Menu" : "Close Menu"}`}
          >
            <FontAwesomeIcon icon={["fa", "bars"]} size="2x" className={`${menuClosed ? "" : "fa-rotate-90"}`}/>
          </button>
        </div>
      </nav>
    </div>
  )
          }