/*! For license information please see 5e38751f.619c9a24.js.LICENSE.txt */
(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[5128],{8919:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r=n(7294),o=n(4510),i=n(2949),l=n(9512);function c(){const{isDarkTheme:e}=(0,i.I)();return r.createElement(l.kV,{sourceType:"profile",screenName:"clarityprojuk",theme:e?"dark":"light",options:{height:400}})}const u=function(){return r.createElement(o.Z,{title:"Hello"},r.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"}},r.createElement(c,null))," ")}},9512:(e,t,n)=>{"use strict";n.d(t,{kV:()=>l});var r=n(7294),o="https://platform.twitter.com/widgets.js",i="createTimeline",l=function(e){var t=r.useRef(null),l=r.useState(!0),c=l[0],u=l[1];return r.useEffect((function(){var r=!0;return n(5277)(o,"twitter-embed",(function(){if(window.twttr){if(r){if(!window.twttr.widgets[i])return void console.error("Method "+i+" is not present anymore in twttr.widget api");var n=function(){var n,r,o=Object.assign({},e.options);return null!=e&&e.autoHeight&&(o.height=null===(n=t.current)||void 0===n||null===(r=n.parentNode)||void 0===r?void 0:r.offsetHeight),o=Object.assign({},o,{theme:null==e?void 0:e.theme,linkColor:null==e?void 0:e.linkColor,borderColor:null==e?void 0:e.borderColor,lang:null==e?void 0:e.lang,tweetLimit:null==e?void 0:e.tweetLimit,ariaPolite:null==e?void 0:e.ariaPolite})}();n=function(t){return t.chrome="",e.noHeader&&(t.chrome=t.chrome+" noheader"),e.noFooter&&(t.chrome=t.chrome+" nofooter"),e.noBorders&&(t.chrome=t.chrome+" noborders"),e.noScrollbar&&(t.chrome=t.chrome+" noscrollbar"),e.transparent&&(t.chrome=t.chrome+" transparent"),t}(n),window.twttr.widgets[i]({sourceType:e.sourceType,screenName:e.screenName,userId:e.userId,ownerScreenName:e.ownerScreenName,slug:e.slug,id:e.id||e.widgetId,url:e.url},null==t?void 0:t.current,n).then((function(t){u(!1),e.onLoad&&e.onLoad(t)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){r=!1}}),[]),r.createElement(r.Fragment,null,c&&r.createElement(r.Fragment,null,e.placeholder),r.createElement("div",{ref:t}))}},5277:(e,t,n)=>{var r,o,i;i=function(){var e,t,n=document,r=n.getElementsByTagName("head")[0],o="push",i="readyState",l="onreadystatechange",c={},u={},a={},s={};function d(e,t){for(var n=0,r=e.length;n<r;++n)if(!t(e[n]))return!1;return 1}function f(e,t){d(e,(function(e){return t(e),1}))}function m(t,n,r){t=t[o]?t:[t];var i=n&&n.call,l=i?n:r,p=i?t.join(""):n,g=t.length;function v(e){return e.call?e():c[e]}function w(){if(!--g)for(var e in c[p]=1,l&&l(),a)d(e.split("|"),v)&&!f(a[e],v)&&(a[e]=[])}return setTimeout((function(){f(t,(function t(n,r){return null===n?w():(r||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),s[n]?(p&&(u[p]=1),2==s[n]?w():setTimeout((function(){t(n,!0)}),0)):(s[n]=1,p&&(u[p]=1),void h(n,w)))}))}),0),m}function h(e,o){var c,u=n.createElement("script");u.onload=u.onerror=u[l]=function(){u[i]&&!/^c|loade/.test(u[i])||c||(u.onload=u[l]=null,c=1,s[e]=2,o())},u.async=1,u.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,r.insertBefore(u,r.lastChild)}return m.get=h,m.order=function(e,t,n){!function r(o){o=e.shift(),e.length?m(o,r):m(o,t,n)}()},m.path=function(t){e=t},m.urlArgs=function(e){t=e},m.ready=function(e,t,n){e=e[o]?e:[e];var r,i=[];return!f(e,(function(e){c[e]||i[o](e)}))&&d(e,(function(e){return c[e]}))?t():(r=e.join("|"),a[r]=a[r]||[],a[r][o](t),n&&n(i)),m},m.done=function(e){m([null],e)},m},e.exports?e.exports=i():void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o)}}]);