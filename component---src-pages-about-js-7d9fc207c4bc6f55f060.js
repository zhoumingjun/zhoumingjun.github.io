(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(e,a,t){"use strict";t.r(a),t(77);var n=t(0),r=t.n(n),o=t(159),l=t(155),i=(t(160),[{date:"2018-09-07",content:"refine homepage"},{date:"2018-09-05",content:"add disqus"},{date:"2018-09-05",content:"add page source link"},{date:"2018-09-04",content:"add tag cloud"},{date:"2018-08-14",content:"build blog with gatsby/grommet"}]),c=["Build with gatsbyjs/grommet/styled-components","TOC of series","Tag cloud","MathJax enabled"],s=["beautify toc"];a.default=function(e){return r.a.createElement(o.a,null,r.a.createElement(l.b,{direction:"row",basis:"xlarge",justify:"start"},r.a.createElement(l.b,{margin:"xsmall",pad:"small"},r.a.createElement(l.e,null,"This is my personal blog for technical things."),r.a.createElement(l.d,{level:3},"Features:"),r.a.createElement(l.b,{margin:{left:"medium"}},c.map(function(e,a){return r.a.createElement(l.e,{key:a},e)})),r.a.createElement(l.d,{level:3},"Todos:"),r.a.createElement(l.b,{margin:{left:"medium"}},s.map(function(e,a){return r.a.createElement(l.e,{key:a},e)})),r.a.createElement(l.d,{level:3},"History:"),r.a.createElement(l.b,{margin:{left:"medium"}},i.map(function(e,a){return r.a.createElement(l.b,{key:a,direction:"row",justify:"start",align:"start",gap:"medium"},r.a.createElement(l.d,{level:4,margin:"none"},e.date," :"),r.a.createElement(l.e,null,e.content))})))))}},159:function(e,a,t){"use strict";var n=t(172),r=t.n(n),o=t(0),l=t.n(o),i=t(155),c=t(154),s=Object(c.b)(i.b).withConfig({displayName:"Header__HeaderBox"})(["background:#333333;position:fixed;width:100vw;height:60px;z-index:1;"]),f=function(){return l.a.createElement(s,{direction:"row",justify:"center",pad:{vertical:"small"}},l.a.createElement(i.b,{direction:"row",justify:"between",align:"center",basis:"xlarge"},l.a.createElement("a",{href:"/"},l.a.createElement(i.e,{size:"medium",color:"#61DAFB"},"Mingjun Zhou's Blog")),l.a.createElement(i.b,{direction:"row",align:"center",gap:"medium"},l.a.createElement("a",{href:"/categories/post/page/0"},l.a.createElement(i.e,{size:"medium",color:"white"},"post")),l.a.createElement("a",{href:"/categories/note/page/0"},l.a.createElement(i.e,{size:"medium",color:"white"},"note")),l.a.createElement("a",{href:"/series"},l.a.createElement(i.e,{size:"medium",color:"white"},"series")),l.a.createElement("a",{href:"/knowledgebase"},l.a.createElement(i.e,{size:"medium",color:"white"},"kb")),l.a.createElement("a",{href:"/about"},l.a.createElement(i.e,{size:"medium",color:"white"},"about")))))},m=Object(c.b)(i.b).withConfig({displayName:"Footer__FooterBox"})(["background:#333333;width:100vw;"]),u=function(){return l.a.createElement(m,{direction:"column",justify:"center",margin:{top:"small"},pad:{top:"small"},border:"top"},l.a.createElement(i.b,{align:"center"},l.a.createElement(i.e,{color:"white"},"Build with ",l.a.createElement(i.a,{href:"https://www.gatsbyjs.org/",label:"GatsbyJS"})," ",l.a.createElement(i.a,{href:"https://reactjs.org/",label:"React "+l.a.version})," and ",l.a.createElement(i.a,{href:"https://v2.grommet.io",label:"Grommet"}),". Hosted on"," ",l.a.createElement(i.a,{href:"https://github.com/zhoumingjun/zhoumingjun.github.io",label:"Github"}),".",l.a.createElement("br",null),"The code is open source and available at"," ",l.a.createElement(i.a,{href:"https://github.com/calpa/blog",label:"Github"}),"."),l.a.createElement(i.e,{color:"white"},"Copyright © 2017 - ",(new Date).getFullYear())))},d=Object(c.b)(i.b).withConfig({displayName:"Main__ContentBox"})(["width:100vw;padding-top:60px;"]),g=function(e){return l.a.createElement(d,{direction:"row",justify:"center"},e.children)};function h(){var e=r()(["\n  body {\n    margin: 0;\n    background-color: white;\n  }\n"]);return h=function(){return e},e}Object(c.c)(h());var b={global:{colors:{brand:"#61DAFB",accent:["#921076","#769210"]},input:{border:{radius:"4px"}},font:{name:"Fira Sans",family:"'Fira Sans', Arial, sans-serif",face:"/* cyrillic-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvm4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvlIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},button:{border:{radius:"4px"}},checkBox:{border:{radius:"4px"}},layer:{border:{radius:"4px"}}};a.a=function(e){return l.a.createElement(i.c,{theme:b},l.a.createElement(i.b,{justify:"between",style:{minHeight:"100vh"}},l.a.createElement(i.b,null,l.a.createElement(f,null),l.a.createElement(g,null,e.children)),l.a.createElement(u,null)))}}}]);
//# sourceMappingURL=component---src-pages-about-js-7d9fc207c4bc6f55f060.js.map