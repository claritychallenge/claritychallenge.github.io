"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[8037],{56905:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=n(85893),t=n(11151);const a={id:"icassp2023_additional_tools",title:"Additional Tools",sidebar_label:"Additional Tools",sidebar_position:8},o=void 0,l={id:"icassp2023/software/icassp2023_additional_tools",title:"Additional Tools",description:"Hearing loss model",source:"@site/docs/icassp2023/software/icassp2023_additional_tools.mdx",sourceDirName:"icassp2023/software",slug:"/icassp2023/software/icassp2023_additional_tools",permalink:"/docs/icassp2023/software/icassp2023_additional_tools",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"icassp2023_additional_tools",title:"Additional Tools",sidebar_label:"Additional Tools",sidebar_position:8},sidebar:"tutorialSidebar_icassp2023",previous:{title:"Core Software",permalink:"/docs/icassp2023/software/icassp2023_core_software"},next:{title:"Taking Part",permalink:"/docs/category/taking-part-3"}},r={},d=[{value:"Hearing loss model",id:"hearing-loss-model",level:2},{value:"Differentiable source separation and hearing aid amplification modules",id:"differentiable-source-separation-and-hearing-aid-amplification-modules",level:2},{value:"Speech intelligibility model (MBSTOI)",id:"speech-intelligibility-model-mbstoi",level:2},{value:"References",id:"references",level:2}];function c(e){const i=Object.assign({h2:"h2",p:"p",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",ol:"ol"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"hearing-loss-model",children:"Hearing loss model"}),"\n",(0,s.jsxs)(i.p,{children:["This is an open-source python implementation of a hearing loss model developed by Brian Moore, Michael Stone and other members of the Auditory Perception Group, University of Cambridge  [",(0,s.jsx)(i.a,{href:"#refs",children:"1"}),", ",(0,s.jsx)(i.a,{href:"#refs",children:"2"}),"]."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Inputs"}),": A stereo wav audio signal, e.g., the output of the hearing aid model and audiograms for left and right ear."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Outputs"}),": The signal after simulating the hearing loss as specified by the set of audiograms (stereo wav file), ",(0,s.jsx)(i.code,{children:"<scene>_<listener>_HL-output.wav"})]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"differentiable-source-separation-and-hearing-aid-amplification-modules",children:"Differentiable source separation and hearing aid amplification modules"}),"\n",(0,s.jsxs)(i.p,{children:["The modules are from the ",(0,s.jsx)(i.a,{href:"https://github.com/TuZehai/Sheffield_Clarity_CEC1_Entry",children:"Sheffield E009 system"})," in CEC1. The source separation module is a multi-channel Conv-TasNet optimised with a SNR objective. The hearing aid amplification module is an FIR filter optimised with an objective, which is the combination of a differentiable approximation to the hearing loss model and a STOI loss."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Inputs"}),": six channels of mixed signals, i.e., ",(0,s.jsx)(i.code,{children:"mixed_CH1.wav"}),", ",(0,s.jsx)(i.code,{children:"mixed_CH2.wav"}),", and ",(0,s.jsx)(i.code,{children:"mixed_CH3.wav"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Outputs"}),": a single channel enhanced signal, therefore two source separation and amplification modules for left and right ears need to be optimised for the enhanced binaural signal."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"speech-intelligibility-model-mbstoi",children:"Speech intelligibility model (MBSTOI)"}),"\n",(0,s.jsxs)(i.p,{children:["Python implementation of a binaural intelligibility model, Modified Binaural Short-Time Objective Intelligibility (MBSTOI)  [",(0,s.jsx)(i.a,{href:"#refs",children:"3"}),"]. Note that MBSTOI requires signal time-alignment (and alignment within one-third octave bands)."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Inputs"}),": HL-model output signals, audiogram, reference target signal (i.e., the premixed target signal convolved with the BRIR with the reflections 'turned off', specified as 'target_anechoic'), (scene metadata)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Outputs"}),": predicted intelligibility score"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,s.jsx)("a",{name:"refs"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Moore, B. C. J., Alcantara, J. I., Stone, M. and Glasberg, B. R., 1999. Use of a loudness model for hearing aid fitting: II. Hearing aids with multi-channel compression. British Journal of Audiology, 33(3), pp. 157-170."}),"\n",(0,s.jsx)(i.li,{children:"Nejime, Y. and Moore, B. C., 1997. Simulation of the effect of threshold elevation and loudness recruitment combined with reduced frequency selectivity on the intelligibility of speech in noise. Journal of the Acoustical Society of America, 102(1), pp. 603-615."}),"\n",(0,s.jsx)(i.li,{children:"Andersen, A. H., de Haan, J. M., Tan, Z. H. and Jensen, J., 2018. Refinement and validation of the binaural short-time objective intelligibility measure for spatially diverse conditions. Speech Communication, 102, pp. 1-13."}),"\n"]})]})}const h=function(e={}){const{wrapper:i}=Object.assign({},(0,t.ah)(),e.components);return i?(0,s.jsx)(i,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},11151:(e,i,n)=>{n.d(i,{Zo:()=>l,ah:()=>a});var s=n(67294);const t=s.createContext({});function a(e){const i=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const o={};function l({components:e,children:i,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||o:a(e),s.createElement(t.Provider,{value:l},i)}}}]);