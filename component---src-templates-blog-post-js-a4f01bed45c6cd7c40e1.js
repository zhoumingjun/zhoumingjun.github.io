(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{238:function(e,t,n){"use strict";n.r(t),n(129),n(118);var a=n(0),r=n.n(a),o=n(348),i=n.n(o),l=n(249),s=n(242),c=n(239),u=n(271),f=n.n(u),d=n(250),m=n(276),p=Object(c.b)(l.Link).withConfig({displayName:"PrevNext__StyledLink"})(["border-color:grey;border-style:solid;border-width:1px;padding-left:2em;padding-right:2em;padding-top:0.5em;padding-bottom:0.5em;"]),h=function(e){var t=e.prev,n=e.next;return r.a.createElement(m.a,{pad:{horizontal:"xlarge",top:"small"}},r.a.createElement("hr",null),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,t&&r.a.createElement(p,{to:t.fields.slug,rel:"prev"},r.a.createElement("span",null,"<-")," ",t.frontmatter.title)),r.a.createElement("li",null,n&&r.a.createElement(p,{to:n.fields.slug,rel:"next"},n.frontmatter.title," ",r.a.createElement("span",null,"->")))))},g=n(476),b=n.n(g);n.d(t,"pageQuery",function(){return E});var y=c.b.div.withConfig({displayName:"blog-post__ContentBox"})(["img{max-width:100%;}"]),w=c.b.ul.withConfig({displayName:"blog-post__StyledUL"})(["list-style:none;padding-left:1em;margin:0px;"]),v=c.b.li.withConfig({displayName:"blog-post__StyledLI"})([""]),E=(t.default=function(e){var t=e.pageContext,n=t.prev,a=t.next,o=t.toc,c=e.data,u=c.site.siteMetadata,p=c.markdownRemark,g=o?JSON.parse(o):void 0,E=p.fileAbsolutePath,C=u.sourceUrl+E.substr(E.indexOf("content")),S=u.disqusShortname,U={url:u.siteUrl+p.fields.slug,identifier:p.id,title:p.frontmatter.title};return console.log("disqus",u,S,U),r.a.createElement(d.a,null,r.a.createElement(i.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:u.description}],title:u.title}),r.a.createElement(s.b,{direction:"row",justify:"center",basis:"auto"},r.a.createElement(s.b,{basis:"xlarge"},r.a.createElement(s.b,{pad:"small"},r.a.createElement(s.d,{textAlign:"center",margin:"small"},p.frontmatter.title),r.a.createElement(s.b,{align:"end"},p.frontmatter.date," ",r.a.createElement(s.a,{href:C,label:"View page source"}))),r.a.createElement(s.b,{direction:"row",pad:"small"},r.a.createElement(y,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:p.html}})))),o&&r.a.createElement(s.b,{basis:"medium",pad:"small",border:{color:"lightgrey",side:"left",size:"small"}},r.a.createElement(s.b,{align:"center"},r.a.createElement(s.d,{level:3,margin:"small"},"TOC")),function e(t){var n=t.post,a=t.children,o=[];return f.a.forOwn(a,function(e,t){o.push(e)}),o=f.a.sortBy(o,function(e){return e.post.fields.slug}),r.a.createElement("div",null,n&&r.a.createElement(l.Link,{to:n.fields.slug},r.a.createElement(s.e,null," ",n.frontmatter.title)),r.a.createElement(w,null,o&&o.map(function(t,n){return r.a.createElement(v,{key:n},e(t))})))}(g))),r.a.createElement(h,{prev:n,next:a}),r.a.createElement(m.a,{pad:{horizontal:"xlarge",top:"small"}},r.a.createElement(b.a.DiscussionEmbed,{shortname:S,config:U})))},"62680339")},247:function(e,t,n){var a;e.exports=(a=n(256))&&a.default||a},249:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(12),i=n.n(o),l=n(241),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(247),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var f=n(46);n.d(t,"parsePath",function(){return f.a});var d=r.a.createContext({}),m=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},250:function(e,t,n){"use strict";var a=n(273),r=n.n(a),o=n(0),i=n.n(o),l=n(242),s=n(239);function c(){var e=r()(["\n  body {\n    margin: 0;\n  }\n"]);return c=function(){return e},e}n(274),Object(s.c)(c());var u={global:{colors:{brand:"#61DAFB",accent:["#921076","#769210"]},input:{border:{radius:"4px"}},font:{name:"Fira Sans",family:"'Fira Sans', Arial, sans-serif",face:"/* cyrillic-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvm4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvlIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},button:{border:{radius:"4px"}},checkBox:{border:{radius:"4px"}},layer:{border:{radius:"4px"}}},f=Object(s.b)(l.b).withConfig({displayName:"Layout__HeaderBox"})(["background:#333333;position:fixed;width:100vw;height:60px;"]),d=s.b.div.withConfig({displayName:"Layout__ContentDiv"})(["padding-top:60px;"]),m=Object(s.b)(l.b).withConfig({displayName:"Layout__FooterBox"})(["background:#eeeeee;width:100vw;"]),p=function(){return i.a.createElement(f,{direction:"row",justify:"center",pad:{vertical:"small"}},i.a.createElement(l.b,{direction:"row",justify:"between",align:"center",basis:"xlarge"},i.a.createElement("a",{href:"/"},i.a.createElement(l.e,{size:"medium",color:"#61DAFB"},"Mingjun Zhou's Blog")),i.a.createElement(l.b,{direction:"row",align:"center",gap:"medium"},i.a.createElement("a",{href:"/categories/post/page/0"},i.a.createElement(l.e,{size:"medium",color:"white"},"post")),i.a.createElement("a",{href:"/categories/note/page/0"},i.a.createElement(l.e,{size:"medium",color:"white"},"note")),i.a.createElement("a",{href:"/series"},i.a.createElement(l.e,{size:"medium",color:"white"},"series")),i.a.createElement("a",{href:"/knowledgebase"},i.a.createElement(l.e,{size:"medium",color:"white"},"kb")),i.a.createElement("a",{href:"/about"},i.a.createElement(l.e,{size:"medium",color:"white"},"about")))))},h=function(){return i.a.createElement(m,{direction:"row",justify:"center",pad:{vertical:"small"}},i.a.createElement(l.b,{align:"center"},i.a.createElement(l.e,null,"Build with ",i.a.createElement(l.a,{href:"https://www.gatsbyjs.org/",label:"GatsbyJS"})," ",i.a.createElement(l.a,{href:"https://reactjs.org/",label:"React "+i.a.version})," and ",i.a.createElement(l.a,{href:"https://v2.grommet.io",label:"Grommet"}),". Hosted on"," ",i.a.createElement(l.a,{href:"https://github.com/zhoumingjun/zhoumingjun.github.io",label:"Github"}),".",i.a.createElement("br",null),"The code is open source and available at"," ",i.a.createElement(l.a,{href:"https://github.com/calpa/blog",label:"Github"}),"."),i.a.createElement(l.e,null,"Copyright © 2017 - ",(new Date).getFullYear())))};t.a=function(e){return i.a.createElement(l.c,{theme:u,style:{minHeight:"100vh"}},i.a.createElement(p,null),i.a.createElement(d,null,e.children),i.a.createElement(h,null))}},256:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),i=n.n(o),l=n(48),s=n(1),c=function(e){var t=e.location,n=s.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:n})};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},276:function(e,t,n){"use strict";n(73);var a=n(272),r=n.n(a),o=n(0),i=n.n(o),l=n(242);t.a=function(e){var t=e.children,n=r()(e,["children"]);return i.a.createElement(l.b,Object.assign({direction:"row",justify:"center",pad:{horizontal:"xlarge",vertical:"small"}},n),i.a.createElement(l.b,{basis:"xlarge"},t))}},380:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var a=window.document.createElement("script");return a.async=!0,a.src=e,a.id=t,n.appendChild(a),a},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var a=void 0;return function(){var r=this,o=arguments,i=n&&!a;window.clearTimeout(a),a=setTimeout(function(){a=null,n||e.apply(r,o)},t),i&&e.apply(r,o)}}},476:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var a=n(477),r=n(478),o=n(479);t.CommentCount=a.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=o.DiscussionEmbed;var i={CommentCount:a.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:o.DiscussionEmbed};t.default=i},477:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=(a=n(0))&&a.__esModule?a:{default:a},i=n(380),l=(0,i.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,i.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,i.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return o.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},478:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=(a=n(0))&&a.__esModule?a:{default:a};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return o.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},479:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=(a=n(0))&&a.__esModule?a:{default:a},i=n(380);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return o.default.createElement("div",{id:"disqus_thread"})}}]),t}()}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a4f01bed45c6cd7c40e1.js.map