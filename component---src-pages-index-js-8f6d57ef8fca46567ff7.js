(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{237:function(e,a,n){"use strict";n.r(a),n(118);var t=n(0),r=n.n(t),l=(n(130),n(85),n(391),n(131),n(123),n(393)),o=n.n(l),i=n(238),c=n(394),s=n.n(c),f=n(455),m=n.n(f),u=(n(457),n(264),n(241)),g=(i.b.small({textTransform:"lowercase"}),i.b.header(function(e){var a;return(a={display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"})[e.theme.smallMedia]={flexDirection:"column-reverse",alignItems:"flex-start"},a})),d=(i.b.h4(function(e){return{marginBottom:e.theme.spacing,textDecoration:"underline double"}}),i.b.article(function(e){return{marginBottom:e.theme.spacing}})),h=(i.b.h4({margin:0}),i.b.a(function(e){var a=e.theme;return{textDecoration:"none",color:a.textColor,transition:"color 250ms linear",":hover":{color:a.accentColor}}})),E=function(e){var a=function(e){return s()(e,function(e){return m()(e.frontmatter.date.split("-"))})}(e.posts),n=Object.keys(a).sort().reverse();return r.a.createElement("section",null,n.map(function(e){return r.a.createElement("section",{key:e},r.a.createElement(u.d,{level:3},e),a[e].map(function(e){return r.a.createElement(d,{key:e.fields.slug},r.a.createElement(g,null,r.a.createElement(u.d,{level:3,margin:"none"},r.a.createElement(h,{href:e.fields.slug},e.frontmatter.title)),r.a.createElement("time",{dateTime:o()(e.frontmatter.date,"isoDateTime")},o()(e.frontmatter.date,"yyyy-mm-dd"))),r.a.createElement("footer",null))}))}))},b=n(244),F=n(242);n.d(a,"pageQuery",function(){return p}),a.default=function(e){var a=e.data.allMarkdownRemark.edges;return r.a.createElement(b.a,null,r.a.createElement(F.a,{pad:{horizontal:"xsmall",vertical:"large"}},r.a.createElement(E,{posts:a.map(function(e){return e.node})})))};var p="1214704279"},242:function(e,a,n){"use strict";n(72);var t=n(250),r=n.n(t),l=n(0),o=n.n(l),i=n(241);a.a=function(e){var a=e.children,n=r()(e,["children"]);return o.a.createElement(i.b,Object.assign({direction:"row",justify:"center",pad:{horizontal:"xlarge",vertical:"small"}},n),o.a.createElement(i.b,{basis:"xlarge"},a))}},244:function(e,a,n){"use strict";var t=n(252),r=n.n(t),l=n(0),o=n.n(l),i=n(241),c=n(238),s=n(242);function f(){var e=r()(["\n  body {\n    margin: 0;\n  }\n"]);return f=function(){return e},e}n(245),Object(c.c)(f());var m=Object(c.b)(i.b).withConfig({displayName:"Layout__HeaderBox"})(["background:white;position:fixed;width:100vw;"]),u={global:{colors:{brand:"#99cc33",accent:["#7dc4e8","#e87dc4"]},input:{border:{radius:"4px"}},font:{name:"Fira Sans",family:"'Fira Sans', Arial, sans-serif",face:"/* cyrillic-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvm4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvlIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},button:{border:{radius:"4px"}},checkBox:{border:{radius:"4px"}},layer:{border:{radius:"4px"}}},g=function(e){return o.a.createElement(m,{direction:"row",justify:"center",pad:{bottom:"xsmall"}},o.a.createElement(i.b,{direction:"row",justify:"between",align:"center",basis:"xlarge"},o.a.createElement(i.a,{href:"/"},o.a.createElement(i.e,{size:"xlarge"},"Mingjun Zhou's Blog")),o.a.createElement(i.b,{direction:"row",align:"center",gap:"medium"},o.a.createElement(i.a,{href:"/categories/post/page/0"},o.a.createElement(i.e,{size:"xlarge"},"post")),o.a.createElement(i.a,{href:"/categories/note/page/0"},o.a.createElement(i.e,{size:"xlarge"},"note")),o.a.createElement(i.a,{href:"/series"},o.a.createElement(i.e,{size:"xlarge"},"series")),o.a.createElement(i.a,{href:"/knowledgebase"},o.a.createElement(i.e,{size:"xlarge"},"kb")),o.a.createElement(i.a,{href:"/about"},o.a.createElement(i.e,{size:"xlarge"},"about")))))},d=function(){return o.a.createElement(s.a,{pad:{horizontal:"xlarge",top:"large"}},o.a.createElement(i.b,{align:"center"},o.a.createElement(i.e,null,"Build with ",o.a.createElement(i.a,{href:"https://www.gatsbyjs.org/",label:"GatsbyJS"})," ",o.a.createElement(i.a,{href:"https://reactjs.org/",label:"React "+o.a.version})," and ",o.a.createElement(i.a,{href:"https://v2.grommet.io",label:"Grommet"}),". Hosted on"," ",o.a.createElement(i.a,{href:"https://github.com/zhoumingjun/zhoumingjun.github.io",label:"Github"}),".",o.a.createElement("br",null),"The code is open source and available at"," ",o.a.createElement(i.a,{href:"https://github.com/calpa/blog",label:"Github"}),"."),o.a.createElement(i.e,null,"Copyright © 2017 - ",(new Date).getFullYear())))};a.a=function(e){return o.a.createElement(i.c,{theme:u,style:{minHeight:"100vh"}},o.a.createElement(g,null),e.children,o.a.createElement(d,null))}},245:function(e,a,n){e.exports=n.p+"static/logo-b38e185ea58b2de85a7d2d3232a71cf1.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-8f6d57ef8fca46567ff7.js.map