---
title : "Enable mathjax in gatsby"
date : "2018-09-04T06:30:28Z"
tags : ["gatsby", "mathjax"]
desc: "Mathjax was used in some old posts, and it can't work correctly in gastby now. "
---

# how to enable mathjax in gatsby

# Steps

## 1. Configure gatsby-config.js
```
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-mathjax`,
      ],
    },
  },
],
```

## 2. Customize html.js
Follows the [official document](https://www.gatsbyjs.org/docs/custom-html/)   

Here is my [html.js](https://github.com/zhoumingjun/zhoumingjun.github.io/blob/source/src/html.js)

```javascript
import React from 'react';
import PropTypes from 'prop-types';

const MathJaxConfig = `
window.MathJax = {
  tex2jax: {
    inlineMath: [['$', '$'] ],
    displayMath: [['$$', '$$'] ],
    processEscapes: true,
    processEnvironments: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    TeX: {
      equationNumbers: {autoNumber: 'AMS'},
      extensions: ['AMSmath.js', 'AMSsymbols.js', 'color.js'],
    },
  }
};
`;

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
          <script dangerouslySetInnerHTML={{__html: MathJaxConfig}} />
          <script
            defer
            src="https://cdn.bootcss.com/mathjax/2.7.4/latest.js?config=TeX-AMS_SVG"
          />
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

```

## 3. Configure gatsby-browser.js
MathJax will process all math equations when the location changed.

Here is my [gatsby-brower.js](https://github.com/zhoumingjun/zhoumingjun.github.io/blob/source/gatsby-browser.js)

```
exports.onRouteUpdate = ({location}) => {
  console.log('new pathname', location.pathname);
  if (window.MathJax !== undefined) {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
  }
};

```