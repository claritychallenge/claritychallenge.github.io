"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[1971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:m,values:f,groupId:h,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[O,T]=(0,r.useState)(k),_=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=h){const e=w[h];null!=e&&e!==O&&v.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,n=_.indexOf(t),a=v[n].value;a!==O&&(E(t),T(a),null!=h&&N(h,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=_.indexOf(e.currentTarget)+1;n=null!=(a=_[t])?a:_[0];break}case"ArrowLeft":{var r;const t=_.indexOf(e.currentTarget)-1;n=null!=(r=_[t])?r:_[_.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},g)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>_.push(e),onKeyDown:j,onFocus:S,onClick:S},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},6002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));n(5488),n(5162);const i={id:"cec1_software",title:"Software",sidebar_label:"Software",sidebar_position:6},l=void 0,o={unversionedId:"cec1/cec1_software",id:"cec1/cec1_software",title:"Software",description:"The following software is available to download:",source:"@site/docs/cec1/cec1_software.mdx",sourceDirName:"cec1",slug:"/cec1/cec1_software",permalink:"/docs/cec1/cec1_software",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"cec1_software",title:"Software",sidebar_label:"Software",sidebar_position:6},sidebar:"tutorialSidebar1",previous:{title:"CEC1 Data",permalink:"/docs/cec1/cec1_data"},next:{title:"Rules",permalink:"/docs/cec1/cec1_rules"}},s={},c=[{value:"A. Scene generator",id:"a-scene-generator",level:2},{value:"B. Baseline hearing aid processor",id:"b-baseline-hearing-aid-processor",level:2},{value:"C. Hearing Loss model",id:"c-hearing-loss-model",level:2},{value:"D. Speech Intelligibility model",id:"d-speech-intelligibility-model",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following software is available to download:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scene generator"),(0,r.kt)("li",{parentName:"ul"},"Hearing aid processor baseline"),(0,r.kt)("li",{parentName:"ul"},"Hearing loss model"),(0,r.kt)("li",{parentName:"ul"},"Speech intelligibility model")),(0,r.kt)("p",null,"The code is a Python package and accompanying unix shell scripts, with the facility to process a single scene or to bulk process the complete Clarity dataset."),(0,r.kt)("h2",{id:"a-scene-generator"},"A. Scene generator"),(0,r.kt)("p",null,"Fully open-source python code for generating hearing aid inputs for each scene"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Inputs"),": target and interferer signals, BRIRs, RAVEN project (rpf) files, scene description JSON files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Outputs"),": Mixed target+interferer signals for each hearing aid channel, direct path (simulating a measurement close to the eardrum). Reverberated pre-mixed signals can also be optionally generated.")),(0,r.kt)("h2",{id:"b-baseline-hearing-aid-processor"},"B. Baseline hearing aid processor"),(0,r.kt)("p",null,"The baseline hearing aid processor is based on openMHA. The python code configures openMHA with a Camfit compressive fitting for a specific listener\u2019s audiogram. This includes a python implementation of the Camfit compressive prescription and python code for driving openMHA."),(0,r.kt)("p",null,"This configuration of openMHA includes multiband dynamic compression and non-adaptive differential processing. The intention was to produce a basic hearing aid without various aspects of signal processing that are common in high-end hearing aids, but tend to be implemented in proprietary forms so cannot be replicated exactly."),(0,r.kt)("p",null,"The main inputs and outputs for the processor are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Inputs"),": Mixed scene signals for each hearing aid channel, a listener ID drawn from scene-listener pairs identified in \u2018scenes_listeners.json\u2019 and an entry in the listener metadata json file \u2018listeners.json\u2019 for that ID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Outputs"),": The stereo hearing aid output signal, ",(0,r.kt)("inlineCode",{parentName:"li"},"<scene>_<listener>_HA-output.wav"))),(0,r.kt)("h2",{id:"c-hearing-loss-model"},"C. Hearing Loss model"),(0,r.kt)("p",null,"Open-source python implementation of the Cambridge Auditory Group Moore/Stone/Baer/Glasberg hearing loss model."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Inputs"),": A stereo wav audio signal, e.g., the output of the baseline hearing aid processor, and a set of audiograms (both L and R ears)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Outputs"),":  The signal after simulating the hearing loss as specified by the set of audiograms (stereo wav file), ",(0,r.kt)("inlineCode",{parentName:"li"},"<scene>_<listener>_HL-output.wav"))),(0,r.kt)("h2",{id:"d-speech-intelligibility-model"},"D. Speech Intelligibility model"),(0,r.kt)("p",null,"Python implementation of a binaural intelligibility model, Modified Binaural Short-Time Objective Intelligibility (MBSTOI). This is an experimental baseline tool that will be used in the stage 1 evaluation of entrants (see Rules). Note that MBSTOI requires signal time-alignment (and alignment within one-third octave bands)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Inputs"),":  HL-model output signals, audiogram, reference target signal (i.e., the premixed target signal convolved with the BRIR with the reflections \u201cturned off\u201d, specified as \u2018target_anechoic\u2019), (scene metadata)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Outputs"),": predicted intelligibility score")))}p.isMDXComponent=!0}}]);