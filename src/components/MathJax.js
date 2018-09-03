import React from 'react';
import Script from 'react-load-script';

function onMathJaxLoad() {
  console.log('onLoad MathJax');
  window.MathJax = {
    tex2jax: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['[', ']']],
      processEscapes: true,
      processEnvironments: true,
      skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
      TeX: {
        equationNumbers: {autoNumber: 'AMS'},
        extensions: ['AMSmath.js', 'AMSsymbols.js', 'color.js'],
      },
    },
    AuthorInit: function() {
      MathJax.Hub.Register.StartupHook('Begin', function() {
        MathJax.Hub.Queue(function() {
          var all = MathJax.Hub.getAllJax(),
            i;
          for (i = 0; i < all.length; i += 1) {
            all[i].SourceElement().parentNode.className += ' has-jax';
          }
        });
      });
    },
  };
}

const MathJaxParser = () => (
  <Script
    url="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML"
    onLoad={onMathJaxLoad}
  />
);

export default MathJaxParser;
