(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return u});var a=n(0),r=n.n(a),o=n(194),i=n.n(o),l=(n(163),n(156)),s=n(162),c=n(167);t.default=function(e){var t=e.pageContext.posts,n=e.data.site.siteMetadata;return r.a.createElement(s.a,null,r.a.createElement(i.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n.description}],title:n.title}),r.a.createElement(l.b,{direction:"row",basis:"xlarge",justify:"start"},r.a.createElement(c.a,{posts:t})))};var u="381168790"},158:function(e,t,n){"use strict";var a=n(36);t.__esModule=!0,t.withPrefix=m,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(165)),o=a(n(174)),i=a(n(12)),l=a(n(51)),s=a(n(52)),c=a(n(8)),u=a(n(0)),f=n(14),d=n(163);function m(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var p={activeClassName:c.default.string,activeStyle:c.default.object},g=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0);var r=t.location;return n.state={IOSupported:a,location:r},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,l=t.onClick,s=t.onMouseEnter,c=t.location,p=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),g=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","location","activeClassName","activeStyle","ref","innerRef","state"]),h=m(n);return u.default.createElement(f.Link,(0,o.default)({to:h,state:p,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,d.parsePath)(n).pathname)},onClick:function(t){if(l&&l(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();var n=(0,d.parsePath)(h),a=n.pathname,r=n.hash;if(a===c.pathname||!a){var o=r?document.getElementById(r.substr(1)):null;null!==o?o.scrollIntoView():window.scrollTo(0,0)}w(h,{state:p})}return!0}},g))},t}(u.default.Component);g.propTypes=(0,o.default)({},p,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired});var h,v=(h=g,function(e){return u.default.createElement(f.Location,null,function(t){var n=t.location;return u.default.createElement(h,(0,o.default)({location:n},e))})});t.default=v;var w=function(e,t){window.___navigate(e,t)};t.navigate=w;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(e)};t.push=b,t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(e)},t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),b(e)}},162:function(e,t,n){"use strict";var a=n(173),r=n.n(a),o=n(0),i=n.n(o),l=n(156),s=n(155),c=Object(s.b)(l.b).withConfig({displayName:"Header__HeaderBox"})(["background:#333333;position:fixed;width:100vw;height:60px;z-index:1;"]),u=function(){return i.a.createElement(c,{direction:"row",justify:"center",pad:{vertical:"small"}},i.a.createElement(l.b,{direction:"row",justify:"between",align:"center",basis:"xlarge"},i.a.createElement("a",{href:"/"},i.a.createElement(l.e,{size:"medium",color:"#61DAFB"},"Mingjun Zhou blog")),i.a.createElement(l.b,{direction:"row",align:"center",gap:"medium"},i.a.createElement("a",{href:"/categories/post/page/0"},i.a.createElement(l.e,{size:"medium",color:"white"},"post")),i.a.createElement("a",{href:"/categories/note/page/0"},i.a.createElement(l.e,{size:"medium",color:"white"},"note")),i.a.createElement("a",{href:"/series"},i.a.createElement(l.e,{size:"medium",color:"white"},"series")),i.a.createElement("a",{href:"/knowledgebase"},i.a.createElement(l.e,{size:"medium",color:"white"},"kb")),i.a.createElement("a",{href:"/about"},i.a.createElement(l.e,{size:"medium",color:"white"},"about")))))},f=n(159),d=Object(s.b)(l.b).withConfig({displayName:"Footer__FooterBox"})(["background:#eef1f5;width:100vw;"]),m=function(){return i.a.createElement(d,{direction:"column",align:"center",margin:{top:"small"},pad:{top:"small"},border:{side:"top",color:"#EEF1F5"}},i.a.createElement(l.b,{direction:"row",justify:"between",width:"xlarge",pad:"small"},i.a.createElement(l.e,{size:"small",color:"rgb(130, 130, 130)"},"Mingjun Zhou blog"),i.a.createElement(l.a,{href:"https://github.com/zhoumingjun",label:i.a.createElement(l.e,{size:"small"},"zhoumingjun"),icon:i.a.createElement(f.j,null),primary:!0}),i.a.createElement(l.b,{direction:"row"},i.a.createElement(f.c,null))))},p=Object(s.b)(l.b).withConfig({displayName:"Main__ContentBox"})(["width:100vw;padding-top:60px;"]),g=function(e){return i.a.createElement(p,{direction:"row",justify:"center"},e.children)};function h(){var e=r()(["\n  body {\n    margin: 0;\n    background-color: white;\n  }\n"]);return h=function(){return e},e}Object(s.c)(h());var v={global:{colors:{brand:"#61DAFB",accent:["#921076","#769210"]},input:{border:{radius:"4px"}},font:{name:"Fira Sans",family:"'Fira Sans', Arial, sans-serif",face:"/* cyrillic-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvm4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvlIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},button:{border:{radius:"4px"}},checkBox:{border:{radius:"4px"}},layer:{border:{radius:"4px"}}};t.a=function(e){return i.a.createElement(l.c,{theme:v},i.a.createElement(l.b,{justify:"between",style:{minHeight:"100vh"}},i.a.createElement(l.b,null,i.a.createElement(u,null),i.a.createElement(g,null,e.children)),i.a.createElement(m,null)))}},163:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(8),i=n.n(o),l=n(158),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(34);n.d(t,"waitForRouteChange",function(){return c.c});var u=n(166),f=n.n(u);n.d(t,"PageRenderer",function(){return f.a});var d=n(35);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},164:function(e,t,n){"use strict";n(50),n(165),n(0),n(156)},166:function(e,t,n){var a;e.exports=(a=n(175))&&a.default||a},167:function(e,t,n){"use strict";n(77),n(78);var a=n(0),r=n.n(a),o=n(190),i=n.n(o),l=n(155),s=(n(191),n(192),n(179),n(161)),c=n.n(s),u=n(156),f=l.b.small({textTransform:"lowercase"}),d=Object(l.b)(u.a).withConfig({displayName:"SeparatedTags__StyledTag"})(["border-color:rgba(0,0,0,0.4);border-style:solid;border-width:1px;border-radius:5px;padding:1px 5px;margin-right:10px;"]),m=function(e){var t=e.tags;return!c.a.isEmpty(t)&&r.a.createElement(f,null,t.map(function(e,t,n){return r.a.createElement(d,{key:e,href:"/tags/"+e+"/page/0",label:r.a.createElement(u.e,{size:"small",color:"rgba(0, 0, 0, 0.4)"},e)})}))};n(164),t.a=function(e){var t=e.posts,n=e.filter,a=n?t.filter(function(e){return e.frontmatter.date==n}):t;return 0==a.length?r.a.createElement(u.d,{level:3,textAlign:"center"},"no posts on ",n):r.a.createElement("div",null,a.map(function(e){return r.a.createElement(u.b,{key:e.fields.permalink,margin:"xsmall",pad:"small"},r.a.createElement(u.e,{color:"#818181",margin:{right:"medium"}},i()(e.frontmatter.date,"mmm dd, yyyy  ")),r.a.createElement(u.d,{level:3,margin:"none"},r.a.createElement(u.a,{href:e.fields.permalink},e.frontmatter.title)),r.a.createElement(m,{tags:e.frontmatter.tags}),r.a.createElement(u.e,null,e.frontmatter.desc))}))}},174:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},175:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),l=n(37),s=n(1),c=function(e){var t=e.location,n=s.default.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:n})};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---src-templates-blog-tag-js-ec26399cc14445eef5fb.js.map