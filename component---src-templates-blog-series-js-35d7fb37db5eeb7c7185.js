(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{233:function(e,a,n){"use strict";n.r(a),n.d(a,"pageQuery",function(){return d}),n(118);var t=n(0),r=n.n(t),o=n(253),i=n.n(o),l=n(246),c=n(244),s=n(241),f=n(264),u=n.n(f),m=n(242);a.default=function(e){var a=e.pageContext.outline,n=e.data.site.siteMetadata;a=JSON.parse(a);var t=[];return u.a.forOwn(a,function(e){var a=e.post;t.push(a)}),console.dir(a,{depth:null}),r.a.createElement(c.a,null,r.a.createElement(m.a,{pad:{horizontal:"xsmall",vertical:"large"}},r.a.createElement(i.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n.description}],title:n.title}),t&&t.map(function(e,a){var n=e.frontmatter.title,t=e.internal.content;return r.a.createElement(s.b,{key:a,direction:"column"},r.a.createElement(l.Link,{to:e.fields.slug},r.a.createElement("h3",null,n)),r.a.createElement("p",null,t))})))};var d="3399813469"},242:function(e,a,n){"use strict";n(72);var t=n(250),r=n.n(t),o=n(0),i=n.n(o),l=n(241);a.a=function(e){var a=e.children,n=r()(e,["children"]);return i.a.createElement(l.b,Object.assign({direction:"row",justify:"center",pad:{horizontal:"xlarge",vertical:"small"}},n),i.a.createElement(l.b,{basis:"xlarge"},a))}},243:function(e,a,n){var t;e.exports=(t=n(247))&&t.default||t},244:function(e,a,n){"use strict";var t=n(252),r=n.n(t),o=n(0),i=n.n(o),l=n(241),c=n(238),s=n(242);function f(){var e=r()(["\n  body {\n    margin: 0;\n  }\n"]);return f=function(){return e},e}n(245),Object(c.c)(f());var u=Object(c.b)(l.b).withConfig({displayName:"Layout__HeaderBox"})(["background:white;position:fixed;width:100vw;"]),m={global:{colors:{brand:"#99cc33",accent:["#7dc4e8","#e87dc4"]},input:{border:{radius:"4px"}},font:{name:"Fira Sans",family:"'Fira Sans', Arial, sans-serif",face:"/* cyrillic-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvm4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvlIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},button:{border:{radius:"4px"}},checkBox:{border:{radius:"4px"}},layer:{border:{radius:"4px"}}},d=function(e){return i.a.createElement(u,{direction:"row",justify:"center",pad:{bottom:"xsmall"}},i.a.createElement(l.b,{direction:"row",justify:"between",align:"center",basis:"xlarge"},i.a.createElement(l.a,{href:"/"},i.a.createElement(l.e,{size:"xlarge"},"Mingjun Zhou's Blog")),i.a.createElement(l.b,{direction:"row",align:"center",gap:"medium"},i.a.createElement(l.a,{href:"/categories/post/page/0"},i.a.createElement(l.e,{size:"xlarge"},"post")),i.a.createElement(l.a,{href:"/categories/note/page/0"},i.a.createElement(l.e,{size:"xlarge"},"note")),i.a.createElement(l.a,{href:"/series"},i.a.createElement(l.e,{size:"xlarge"},"series")),i.a.createElement(l.a,{href:"/knowledgebase"},i.a.createElement(l.e,{size:"xlarge"},"kb")),i.a.createElement(l.a,{href:"/about"},i.a.createElement(l.e,{size:"xlarge"},"about")))))},g=function(){return i.a.createElement(s.a,{pad:{horizontal:"xlarge",top:"large"}},i.a.createElement(l.b,{align:"center"},i.a.createElement(l.e,null,"Build with ",i.a.createElement(l.a,{href:"https://www.gatsbyjs.org/",label:"GatsbyJS"})," ",i.a.createElement(l.a,{href:"https://reactjs.org/",label:"React "+i.a.version})," and ",i.a.createElement(l.a,{href:"https://v2.grommet.io",label:"Grommet"}),". Hosted on"," ",i.a.createElement(l.a,{href:"https://github.com/zhoumingjun/zhoumingjun.github.io",label:"Github"}),".",i.a.createElement("br",null),"The code is open source and available at"," ",i.a.createElement(l.a,{href:"https://github.com/calpa/blog",label:"Github"}),"."),i.a.createElement(l.e,null,"Copyright © 2017 - ",(new Date).getFullYear())))};a.a=function(e){return i.a.createElement(l.c,{theme:m,style:{minHeight:"100vh"}},i.a.createElement(d,null),e.children,i.a.createElement(g,null))}},245:function(e,a,n){e.exports=n.p+"static/logo-b38e185ea58b2de85a7d2d3232a71cf1.png"},246:function(e,a,n){"use strict";n.r(a),n.d(a,"graphql",function(){return g}),n.d(a,"StaticQueryContext",function(){return m}),n.d(a,"StaticQuery",function(){return d});var t=n(0),r=n.n(t),o=n(12),i=n.n(o),l=n(240),c=n.n(l);n.d(a,"Link",function(){return c.a}),n.d(a,"withPrefix",function(){return l.withPrefix}),n.d(a,"navigate",function(){return l.navigate}),n.d(a,"push",function(){return l.push}),n.d(a,"replace",function(){return l.replace}),n.d(a,"navigateTo",function(){return l.navigateTo});var s=n(243),f=n.n(s);n.d(a,"PageRenderer",function(){return f.a});var u=n(46);n.d(a,"parsePath",function(){return u.a});var m=r.a.createContext({}),d=function(e){return r.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},247:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(12),i=n.n(o),l=n(48),c=n(1),s=function(e){var a=e.location,n=c.a.getResourcesForPathname(a.pathname);return r.a.createElement(l.a,{location:a,pageResources:n})};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=s}}]);
//# sourceMappingURL=component---src-templates-blog-series-js-35d7fb37db5eeb7c7185.js.map