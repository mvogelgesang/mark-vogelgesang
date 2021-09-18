import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Layout from "../components/layout";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <div>
        <Helmet title="404 - Not found"></Helmet>
        <h1>Whoops</h1>
        <p>
          Looks like this page doesn't exist.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
