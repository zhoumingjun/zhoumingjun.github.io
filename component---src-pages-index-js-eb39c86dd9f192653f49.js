(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{157:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(163),l=t(166),i=(t(80),t(237)),c=t(165),s=t(160),u=t(169),f=t.n(u),d=t(238),m=t.n(d),g=Object(s.b)("small")({textTransform:"lowercase"}),h=Object(s.b)(o.a).withConfig({displayName:"TagList__Tag"})(["border-color:green;border-style:solid;border-width:1px;border-radius:5px;padding-left:2px;padding-right:2px;margin:5px;"]),b=function(e){return r.a.createElement(c.StaticQuery,{query:"2309532577",render:function(e){var a=[];return f.a.each(e.allMarkdownRemark.group,function(e){a.push({value:e.fieldValue,count:e.totalCount})}),r.a.createElement(o.b,{margin:"xsmall",pad:"small",background:{color:"#ffffff"},border:!0},r.a.createElement(o.d,{level:3,margin:{top:"none"}},"Tags:"),r.a.createElement(o.b,{direction:"row",wrap:!0},a.map(function(e,a){return r.a.createElement(h,{key:a,href:"/tags/"+e.value+"/page/0"},r.a.createElement(g,{style:{color:m()({luminosity:"random",hue:"random"})}},e.value," ",e.count))})))},data:i})},p=t(437),w=t(181),v=function(){return r.a.createElement(c.StaticQuery,{query:"3071061247",render:function(e){var a=e.allMarkdownRemark.edges;return r.a.createElement(o.b,{margin:"xsmall",pad:"small",background:{color:"#ffffff"},border:!0,fill:!0},r.a.createElement(o.d,{level:3,margin:{top:"none"}},"Latest Posts:"),r.a.createElement(w.a,{posts:a.map(function(e){return e.node})}),r.a.createElement(o.a,{href:"/all",label:"more ..."}))},data:p})},E=(t(438),[{name:"post",url:"/categories/post/page/0",desc:"common posts"},{name:"note",url:"/categories/note/page/0",desc:"technical notes"},{name:"series",url:"/series",desc:"series"},{name:"kb",url:"/knowledgebase",desc:"knowledge base"}]),y=function(){return r.a.createElement(o.b,{margin:"xsmall",pad:"small",background:{color:"#ffffff"},border:!0},r.a.createElement(o.d,{level:3,margin:{top:"none"}},"Categories:"),r.a.createElement(o.b,{direction:"column"},E.map(function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(o.a,{href:e.url},e.name),": ",e.desc)})))};a.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.b,{direction:"row",basis:"xlarge",justify:"center"},r.a.createElement(o.b,{direction:"column",width:"xlarge"},r.a.createElement(o.b,{direction:"row"},r.a.createElement(o.b,{direction:"row",basis:"2/3"},r.a.createElement(v,null)),r.a.createElement(o.b,{direction:"row",basis:"1/3"},r.a.createElement(o.b,null,r.a.createElement(b,null),r.a.createElement(y,null)))))))}},164:function(e,a,t){var n;e.exports=(n=t(168))&&n.default||n},165:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return h}),t.d(a,"StaticQueryContext",function(){return m}),t.d(a,"StaticQuery",function(){return g});var n=t(0),r=t.n(n),o=t(8),l=t.n(o),i=t(161),c=t.n(i);t.d(a,"Link",function(){return c.a}),t.d(a,"withPrefix",function(){return i.withPrefix}),t.d(a,"navigate",function(){return i.navigate}),t.d(a,"push",function(){return i.push}),t.d(a,"replace",function(){return i.replace}),t.d(a,"navigateTo",function(){return i.navigateTo});var s=t(50);t.d(a,"waitForRouteChange",function(){return s.a});var u=t(164),f=t.n(u);t.d(a,"PageRenderer",function(){return f.a});var d=t(33);t.d(a,"parsePath",function(){return d.a});var m=r.a.createContext({}),g=function(e){return r.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},166:function(e,a,t){"use strict";var n=t(177),r=t.n(n),o=t(0),l=t.n(o),i=t(163),c=t(160);function s(){var e=r()(["\n  body {\n    margin: 0;\n    background-color: #e8e8e8;\n  }\n"]);return s=function(){return e},e}t(179),Object(c.c)(s());var u={global:{colors:{brand:"#61DAFB",accent:["#921076","#769210"]},input:{border:{radius:"4px"}},font:{name:"Fira Sans",family:"'Fira Sans', Arial, sans-serif",face:"/* cyrillic-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvm4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvlIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},button:{border:{radius:"4px"}},checkBox:{border:{radius:"4px"}},layer:{border:{radius:"4px"}}},f=Object(c.b)(i.b).withConfig({displayName:"Layout__HeaderBox"})(["background:#333333;position:fixed;width:100vw;height:60px;"]),d=Object(c.b)(i.b).withConfig({displayName:"Layout__ContentBox"})(["width:100vw;padding-top:60px;"]),m=Object(c.b)(i.b).withConfig({displayName:"Layout__FooterBox"})(["background:#333333;width:100vw;"]),g=function(){return l.a.createElement(f,{direction:"row",justify:"center",pad:{vertical:"small"}},l.a.createElement(i.b,{direction:"row",justify:"between",align:"center",basis:"xlarge"},l.a.createElement("a",{href:"/"},l.a.createElement(i.e,{size:"medium",color:"#61DAFB"},"Mingjun Zhou's Blog")),l.a.createElement(i.b,{direction:"row",align:"center",gap:"medium"},l.a.createElement("a",{href:"/categories/post/page/0"},l.a.createElement(i.e,{size:"medium",color:"white"},"post")),l.a.createElement("a",{href:"/categories/note/page/0"},l.a.createElement(i.e,{size:"medium",color:"white"},"note")),l.a.createElement("a",{href:"/series"},l.a.createElement(i.e,{size:"medium",color:"white"},"series")),l.a.createElement("a",{href:"/knowledgebase"},l.a.createElement(i.e,{size:"medium",color:"white"},"kb")),l.a.createElement("a",{href:"/about"},l.a.createElement(i.e,{size:"medium",color:"white"},"about")))))},h=function(){return l.a.createElement(m,{direction:"column",justify:"center",margin:{top:"small"},pad:{top:"small"},border:"top"},l.a.createElement(i.b,{align:"center"},l.a.createElement(i.e,{color:"white"},"Build with ",l.a.createElement(i.a,{href:"https://www.gatsbyjs.org/",label:"GatsbyJS"})," ",l.a.createElement(i.a,{href:"https://reactjs.org/",label:"React "+l.a.version})," and ",l.a.createElement(i.a,{href:"https://v2.grommet.io",label:"Grommet"}),". Hosted on"," ",l.a.createElement(i.a,{href:"https://github.com/zhoumingjun/zhoumingjun.github.io",label:"Github"}),".",l.a.createElement("br",null),"The code is open source and available at"," ",l.a.createElement(i.a,{href:"https://github.com/calpa/blog",label:"Github"}),"."),l.a.createElement(i.e,{color:"white"},"Copyright © 2017 - ",(new Date).getFullYear())))},b=function(e){return l.a.createElement(d,null,e.children)};a.a=function(e){return l.a.createElement(i.c,{theme:u},l.a.createElement(i.b,{justify:"between",style:{minHeight:"100vh"}},l.a.createElement(i.b,null,l.a.createElement(g,null),l.a.createElement(b,null,e.children)),l.a.createElement(h,null)))}},167:function(e,a,t){"use strict";t(51);var n=t(174),r=t.n(n),o=t(0),l=t.n(o),i=t(163);a.a=function(e){var a=e.children,t=r()(e,["children"]);return l.a.createElement(i.b,Object.assign({direction:"row",justify:"center",pad:{horizontal:"xlarge",vertical:"small"}},t),l.a.createElement(i.b,{basis:"xlarge"},a))}},168:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),l=t.n(o),i=t(34),c=t(1),s=function(e){var a=e.location,t=c.a.getResourcesForPathname(a.pathname);return r.a.createElement(i.a,{location:a,pageResources:t})};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=s},181:function(e,a,t){"use strict";t(80);var n=t(0),r=t.n(n),o=t(213),l=t.n(o),i=t(160),c=(t(214),t(215),t(169)),s=t.n(c),u=t(163),f=Object(i.b)("small")({textTransform:"lowercase"}),d=Object(i.b)(u.a).withConfig({displayName:"tags-list__Tag"})(["border-color:green;border-style:solid;border-width:1px;border-radius:5px;padding-left:2px;padding-right:2px;margin-right:10px;"]),m=function(e){var a=e.tags;return!s.a.isEmpty(a)&&r.a.createElement(f,null,a.map(function(e,a,t){return r.a.createElement(d,{key:e,href:"/tags/"+e+"/page/0"},r.a.createElement(u.e,{size:"small"},e))}))};t(167),a.a=function(e){var a=e.posts;return r.a.createElement("div",null,a.map(function(e){return r.a.createElement(u.b,{key:e.fields.slug,margin:"xsmall",border:"bottom",pad:"small"},r.a.createElement(u.e,{color:"#818181",margin:{right:"medium"}},l()(e.frontmatter.date,"mmm dd, yyyy  ")),r.a.createElement(u.d,{level:3,margin:"none"},r.a.createElement(u.a,{href:e.fields.slug},e.frontmatter.title)),r.a.createElement(m,{tags:e.frontmatter.tags}),r.a.createElement(u.e,null,e.frontmatter.desc))}))}},237:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"cuda",totalCount:1},{fieldValue:"gatsby",totalCount:1},{fieldValue:"linux",totalCount:2},{fieldValue:"lvs",totalCount:1},{fieldValue:"machine learning",totalCount:8},{fieldValue:"mathjax",totalCount:1},{fieldValue:"misc",totalCount:2},{fieldValue:"network",totalCount:1},{fieldValue:"reinforcement learning",totalCount:8},{fieldValue:"ubuntu",totalCount:1}]}}}},238:function(e,a,t){(function(e){var t;t=function(){var e=null,a={};o("monochrome",null,[[0,0],[100,0]]),o("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),o("orange",[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),o("yellow",[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),o("green",[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),o("blue",[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),o("purple",[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),o("pink",[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var t=function(o){if(void 0!==(o=o||{}).seed&&null!==o.seed&&o.seed===parseInt(o.seed,10))e=o.seed;else if("string"==typeof o.seed)e=function(e){for(var a=0,t=0;t!==e.length&&!(a>=Number.MAX_SAFE_INTEGER);t++)a+=e.charCodeAt(t);return a}(o.seed);else{if(void 0!==o.seed&&null!==o.seed)throw new TypeError("The seed value must be an integer or string");e=null}var c,s;if(null!==o.count&&void 0!==o.count){var u=o.count,f=[];for(o.count=null;u>f.length;)e&&o.seed&&(o.seed+=1),f.push(t(o));return o.count=u,f}return function(e,a){switch(a.format){case"hsvArray":return e;case"hslArray":return i(e);case"hsl":var t=i(e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)";case"hsla":var n=i(e),r=a.alpha||Math.random();return"hsla("+n[0]+", "+n[1]+"%, "+n[2]+"%, "+r+")";case"rgbArray":return l(e);case"rgb":return"rgb("+l(e).join(", ")+")";case"rgba":var o=l(e);r=a.alpha||Math.random();return"rgba("+o.join(", ")+", "+r+")";default:return function(e){var a=l(e);function t(e){var a=e.toString(16);return 1==a.length?"0"+a:a}return"#"+t(a[0])+t(a[1])+t(a[2])}(e)}}([c=function(e){var t=r(function(e){if("number"==typeof parseInt(e)){var t=parseInt(e);if(t<360&&t>0)return[t,t]}if("string"==typeof e)if(a[e]){var n=a[e];if(n.hueRange)return n.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var r=function(e){e=3===(e=e.replace(/^#/,"")).length?e.replace(/(.)/g,"$1$1"):e;var a=parseInt(e.substr(0,2),16)/255,t=parseInt(e.substr(2,2),16)/255,n=parseInt(e.substr(4,2),16)/255,r=Math.max(a,t,n),o=r-Math.min(a,t,n),l=r?o/r:0;switch(r){case a:return[(t-n)/o%6*60||0,l,r];case t:return[60*((n-a)/o+2)||0,l,r];case n:return[60*((a-t)/o+4)||0,l,r]}}(e)[0];return[r,r]}return[0,360]}(o.hue));return t<0&&(t=360+t),t}(),s=function(e,a){if("monochrome"===a.hue)return 0;if("random"===a.luminosity)return r([0,100]);var t=function(e){return n(e).saturationRange}(e),o=t[0],l=t[1];switch(a.luminosity){case"bright":o=55;break;case"dark":o=l-10;break;case"light":l=55}return r([o,l])}(c,o),function(e,a,t){var o=function(e,a){for(var t=n(e).lowerBounds,r=0;r<t.length-1;r++){var o=t[r][0],l=t[r][1],i=t[r+1][0],c=t[r+1][1];if(a>=o&&a<=i){var s=(c-l)/(i-o);return s*a+(l-s*o)}}return 0}(c,s),l=100;switch(t.luminosity){case"dark":l=o+20;break;case"light":o=(l+o)/2;break;case"random":o=0,l=100}return r([o,l])}(0,0,o)],o)};function n(e){for(var t in e>=334&&e<=360&&(e-=360),a){var n=a[t];if(n.hueRange&&e>=n.hueRange[0]&&e<=n.hueRange[1])return a[t]}return"Color not found"}function r(a){if(null===e)return Math.floor(a[0]+Math.random()*(a[1]+1-a[0]));var t=a[1]||1,n=a[0]||0,r=(e=(9301*e+49297)%233280)/233280;return Math.floor(n+r*(t-n))}function o(e,t,n){var r=n[0][0],o=n[n.length-1][0],l=n[n.length-1][1],i=n[0][1];a[e]={hueRange:t,lowerBounds:n,saturationRange:[r,o],brightnessRange:[l,i]}}function l(e){var a=e[0];0===a&&(a=1),360===a&&(a=359),a/=360;var t=e[1]/100,n=e[2]/100,r=Math.floor(6*a),o=6*a-r,l=n*(1-t),i=n*(1-o*t),c=n*(1-(1-o)*t),s=256,u=256,f=256;switch(r){case 0:s=n,u=c,f=l;break;case 1:s=i,u=n,f=l;break;case 2:s=l,u=n,f=c;break;case 3:s=l,u=i,f=n;break;case 4:s=c,u=l,f=n;break;case 5:s=n,u=l,f=i}return[Math.floor(255*s),Math.floor(255*u),Math.floor(255*f)]}function i(e){var a=e[0],t=e[1]/100,n=e[2]/100,r=(2-t)*n;return[a,Math.round(t*n/(r<1?r:2-r)*1e4)/100,r/2*100]}return t}(),"object"==typeof e&&e&&e.exports&&(a=e.exports=t),a.randomColor=t}).call(this,t(202)(e))},437:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"e8bffc12-caec-5a07-8755-076f59191966 >>> MarkdownRemark",fields:{slug:"/note/unicode/"},frontmatter:{title:"Unicode",date:"2018-09-06",tags:null,desc:null}}},{node:{id:"490daa30-7318-5c7d-b81f-52e02afa2bb4 >>> MarkdownRemark",fields:{slug:"/post/2018-09-04-enable-mathjax-in-gatsby/"},frontmatter:{title:"Enable mathjax in gatsby",date:"2018-09-04",tags:["gatsby","mathjax"],desc:"Mathjax was used in some old posts, and it can't work correctly in gastby now. "}}},{node:{id:"a5bbbf79-2f02-5760-ad61-3bf9a84eb4ec >>> MarkdownRemark",fields:{slug:"/knowledgebase/linux/networking/basic/"},frontmatter:{title:"Basic",date:"2018-09-03",tags:null,desc:null}}},{node:{id:"09992ebe-c807-5a64-ac40-045f36578012 >>> MarkdownRemark",fields:{slug:"/knowledgebase/linux/networking/proxy/"},frontmatter:{title:"proxy",date:"2018-09-03",tags:null,desc:null}}},{node:{id:"df31276f-be79-5577-821c-8bf852aae37a >>> MarkdownRemark",fields:{slug:"/note/inside-shell/"},frontmatter:{title:"inside shell",date:"2018-08-31",tags:null,desc:null}}}]}}}},438:function(e,a,t){var n=t(27).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||t(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-eb39c86dd9f192653f49.js.map