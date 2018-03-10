import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { siteMetadata } from "../../gatsby-config";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="author" description={siteMetadata.author} />
      <link
        rel="stylesheet"
        type="text/css"
        href="../assets/css/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="../assets/css/slick-theme.min.css"
      />
      <title>{siteMetadata.title}</title>
      <link rel="icon" href="../assets/favicon.png" type="image/x-icon" />
    </Helmet>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
