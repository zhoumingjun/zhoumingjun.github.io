import React from 'react';
import PropTypes from 'prop-types';

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
          <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"
            dangerouslySetInnerHTML={{
              __html: `
              window.MathJax = {
                tex2jax: {
                    inlineMath: [['$','$'], ['\\(','\\)']],
                    displayMath: [['$$','$$'], ['\[','\]']],
                    processEscapes: true,
                    processEnvironments: true,
                    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
                    TeX: { equationNumbers: { autoNumber: "AMS" },
                        extensions: ["AMSmath.js", "AMSsymbols.js", "color.js"] }
                },
                AuthorInit: function () {
                    MathJax.Hub.Register.StartupHook("Begin",function () {
                        MathJax.Hub.Queue(function() {
                            var all = MathJax.Hub.getAllJax(), i;
                            for(i = 0; i < all.length; i += 1) {
                                all[i].SourceElement().parentNode.className += ' has-jax';
                            }
                        })
                    });
                }
            };
        `,
            }}
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
