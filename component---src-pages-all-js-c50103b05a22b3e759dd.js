(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{151:function(e,a,n){"use strict";n.r(a),n.d(a,"pageQuery",function(){return c}),n(77);var t=n(0),r=n.n(t),o=n(156),l=n(167),i=n(162);a.default=function(e){var a=e.data.allMarkdownRemark.edges;return r.a.createElement(i.a,null,r.a.createElement(o.b,{direction:"row",basis:"xlarge",justify:"start"},r.a.createElement(l.a,{posts:a.map(function(e){return e.node})})))};var c="3392552090"},162:function(e,a,n){"use strict";var t=n(173),r=n.n(t),o=n(0),l=n.n(o),i=n(156),c=n(155),s=Object(c.b)(i.b).withConfig({displayName:"Header__HeaderBox"})(["background:#333333;position:fixed;width:100vw;height:60px;z-index:1;"]),f=function(){return l.a.createElement(s,{direction:"row",justify:"center",pad:{vertical:"small"}},l.a.createElement(i.b,{direction:"row",justify:"between",align:"center",basis:"xlarge"},l.a.createElement("a",{href:"/"},l.a.createElement(i.e,{size:"medium",color:"#61DAFB"},"Mingjun Zhou blog")),l.a.createElement(i.b,{direction:"row",align:"center",gap:"medium"},l.a.createElement("a",{href:"/categories/post/page/0"},l.a.createElement(i.e,{size:"medium",color:"white"},"post")),l.a.createElement("a",{href:"/categories/note/page/0"},l.a.createElement(i.e,{size:"medium",color:"white"},"note")),l.a.createElement("a",{href:"/series"},l.a.createElement(i.e,{size:"medium",color:"white"},"series")),l.a.createElement("a",{href:"/knowledgebase"},l.a.createElement(i.e,{size:"medium",color:"white"},"kb")),l.a.createElement("a",{href:"/about"},l.a.createElement(i.e,{size:"medium",color:"white"},"about")))))},m=n(159),u=Object(c.b)(i.b).withConfig({displayName:"Footer__FooterBox"})(["background:#eef1f5;width:100vw;"]),d=function(){return l.a.createElement(u,{direction:"column",align:"center",margin:{top:"small"},pad:{top:"small"},border:{side:"top",color:"#EEF1F5"}},l.a.createElement(i.b,{direction:"row",justify:"between",width:"xlarge",pad:"small"},l.a.createElement(i.e,{size:"small",color:"rgb(130, 130, 130)"},"Mingjun Zhou blog"),l.a.createElement(i.a,{href:"https://github.com/zhoumingjun",label:l.a.createElement(i.e,{size:"small"},"zhoumingjun"),icon:l.a.createElement(m.j,null),primary:!0}),l.a.createElement(i.b,{direction:"row"},l.a.createElement(m.c,null))))},g=Object(c.b)(i.b).withConfig({displayName:"Main__ContentBox"})(["width:100vw;padding-top:60px;"]),E=function(e){return l.a.createElement(g,{direction:"row",justify:"center"},e.children)};function F(){var e=r()(["\n  body {\n    margin: 0;\n    background-color: white;\n  }\n"]);return F=function(){return e},e}Object(c.c)(F());var p={global:{colors:{brand:"#61DAFB",accent:["#921076","#769210"]},input:{border:{radius:"4px"}},font:{name:"Fira Sans",family:"'Fira Sans', Arial, sans-serif",face:"/* cyrillic-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvm4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvlIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},button:{border:{radius:"4px"}},checkBox:{border:{radius:"4px"}},layer:{border:{radius:"4px"}}};a.a=function(e){return l.a.createElement(i.c,{theme:p},l.a.createElement(i.b,{justify:"between",style:{minHeight:"100vh"}},l.a.createElement(i.b,null,l.a.createElement(f,null),l.a.createElement(E,null,e.children)),l.a.createElement(d,null)))}},164:function(e,a,n){"use strict";n(50),n(165),n(0),n(156)},167:function(e,a,n){"use strict";n(77),n(78);var t=n(0),r=n.n(t),o=n(190),l=n.n(o),i=n(155),c=(n(191),n(192),n(179),n(161)),s=n.n(c),f=n(156),m=i.b.small({textTransform:"lowercase"}),u=Object(i.b)(f.a).withConfig({displayName:"SeparatedTags__StyledTag"})(["border-color:rgba(0,0,0,0.4);border-style:solid;border-width:1px;border-radius:5px;padding:1px 5px;margin-right:10px;"]),d=function(e){var a=e.tags;return!s.a.isEmpty(a)&&r.a.createElement(m,null,a.map(function(e,a,n){return r.a.createElement(u,{key:e,href:"/tags/"+e+"/page/0",label:r.a.createElement(f.e,{size:"small",color:"rgba(0, 0, 0, 0.4)"},e)})}))};n(164),a.a=function(e){var a=e.posts,n=e.filter,t=n?a.filter(function(e){return e.frontmatter.date==n}):a;return 0==t.length?r.a.createElement(f.d,{level:3,textAlign:"center"},"no posts on ",n):r.a.createElement("div",null,t.map(function(e){return r.a.createElement(f.b,{key:e.fields.permalink,margin:"xsmall",pad:"small"},r.a.createElement(f.e,{color:"#818181",margin:{right:"medium"}},l()(e.frontmatter.date,"mmm dd, yyyy  ")),r.a.createElement(f.d,{level:3,margin:"none"},r.a.createElement(f.a,{href:e.fields.permalink},e.frontmatter.title)),r.a.createElement(d,{tags:e.frontmatter.tags}),r.a.createElement(f.e,null,e.frontmatter.desc))}))}}}]);
//# sourceMappingURL=component---src-pages-all-js-c50103b05a22b3e759dd.js.map