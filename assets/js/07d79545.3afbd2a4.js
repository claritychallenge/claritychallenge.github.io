"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[9556],{62724:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=i(85893),t=i(11151);const s={id:"icassp2023_submission",title:"ICASSP 2023 Submission",sidebar_label:"Submission",sidebar_position:14},o=void 0,r={id:"icassp2023/taking_part/icassp2023_submission",title:"ICASSP 2023 Submission",description:"- All teams are required to register for the challenge prior to submission. Please register as early as possible.",source:"@site/docs/icassp2023/taking_part/icassp2023_submission.mdx",sourceDirName:"icassp2023/taking_part",slug:"/icassp2023/taking_part/icassp2023_submission",permalink:"/docs/icassp2023/taking_part/icassp2023_submission",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{id:"icassp2023_submission",title:"ICASSP 2023 Submission",sidebar_label:"Submission",sidebar_position:14},sidebar:"tutorialSidebar_icassp2023",previous:{title:"Find A Team",permalink:"/docs/icassp2023/taking_part/icassp2023_find_a_team"},next:{title:"FAQ",permalink:"/docs/icassp2023/taking_part/icassp2023_faq"}},l={},d=[{value:"What evaluation data is provided?",id:"what-evaluation-data-is-provided",level:2},{value:"What audio do I need to submit?",id:"what-audio-do-i-need-to-submit",level:2},{value:"Naming and packaging signals",id:"naming-and-packaging-signals",level:2},{value:"Using head rotation data and/or extended training data",id:"using-head-rotation-data-andor-extended-training-data",level:2},{value:"Technical report",id:"technical-report",level:2},{value:"How will intellectual property be handled?",id:"how-will-intellectual-property-be-handled",level:2},{value:"Where do I submit the signals?",id:"where-do-i-submit-the-signals",level:2}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["All teams are ",(0,n.jsx)(a.a,{href:"./icassp2023_registration",children:"required to register"})," for the challenge prior to submission. Please register as early as possible."]}),"\n",(0,n.jsxs)(a.li,{children:["Evaluation data now available! ",(0,n.jsx)(a.a,{href:"https://www.myairbridge.com/en/#!/folder/EkthOZZeBW33aaDBWSDadTgpOkbgaFxO",children:"Download Now"}),"."]}),"\n"]})}),"\n",(0,n.jsx)(a.p,{children:"Submissions will be evaluated using a combination of HASPI and HASQI to give a combined speech intelligibility and speech quality metric."}),"\n",(0,n.jsx)(a.p,{children:"Key dates."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"2nd Feb 2023"}),": Release of evaluation data."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"10th Feb 2023"}),": Submission by teams."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"14th Feb 2023"}),": Results released.Top 5 ranked teams invited to submit papers to ICASSP-2023"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"20th Feb 2023"}),": Invited papers submitted to ICASSP-2023"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"4-9th June 2023"}),": Overview paper and invited papers presented at dedicated ICASSP session"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"what-evaluation-data-is-provided",children:"What evaluation data is provided?"}),"\n",(0,n.jsxs)(a.p,{children:["There will be two sets of evaluation data: i) the simulate set consisting of 1500 scenes generated in the same way as the training and development data (",(0,n.jsx)(a.code,{children:"eval1"}),"), ii) the real data consisting of real acoustic mixtures (",(0,n.jsx)(a.code,{children:"eval2"}),"). For details see ",(0,n.jsx)(a.a,{href:"../data/icassp2023_data",children:"the data description page"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"For each scene, you are provided with the signals received at each of the three microphones on the left and right hearing aid device. You will also be provided with JSON or csv formatted metadata consisting of"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"the audiograms for a set of listeners and"}),"\n",(0,n.jsx)(a.li,{children:"a mapping of which listeners will listen to which scenes."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"There will also be some clean example utterances from the target talker, that are not the same as the target utterance, but which can be used to identify the target talker, i.e., to disambiguate scenes in which other speakers are present."}),"\n",(0,n.jsx)(a.p,{children:"For HASPI/HASQI evaluation, there will be one listener per scene and the scene-listener mapping will be the same for all teams."}),"\n",(0,n.jsx)(a.h2,{id:"what-audio-do-i-need-to-submit",children:"What audio do I need to submit?"}),"\n",(0,n.jsx)(a.p,{children:"You must submit the stereo audio signals produced at the output of your enhancement stage, which the organisers will process by the hearing aid amplification stage and the HASPI/HASQI evaluation metric. Signals should be submitted as stereo, floating point wav format signals, at the same sampling rate as the signals provided"}),"\n",(0,n.jsx)(a.h2,{id:"naming-and-packaging-signals",children:"Naming and packaging signals"}),"\n",(0,n.jsxs)(a.p,{children:["Your processed signals should be named using the conventions used by the baseline system, i.e., ",(0,n.jsx)(a.code,{children:"<Scene ID>_<Listener ID>_enhanced.wav"})," and explained on the ",(0,n.jsx)(a.a,{href:"../data/icassp2023_data#d6-enhanced-signals",children:"data page"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Place the processed signals for the two sets into separate directories named ",(0,n.jsx)(a.code,{children:"eval1"})," and ",(0,n.jsx)(a.code,{children:"eval2"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["These should be placed in a directory whose name is the unique team ID that you will be sent, e.g., ",(0,n.jsx)(a.code,{children:"ICASSP2023_E001"})," and  then packaged using ",(0,n.jsx)(a.code,{children:"zip"})," or ",(0,n.jsx)(a.code,{children:"tar"})," or any standard packaging tool, e.g., to make a packaged file called ",(0,n.jsx)(a.code,{children:"<TEAM_ID>.zip"})]}),"\n",(0,n.jsx)(a.p,{children:"The packaged file will have the following structure,"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-txt",children:"ICASSP2023_E001\n\u251c\u2500\u2500 eval1 (1500 processed signals)\n\u2514\u2500\u2500 eval2 (1500 processed signals)\n"})}),"\n",(0,n.jsx)(a.p,{children:"The resulting file should be about 4 GB."}),"\n",(0,n.jsx)(a.p,{children:"Upload the packaged data to the Google Drive link that you will have been sent."}),"\n",(0,n.jsx)(a.h2,{id:"using-head-rotation-data-andor-extended-training-data",children:"Using head rotation data and/or extended training data"}),"\n",(0,n.jsx)(a.p,{children:"We would like to be able to separately evaluate the benefit of using the head rotation and extra training data, so in accordance with the challenge rules,"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"If you have trained on data which was not included in the core database, then please also provide outputs of a system trained only with the standard data."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"If you have made use of the head rotation data you should also provide outputs of an equivalent system that does not use the head rotation data."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"If you have used extra training data and/or the head rotation data, then please package the outputs separately using the following naming convention,"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"\u2039TEAM_ID\u203a.zip"})," - standard training data and no head rotation (all teams)"]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"\u2039TEAM_ID\u203a_hr.zip"})," - standard data and using head rotation"]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"\u2039TEAM_ID\u203a_data.zip"})," - extended training data without using head rotation"]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"\u2039TEAM_ID\u203a_hr_data.zip"})," - extended training data and using head rotation"]}),"\n",(0,n.jsx)(a.h2,{id:"technical-report",children:"Technical report"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["For every entry, a technical report needs to be uploaded to the Google Drive along with your evaluation signals - see ",(0,n.jsx)(a.a,{href:"../icassp2023_dates",children:"here"})," for deadline. The draft needs to be sufficiently complete for us to judge whether your system is compliant with the challenge rules."]}),"\n",(0,n.jsx)(a.li,{children:"Your report should include an abstract and introduction and sections on experimental setup/methodology including system information and model/network architecture, evaluation/results, discussion, conclusion and references. Please provide an estimation of the computational resources needed. You must describe any external data and pre-existing tools, software and models used."}),"\n",(0,n.jsx)(a.li,{children:"The report can be placed in the Google Drive alongside your data."}),"\n",(0,n.jsx)(a.li,{children:"The top five systems will be invited to submit a paper to the ICASSP 2023 special session."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"how-will-intellectual-property-be-handled",children:"How will intellectual property be handled?"}),"\n",(0,n.jsxs)(a.p,{children:["See ",(0,n.jsx)(a.a,{href:"./icassp2023_rules#intellectual-property",children:"here"})," under Intellectual Property."]}),"\n",(0,n.jsx)(a.h2,{id:"where-do-i-submit-the-signals",children:"Where do I submit the signals?"}),"\n",(0,n.jsx)(a.p,{children:"When you have registered you will receive a link to a Google Drive to which you will be able to securely upload your signals.  We also encourage you to submit your enhancement code via this link."}),"\n",(0,n.jsx)(a.p,{children:"Materials uploaded will be visible to the Clarity Team but not to other entrants."}),"\n",(0,n.jsx)(a.admonition,{type:"warning",children:(0,n.jsx)(a.p,{children:"Note, in order to use the Google Drive you will need to have a Google account. If you anticipate problems using Google then please make arrangements to send us the materials by other means, e.g., via a service such as WeTransfer or similar."})})]})}function c(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,a,i)=>{i.d(a,{Z:()=>r,a:()=>o});var n=i(67294);const t={},s=n.createContext(t);function o(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);