(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{238:function(e,t,a){"use strict";a.r(t),a(118);var n=a(0),r=a.n(n),o=a(242),i=a(350),l=a(251),c=a(477),u=a(249),s=a(478),f=a(240),m=a(272),d=a.n(m),g=function(e){return r.a.createElement(u.StaticQuery,{query:"2309532577",render:function(e){var t=[];return d.a.each(e.allMarkdownRemark.group,function(e){t.push({value:e.fieldValue,count:e.totalCount})}),r.a.createElement(o.b,{margin:{vertical:"small"},pad:{vertical:"medium"},background:"rgb(253, 250, 246)"},r.a.createElement(s.TagCloud,{minSize:20,maxSize:40,tags:t,onClick:function(e){Object(f.push)("/tags/"+e.value+"/page/0")}}))},data:c})};a(484),a.d(t,"pageQuery",function(){return h}),t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(l.a,null,r.a.createElement(o.b,{direction:"row",basis:"xlarge",justify:"center"},r.a.createElement(o.b,{direction:"column",width:"xlarge"},r.a.createElement(g,null),r.a.createElement(i.a,{posts:t.map(function(e){return e.node})}))))};var h="1214704279"},245:function(e,t,a){var n;e.exports=(n=a(250))&&n.default||n},249:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),o=a(12),i=a.n(o),l=a(240),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var u=a(245),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var f=a(46);a.d(t,"parsePath",function(){return f.a});var m=r.a.createContext({}),d=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},250:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),l=a(47),c=a(1),u=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:a})};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},251:function(e,t,a){"use strict";var n=a(273),r=a.n(n),o=a(0),i=a.n(o),l=a(242),c=a(239);function u(){var e=r()(["\n  body {\n    margin: 0;\n  }\n"]);return u=function(){return e},e}a(274),Object(c.c)(u());var s={global:{colors:{brand:"#61DAFB",accent:["#921076","#769210"]},input:{border:{radius:"4px"}},font:{name:"Fira Sans",family:"'Fira Sans', Arial, sans-serif",face:"/* cyrillic-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvm4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvlIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},button:{border:{radius:"4px"}},checkBox:{border:{radius:"4px"}},layer:{border:{radius:"4px"}}},f=Object(c.b)(l.b).withConfig({displayName:"Layout__HeaderBox"})(["background:#333333;position:fixed;width:100vw;height:60px;"]),m=c.b.div.withConfig({displayName:"Layout__ContentDiv"})(["padding-top:60px;"]),d=Object(c.b)(l.b).withConfig({displayName:"Layout__FooterBox"})(["background:#eeeeee;width:100vw;"]),g=function(){return i.a.createElement(f,{direction:"row",justify:"center",pad:{vertical:"small"}},i.a.createElement(l.b,{direction:"row",justify:"between",align:"center",basis:"xlarge"},i.a.createElement("a",{href:"/"},i.a.createElement(l.e,{size:"medium",color:"#61DAFB"},"Mingjun Zhou's Blog")),i.a.createElement(l.b,{direction:"row",align:"center",gap:"medium"},i.a.createElement("a",{href:"/categories/post/page/0"},i.a.createElement(l.e,{size:"medium",color:"white"},"post")),i.a.createElement("a",{href:"/categories/note/page/0"},i.a.createElement(l.e,{size:"medium",color:"white"},"note")),i.a.createElement("a",{href:"/series"},i.a.createElement(l.e,{size:"medium",color:"white"},"series")),i.a.createElement("a",{href:"/knowledgebase"},i.a.createElement(l.e,{size:"medium",color:"white"},"kb")),i.a.createElement("a",{href:"/about"},i.a.createElement(l.e,{size:"medium",color:"white"},"about")))))},h=function(){return i.a.createElement(d,{direction:"row",justify:"center",pad:{vertical:"small"}},i.a.createElement(l.b,{align:"center"},i.a.createElement(l.e,null,"Build with ",i.a.createElement(l.a,{href:"https://www.gatsbyjs.org/",label:"GatsbyJS"})," ",i.a.createElement(l.a,{href:"https://reactjs.org/",label:"React "+i.a.version})," and ",i.a.createElement(l.a,{href:"https://v2.grommet.io",label:"Grommet"}),". Hosted on"," ",i.a.createElement(l.a,{href:"https://github.com/zhoumingjun/zhoumingjun.github.io",label:"Github"}),".",i.a.createElement("br",null),"The code is open source and available at"," ",i.a.createElement(l.a,{href:"https://github.com/calpa/blog",label:"Github"}),"."),i.a.createElement(l.e,null,"Copyright © 2017 - ",(new Date).getFullYear())))};t.a=function(e){return i.a.createElement(l.c,{theme:s,style:{minHeight:"100vh"}},i.a.createElement(g,null),i.a.createElement(m,null,e.children),i.a.createElement(h,null))}},350:function(e,t,a){"use strict";a(118),a(120),a(74),a(281),a(121),a(122);var n=a(0),r=a.n(n),o=a(283),i=a.n(o),l=a(239),c=a(284),u=a.n(c),s=a(345),f=a.n(s),m=(a(347),a(272)),d=a.n(m),g=a(242),h=l.b.small({textTransform:"lowercase"}),p=Object(l.b)(g.a).withConfig({displayName:"tags-list__Tag"})(["border-color:green;border-style:solid;border-width:1px;border-radius:5px;padding-left:2px;padding-right:2px;margin-right:10px;"]),b=function(e){var t=e.tags;return!d.a.isEmpty(t)&&r.a.createElement(h,null,t.map(function(e,t,a){return r.a.createElement(p,{key:e,href:"/tags/"+e+"/page/0"},r.a.createElement(g.e,{size:"small"},e))}))},w=(l.b.header(function(e){var t;return(t={display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"})[e.theme.smallMedia]={flexDirection:"column-reverse",alignItems:"flex-start"},t}),l.b.h4(function(e){return{marginBottom:e.theme.spacing,textDecoration:"underline double"}}),l.b.article(function(e){return{marginBottom:e.theme.spacing}}),l.b.h4({margin:0}),l.b.a(function(e){var t=e.theme;return{textDecoration:"none",color:t.textColor,transition:"color 250ms linear",":hover":{color:t.accentColor}}}));t.a=function(e){var t=function(e){return u()(e,function(e){return f()(e.frontmatter.date.split("-"))})}(e.posts),a=Object.keys(t).sort().reverse();return r.a.createElement("section",null,a.map(function(e){return r.a.createElement("section",{key:e},t[e].map(function(e){return r.a.createElement(g.b,{key:e.fields.slug,margin:{bottom:"medium"}},r.a.createElement("time",{dateTime:i()(e.frontmatter.date,"isoDateTime")},i()(e.frontmatter.date,"yyyy-mm-dd")),r.a.createElement(g.d,{level:3,margin:"none"},r.a.createElement(w,{href:e.fields.slug},e.frontmatter.title)),r.a.createElement("footer",null,r.a.createElement(b,{tags:e.frontmatter.tags})))}))}))}},477:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"cuda",totalCount:1},{fieldValue:"gatsby",totalCount:1},{fieldValue:"linux",totalCount:2},{fieldValue:"lvs",totalCount:1},{fieldValue:"machine learning",totalCount:8},{fieldValue:"mathjax",totalCount:1},{fieldValue:"misc",totalCount:2},{fieldValue:"network",totalCount:1},{fieldValue:"reinforcement learning",totalCount:8},{fieldValue:"ubuntu",totalCount:1}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-bf30678d34a2f76fd72e.js.map