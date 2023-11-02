"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[4688],{52547:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var n=s(85893),t=s(11151),a=s(44996);const r={id:"cpc1_baseline",title:"Baseline System",sidebar_label:"Baseline System",sidebar_position:3},o=void 0,l={id:"cpc1/software/cpc1_baseline",title:"Baseline System",description:"Figure 1 is a simplified schematic of the baseline system, where not all signal paths are shown. A scene generator (blue box) creates the speech in noise (SPIN) that the hearing aid model then enhances (yellow box). This enhancement is individualised for each listener; hence, there is also a system to select a random listener (white ellipse) with a particular set of characteristics (e.g., audiograms).",source:"@site/docs/cpc1/software/cpc1_baseline.mdx",sourceDirName:"cpc1/software",slug:"/cpc1/software/cpc1_baseline",permalink:"/docs/cpc1/software/cpc1_baseline",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"cpc1_baseline",title:"Baseline System",sidebar_label:"Baseline System",sidebar_position:3},sidebar:"tutorialSidebar_cpc1",previous:{title:"Software",permalink:"/docs/category/software-2"},next:{title:"Core Software",permalink:"/docs/cpc1/software/cpc1_software"}},c={},h=[];function d(e){const i=Object.assign({p:"p",a:"a",ul:"ul",li:"li",strong:"strong"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["Figure 1 is a simplified schematic of the baseline system, where not all signal paths are shown. A scene generator (blue box) creates the speech in noise (SPIN) that the hearing aid model then enhances (yellow box). This enhancement is individualised for each listener; hence, there is also a system to select a random listener (white ellipse) with a particular set of characteristics (e.g., ",(0,n.jsx)(i.a,{href:"https://www.hear-it.org/Audiogram-",children:"audiograms"}),")."]}),"\n",(0,n.jsx)(i.p,{children:"The SPIN that has been improved by the hearing aid is then passed to the prediction stage (orange box). This comprises two models:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"a hearing loss model, and"}),"\n",(0,n.jsx)(i.li,{children:"a binaural speech intelligibility model."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"This prediction stage (orange box) is what we want you to improve on in this challenge."})}),"\n",(0,n.jsxs)("figure",{id:"fig1",children:[(0,n.jsx)("img",{src:(0,a.Z)("/img/tutorial/the_baseline-11-1536x561.png")}),(0,n.jsx)("figcaption",{children:"Figure 1 Simplified overview of the baseline."})]}),"\n",(0,n.jsx)(i.p,{children:"You are free to choose which parts of the baseline you use and reconfigure the system as you see fit. You can use our hearing loss model as part of your entry, or produce a single model that combines the hearing loss and speech intelligibility models."}),"\n",(0,n.jsxs)(i.p,{children:["For an introduction to elements of the prediction model, please see our ",(0,n.jsx)(i.a,{href:"./cpc1_faq",children:"FAQ"}),", which includes an overview of"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"./cpc1_faq#speech-intelligibility",children:"Speech intelligibility, and"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"./cpc1_faq#hearing-loss",children:"Hearing loss and what hearing aids do."})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"For the prediction challenge, most examples of the improved SPIN shown in the centre of the diagram come from hearing aid models created by the entrants to the first Enhancement Challenge. Therefore, most audio signals in the prediction challenge data were not processed by the baseline hearing aid model."}),"\n",(0,n.jsxs)(i.p,{children:["More details of the different parts of the baseline appear on the ",(0,n.jsx)(i.a,{href:"./cpc1_software",children:"software page"}),". See the following sections:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"./cpc1_software#a-scene-generator",children:"Scene Generator"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"./cpc1_software#b-baseeline-hearing-aid-processor",children:"Hearing aid model"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"./cpc1_software#d-hearing-loss-model",children:"Hearing loss model"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"./cpc1_software#e-speech-intelligibility-model",children:"Speech intelligibility model"})}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"./cpc1_download",children:"Download"})," baseline software and data."]})]})}const p=function(e={}){const{wrapper:i}=Object.assign({},(0,t.ah)(),e.components);return i?(0,n.jsx)(i,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,i,s)=>{s.d(i,{Zo:()=>o,ah:()=>a});var n=s(67294);const t=n.createContext({});function a(e){const i=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const r={};function o({components:e,children:i,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||r:a(e),n.createElement(t.Provider,{value:o},i)}}}]);