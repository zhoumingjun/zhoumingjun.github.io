(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{232:function(e,t,n){"use strict";n.r(t),n.d(t,"tagsQuery",function(){return u});var a=n(0),r=n.n(a),i=n(245),o=n.n(i),l=n(253),c=n(249);t.default=function(e){var t=e.pageContext,n=t.posts,a=t.tag,i=e.data.site.siteMetadata;return r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement("title",null,a," · ",i.title)),r.a.createElement("h2",null,a),r.a.createElement("section",null,n.length," ",1!==n.length?"posts":"post"," in ",a,"."),r.a.createElement("section",null,r.a.createElement(l.a,{posts:n})))};var u="3569574029"},240:function(e,t,n){var a;e.exports=(a=n(246))&&a.default||a},241:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(12),o=n.n(i),l=n(238),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(240),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var m=n(46);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},246:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),o=n.n(i),l=n(49),c=n(1),u=function(e){var t=e.location,n=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:n})};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},248:function(e,t,n){e.exports=n.p+"static/logo-b38e185ea58b2de85a7d2d3232a71cf1.png"},249:function(e,t,n){"use strict";var a=n(16),r=n.n(a),i=n(261),o=n.n(i),l=n(0),c=n.n(l),u=(n(262),n(245),n(241),n(239)),s=n(236),m=(n(72),n(242)),d=n.n(m),p=function(e){var t=e.path,n=d()(e,["path"]);return c.a.createElement(u.a,Object.assign({href:t},n))},f=n(248),g=n.n(f),h=function(e){var t=e.path,n=e.label;return c.a.createElement(p,{path:t},c.a.createElement(u.g,{size:"large"},c.a.createElement("strong",null,n)))},b=s.b.img.withConfig({displayName:"Nav__StyledImage"})(["height:32px;width:32px;"]),E=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.state.responsive;return c.a.createElement(u.f,{onChange:function(t){return e.setState({responsive:t})}},c.a.createElement(u.b,Object.assign({direction:"row",justify:"between",align:"center",margin:{bottom:"large"}},this.props),c.a.createElement(p,{path:"/"},c.a.createElement(u.b,{direction:"row",align:"center",margin:{right:"small"}},c.a.createElement(b,{src:g.a,fit:"cover"}),"wide"===t?c.a.createElement(u.b,{margin:{horizontal:"small"}},c.a.createElement(u.g,{size:"large"},c.a.createElement("strong",null,"Mingjun Zhou's Blog"))):null)),c.a.createElement(u.b,{direction:"row",align:"center",gap:"medium"},c.a.createElement(h,{path:"/categories/post",label:"post"}),c.a.createElement(h,{path:"/categories/note",label:"note"}),c.a.createElement(h,{path:"/categories/series",label:"series"}),c.a.createElement(h,{path:"/about",label:"about"}))))},t}(l.Component),y=function(e){var t=e.children,n=d()(e,["children"]);return c.a.createElement(u.b,Object.assign({direction:"row",justify:"center",pad:{horizontal:"xlarge",vertical:"large"}},n),c.a.createElement(u.b,{basis:"xlarge"},t))};function v(){var e=o()(["\n  body {\n    margin: 0;\n  }\n"]);return v=function(){return e},e}n.d(t,"a",function(){return w}),Object(s.c)(v());var w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement(u.c,{theme:u.h},c.a.createElement(u.b,{style:{minHeight:"100vh",transition:"background 2s"}},c.a.createElement(y,{pad:{horizontal:"xlarge",top:"large"}},c.a.createElement(E,null)),c.a.createElement(y,{pad:{horizontal:"xlarge"}},this.props.children)))},t}(c.a.Component)},253:function(e,t,n){"use strict";n(118),n(121),n(74),n(271),n(122),n(119);var a=n(0),r=n.n(a),i=n(272),o=n.n(i),l=n(236),c=n(273),u=n.n(c),s=n(277),m=n.n(s),d=(n(278),n(279),n(239)),p=(l.b.small({textTransform:"lowercase"}),l.b.header(function(e){var t;return(t={display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"})[e.theme.smallMedia]={flexDirection:"column-reverse",alignItems:"flex-start"},t})),f=(l.b.h4(function(e){return{marginBottom:e.theme.spacing,textDecoration:"underline double"}}),l.b.article(function(e){return{marginBottom:e.theme.spacing}})),g=(l.b.h4({margin:0}),l.b.a(function(e){var t=e.theme;return{textDecoration:"none",color:t.textColor,transition:"color 250ms linear",":hover":{color:t.accentColor}}}));t.a=function(e){var t=function(e){return u()(e,function(e){return m()(e.frontmatter.date.split("-"))})}(e.posts),n=Object.keys(t).sort().reverse();return r.a.createElement("section",null,n.map(function(e){return r.a.createElement("section",{key:e},r.a.createElement(d.d,{level:3},e),t[e].map(function(e){return r.a.createElement(f,{key:e.fields.slug},r.a.createElement(p,null,r.a.createElement(d.d,{level:3,margin:"none"},r.a.createElement(g,{href:e.fields.slug},e.frontmatter.title)),r.a.createElement("time",{dateTime:o()(e.frontmatter.date,"isoDateTime")},o()(e.frontmatter.date,"yyyy-mm-dd"))),r.a.createElement("footer",null))}))}))}}}]);
//# sourceMappingURL=component---src-templates-blog-category-js-059480673e6656193943.js.map