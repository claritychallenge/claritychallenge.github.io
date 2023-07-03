"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[3707],{3905:(e,i,t)=>{t.d(i,{Zo:()=>h,kt:()=>m});var n=t(67294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function r(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?r(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function o(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var i=n.useContext(l),t=i;return e&&(t="function"==typeof e?e(i):s(s({},i),e)),t},h=function(e){var i=c(e.components);return n.createElement(l.Provider,{value:i},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},u=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return t?n.createElement(m,s(s({ref:i},h),{},{components:t})):n.createElement(m,s({ref:i},h))}));function m(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var l in i)hasOwnProperty.call(i,l)&&(o[l]=i[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},91004:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));t(8209);const r={id:"cec2_faq",title:"CEC2 FAQ",sidebar_label:"FAQ",sidebar_position:15},s=void 0,o={unversionedId:"cec2/cec2_faq",id:"cec2/cec2_faq",title:"CEC2 FAQ",description:"Speech Intelligibility",source:"@site/docs/cec2/cec2_faq.mdx",sourceDirName:"cec2",slug:"/cec2/cec2_faq",permalink:"/docs/cec2/cec2_faq",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{id:"cec2_faq",title:"CEC2 FAQ",sidebar_label:"FAQ",sidebar_position:15},sidebar:"tutorialSidebar_cec2",previous:{title:"Find A Team",permalink:"/docs/cec2/cec2_find_a_team"}},l={},c=[{value:"Speech Intelligibility",id:"speech-intelligibility",level:2},{value:"What is Speech Intelligibility?",id:"what-is-speech-intelligibility",level:3},{value:"How is Speech Intelligibility measured with listeners?",id:"how-is-speech-intelligibility-measured-with-listeners",level:3},{value:"How is Speech Intelligibility objectively measured by a computer?",id:"how-is-speech-intelligibility-objectively-measured-by-a-computer",level:3},{value:"What speech intelligibility models already exist and what are they used for?",id:"what-speech-intelligibility-models-already-exist-and-what-are-they-used-for",level:3},{value:"Hearing Loss",id:"hearing-loss",level:2},{value:"How does hearing loss affect the perception of audio signals, and how do modern hearing aids process sound to help with this?",id:"how-does-hearing-loss-affect-the-perception-of-audio-signals-and-how-do-modern-hearing-aids-process-sound-to-help-with-this",level:3}],h={toc:c},d="wrapper";function p(e){let{components:i,...t}=e;return(0,a.kt)(d,(0,n.Z)({},h,t,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"speech-intelligibility"},"Speech Intelligibility"),(0,a.kt)("h3",{id:"what-is-speech-intelligibility"},"What is Speech Intelligibility?"),(0,a.kt)("p",null,"The term ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Intelligibility_(communication)"},"Speech Intelligibility")," is generally used in two different ways. It can refer to how much speech is understood by a listener, or to the number of words correctly identified by a listener as a proportion or percentage of the total number of words. In the Clarity project, we are using the latter definition, i.e., the percentage of words in a sentence that a listener identified correctly. This percentage is the target for your prediction models."),(0,a.kt)("p",null,"Speech intelligibility captures how a listener's ability to participate in conversation is changed when the speech signal is degraded, e.g., by background noise and room reverberation, or is processed, e.g., by a hearing aid. Your prediction model will need to incorporate a model of the hearing abilities of each listener."),(0,a.kt)("h3",{id:"how-is-speech-intelligibility-measured-with-listeners"},"How is Speech Intelligibility measured with listeners?"),(0,a.kt)("p",null,"In the Clarity project, a set of listeners listen to a sentence and then say what words they heard. In this project, speech intelligibility is measured as the number of words identified correctly as a percentage of the total number of words in a sentence."),(0,a.kt)("p",null,"You might consider looking at ",(0,a.kt)("a",{parentName:"p",href:"https://www.sciencedirect.com/science/article/pii/S1877050918302187"},"other metrics"),", such as Word Error Rate (WER), which picks up on, e.g., where listeners insert words not in the original sentence. You might do this if you think that an estimate of WER or other metrics would help your system to estimate speech intelligibility, as defined in the Clarity project."),(0,a.kt)("h3",{id:"how-is-speech-intelligibility-objectively-measured-by-a-computer"},"How is Speech Intelligibility objectively measured by a computer?"),(0,a.kt)("p",null,"When fitting a hearing aid, it would be beneficial for an audiologist to be able to use an objective measure of speech intelligibility to determine what signal processing algorithm(s) should be used to compensate for the listener's hearing impairment. Objective measures are also useful when measured speech intelligibility scores are unavailable, such as when developing a machine learning-based hearing aid algorithm or some other speech enhancement method. Another advantage of non-intrusive measures is that they do not require time-alignment of processed and reference signals."),(0,a.kt)("p",null,"Objective measures - or metrics - of speech intelligibility are used to allow a computer to estimate the likely performance of humans in listening tests. The main goal of entries to the prediction challenge is to produce one of these measures that performs well for listeners with hearing loss. There are two broad classes of speech intelligibility models:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Intrusive metrics (also known as double-ended) are most common. This is where the intelligibility is estimated by comparing the degraded or processed speech signal with the original clean speech signal."),(0,a.kt)("li",{parentName:"ul"},"Non-intrusive metrics (also known as single-ended or blind) are less well developed. This is where intelligibility is estimated from the degraded or processed speech signal alone.")),(0,a.kt)("p",null,"In the Clarity project, both types of metrics are of interest. Intrusive metrics will be more accurate in many cases. However, there are hearing aid processes where the speech content is shifted in frequency, which will defeat most current intrusive speech intelligibility metrics. We also hypothesise that there might be issues with intrusive metrics and machine learning approaches in hearing aids that revoice the original speech."),(0,a.kt)("h3",{id:"what-speech-intelligibility-models-already-exist-and-what-are-they-used-for"},"What speech intelligibility models already exist and what are they used for?"),(0,a.kt)("p",null,"There aren't many speech intelligibility models that consider hearing impairment, but one that does is ",(0,a.kt)("a",{parentName:"p",href:"https://www.sciencedirect.com/science/article/pii/S0167639320300431"},"HASPI by Kates and Arehart"),". In this seminar from the first Clarity workshop, James Kates discusses speech intelligibility models with a focus on the ones he has developed. He also discusses the speech quality metric ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hearing-Aid_Speech_Quality_Index"},"HASQI"),". If you're interested in using HASPI or HASQI for the challenge, James Kates has kindly made the ",(0,a.kt)("a",{parentName:"p",href:"http://claritychallenge.org/wp-content/uploads/2021/10/HASPIv2_HASQIv2_HAAQIv1.zip"},"MATLAB code")," and ",(0,a.kt)("a",{parentName:"p",href:"http://claritychallenge.org/wp-content/uploads/2021/10/Users_Guide_ver3.zip"},"user guide")," available for download."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/hp9NT1zkGz0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Click arrow to see synopsis."),(0,a.kt)("div",null,(0,a.kt)("div",null,"Signal degradations, such as additive noise and nonlinear distortion, can reduce the intelligibility and quality of a speech signal. Predicting intelligibility and quality for hearing aids is especially difficult since these devices may contain intentional nonlinear distortion designed to make speech more audible to a hearing-impaired listener. This speech processing often takes the form of time-varying multichannel gain adjustments. Intelligibility and quality metrics used for hearing aids and hearing-impaired listeners must therefore consider the trade-offs between audibility and distortion introduced by hearing-aid speech envelope modifications. This presentation uses the Hearing Aid Speech Perception Index (HASPI) and the Hearing Aid Speech Quality Index (HASQI) to predict intelligibility and quality, respectively. These indices incorporate a model of the auditory periphery that can be adjusted to reflect hearing loss. They have been trained on intelligibility scores and quality ratings from both normal-hearing and hearing-impaired listeners for a wide variety of signal and processing conditions. The basics of the metrics are explained, and the metrics are then used to analyse the effects of additive noise on speech, to evaluate noise suppression algorithms, and to measure differences among commercial hearing aids."))),(0,a.kt)("h2",{id:"hearing-loss"},"Hearing Loss"),(0,a.kt)("p",null,"There are many types of hearing loss, but the focus of the Clarity project is the hearing loss that happens with ageing. This is a form of ",(0,a.kt)("a",{parentName:"p",href:"https://rnid.org.uk/information-and-support/hearing-loss/types-of-hearing-loss-and-deafness/"},"sensorineural hearing loss"),"."),(0,a.kt)("h3",{id:"how-does-hearing-loss-affect-the-perception-of-audio-signals-and-how-do-modern-hearing-aids-process-sound-to-help-with-this"},"How does hearing loss affect the perception of audio signals, and how do modern hearing aids process sound to help with this?"),(0,a.kt)("p",null,"In this seminar from the first Clarity workshop, Karolina Smeds from ORCA Europe and WS Audiology discusses the effects of hearing loss and the hearing aid processing strategies that are typically used to counter the sensory deficits."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/waPONoYrf8Q",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Click arrow to see synopsis."),(0,a.kt)("div",null,"Hearing loss leads to several unwanted effects. Loss of audibility for soft sounds is one effect, but also when amplification is used to create audibility for soft sounds, many [suprathreshold](https://www.lexico.com/en/definition/suprathreshold) deficits remain. The most common type of hearing loss is a [cochlear](https://www.lexico.com/definition/cochlear) hearing loss, where haircells or nerve synapses in the cochlea are damaged. Ageing and noise exposure are the most common causes of cochlear hearing loss. This type of hearing loss is associated with atypical loudness perception and difficulties in noisy situations. Background noise masks for instance speech to a higher degree than for a person with healthy hair cells. This explains why listening to speech-in-noise (SPIN) is such an important topic to work on. A brief introduction to signal processing in hearing aids will be presented. With the use of frequency-specific amplification and compression (automatic gain control, AGC), hearing aids are usually doing a good job in compensating for reduced audibility and for atypical suprathreshold loudness perception. However, it is more difficult to compensate for the increased masking effect. Some examples of strategies will be presented. Finally, natural conversations in noise will be discussed. The balance between being able to have a conversation with a specific communication partner in a group of people and being able to switch attention if someone else starts to talk will be touched upon.")))}p.isMDXComponent=!0}}]);