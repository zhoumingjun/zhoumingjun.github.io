(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(155),l=a(159),i=(a(427),a(77),a(158)),s=a(154),c=a(160),u=a.n(c),f=[{name:"post",url:"/categories/post/page/0",desc:"common posts"},{name:"note",url:"/categories/note/page/0",desc:"technical notes"},{name:"series",url:"/series",desc:"series"},{name:"kb",url:"/knowledgebase",desc:"knowledge base"}],d=function(){return r.a.createElement(o.b,{margin:"xsmall",pad:"small",background:{color:"#ffffff"},border:!0},r.a.createElement(o.d,{level:3,margin:{top:"none"}},"Categories:"),r.a.createElement(o.b,{direction:"column"},f.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(o.a,{href:e.url},e.name),": ",e.desc)})))},m=a(428),p=a(167),h=function(){return r.a.createElement(i.StaticQuery,{query:"3071061247",render:function(e){var t=e.allMarkdownRemark.edges;return r.a.createElement(o.b,{margin:"xsmall",pad:"small",background:{color:"#ffffff"},border:!0,fill:!0},r.a.createElement(o.d,{level:3,margin:{top:"none"}},"Latest Posts:"),r.a.createElement(p.a,{posts:t.map(function(e){return e.node})}),r.a.createElement(o.a,{href:"/all",label:"more ..."}))},data:m})},g=(a(182),a(429)),b=a(430),v=a.n(b),w=s.b.small({textTransform:"lowercase"}),y=Object(s.b)(o.a).withConfig({displayName:"TagSection__Tag"})(["border-color:green;border-style:solid;border-width:1px;border-radius:5px;padding-left:2px;padding-right:2px;margin:5px;"]),E=function(e){return r.a.createElement(i.StaticQuery,{query:"2309532577",render:function(e){var t=[];return u.a.each(e.allMarkdownRemark.group,function(e){t.push({value:e.fieldValue,count:e.totalCount})}),r.a.createElement(o.b,{margin:"xsmall",pad:"small",background:{color:"#ffffff"},border:!0},r.a.createElement(o.d,{level:3,margin:{top:"none"}},"Tags:"),r.a.createElement(o.b,{direction:"row",wrap:!0},t.map(function(e,t){return r.a.createElement(y,{key:t,href:"/tags/"+e.value+"/page/0"},r.a.createElement(w,{style:{color:v()({luminosity:"random",hue:"random"})}},e.value," ",e.count))})))},data:g})};t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.b,{direction:"row",basis:"xlarge",justify:"center"},r.a.createElement(o.b,{direction:"row"},r.a.createElement(o.b,{direction:"row"},r.a.createElement(o.b,{direction:"row",basis:"2/3"},r.a.createElement(h,null)),r.a.createElement(o.b,{direction:"row",basis:"1/3"},r.a.createElement(o.b,null,r.a.createElement(E,null),r.a.createElement(d,null)))))))}},157:function(e,t,a){"use strict";var n=a(36);t.__esModule=!0,t.withPrefix=m,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(162)),o=n(a(169)),l=n(a(12)),i=n(a(51)),s=n(a(52)),c=n(a(8)),u=n(a(0)),f=a(14),d=a(158);function m(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var p={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,s.default)((0,i.default)((0,i.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0);var r=t.location;return a.state={IOSupported:n,location:r},a.handleRef=a.handleRef.bind((0,i.default)((0,i.default)(a))),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,l=void 0===n?this.defaultGetProps:n,i=t.onClick,s=t.onMouseEnter,c=t.location,p=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","location","activeClassName","activeStyle","ref","innerRef","state"]),g=m(a);return u.default.createElement(f.Link,(0,o.default)({to:g,state:p,getProps:l,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,d.parsePath)(a).pathname)},onClick:function(t){if(i&&i(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();var a=(0,d.parsePath)(g),n=a.pathname,r=a.hash;if(n===c.pathname||!n){var o=r?document.getElementById(r.substr(1)):null;null!==o?o.scrollIntoView():window.scrollTo(0,0)}v(g,{state:p})}return!0}},h))},t}(u.default.Component);h.propTypes=(0,o.default)({},p,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired});var g,b=(g=h,function(e){return u.default.createElement(f.Location,null,function(t){var a=t.location;return u.default.createElement(g,(0,o.default)({location:a},e))})});t.default=b;var v=function(e,t){window.___navigate(e,t)};t.navigate=v;var w=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(e)};t.push=w,t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(e)},t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),w(e)}},158:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(8),l=a.n(o),i=a(157),s=a.n(i);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var c=a(34);a.d(t,"waitForRouteChange",function(){return c.c});var u=a(161),f=a.n(u);a.d(t,"PageRenderer",function(){return f.a});var d=a(35);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},159:function(e,t,a){"use strict";var n=a(172),r=a.n(n),o=a(0),l=a.n(o),i=a(155),s=a(154),c=Object(s.b)(i.b).withConfig({displayName:"Header__HeaderBox"})(["background:#333333;position:fixed;width:100vw;height:60px;z-index:1;"]),u=function(){return l.a.createElement(c,{direction:"row",justify:"center",pad:{vertical:"small"}},l.a.createElement(i.b,{direction:"row",justify:"between",align:"center",basis:"xlarge"},l.a.createElement("a",{href:"/"},l.a.createElement(i.e,{size:"medium",color:"#61DAFB"},"Mingjun Zhou's Blog")),l.a.createElement(i.b,{direction:"row",align:"center",gap:"medium"},l.a.createElement("a",{href:"/categories/post/page/0"},l.a.createElement(i.e,{size:"medium",color:"white"},"post")),l.a.createElement("a",{href:"/categories/note/page/0"},l.a.createElement(i.e,{size:"medium",color:"white"},"note")),l.a.createElement("a",{href:"/series"},l.a.createElement(i.e,{size:"medium",color:"white"},"series")),l.a.createElement("a",{href:"/knowledgebase"},l.a.createElement(i.e,{size:"medium",color:"white"},"kb")),l.a.createElement("a",{href:"/about"},l.a.createElement(i.e,{size:"medium",color:"white"},"about")))))},f=Object(s.b)(i.b).withConfig({displayName:"Footer__FooterBox"})(["background:#333333;width:100vw;"]),d=function(){return l.a.createElement(f,{direction:"column",justify:"center",margin:{top:"small"},pad:{top:"small"},border:"top"},l.a.createElement(i.b,{align:"center"},l.a.createElement(i.e,{color:"white"},"Build with ",l.a.createElement(i.a,{href:"https://www.gatsbyjs.org/",label:"GatsbyJS"})," ",l.a.createElement(i.a,{href:"https://reactjs.org/",label:"React "+l.a.version})," and ",l.a.createElement(i.a,{href:"https://v2.grommet.io",label:"Grommet"}),". Hosted on"," ",l.a.createElement(i.a,{href:"https://github.com/zhoumingjun/zhoumingjun.github.io",label:"Github"}),".",l.a.createElement("br",null),"The code is open source and available at"," ",l.a.createElement(i.a,{href:"https://github.com/calpa/blog",label:"Github"}),"."),l.a.createElement(i.e,{color:"white"},"Copyright © 2017 - ",(new Date).getFullYear())))},m=Object(s.b)(i.b).withConfig({displayName:"Main__ContentBox"})(["width:100vw;padding-top:60px;"]),p=function(e){return l.a.createElement(m,{direction:"row",justify:"center"},e.children)};function h(){var e=r()(["\n  body {\n    margin: 0;\n    background-color: white;\n  }\n"]);return h=function(){return e},e}Object(s.c)(h());var g={global:{colors:{brand:"#61DAFB",accent:["#921076","#769210"]},input:{border:{radius:"4px"}},font:{name:"Fira Sans",family:"'Fira Sans', Arial, sans-serif",face:"/* cyrillic-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvm4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvlIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},button:{border:{radius:"4px"}},checkBox:{border:{radius:"4px"}},layer:{border:{radius:"4px"}}};t.a=function(e){return l.a.createElement(i.c,{theme:g},l.a.createElement(i.b,{justify:"between",style:{minHeight:"100vh"}},l.a.createElement(i.b,null,l.a.createElement(u,null),l.a.createElement(p,null,e.children)),l.a.createElement(d,null)))}},161:function(e,t,a){var n;e.exports=(n=a(170))&&n.default||n},163:function(e,t,a){"use strict";a(50),a(162),a(0),a(155)},167:function(e,t,a){"use strict";a(77);var n=a(0),r=a.n(n),o=a(186),l=a.n(o),i=a(154),s=(a(187),a(190),a(182),a(160)),c=a.n(s),u=a(155),f=i.b.small({textTransform:"lowercase"}),d=Object(i.b)(u.a).withConfig({displayName:"SeparatedTags__Tag"})(["border-color:green;border-style:solid;border-width:1px;border-radius:5px;padding-left:2px;padding-right:2px;margin-right:10px;"]),m=function(e){var t=e.tags;return!c.a.isEmpty(t)&&r.a.createElement(f,null,t.map(function(e,t,a){return r.a.createElement(d,{key:e,href:"/tags/"+e+"/page/0"},r.a.createElement(u.e,{size:"small"},e))}))};a(163),t.a=function(e){var t=e.posts;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(u.b,{key:e.fields.slug,margin:"xsmall",pad:"small"},r.a.createElement(u.e,{color:"#818181",margin:{right:"medium"}},l()(e.frontmatter.date,"mmm dd, yyyy  ")),r.a.createElement(u.d,{level:3,margin:"none"},r.a.createElement(u.a,{href:e.fields.slug},e.frontmatter.title)),r.a.createElement(m,{tags:e.frontmatter.tags}),r.a.createElement(u.e,null,e.frontmatter.desc))}))}},169:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},170:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),i=a(37),s=a(1),c=function(e){var t=e.location,a=s.default.getResourcesForPathname(t.pathname);return r.a.createElement(i.a,{location:t,pageResources:a})};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},427:function(e,t,a){var n=a(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(16)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},428:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"6766c83e-1386-55c9-ad0c-2898e20a54ef",fields:{slug:"/series/pytorch/"},frontmatter:{title:"pytorch",date:"2018-09-07",tags:["machine learning","pytorch"],desc:null}}},{node:{id:"29d6fd98-3ccf-5aaa-870d-ae2c5a6b19a4",fields:{slug:"/series/pytorch/rnn/"},frontmatter:{title:"RNN",date:"2018-09-07",tags:["machine learning","pytorch","rnn"],desc:null}}},{node:{id:"b945223c-d040-5a25-8d7f-8dcf84cae1b7",fields:{slug:"/series/pytorch/rnn/1-Fundamental/"},frontmatter:{title:"Fundamental",date:"2018-09-07",tags:["machine learning","pytorch","rnn"],desc:null}}},{node:{id:"28654087-d89a-53d5-bfc2-be7a94c0b084",fields:{slug:"/note/unicode/"},frontmatter:{title:"Unicode",date:"2018-09-06",tags:null,desc:null}}},{node:{id:"94dfa7de-6e82-58ce-abfa-c47aa06a32cb",fields:{slug:"/post/2018-09-04-enable-mathjax-in-gatsby/"},frontmatter:{title:"Enable mathjax in gatsby",date:"2018-09-04",tags:["gatsby","mathjax"],desc:"Mathjax was used in some old posts, and it can't work correctly in gastby now. "}}}]}}}},429:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"cuda",totalCount:1},{fieldValue:"gatsby",totalCount:1},{fieldValue:"linux",totalCount:2},{fieldValue:"lvs",totalCount:1},{fieldValue:"machine learning",totalCount:11},{fieldValue:"mathjax",totalCount:1},{fieldValue:"misc",totalCount:2},{fieldValue:"network",totalCount:1},{fieldValue:"pytorch",totalCount:3},{fieldValue:"reinforcement learning",totalCount:8},{fieldValue:"rnn",totalCount:2},{fieldValue:"ubuntu",totalCount:1}]}}}},430:function(e,t,a){(function(e){var a;a=function(){var e=null,t={};o("monochrome",null,[[0,0],[100,0]]),o("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),o("orange",[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),o("yellow",[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),o("green",[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),o("blue",[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),o("purple",[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),o("pink",[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var a=function(o){if(void 0!==(o=o||{}).seed&&null!==o.seed&&o.seed===parseInt(o.seed,10))e=o.seed;else if("string"==typeof o.seed)e=function(e){for(var t=0,a=0;a!==e.length&&!(t>=Number.MAX_SAFE_INTEGER);a++)t+=e.charCodeAt(a);return t}(o.seed);else{if(void 0!==o.seed&&null!==o.seed)throw new TypeError("The seed value must be an integer or string");e=null}var s,c;if(null!==o.count&&void 0!==o.count){var u=o.count,f=[];for(o.count=null;u>f.length;)e&&o.seed&&(o.seed+=1),f.push(a(o));return o.count=u,f}return function(e,t){switch(t.format){case"hsvArray":return e;case"hslArray":return i(e);case"hsl":var a=i(e);return"hsl("+a[0]+", "+a[1]+"%, "+a[2]+"%)";case"hsla":var n=i(e),r=t.alpha||Math.random();return"hsla("+n[0]+", "+n[1]+"%, "+n[2]+"%, "+r+")";case"rgbArray":return l(e);case"rgb":return"rgb("+l(e).join(", ")+")";case"rgba":var o=l(e);r=t.alpha||Math.random();return"rgba("+o.join(", ")+", "+r+")";default:return function(e){var t=l(e);function a(e){var t=e.toString(16);return 1==t.length?"0"+t:t}return"#"+a(t[0])+a(t[1])+a(t[2])}(e)}}([s=function(e){var a=r(function(e){if("number"==typeof parseInt(e)){var a=parseInt(e);if(a<360&&a>0)return[a,a]}if("string"==typeof e)if(t[e]){var n=t[e];if(n.hueRange)return n.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var r=function(e){e=3===(e=e.replace(/^#/,"")).length?e.replace(/(.)/g,"$1$1"):e;var t=parseInt(e.substr(0,2),16)/255,a=parseInt(e.substr(2,2),16)/255,n=parseInt(e.substr(4,2),16)/255,r=Math.max(t,a,n),o=r-Math.min(t,a,n),l=r?o/r:0;switch(r){case t:return[(a-n)/o%6*60||0,l,r];case a:return[60*((n-t)/o+2)||0,l,r];case n:return[60*((t-a)/o+4)||0,l,r]}}(e)[0];return[r,r]}return[0,360]}(o.hue));return a<0&&(a=360+a),a}(),c=function(e,t){if("monochrome"===t.hue)return 0;if("random"===t.luminosity)return r([0,100]);var a=function(e){return n(e).saturationRange}(e),o=a[0],l=a[1];switch(t.luminosity){case"bright":o=55;break;case"dark":o=l-10;break;case"light":l=55}return r([o,l])}(s,o),function(e,t,a){var o=function(e,t){for(var a=n(e).lowerBounds,r=0;r<a.length-1;r++){var o=a[r][0],l=a[r][1],i=a[r+1][0],s=a[r+1][1];if(t>=o&&t<=i){var c=(s-l)/(i-o);return c*t+(l-c*o)}}return 0}(s,c),l=100;switch(a.luminosity){case"dark":l=o+20;break;case"light":o=(l+o)/2;break;case"random":o=0,l=100}return r([o,l])}(0,0,o)],o)};function n(e){for(var a in e>=334&&e<=360&&(e-=360),t){var n=t[a];if(n.hueRange&&e>=n.hueRange[0]&&e<=n.hueRange[1])return t[a]}return"Color not found"}function r(t){if(null===e)return Math.floor(t[0]+Math.random()*(t[1]+1-t[0]));var a=t[1]||1,n=t[0]||0,r=(e=(9301*e+49297)%233280)/233280;return Math.floor(n+r*(a-n))}function o(e,a,n){var r=n[0][0],o=n[n.length-1][0],l=n[n.length-1][1],i=n[0][1];t[e]={hueRange:a,lowerBounds:n,saturationRange:[r,o],brightnessRange:[l,i]}}function l(e){var t=e[0];0===t&&(t=1),360===t&&(t=359),t/=360;var a=e[1]/100,n=e[2]/100,r=Math.floor(6*t),o=6*t-r,l=n*(1-a),i=n*(1-o*a),s=n*(1-(1-o)*a),c=256,u=256,f=256;switch(r){case 0:c=n,u=s,f=l;break;case 1:c=i,u=n,f=l;break;case 2:c=l,u=n,f=s;break;case 3:c=l,u=i,f=n;break;case 4:c=s,u=l,f=n;break;case 5:c=n,u=l,f=i}return[Math.floor(255*c),Math.floor(255*u),Math.floor(255*f)]}function i(e){var t=e[0],a=e[1]/100,n=e[2]/100,r=(2-a)*n;return[t,Math.round(a*n/(r<1?r:2-r)*1e4)/100,r/2*100]}return a}(),"object"==typeof e&&e&&e.exports&&(t=e.exports=a),t.randomColor=a}).call(this,a(197)(e))}}]);
//# sourceMappingURL=component---src-pages-index-js-52fb25734cc575f6772e.js.map