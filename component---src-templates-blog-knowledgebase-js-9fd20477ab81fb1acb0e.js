(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return d}),n(77),n(239);var a=n(0),r=n.n(a),o=n(194),i=n.n(o),l=n(161),c=n.n(l),s=n(156),f=n(155),m=(n(164),n(162)),u=(n(167),f.b.a.withConfig({displayName:"blog-knowledgebase__StyledLink"})(["border-radius:","px;color:#2c3e50;&:link{text-decoration:none;}&:hover{color:rgb(62,175,124);}"],0));t.default=function(e){var t=e.pageContext.toc,n=e.data.site.siteMetadata;t=JSON.parse(t);var a=[];return c.a.forOwn(t,function(e){a.push(e)}),r.a.createElement(m.a,null,r.a.createElement(i.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n.description}],title:n.title}),r.a.createElement(s.b,{direction:"row",fill:"horizontal",justify:"center"},r.a.createElement(s.b,{basis:"xlarge",justify:"center"},a.map(function(e,t){return r.a.createElement("div",{key:t},function e(t){var n=t.post,a=t.children,o=t.fontsize;void 0===o&&(o=1);var i=[];return c.a.forOwn(a,function(e,t){i.push(e)}),i=c.a.sortBy(i,function(e){return e.post.fields.permalink}),r.a.createElement(s.b,null,r.a.createElement(u,{href:n.fields.permalink,style:{fontSize:o+"em"}},n.frontmatter.title),r.a.createElement(s.b,{direction:"row"},i.map(function(t,n){return t.fontsize=.9*o,r.a.createElement(s.b,{pad:{left:"small"},key:n},e(t))})))}(e))}))))};var d="1884770580"},162:function(e,t,n){"use strict";var a=n(173),r=n.n(a),o=n(0),i=n.n(o),l=n(156),c=n(155),s=Object(c.b)(l.b).withConfig({displayName:"Header__HeaderBox"})(["background:#333333;position:fixed;width:100vw;height:60px;z-index:1;"]),f=function(){return i.a.createElement(s,{direction:"row",justify:"center",pad:{vertical:"small"}},i.a.createElement(l.b,{direction:"row",justify:"between",align:"center",basis:"xlarge"},i.a.createElement("a",{href:"/"},i.a.createElement(l.e,{size:"medium",color:"#61DAFB"},"Mingjun Zhou blog")),i.a.createElement(l.b,{direction:"row",align:"center",gap:"medium"},i.a.createElement("a",{href:"/categories/post/page/0"},i.a.createElement(l.e,{size:"medium",color:"white"},"post")),i.a.createElement("a",{href:"/categories/note/page/0"},i.a.createElement(l.e,{size:"medium",color:"white"},"note")),i.a.createElement("a",{href:"/series"},i.a.createElement(l.e,{size:"medium",color:"white"},"series")),i.a.createElement("a",{href:"/knowledgebase"},i.a.createElement(l.e,{size:"medium",color:"white"},"kb")),i.a.createElement("a",{href:"/about"},i.a.createElement(l.e,{size:"medium",color:"white"},"about")))))},m=n(159),u=Object(c.b)(l.b).withConfig({displayName:"Footer__FooterBox"})(["background:#eef1f5;width:100vw;"]),d=function(){return i.a.createElement(u,{direction:"column",align:"center",margin:{top:"small"},pad:{top:"small"},border:{side:"top",color:"#EEF1F5"}},i.a.createElement(l.b,{direction:"row",justify:"between",width:"xlarge",pad:"small"},i.a.createElement(l.e,{size:"small",color:"rgb(130, 130, 130)"},"Mingjun Zhou blog"),i.a.createElement(l.a,{href:"https://github.com/zhoumingjun",label:i.a.createElement(l.e,{size:"small"},"zhoumingjun"),icon:i.a.createElement(m.j,null),primary:!0}),i.a.createElement(l.b,{direction:"row"},i.a.createElement(m.c,null))))},g=Object(c.b)(l.b).withConfig({displayName:"Main__ContentBox"})(["width:100vw;padding-top:60px;"]),p=function(e){return i.a.createElement(g,{direction:"row",justify:"center"},e.children)};function E(){var e=r()(["\n  body {\n    margin: 0;\n    background-color: white;\n  }\n"]);return E=function(){return e},e}Object(c.c)(E());var b={global:{colors:{brand:"#61DAFB",accent:["#921076","#769210"]},input:{border:{radius:"4px"}},font:{name:"Fira Sans",family:"'Fira Sans', Arial, sans-serif",face:"/* cyrillic-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvm4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvlIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},button:{border:{radius:"4px"}},checkBox:{border:{radius:"4px"}},layer:{border:{radius:"4px"}}};t.a=function(e){return i.a.createElement(l.c,{theme:b},i.a.createElement(l.b,{justify:"between",style:{minHeight:"100vh"}},i.a.createElement(l.b,null,i.a.createElement(f,null),i.a.createElement(p,null,e.children)),i.a.createElement(d,null)))}},164:function(e,t,n){"use strict";n(50),n(165),n(0),n(156)},167:function(e,t,n){"use strict";n(77),n(78);var a=n(0),r=n.n(a),o=n(190),i=n.n(o),l=n(155),c=(n(191),n(192),n(179),n(161)),s=n.n(c),f=n(156),m=l.b.small({textTransform:"lowercase"}),u=Object(l.b)(f.a).withConfig({displayName:"SeparatedTags__StyledTag"})(["border-color:rgba(0,0,0,0.4);border-style:solid;border-width:1px;border-radius:5px;padding:1px 5px;margin-right:10px;"]),d=function(e){var t=e.tags;return!s.a.isEmpty(t)&&r.a.createElement(m,null,t.map(function(e,t,n){return r.a.createElement(u,{key:e,href:"/tags/"+e+"/page/0",label:r.a.createElement(f.e,{size:"small",color:"rgba(0, 0, 0, 0.4)"},e)})}))};n(164),t.a=function(e){var t=e.posts,n=e.filter,a=n?t.filter(function(e){return e.frontmatter.date==n}):t;return 0==a.length?r.a.createElement(f.d,{level:3,textAlign:"center"},"no posts on ",n):r.a.createElement("div",null,a.map(function(e){return r.a.createElement(f.b,{key:e.fields.permalink,margin:"xsmall",pad:"small"},r.a.createElement(f.e,{color:"#818181",margin:{right:"medium"}},i()(e.frontmatter.date,"mmm dd, yyyy  ")),r.a.createElement(f.d,{level:3,margin:"none"},r.a.createElement(f.a,{href:e.fields.permalink},e.frontmatter.title)),r.a.createElement(d,{tags:e.frontmatter.tags}),r.a.createElement(f.e,null,e.frontmatter.desc))}))}},239:function(e,t,n){"use strict";n(213)("fontsize",function(e){return function(t){return e(this,"font","size",t)}})}}]);
//# sourceMappingURL=component---src-templates-blog-knowledgebase-js-9fd20477ab81fb1acb0e.js.map