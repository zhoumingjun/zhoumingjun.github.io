(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return b}),a(82),a(80);var n=a(0),r=a.n(n),l=a(210),i=a.n(l),o=a(169),c=a(163),s=a(160),u=a(192),f=a.n(u),m=(a(179),a(170)),d=a(310),g=Object(s.b)("div").withConfig({displayName:"blog-series-post__ContentBox"})(["img{max-width:100%;}"]),p=Object(s.b)("ul").withConfig({displayName:"blog-series-post__StyledUL"})(["list-style:none;padding-left:1em;margin:0px;"]),h=Object(s.b)("li").withConfig({displayName:"blog-series-post__StyledLI"})([""]);t.default=function(e){var t=e.pageContext,a=t.prev,n=t.next,l=t.outline,s=e.data,u=s.site.siteMetadata,b=s.markdownRemark,E=JSON.parse(l),w=b.fileAbsolutePath,y=u.sourceUrl+w.substr(w.indexOf("content"));return r.a.createElement(m.a,null,r.a.createElement(i.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:u.description}],title:u.title}),r.a.createElement(c.b,{direction:"row",justify:"center",basis:"auto"},r.a.createElement(c.b,{basis:"xlarge"},r.a.createElement(c.b,{pad:"small"},r.a.createElement(c.d,{textAlign:"center",margin:"small"},b.frontmatter.title),r.a.createElement(c.b,{align:"end"},b.frontmatter.date," ",r.a.createElement(c.a,{href:y,label:"View page source"}))),r.a.createElement(c.b,{direction:"row",pad:"small"},r.a.createElement(g,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:b.html}})))),r.a.createElement(c.b,{basis:"medium",pad:"small",border:{color:"lightgrey",side:"left",size:"small"}},r.a.createElement(c.b,{align:"center"},r.a.createElement(c.d,{level:3,margin:"small"},"TOC")),function e(t){var a=t.post,n=t.children,l=[];return f.a.forOwn(n,function(e,t){l.push(e)}),l=f.a.sortBy(l,function(e){return e.post.fields.slug}),r.a.createElement("div",null,a&&r.a.createElement(o.Link,{to:a.fields.slug},r.a.createElement(c.e,null," ",a.frontmatter.title)),r.a.createElement(p,null,l&&l.map(function(t,a){return r.a.createElement(h,{key:a},e(t))})))}(E))),r.a.createElement(d.a,{prev:a,next:n}))};var b="3277250329"},166:function(e,t,a){var n;e.exports=(n=a(172))&&n.default||n},169:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return g});var n=a(0),r=a.n(n),l=a(8),i=a.n(l),o=a(161),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(50);a.d(t,"waitForRouteChange",function(){return s.a});var u=a(166),f=a.n(u);a.d(t,"PageRenderer",function(){return f.a});var m=a(33);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),g=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},170:function(e,t,a){"use strict";var n=a(194),r=a.n(n),l=a(0),i=a.n(l),o=a(163),c=a(160);function s(){var e=r()(["\n  body {\n    margin: 0;\n  }\n"]);return s=function(){return e},e}a(196),Object(c.c)(s());var u={global:{colors:{brand:"#61DAFB",accent:["#921076","#769210"]},input:{border:{radius:"4px"}},font:{name:"Fira Sans",family:"'Fira Sans', Arial, sans-serif",face:"/* cyrillic-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvm4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvlIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},button:{border:{radius:"4px"}},checkBox:{border:{radius:"4px"}},layer:{border:{radius:"4px"}}},f=Object(c.b)(o.b).withConfig({displayName:"Layout__HeaderBox"})(["background:#333333;position:fixed;width:100vw;height:60px;"]),m=Object(c.b)("div").withConfig({displayName:"Layout__ContentDiv"})(["padding-top:60px;"]),d=Object(c.b)(o.b).withConfig({displayName:"Layout__FooterBox"})(["background:#eeeeee;width:100vw;"]),g=function(){return i.a.createElement(f,{direction:"row",justify:"center",pad:{vertical:"small"}},i.a.createElement(o.b,{direction:"row",justify:"between",align:"center",basis:"xlarge"},i.a.createElement("a",{href:"/"},i.a.createElement(o.e,{size:"medium",color:"#61DAFB"},"Mingjun Zhou's Blog")),i.a.createElement(o.b,{direction:"row",align:"center",gap:"medium"},i.a.createElement("a",{href:"/categories/post/page/0"},i.a.createElement(o.e,{size:"medium",color:"white"},"post")),i.a.createElement("a",{href:"/categories/note/page/0"},i.a.createElement(o.e,{size:"medium",color:"white"},"note")),i.a.createElement("a",{href:"/series"},i.a.createElement(o.e,{size:"medium",color:"white"},"series")),i.a.createElement("a",{href:"/knowledgebase"},i.a.createElement(o.e,{size:"medium",color:"white"},"kb")),i.a.createElement("a",{href:"/about"},i.a.createElement(o.e,{size:"medium",color:"white"},"about")))))},p=function(){return i.a.createElement(d,{direction:"row",justify:"center",pad:{vertical:"small"}},i.a.createElement(o.b,{align:"center"},i.a.createElement(o.e,null,"Build with ",i.a.createElement(o.a,{href:"https://www.gatsbyjs.org/",label:"GatsbyJS"})," ",i.a.createElement(o.a,{href:"https://reactjs.org/",label:"React "+i.a.version})," and ",i.a.createElement(o.a,{href:"https://v2.grommet.io",label:"Grommet"}),". Hosted on"," ",i.a.createElement(o.a,{href:"https://github.com/zhoumingjun/zhoumingjun.github.io",label:"Github"}),".",i.a.createElement("br",null),"The code is open source and available at"," ",i.a.createElement(o.a,{href:"https://github.com/calpa/blog",label:"Github"}),"."),i.a.createElement(o.e,null,"Copyright © 2017 - ",(new Date).getFullYear())))};t.a=function(e){return i.a.createElement(o.c,{theme:u,style:{minHeight:"100vh"}},i.a.createElement(g,null),i.a.createElement(m,null,e.children),i.a.createElement(p,null))}},172:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),o=a(34),c=a(1),s=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(o.a,{location:t,pageResources:a})};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},179:function(e,t,a){"use strict";a(51);var n=a(193),r=a.n(n),l=a(0),i=a.n(l),o=a(163);t.a=function(e){var t=e.children,a=r()(e,["children"]);return i.a.createElement(o.b,Object.assign({direction:"row",justify:"center",pad:{horizontal:"xlarge",vertical:"small"}},a),i.a.createElement(o.b,{basis:"xlarge"},t))}},310:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(179),i=a(169);t.a=function(e){var t=e.prev,a=e.next;return r.a.createElement(l.a,{pad:{horizontal:"xlarge",top:"small"}},r.a.createElement("hr",null),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,t&&r.a.createElement(i.Link,{to:t.fields.slug,rel:"prev"},r.a.createElement("span",null,"←")," ",t.frontmatter.title)),r.a.createElement("li",null,a&&r.a.createElement(i.Link,{to:a.fields.slug,rel:"next"},a.frontmatter.title," →"))))}}}]);
//# sourceMappingURL=component---src-templates-blog-series-post-js-debfda0a872a664e95ad.js.map