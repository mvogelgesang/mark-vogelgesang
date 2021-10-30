import React from "react";
import { Link } from "gatsby";
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
          {metadata.navigation.map((element) => {
            return (
              <ListLink
                to={element.path}
                className="footer-nav-link"
                key={element.label}
              >
                {element.label}
              </ListLink>
            );
          })}
        </div>
        <div className="footer-social">
          <div className="footer-nav-list">
            {metadata.socialMedia.map((element) => {
              return (
                <ListLink
                  to={element.url}
                  className="footer-nav-link"
                  key={element.name}
                  ariaLabel={element.name}
                >
                  <FontAwesomeIcon icon={element.icon} size="2x" />
                </ListLink>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
