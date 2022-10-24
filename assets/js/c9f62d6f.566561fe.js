"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[3033],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},29109:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={id:"cec2_core_software",title:"Core Software",sidebar_label:"Core Software",sidebar_position:7},o=void 0,l={unversionedId:"cec2/software/cec2_core_software",id:"cec2/software/cec2_core_software",title:"Core Software",description:"The code is provided as a GitHub repository containing individual Python tools and a complete baseline system. Tools will allow the processing of individual scenes or the bulk processing of the complete Clarity dataset.",source:"@site/docs/cec2/software/cec2_core_software.mdx",sourceDirName:"cec2/software",slug:"/cec2/software/cec2_core_software",permalink:"/docs/cec2/software/cec2_core_software",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"cec2_core_software",title:"Core Software",sidebar_label:"Core Software",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Baseline System",permalink:"/docs/cec2/software/cec2_baseline"},next:{title:"Additional Tools",permalink:"/docs/cec2/software/cec2_additional_tools"}},s={},c=[{value:"A. Scene generator",id:"a-scene-generator",level:2},{value:"B. Baseline hearing aid processor",id:"b-baseline-hearing-aid-processor",level:2},{value:"C. HASPI Speech Intelligibility model",id:"c-haspi-speech-intelligibility-model",level:2},{value:"References",id:"references",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The code is provided as a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/claritychallenge/clarity"},"GitHub repository")," containing individual Python tools and a complete baseline system. Tools will allow the processing of individual scenes or the bulk processing of the complete Clarity dataset.\nThe key elements of the baseline system are the:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Scene generator."),(0,n.kt)("li",{parentName:"ul"},"Hearing aid processor baseline."),(0,n.kt)("li",{parentName:"ul"},"HASPI speech intelligibility model.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/cec2/software/cec2_additional_tools"},"Additional tools")," are available to use as you see fit. These include a hearing loss model, differentiable source separation and hearing aid amplification modules and an alternative intelligibility model."),(0,n.kt)("h2",{id:"a-scene-generator"},"A. Scene generator"),(0,n.kt)("p",null,"Fully open-source python code for generating hearing aid inputs for each scene"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Inputs"),": target and interferer signals, HOA-IRs, RAVEN project (rpf) files, scene description JSON files"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Outputs"),": Mixed target+interferer signals for each hearing aid channel, direct path (simulating a measurement close to the eardrum). Reverberated pre-mixed signals can also be optionally generated.")),(0,n.kt)("h2",{id:"b-baseline-hearing-aid-processor"},"B. Baseline hearing aid processor"),(0,n.kt)("p",null,"The baseline hearing aid consists of a NAL-R  fitting amplification stage ","[",(0,n.kt)("a",{parentName:"p",href:"#refs"},"1"),"]"," followed by a simple automatic gain compressor. It produces output signals in 16-bit wav format ready for HASPI or listening test evaluation."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Inputs"),": Inputs for each hearing aid channel and audiograms to characterise the listeners."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Outputs"),": Stereo hearing aid (HA) outputs signals.")),(0,n.kt)("h2",{id:"c-haspi-speech-intelligibility-model"},"C. HASPI Speech Intelligibility model"),(0,n.kt)("p",null,"Python implementation of the Hearing Aid Speech Perception Index (HASPI) model which is used for objective intelligibility estimation. This will be used in the stage 1 evaluation of entrants (see Rules)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Inputs"),": reference target signal (i.e., the premixed target signal convolved with the BRIR with the reflections \u201cturned off\u201d, specified as \u2018target_anechoic\u2019), HA output signals, audiogram, level reference (level in dB SPL which corresponds to 0 dB FS)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Outputs"),": predicted intelligibility score\nIt is important to remember that both reference target and HA output signals have to be calibrated to the same dB SPL level before calculating HASPI.")),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("a",{name:"refs"}),(0,n.kt)("p",null,"[1]",' Byrne, Denis, and Harvey Dillon. "The National Acoustic Laboratories\'(NAL) new procedure for selecting the gain and frequency response of a hearing aid." Ear and hearing 7.4 (1986): 257-265.'))}d.isMDXComponent=!0}}]);