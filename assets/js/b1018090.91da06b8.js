"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[7448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(h,l(l({ref:t},c),{},{components:n})):i.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));n(8209);const r={id:"cpc2_rules",title:"The Challenge Rules",sidebar_label:"Challenge rules",sidebar_position:3},l=void 0,o={unversionedId:"cpc2/cpc2_rules",id:"cpc2/cpc2_rules",title:"The Challenge Rules",description:"What information can I use?",source:"@site/docs/cpc2/cpc2_rules.md",sourceDirName:"cpc2",slug:"/cpc2/cpc2_rules",permalink:"/docs/cpc2/cpc2_rules",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"cpc2_rules",title:"The Challenge Rules",sidebar_label:"Challenge rules",sidebar_position:3},sidebar:"tutorialSidebar_cpc2",previous:{title:"Data description",permalink:"/docs/cpc2/cpc2_data"},next:{title:"Baseline system",permalink:"/docs/cpc2/cpc2_baseline"}},s={},u=[{value:"What information can I use?",id:"what-information-can-i-use",level:2},{value:"Training and development",id:"training-and-development",level:3},{value:"Evaluation",id:"evaluation",level:3},{value:"Baseline models and computational restrictions",id:"baseline-models-and-computational-restrictions",level:2},{value:"What sort of model do I create?",id:"what-sort-of-model-do-i-create",level:2},{value:"Submitting multiple entries",id:"submitting-multiple-entries",level:2},{value:"Evaluation of systems",id:"evaluation-of-systems",level:2},{value:"Teams",id:"teams",level:2},{value:"Transparency",id:"transparency",level:2},{value:"Intellectual property",id:"intellectual-property",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-information-can-i-use"},"What information can I use?"),(0,a.kt)("h3",{id:"training-and-development"},"Training and development"),(0,a.kt)("p",null,"Teams should use the signals and listener responses provided in the ",(0,a.kt)("inlineCode",{parentName:"p"},"CPC2.train.json")," file."),(0,a.kt)("p",null,"In addition, teams can use their own data for training or expand the training data through simple automated modifications. Additional pre-training data could be generated by existing speech intelligibility and hearing loss models. The ",(0,a.kt)("a",{parentName:"p",href:"./cpc2_faq#data"},"FAQ")," gives links to some models that might be used for this."),(0,a.kt)("p",null,"Any audio or metadata can be used during training and development, but during evaluation the prediction model(s) will not have access to all of the data (see next section)."),(0,a.kt)("h3",{id:"evaluation"},"Evaluation"),(0,a.kt)("p",null,"The only data that can be used by the prediction model(s) during evaluation are described below."),(0,a.kt)("p",null,"For non-intrusive methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The output of the hearing aid processor/system."),(0,a.kt)("li",{parentName:"ul"},"The IDs of the listeners assigned to the scene/hearing aid system in the metadata provided."),(0,a.kt)("li",{parentName:"ul"},"The listener metadata.")),(0,a.kt)("p",null,"Additionally, for intrusive methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The target reference signal, i.e. the target convolved with the anechoic BRIR (channel 1) for each ear (\u2018target_anechoic\u2019)."),(0,a.kt)("li",{parentName:"ul"},"The prompt for the utterances (the text the actors were given to read).")),(0,a.kt)("h2",{id:"baseline-models-and-computational-restrictions"},"Baseline models and computational restrictions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Teams may choose to use all or some of the provided baseline models."),(0,a.kt)("li",{parentName:"ul"},"There is no limit on computational cost."),(0,a.kt)("li",{parentName:"ul"},"Models can be non-causal.")),(0,a.kt)("h2",{id:"what-sort-of-model-do-i-create"},"What sort of model do I create?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You model should report the speech intelligibility for the whole sentence for each audio sample/listener combination, i.e. a single score that represents a prediction of the proportion of words that would be recognised correctly"),(0,a.kt)("li",{parentName:"ul"},"The model architecture is entirely up to you, e.g. you can create a model that attempts to recognise individual words and then reduces this down to a proportion, or you can estimate an intelligibility score directly from the audio. Models may have explicit hearing loss model stages or be trained directly to map signals and audiograms to predictions.")),(0,a.kt)("h2",{id:"submitting-multiple-entries"},"Submitting multiple entries"),(0,a.kt)("p",null,"If you wish to submit multiple entries,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your systems must have significant differences in their approach."),(0,a.kt)("li",{parentName:"ul"},"You must contact the organisers to discuss your plans."),(0,a.kt)("li",{parentName:"ul"},"If accepted you will be issued with multiple Team IDs to distinguish your entries."),(0,a.kt)("li",{parentName:"ul"},"In your documentation, you must make it clear how the submissions differ.")),(0,a.kt)("h2",{id:"evaluation-of-systems"},"Evaluation of systems"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Entries will be ranked according to their performance in predicting measured intelligibility scores."),(0,a.kt)("li",{parentName:"ul"},"The system score will be taken to be the RMSE between the predicted and measured intelligibility scores across the complete test set."),(0,a.kt)("li",{parentName:"ul"},"Separate rankings will be made for intrusive and non-intrusive methods."),(0,a.kt)("li",{parentName:"ul"},"Systems will only be considered if the technical report has been submitted and the system is judged to be compliant with the challenge rules.")),(0,a.kt)("h2",{id:"teams"},"Teams"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Teams must have registered and nominated a contact person."),(0,a.kt)("li",{parentName:"ul"},"Teams can be from one or more institutions."),(0,a.kt)("li",{parentName:"ul"},"The organisers - and any person forming a team with one or more organisers - may enter the challenge themselves but will not be eligible to win the cash prizes.")),(0,a.kt)("h2",{id:"transparency"},"Transparency"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Teams must provide a technical document of up to 2 pages describing the system/model and any external data and pre-existing tools, software and models used."),(0,a.kt)("li",{parentName:"ul"},"We will publish all technical documents on the challenge website (anonymous or otherwise)."),(0,a.kt)("li",{parentName:"ul"},"Teams are encouraged \u2013 but not required \u2013 to provide us with access to the system(s)/model(s) and to make their code open source."),(0,a.kt)("li",{parentName:"ul"},"Anonymous entries are allowed but will not be eligible for cash prizes."),(0,a.kt)("li",{parentName:"ul"},"If a group of people submits multiple entries, they cannot win more than one prize in a given category."),(0,a.kt)("li",{parentName:"ul"},"All teams will be referred to using anonymous codenames if the rank ordering is published before the final results are announced."),(0,a.kt)("li",{parentName:"ul"},"Teams are strongly encouraged to submit their report for presentation at the Clarity-2023 Interspeech Satellite Workshop.")),(0,a.kt)("h2",{id:"intellectual-property"},"Intellectual property"),(0,a.kt)("p",null,"The following terms apply to participation in this machine learning challenge (\u201cChallenge\u201d). The entrants'  \u201cSubmission\u201d will consist of a set of intelligibility predictions and an accompanying technical report. The Challenge is organised by the \u201cChallenge Organiser\u201d."),(0,a.kt)("p",null,"Entrants retain ownership of all intellectual and industrial property rights (including moral rights) in and to Submissions."),(0,a.kt)("p",null,"As a condition of submission, Entrant grants the Challenge Organiser, its subsidiaries, agents and partner companies, a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive license to use, reproduce, adapt, modify, publish, distribute, publicly perform, create a derivative work from, and publicly display the Submission."),(0,a.kt)("p",null,"Entrants provide Submissions on an \u201cAS IS\u201d BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE."))}p.isMDXComponent=!0}}]);