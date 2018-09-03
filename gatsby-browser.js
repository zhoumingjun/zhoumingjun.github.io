exports.onRouteUpdate = ({location}) => {
  console.log('new pathname', location.pathname);
  MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
};
