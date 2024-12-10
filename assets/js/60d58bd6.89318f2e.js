"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[8336],{81071:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"cpc2/cpc2_intro","title":"The 2nd Clarity Prediction Challenge","description":"The 2nd Clarity Prediction Challenge has now finished. For the details of the systems that were submitted and to see the table of results, please visit the Clarity-2023 Workshsop website.","source":"@site/docs/cpc2/cpc2_intro.mdx","sourceDirName":"cpc2","slug":"/cpc2/cpc2_intro","permalink":"/docs/cpc2/cpc2_intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"cpc2_intro","title":"The 2nd Clarity Prediction Challenge","sidebar_label":"CPC2 Introduction","sidebar_position":1},"sidebar":"tutorialSidebar_cpc2","next":{"title":"Important Dates","permalink":"/docs/cpc2/cpc2_dates"}}');var n=s(74848),r=s(28453);const a={id:"cpc2_intro",title:"The 2nd Clarity Prediction Challenge",sidebar_label:"CPC2 Introduction",sidebar_position:1},o=void 0,l={},h=[{value:"Short Description",id:"short-description",level:2},{value:"The data",id:"the-data",level:3},{value:"The task",id:"the-task",level:3},{value:"Registering and submitting",id:"registering-and-submitting",level:3}];function d(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["The 2nd Clarity Prediction Challenge has now finished. For the details of the systems that were submitted and to see the table of results, please visit the ",(0,n.jsx)("b",{children:(0,n.jsx)("a",{href:"https://claritychallenge.org/clarity2023-workshop/",children:"Clarity-2023 Workshsop website"})}),"."]}),(0,n.jsxs)(t.p,{children:["For details of information on forthcoming challenge see ",(0,n.jsx)("b",{children:(0,n.jsx)("a",{href:"https://claritychallenge.org/timeline",children:"here"})}),"."]})]}),"\n",(0,n.jsxs)(t.p,{children:["To allow the development of better hearing aids, we need ways to evaluate the speech intelligibility of audio signals automatically. We need a prediction model that takes the audio produced by a hearing aid and the listener's characteristics (e.g. ",(0,n.jsx)(t.a,{href:"https://www.hear-it.org/Audiogram-",children:"audiogram"}),") and estimates the speech intelligibility score that the listener would achieve in a listening test."]}),"\n",(0,n.jsxs)(t.p,{children:["Last year we ran the ",(0,n.jsx)(t.a,{href:"../cpc1/cpc1_intro",children:"CPC1 Challenge"})," to develop such a model. The challenge was presented at an online workshop and a special session of Interspeech 2022. We are now running the 2nd round of this challenge, which builds on the first by using more complex signals and a larger set of listening test data for training and evaluating the prediction systems."]}),"\n",(0,n.jsxs)(t.p,{children:["The outputs of the new challenge will be presented at an ",(0,n.jsx)(t.a,{href:"https://claritychallenge.org/clarity2023-workshop/",children:"ISCA workshop"})," that is being run as a satellite event to Interspeech 2023 in Dublin on 19th August 2023."]}),"\n",(0,n.jsx)(t.p,{children:"This site provides entrants with what they need to know to take part in the challenge."}),"\n",(0,n.jsx)(t.h2,{id:"short-description",children:"Short Description"}),"\n",(0,n.jsx)(t.p,{children:"The task involves estimating the intelligibility of speech-in-noise signals that have been processed by hearing aid algorithms and presented to listeners with hearing loss. Each signal contains a short sentence that the listeners were asked to repeat. The system you build needs to be able to predict how many of the words were recognised correctly by the listeners. It is not expected that systems can do this accurately on a per sentence basis, but rather we will rank systems on this basis of how well they perform over a large evaluation set, i.e., which system produces the lowest average estimation error."}),"\n",(0,n.jsx)(t.p,{children:"The hearing aid signals being assessed vary widely in quality. Examples of good, fair and poor signals are provided below. Your prediction algorithm needs to be able to cope with this variation."}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Good"}),(0,n.jsx)("th",{children:"Fair"}),(0,n.jsx)("th",{children:"Poor"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsxs)("audio",{controls:!0,style:{width:"250px"},children:[(0,n.jsx)("source",{src:"/audio/CEC2_samples/CEC2_E009/S08501_L0104_HA-output.wav",type:"audio/wav"}),(0,n.jsx)(t.p,{children:"Your browser does not support the audio element."})]})}),(0,n.jsx)("td",{children:(0,n.jsxs)("audio",{controls:!0,style:{width:"250px"},children:[(0,n.jsx)("source",{src:"/audio/CEC2_samples/CEC2_E022/S08501_L0104_HA-output.wav",type:"audio/wav"}),(0,n.jsx)(t.p,{children:"Your browser does not support the audio element."})]})}),(0,n.jsx)("td",{children:(0,n.jsxs)("audio",{controls:!0,style:{width:"250px"},children:[(0,n.jsx)("source",{src:"/audio/CEC2_samples/CEC2_E032/S08501_L0104_HA-output.wav",type:"audio/wav"}),(0,n.jsx)(t.p,{children:"Your browser does not support the audio element."})]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsxs)("audio",{controls:!0,style:{width:"250px"},children:[(0,n.jsx)("source",{src:"/audio/CEC2_samples/CEC2_E009/S08502_L0106_HA-output.wav",type:"audio/wav"}),(0,n.jsx)(t.p,{children:"Your browser does not support the audio element."})]})}),(0,n.jsx)("td",{children:(0,n.jsxs)("audio",{controls:!0,style:{width:"250px"},children:[(0,n.jsx)("source",{src:"/audio/CEC2_samples/CEC2_E022/S08502_L0106_HA-output.wav",type:"audio/wav"}),(0,n.jsx)(t.p,{children:"Your browser does not support the audio element."})]})}),(0,n.jsx)("td",{children:(0,n.jsxs)("audio",{controls:!0,style:{width:"250px"},children:[(0,n.jsx)("source",{src:"/audio/CEC2_samples/CEC2_E032/S08502_L0106_HA-output.wav",type:"audio/wav"}),(0,n.jsx)(t.p,{children:"Your browser does not support the audio element."})]})})]})]}),"\n",(0,n.jsx)(t.h3,{id:"the-data",children:"The data"}),"\n",(0,n.jsx)(t.p,{children:"You will be provided with a set of training data which you can use to develop your systems. This data consists of"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Audio produced by a variety of (simulated) hearing aids for speech-in-noise;"}),"\n",(0,n.jsx)(t.li,{children:"The corresponding clean reference signals (the original speech);"}),"\n",(0,n.jsx)(t.li,{children:"Characteristics of the listeners (pure tone audiograms, etc);"}),"\n",(0,n.jsx)(t.li,{children:"The measured speech intelligibility scores from listening tests, where the listener was asked to say what they heard after listening to the hearing aid processed signal."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For full details of the data see the ",(0,n.jsx)(t.a,{href:"./cpc2_data",children:"Data"})," page."]}),"\n",(0,n.jsx)(t.h3,{id:"the-task",children:"The task"}),"\n",(0,n.jsx)(t.p,{children:"You will be provided with an evaluation set containing"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Audio produced by a variety of (simulated) hearing aids for speech-in-noise;"}),"\n",(0,n.jsx)(t.li,{children:"The audiogram of a listener;"}),"\n",(0,n.jsx)(t.li,{children:"The clean reference signal (the original speech)."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Your task will be to produce a score (0.0 to 1.0), which should predict the proportion of words in the reference signal that the listener would be able to repeat correctly after listening to the hearing aid processed signal."}),"\n",(0,n.jsx)(t.p,{children:"We will be considering two types of system: intrusive and non-intrusive. Intrusive systems (also known as double-ended) are those that require a clean speech reference, and non-intrusive systems (also known as single-ended) are those that use the hearing aid output alone."}),"\n",(0,n.jsx)(t.p,{children:"Intrusive and non-intrusive systems will be separately ranked according to the RMSE between their predictions and the true values."}),"\n",(0,n.jsxs)(t.p,{children:["To help you get started we have provided a baseline system that uses the HASPI metric to predict the speech intelligibility score. Details of this system are available on the ",(0,n.jsx)(t.a,{href:"./cpc2_baseline",children:"Baseline"})," page."]}),"\n",(0,n.jsxs)(t.p,{children:["For full details of the task see the ",(0,n.jsx)(t.a,{href:"./taking_part/cpc2_rules",children:"rules"})," page."]}),"\n",(0,n.jsx)(t.h3,{id:"registering-and-submitting",children:"Registering and submitting"}),"\n",(0,n.jsxs)(t.p,{children:["To take part in the challenge you will need to ",(0,n.jsx)(t.a,{href:"./taking_part/cpc2_registration",children:"register your team"})," and ",(0,n.jsx)(t.a,{href:"./cpc2_download",children:"download the data"}),". Entrants will have until 31st July to complete their submissions. Full instructions for submission are available on the ",(0,n.jsx)(t.a,{href:"./taking_part/cpc2_submission",children:"Submission"})," page."]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var i=s(96540);const n={},r=i.createContext(n);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);