(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d}),a(77),a(225);var n=a(0),r=a.n(n),o=a(187),i=a.n(o),l=a(161),c=a.n(l),s=a(156),f=a(155),m=(a(162),a(159)),u=(a(165),f.b.a.withConfig({displayName:"blog-knowledgebase__StyledLink"})(["border-radius:","px;color:#2c3e50;&:link{text-decoration:none;}&:hover{color:rgb(62,175,124);}"],0));t.default=function(e){var t=e.pageContext.outline,a=e.data.site.siteMetadata;t=JSON.parse(t);var n=[];return c.a.forOwn(t,function(e){n.push(e)}),r.a.createElement(m.a,null,r.a.createElement(i.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:a.description}],title:a.title}),r.a.createElement(s.b,{direction:"row",fill:"horizontal",justify:"center"},r.a.createElement(s.b,{basis:"xlarge",justify:"center"},n.map(function(e,t){return r.a.createElement("div",{key:t},function e(t){var a=t.post,n=t.children,o=t.fontsize;void 0===o&&(o=1);var i=[];return c.a.forOwn(n,function(e,t){i.push(e)}),i=c.a.sortBy(i,function(e){return e.post.fields.slug}),r.a.createElement(s.b,null,r.a.createElement(u,{href:a.fields.slug,style:{fontSize:o+"em"}},a.frontmatter.title),r.a.createElement(s.b,{direction:"row"},i.map(function(t,a){return t.fontsize=.9*o,r.a.createElement(s.b,{pad:{left:"small"},key:a},e(t))})))}(e))}))))};var d="1884770580"},159:function(e,t,a){"use strict";var n=a(170),r=a.n(n),o=a(0),i=a.n(o),l=a(156),c=a(155),s=Object(c.b)(l.b).withConfig({displayName:"Header__HeaderBox"})(["background:#333333;position:fixed;width:100vw;height:60px;z-index:1;"]),f=function(){return i.a.createElement(s,{direction:"row",justify:"center",pad:{vertical:"small"}},i.a.createElement(l.b,{direction:"row",justify:"between",align:"center",basis:"xlarge"},i.a.createElement("a",{href:"/"},i.a.createElement(l.e,{size:"medium",color:"#61DAFB"},"Mingjun Zhou's Blog")),i.a.createElement(l.b,{direction:"row",align:"center",gap:"medium"},i.a.createElement("a",{href:"/categories/post/page/0"},i.a.createElement(l.e,{size:"medium",color:"white"},"post")),i.a.createElement("a",{href:"/categories/note/page/0"},i.a.createElement(l.e,{size:"medium",color:"white"},"note")),i.a.createElement("a",{href:"/series"},i.a.createElement(l.e,{size:"medium",color:"white"},"series")),i.a.createElement("a",{href:"/knowledgebase"},i.a.createElement(l.e,{size:"medium",color:"white"},"kb")),i.a.createElement("a",{href:"/about"},i.a.createElement(l.e,{size:"medium",color:"white"},"about")))))},m=Object(c.b)(l.b).withConfig({displayName:"Footer__FooterBox"})(["background:#333333;width:100vw;"]),u=function(){return i.a.createElement(m,{direction:"column",justify:"center",margin:{top:"small"},pad:{top:"small"},border:"top"},i.a.createElement(l.b,{align:"center"},i.a.createElement(l.e,{color:"white"},"Build with ",i.a.createElement(l.a,{href:"https://www.gatsbyjs.org/",label:"GatsbyJS"})," ",i.a.createElement(l.a,{href:"https://reactjs.org/",label:"React "+i.a.version})," and ",i.a.createElement(l.a,{href:"https://v2.grommet.io",label:"Grommet"}),". Hosted on"," ",i.a.createElement(l.a,{href:"https://github.com/zhoumingjun/zhoumingjun.github.io",label:"Github"}),".",i.a.createElement("br",null),"The code is open source and available at"," ",i.a.createElement(l.a,{href:"https://github.com/calpa/blog",label:"Github"}),"."),i.a.createElement(l.e,{color:"white"},"Copyright © 2017 - ",(new Date).getFullYear())))},d=Object(c.b)(l.b).withConfig({displayName:"Main__ContentBox"})(["width:100vw;padding-top:60px;"]),g=function(e){return i.a.createElement(d,{direction:"row",justify:"center"},e.children)};function h(){var e=r()(["\n  body {\n    margin: 0;\n    background-color: white;\n  }\n"]);return h=function(){return e},e}Object(c.c)(h());var p={global:{colors:{brand:"#61DAFB",accent:["#921076","#769210"]},input:{border:{radius:"4px"}},font:{name:"Fira Sans",family:"'Fira Sans', Arial, sans-serif",face:"/* cyrillic-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvm4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvlIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},button:{border:{radius:"4px"}},checkBox:{border:{radius:"4px"}},layer:{border:{radius:"4px"}}};t.a=function(e){return i.a.createElement(l.c,{theme:p},i.a.createElement(l.b,{justify:"between",style:{minHeight:"100vh"}},i.a.createElement(l.b,null,i.a.createElement(f,null),i.a.createElement(g,null,e.children)),i.a.createElement(u,null)))}},162:function(e,t,a){"use strict";a(50),a(163),a(0),a(156)},165:function(e,t,a){"use strict";a(77);var n=a(0),r=a.n(n),o=a(184),i=a.n(o),l=a(155),c=(a(185),a(186),a(175),a(161)),s=a.n(c),f=a(156),m=l.b.small({textTransform:"lowercase"}),u=Object(l.b)(f.a).withConfig({displayName:"SeparatedTags__Tag"})(["border-color:green;border-style:solid;border-width:1px;border-radius:5px;padding-left:2px;padding-right:2px;margin-right:10px;"]),d=function(e){var t=e.tags;return!s.a.isEmpty(t)&&r.a.createElement(m,null,t.map(function(e,t,a){return r.a.createElement(u,{key:e,href:"/tags/"+e+"/page/0"},r.a.createElement(f.e,{size:"small"},e))}))};a(162),t.a=function(e){var t=e.posts;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(f.b,{key:e.fields.slug,margin:"xsmall",pad:"small"},r.a.createElement(f.e,{color:"#818181",margin:{right:"medium"}},i()(e.frontmatter.date,"mmm dd, yyyy  ")),r.a.createElement(f.d,{level:3,margin:"none"},r.a.createElement(f.a,{href:e.fields.slug},e.frontmatter.title)),r.a.createElement(d,{tags:e.frontmatter.tags}),r.a.createElement(f.e,null,e.frontmatter.desc))}))}},225:function(e,t,a){"use strict";a(204)("fontsize",function(e){return function(t){return e(this,"font","size",t)}})}}]);
//# sourceMappingURL=component---src-templates-blog-knowledgebase-js-f9bce21675d86cc248d0.js.map