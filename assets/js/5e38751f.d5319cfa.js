/*! For license information please see 5e38751f.d5319cfa.js.LICENSE.txt */
(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[5128],{98919:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});n(67294);var r=n(55096),o=n(92949),i=n(29512),l=n(85893);function u(){const{isDarkTheme:e}=(0,o.I)();return(0,l.jsx)(i.kV,{sourceType:"profile",screenName:"clarityprojuk",theme:e?"dark":"light",options:{height:400}})}const c=function(){return(0,l.jsxs)(r.Z,{title:"Hello",children:[(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"},children:(0,l.jsx)(u,{})})," "]})}},29512:(e,t,n)=>{"use strict";n.d(t,{kV:()=>l});var r=n(67294),o="https://platform.twitter.com/widgets.js",i="createTimeline",l=function(e){var t=r.useRef(null),l=r.useState(!0),u=l[0],c=l[1];return r.useEffect((function(){var r=!0;return n(5277)(o,"twitter-embed",(function(){if(window.twttr){if(r){if(!window.twttr.widgets[i])return void console.error("Method "+i+" is not present anymore in twttr.widget api");var n=function(){var n,r,o=Object.assign({},e.options);return null!=e&&e.autoHeight&&(o.height=null===(n=t.current)||void 0===n||null===(r=n.parentNode)||void 0===r?void 0:r.offsetHeight),o=Object.assign({},o,{theme:null==e?void 0:e.theme,linkColor:null==e?void 0:e.linkColor,borderColor:null==e?void 0:e.borderColor,lang:null==e?void 0:e.lang,tweetLimit:null==e?void 0:e.tweetLimit,ariaPolite:null==e?void 0:e.ariaPolite})}();n=function(t){return t.chrome="",e.noHeader&&(t.chrome=t.chrome+" noheader"),e.noFooter&&(t.chrome=t.chrome+" nofooter"),e.noBorders&&(t.chrome=t.chrome+" noborders"),e.noScrollbar&&(t.chrome=t.chrome+" noscrollbar"),e.transparent&&(t.chrome=t.chrome+" transparent"),t}(n),window.twttr.widgets[i]({sourceType:e.sourceType,screenName:e.screenName,userId:e.userId,ownerScreenName:e.ownerScreenName,slug:e.slug,id:e.id||e.widgetId,url:e.url},null==t?void 0:t.current,n).then((function(t){c(!1),e.onLoad&&e.onLoad(t)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){r=!1}}),[]),r.createElement(r.Fragment,null,u&&r.createElement(r.Fragment,null,e.placeholder),r.createElement("div",{ref:t}))}},5277:(e,t,n)=>{var r,o,i;i=function(){var e,t,n=document,r=n.getElementsByTagName("head")[0],o=!1,i="push",l="readyState",u="onreadystatechange",c={},a={},s={},d={};function f(e,t){for(var n=0,r=e.length;n<r;++n)if(!t(e[n]))return o;return 1}function h(e,t){f(e,(function(e){return t(e),1}))}function m(t,n,r){t=t[i]?t:[t];var o=n&&n.call,l=o?n:r,u=o?t.join(""):n,g=t.length;function v(e){return e.call?e():c[e]}function w(){if(! --g)for(var e in c[u]=1,l&&l(),s)f(e.split("|"),v)&&!h(s[e],v)&&(s[e]=[])}return setTimeout((function(){h(t,(function t(n,r){return null===n?w():(r||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),d[n]?(u&&(a[u]=1),2==d[n]?w():setTimeout((function(){t(n,!0)}),0)):(d[n]=1,u&&(a[u]=1),void p(n,w)))}))}),0),m}function p(e,o){var i,c=n.createElement("script");c.onload=c.onerror=c[u]=function(){c[l]&&!/^c|loade/.test(c[l])||i||(c.onload=c[u]=null,i=1,d[e]=2,o())},c.async=1,c.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,r.insertBefore(c,r.lastChild)}return m.get=p,m.order=function(e,t,n){!function r(o){o=e.shift(),e.length?m(o,r):m(o,t,n)}()},m.path=function(t){e=t},m.urlArgs=function(e){t=e},m.ready=function(e,t,n){e=e[i]?e:[e];var r,o=[];return!h(e,(function(e){c[e]||o[i](e)}))&&f(e,(function(e){return c[e]}))?t():(r=e.join("|"),s[r]=s[r]||[],s[r][i](t),n&&n(o)),m},m.done=function(e){m([null],e)},m},e.exports?e.exports=i():void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o)}}]);