import React from "react";
import { Link} from "gatsby";
import "./utils/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListLink = (props) => (
  <Link to={props.to} className={props.className} key={props.label}>
    <div className="footer-nav-list-item">{props.children}</div>
  </Link>
);

export default function Footer(props) {
    const metadata = props.props.site.siteMetadata; 
    return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-nav-list">
        {metadata.navigation.map((x) => { return (
          <ListLink to={x.path} className="footer-nav-link" key={x.label}>
            {x.label}
          </ListLink>
          );
          })}
        </div>
        <div className="footer-social">
          <div className="footer-nav-list">
            <a className="footer-nav-link" href={metadata.socialMedia.linkedin} aria-label="LinkedIn">
              <div className="footer-nav-list-item icon">
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
              </div>
            </a> 
            <a
              className="footer-nav-link"
              href={metadata.socialMedia.github}
              aria-label="Github"
            >
              <div className="footer-nav-list-item icon">
                <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
              </div>
            </a>
          </div>
        </div>
      </div>
     
    </footer>
    )
  }
  

