(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{158:function(e,a,t){"use strict";t.r(a),t(80);var n=t(0),r=t.n(n),o=(t(56),t(57),t(359),t(83),t(82),t(361)),l=t.n(o),i=t(159),c=t(362),s=t.n(c),f=t(423),m=t.n(f),u=(t(201),t(162)),d=(Object(i.b)("small")({textTransform:"lowercase"}),Object(i.b)("header")(function(e){var a;return(a={display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"})[e.theme.smallMedia]={flexDirection:"column-reverse",alignItems:"flex-start"},a})),g=(Object(i.b)("h4")(function(e){return{marginBottom:e.theme.spacing,textDecoration:"underline double"}}),Object(i.b)("article")(function(e){return{marginBottom:e.theme.spacing}})),h=(Object(i.b)("h4")({margin:0}),Object(i.b)("a")(function(e){var a=e.theme;return{textDecoration:"none",color:a.textColor,transition:"color 250ms linear",":hover":{color:a.accentColor}}})),b=function(e){var a=function(e){return s()(e,function(e){return m()(e.frontmatter.date.split("-"))})}(e.posts),t=Object.keys(a).sort().reverse();return r.a.createElement("section",null,t.map(function(e){return r.a.createElement("section",{key:e},r.a.createElement(u.d,{level:3},e),a[e].map(function(e){return r.a.createElement(g,{key:e.fields.slug},r.a.createElement(d,null,r.a.createElement(u.d,{level:3,margin:"none"},r.a.createElement(h,{href:e.fields.slug},e.frontmatter.title)),r.a.createElement("time",{dateTime:l()(e.frontmatter.date,"isoDateTime")},l()(e.frontmatter.date,"yyyy-mm-dd"))),r.a.createElement("footer",null))}))}))},E=t(164),F=t(170);t.d(a,"pageQuery",function(){return w}),a.default=function(e){var a=e.data.allMarkdownRemark.edges;return r.a.createElement(E.a,null,r.a.createElement(F.a,{pad:{horizontal:"xsmall",vertical:"large"}},r.a.createElement(b,{posts:a.map(function(e){return e.node})})))};var w="1214704279"},164:function(e,a,t){"use strict";var n=t(175),r=t.n(n),o=t(0),l=t.n(o),i=t(162),c=t(159);function s(){var e=r()(["\n  body {\n    margin: 0;\n  }\n"]);return s=function(){return e},e}t(184),Object(c.c)(s());var f={global:{colors:{brand:"#61DAFB",accent:["#921076","#769210"]},input:{border:{radius:"4px"}},font:{name:"Fira Sans",family:"'Fira Sans', Arial, sans-serif",face:"/* cyrillic-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvm4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvlIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},button:{border:{radius:"4px"}},checkBox:{border:{radius:"4px"}},layer:{border:{radius:"4px"}}},m=Object(c.b)(i.b).withConfig({displayName:"Layout__HeaderBox"})(["background:#333333;position:fixed;width:100vw;height:60px;"]),u=Object(c.b)("div").withConfig({displayName:"Layout__ContentDiv"})(["padding-top:60px;"]),d=Object(c.b)(i.b).withConfig({displayName:"Layout__FooterBox"})(["background:#eeeeee;width:100vw;"]),g=function(){return l.a.createElement(m,{direction:"row",justify:"center",pad:{vertical:"small"}},l.a.createElement(i.b,{direction:"row",justify:"between",align:"center",basis:"xlarge"},l.a.createElement("a",{href:"/"},l.a.createElement(i.e,{size:"medium",color:"#61DAFB"},"Mingjun Zhou's Blog")),l.a.createElement(i.b,{direction:"row",align:"center",gap:"medium"},l.a.createElement("a",{href:"/categories/post/page/0"},l.a.createElement(i.e,{size:"medium",color:"white"},"post")),l.a.createElement("a",{href:"/categories/note/page/0"},l.a.createElement(i.e,{size:"medium",color:"white"},"note")),l.a.createElement("a",{href:"/series"},l.a.createElement(i.e,{size:"medium",color:"white"},"series")),l.a.createElement("a",{href:"/knowledgebase"},l.a.createElement(i.e,{size:"medium",color:"white"},"kb")),l.a.createElement("a",{href:"/about"},l.a.createElement(i.e,{size:"medium",color:"white"},"about")))))},h=function(){return l.a.createElement(d,{direction:"row",justify:"center",pad:{vertical:"small"}},l.a.createElement(i.b,{align:"center"},l.a.createElement(i.e,null,"Build with ",l.a.createElement(i.a,{href:"https://www.gatsbyjs.org/",label:"GatsbyJS"})," ",l.a.createElement(i.a,{href:"https://reactjs.org/",label:"React "+l.a.version})," and ",l.a.createElement(i.a,{href:"https://v2.grommet.io",label:"Grommet"}),". Hosted on"," ",l.a.createElement(i.a,{href:"https://github.com/zhoumingjun/zhoumingjun.github.io",label:"Github"}),".",l.a.createElement("br",null),"The code is open source and available at"," ",l.a.createElement(i.a,{href:"https://github.com/calpa/blog",label:"Github"}),"."),l.a.createElement(i.e,null,"Copyright © 2017 - ",(new Date).getFullYear())))};a.a=function(e){return l.a.createElement(i.c,{theme:f,style:{minHeight:"100vh"}},l.a.createElement(g,null),l.a.createElement(u,null,e.children),l.a.createElement(h,null))}},170:function(e,a,t){"use strict";t(51);var n=t(174),r=t.n(n),o=t(0),l=t.n(o),i=t(162);a.a=function(e){var a=e.children,t=r()(e,["children"]);return l.a.createElement(i.b,Object.assign({direction:"row",justify:"center",pad:{horizontal:"xlarge",vertical:"small"}},t),l.a.createElement(i.b,{basis:"xlarge"},a))}}}]);
//# sourceMappingURL=component---src-pages-index-js-5173b37e444f5fd4d6bc.js.map