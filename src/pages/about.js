import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <Helmet title={`MV - About`} />
      <div className="about-container">
        <img
          className="about-img"
          src="https://avatars.githubusercontent.com/u/4053083?s=400&u=0f2d415b4df232258bc963a108421d48fe6a408a&v=4"
          alt="Mark Vogelgesang smiling"
        />
        <div className="about-content">
          <p>
            I’m Mark and here you will find the occasional musing about my work,
            scripts to make life easier, ongoing development projects, and other
            areas of interest.
          </p>
          <p className="text-semibold">Technical Bits</p>
          <ul>
            <li>Built on Gatsby</li>
            <li>UI is my own</li>
            <li>Prettified with Prettier</li>
            <li>CI/CD via Github Actions</li>
            <li>Hosted on Google Firebase</li>
            <li>
              For more,{" "}
              <Link to="https://github.com/mvogelgesang/mark-vogelgesang">
                https://github.com/mvogelgesang/mark-vogelgesang
              </Link>
            </li>
          </ul>
          Other interests that may one day appear on the site
          <ul>
            <li>Homemade Ice Cream</li>
            <li>Photography</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
