(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{231:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return m}),t(118);var n=t(0),r=t.n(n),o=t(279),i=t.n(o),l=t(249),c=t(250),s=t(243),u=t(352),f=t.n(u);a.default=function(e){var a=e.pageContext,t=a.posts,n=a.tag,o=e.data.site.siteMetadata;return r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement("title",null,n," · ",o.title)),r.a.createElement(s.b,{background:"light-1",direction:"row",wrap:!0,align:"start",justify:"start",alignContent:"stretch",pad:"large",round:"large",animation:{type:"fadeIn",duration:"2000"}},t&&t.map(function(e){var a=f()(e,"frontmatter.title")||e.fields.slug;return r.a.createElement(s.b,{key:e.fields.slug,basis:"large",direction:"column"},r.a.createElement("h3",null,r.a.createElement(l.Link,{style:{boxShadow:"none"},to:e.fields.slug},a)),r.a.createElement("small",null,e.frontmatter.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}))})))};var m="3524775603"},246:function(e,a,t){var n;e.exports=(n=t(252))&&n.default||n},249:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return g}),t.d(a,"StaticQueryContext",function(){return m}),t.d(a,"StaticQuery",function(){return d});var n=t(0),r=t.n(n),o=t(12),i=t.n(o),l=t(241),c=t.n(l);t.d(a,"Link",function(){return c.a}),t.d(a,"withPrefix",function(){return l.withPrefix}),t.d(a,"navigate",function(){return l.navigate}),t.d(a,"push",function(){return l.push}),t.d(a,"replace",function(){return l.replace}),t.d(a,"navigateTo",function(){return l.navigateTo});var s=t(246),u=t.n(s);t.d(a,"PageRenderer",function(){return u.a});var f=t(46);t.d(a,"parsePath",function(){return f.a});var m=r.a.createContext({}),d=function(e){return r.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},250:function(e,a,t){"use strict";var n=t(272),r=t.n(n),o=t(0),i=t.n(o),l=t(243),c=t(240);function s(){var e=r()(["\n  body {\n    margin: 0;\n  }\n"]);return s=function(){return e},e}t(273),Object(c.c)(s());var u={global:{colors:{brand:"#61DAFB",accent:["#921076","#769210"]},input:{border:{radius:"4px"}},font:{name:"Fira Sans",family:"'Fira Sans', Arial, sans-serif",face:"/* cyrillic-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvm4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvlIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},button:{border:{radius:"4px"}},checkBox:{border:{radius:"4px"}},layer:{border:{radius:"4px"}}},f=Object(c.b)(l.b).withConfig({displayName:"Layout__HeaderBox"})(["background:#333333;position:fixed;width:100vw;height:60px;"]),m=c.b.div.withConfig({displayName:"Layout__ContentDiv"})(["padding-top:60px;"]),d=Object(c.b)(l.b).withConfig({displayName:"Layout__FooterBox"})(["background:#eeeeee;width:100vw;"]),g=function(){return i.a.createElement(f,{direction:"row",justify:"center",pad:{vertical:"small"}},i.a.createElement(l.b,{direction:"row",justify:"between",align:"center",basis:"xlarge"},i.a.createElement("a",{href:"/"},i.a.createElement(l.e,{size:"medium",color:"#61DAFB"},"Mingjun Zhou's Blog")),i.a.createElement(l.b,{direction:"row",align:"center",gap:"medium"},i.a.createElement("a",{href:"/categories/post/page/0"},i.a.createElement(l.e,{size:"medium",color:"white"},"post")),i.a.createElement("a",{href:"/categories/note/page/0"},i.a.createElement(l.e,{size:"medium",color:"white"},"note")),i.a.createElement("a",{href:"/series"},i.a.createElement(l.e,{size:"medium",color:"white"},"series")),i.a.createElement("a",{href:"/knowledgebase"},i.a.createElement(l.e,{size:"medium",color:"white"},"kb")),i.a.createElement("a",{href:"/about"},i.a.createElement(l.e,{size:"medium",color:"white"},"about")))))},h=function(){return i.a.createElement(d,{direction:"row",justify:"center",pad:{vertical:"small"}},i.a.createElement(l.b,{align:"center"},i.a.createElement(l.e,null,"Build with ",i.a.createElement(l.a,{href:"https://www.gatsbyjs.org/",label:"GatsbyJS"})," ",i.a.createElement(l.a,{href:"https://reactjs.org/",label:"React "+i.a.version})," and ",i.a.createElement(l.a,{href:"https://v2.grommet.io",label:"Grommet"}),". Hosted on"," ",i.a.createElement(l.a,{href:"https://github.com/zhoumingjun/zhoumingjun.github.io",label:"Github"}),".",i.a.createElement("br",null),"The code is open source and available at"," ",i.a.createElement(l.a,{href:"https://github.com/calpa/blog",label:"Github"}),"."),i.a.createElement(l.e,null,"Copyright © 2017 - ",(new Date).getFullYear())))};a.a=function(e){return i.a.createElement(l.c,{theme:u,style:{minHeight:"100vh"}},i.a.createElement(g,null),i.a.createElement(m,null,e.children),i.a.createElement(h,null))}},252:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(12),i=t.n(o),l=t(47),c=t(1),s=function(e){var a=e.location,t=c.a.getResourcesForPathname(a.pathname);return r.a.createElement(l.a,{location:a,pageResources:t})};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=s}}]);
//# sourceMappingURL=component---src-templates-blog-tag-js-b704386d1f377bb138b9.js.map