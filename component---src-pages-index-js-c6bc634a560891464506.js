(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{239:function(e,a,t){"use strict";t.r(a),t(118);var n=t(0),r=t.n(n),o=t(243),l=t(350),i=t(250),c=t(482),u=t(249),s=t(483),f=t(241),m=t(270),d=t.n(m),g=function(e){return r.a.createElement(u.StaticQuery,{query:"2309532577",render:function(e){var a=[];return d.a.each(e.allMarkdownRemark.group,function(e){a.push({value:e.fieldValue,count:e.totalCount})}),r.a.createElement(o.b,{margin:{vertical:"small"},pad:{vertical:"medium"},background:"rgb(253, 250, 246)"},r.a.createElement(s.TagCloud,{minSize:20,maxSize:40,colorOptions:{luminosity:"bright",hue:"random"},tags:a,onClick:function(e){Object(f.push)("/tags/"+e.value+"/page/0")}}))},data:c})};t(489),t.d(a,"pageQuery",function(){return h}),a.default=function(e){var a=e.data.allMarkdownRemark.edges;return r.a.createElement(i.a,null,r.a.createElement(o.b,{direction:"row",basis:"xlarge",justify:"center"},r.a.createElement(o.b,{direction:"column",width:"xlarge"},r.a.createElement(g,null),r.a.createElement(l.a,{posts:a.map(function(e){return e.node})}))))};var h="1953569141"},246:function(e,a,t){var n;e.exports=(n=t(252))&&n.default||n},249:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return g}),t.d(a,"StaticQueryContext",function(){return m}),t.d(a,"StaticQuery",function(){return d});var n=t(0),r=t.n(n),o=t(12),l=t.n(o),i=t(241),c=t.n(i);t.d(a,"Link",function(){return c.a}),t.d(a,"withPrefix",function(){return i.withPrefix}),t.d(a,"navigate",function(){return i.navigate}),t.d(a,"push",function(){return i.push}),t.d(a,"replace",function(){return i.replace}),t.d(a,"navigateTo",function(){return i.navigateTo});var u=t(246),s=t.n(u);t.d(a,"PageRenderer",function(){return s.a});var f=t(46);t.d(a,"parsePath",function(){return f.a});var m=r.a.createContext({}),d=function(e){return r.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},250:function(e,a,t){"use strict";var n=t(272),r=t.n(n),o=t(0),l=t.n(o),i=t(243),c=t(240);function u(){var e=r()(["\n  body {\n    margin: 0;\n  }\n"]);return u=function(){return e},e}t(273),Object(c.c)(u());var s={global:{colors:{brand:"#61DAFB",accent:["#921076","#769210"]},input:{border:{radius:"4px"}},font:{name:"Fira Sans",family:"'Fira Sans', Arial, sans-serif",face:"/* cyrillic-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvm4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvlIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},button:{border:{radius:"4px"}},checkBox:{border:{radius:"4px"}},layer:{border:{radius:"4px"}}},f=Object(c.b)(i.b).withConfig({displayName:"Layout__HeaderBox"})(["background:#333333;position:fixed;width:100vw;height:60px;"]),m=c.b.div.withConfig({displayName:"Layout__ContentDiv"})(["padding-top:60px;"]),d=Object(c.b)(i.b).withConfig({displayName:"Layout__FooterBox"})(["background:#eeeeee;width:100vw;"]),g=function(){return l.a.createElement(f,{direction:"row",justify:"center",pad:{vertical:"small"}},l.a.createElement(i.b,{direction:"row",justify:"between",align:"center",basis:"xlarge"},l.a.createElement("a",{href:"/"},l.a.createElement(i.e,{size:"medium",color:"#61DAFB"},"Mingjun Zhou's Blog")),l.a.createElement(i.b,{direction:"row",align:"center",gap:"medium"},l.a.createElement("a",{href:"/categories/post/page/0"},l.a.createElement(i.e,{size:"medium",color:"white"},"post")),l.a.createElement("a",{href:"/categories/note/page/0"},l.a.createElement(i.e,{size:"medium",color:"white"},"note")),l.a.createElement("a",{href:"/series"},l.a.createElement(i.e,{size:"medium",color:"white"},"series")),l.a.createElement("a",{href:"/knowledgebase"},l.a.createElement(i.e,{size:"medium",color:"white"},"kb")),l.a.createElement("a",{href:"/about"},l.a.createElement(i.e,{size:"medium",color:"white"},"about")))))},h=function(){return l.a.createElement(d,{direction:"row",justify:"center",pad:{vertical:"small"}},l.a.createElement(i.b,{align:"center"},l.a.createElement(i.e,null,"Build with ",l.a.createElement(i.a,{href:"https://www.gatsbyjs.org/",label:"GatsbyJS"})," ",l.a.createElement(i.a,{href:"https://reactjs.org/",label:"React "+l.a.version})," and ",l.a.createElement(i.a,{href:"https://v2.grommet.io",label:"Grommet"}),". Hosted on"," ",l.a.createElement(i.a,{href:"https://github.com/zhoumingjun/zhoumingjun.github.io",label:"Github"}),".",l.a.createElement("br",null),"The code is open source and available at"," ",l.a.createElement(i.a,{href:"https://github.com/calpa/blog",label:"Github"}),"."),l.a.createElement(i.e,null,"Copyright © 2017 - ",(new Date).getFullYear())))};a.a=function(e){return l.a.createElement(i.c,{theme:s,style:{minHeight:"100vh"}},l.a.createElement(g,null),l.a.createElement(m,null,e.children),l.a.createElement(h,null))}},252:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(12),l=t.n(o),i=t(47),c=t(1),u=function(e){var a=e.location,t=c.a.getResourcesForPathname(a.pathname);return r.a.createElement(i.a,{location:a,pageResources:t})};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=u},350:function(e,a,t){"use strict";t(118);var n=t(0),r=t.n(n),o=t(282),l=t.n(o),i=t(240),c=(t(283),t(344),t(346),t(270)),u=t.n(c),s=t(243),f=i.b.small({textTransform:"lowercase"}),m=Object(i.b)(s.a).withConfig({displayName:"tags-list__Tag"})(["border-color:green;border-style:solid;border-width:1px;border-radius:5px;padding-left:2px;padding-right:2px;margin-right:10px;"]),d=function(e){var a=e.tags;return!u.a.isEmpty(a)&&r.a.createElement(f,null,a.map(function(e,a,t){return r.a.createElement(m,{key:e,href:"/tags/"+e+"/page/0"},r.a.createElement(s.e,{size:"small"},e))}))};a.a=function(e){var a=e.posts;return r.a.createElement("section",null,a.map(function(e){return r.a.createElement(s.b,{key:e.fields.slug,margin:{bottom:"medium"}},r.a.createElement(s.e,{color:"#818181",margin:{right:"medium"}},l()(e.frontmatter.date,"mmm dd, yyyy  ")),r.a.createElement(s.d,{level:3,margin:"none"},r.a.createElement(s.a,{href:e.fields.slug},e.frontmatter.title)),r.a.createElement(d,{tags:e.frontmatter.tags}),r.a.createElement(s.e,null,e.frontmatter.desc))}))}},482:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"cuda",totalCount:1},{fieldValue:"gatsby",totalCount:1},{fieldValue:"linux",totalCount:2},{fieldValue:"lvs",totalCount:1},{fieldValue:"machine learning",totalCount:8},{fieldValue:"mathjax",totalCount:1},{fieldValue:"misc",totalCount:2},{fieldValue:"network",totalCount:1},{fieldValue:"reinforcement learning",totalCount:8},{fieldValue:"ubuntu",totalCount:1}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-c6bc634a560891464506.js.map