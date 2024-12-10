"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[12],{2966:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"cec3/task_3/cec3_task3_baseline","title":"Task 3 Baseline","description":"A baseline system for all of the tasks is provided as part of the latest release of the PyClarity toolkit available on GitHub. For this challenge round we ask entrants to use latest packaged release in the v0.5.x series.","source":"@site/docs/cec3/task_3/task3_baseline.mdx","sourceDirName":"cec3/task_3","slug":"/cec3/task_3/cec3_task3_baseline","permalink":"/docs/cec3/task_3/cec3_task3_baseline","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":40,"frontMatter":{"id":"cec3_task3_baseline","title":"Task 3 Baseline","sidebar_label":"Baseline","sidebar_position":40},"sidebar":"tutorialSidebar_cec3","previous":{"title":"Rules","permalink":"/docs/cec3/task_3/cec3_task3_rules"},"next":{"title":"Submission","permalink":"/docs/cec3/task_3/cec3_task3_submission"}}');var a=s(74848),i=s(28453);const r={id:"cec3_task3_baseline",title:"Task 3 Baseline",sidebar_label:"Baseline",sidebar_position:40},l=void 0,o={},c=[{value:"Enhancement",id:"enhancement",level:3},{value:"Evaluation",id:"evaluation",level:3},{value:"Baseline performance for Task 3",id:"baseline-performance-for-task-3",level:3},{value:"References",id:"references",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["A baseline system for all of the tasks is provided as part of the latest release of the PyClarity toolkit ",(0,a.jsx)(n.a,{href:"https://github.com/claritychallenge/clarity/tree/main",children:"available on GitHub"}),". For this challenge round we ask entrants to use latest packaged release in the ",(0,a.jsx)(n.a,{href:"https://github.com/claritychallenge/clarity/releases",children:"v0.5.x series"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"The baseline takes the form of a pipeline of three Python scripts,"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"enhance.py"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"evaluate.py"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"report_scores.py"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The first of these can be replaced by your own enhancement system, while the other two scripts should remain fixed to match how we will evaluate final submissions. For the development set, the reference signals have been provided so you can run the complete pipeline and obtain scores. For the final evaluation set, we will not release references, but instead, you will send us the enhanced signals and we will score them remotely using the same scripts."}),"\n",(0,a.jsx)(n.h3,{id:"enhancement",children:"Enhancement"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"enhance.py"})," script performs the baseline enhancement. The baseline simply takes the 6-channel hearing aid inputs and reduces this to a stereo hearing aid output by passing through the 'front' microphone signal of the left and right ear."]}),"\n",(0,a.jsxs)(n.p,{children:["The stereo pair is then passed through a hearing aid amplification stage using a NAL-R  [",(0,a.jsx)(n.a,{href:"#refs",children:"1"}),"] fitting amplification and a simple automatic gain compressor. The amplification is determined by the audiograms defined by the scene-listener pairs in clarity_data/metadata/scenes_listeners.dev.json for the development set. After amplification, the evaluate function calculates the better-ear HASPI  [",(0,a.jsx)(n.a,{href:"#refs",children:"2"}),"]."]}),"\n",(0,a.jsx)(n.h3,{id:"evaluation",children:"Evaluation"}),"\n",(0,a.jsxs)(n.p,{children:["Once the enhancement has been run, the ",(0,a.jsx)(n.code,{children:"evaluate.py"})," script can compute the HASPI scores for the signals stored in the amplified_signals folder. The script will read the scene-listener pairs from the development set and calculate the HASPI score for each pair. The final score is the mean HASPI score across all pairs."]}),"\n",(0,a.jsxs)(n.p,{children:["The results are stored in a CSV file which is then read by the final ",(0,a.jsx)(n.code,{children:"report_scores.py"})," script which will generate a report. This two step process means that it is easy to run evaluate on multiple processors on subsets of the full evaluation set: each processes will produce a separate CSV and ",(0,a.jsx)(n.code,{children:"report_score.py"})," will collate the results, check their integrity and generate the final report."]}),"\n",(0,a.jsxs)(n.p,{children:["The scripts have been designed to run with minimal configuration, but with flexible options for performing partial runs, parallel processing, or running on a cluster. For full documentation and examples of how to run the scripts see the ",(0,a.jsx)(n.a,{href:"https://github.com/claritychallenge/clarity/tree/main/recipes/cec3",children:"README.md"})," file in the CEC3 baseline recipe of the PyClarity toolkit on GitHub."]}),"\n",(0,a.jsx)(n.h3,{id:"baseline-performance-for-task-3",children:"Baseline performance for Task 3"}),"\n",(0,a.jsx)(n.p,{children:"Running all three scripts on Task 3 will lead to the following output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Evaluation set size: 7500\nMean HASPI score: 0.19600830050060633\n\n                 SNR     haspi\nSNR\n(-12, -9] -10.565021  0.037197\n(-9, -6]   -7.483742  0.068648\n(-6, -3]   -4.542632  0.108995\n(-3, 0]    -1.439869  0.204429\n(0, 3]      1.518856  0.321640\n(3, 6]      4.428666  0.436806\n"})}),"\n",(0,a.jsx)(n.p,{children:"The mean HASPI score (0.196) is the metric that will be used for ranking. The table shows the mean HASPI score for each SNR range to help you understand the performance of your system."}),"\n",(0,a.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,a.jsx)("a",{name:"refs"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:'Byrne, Denis, and Harvey Dillon. "The National Acoustic Laboratories\'(NAL) new procedure for selecting the gain and frequency response of a hearing aid." Ear and hearing 7.4 (1986): 257-265.'}),"\n",(0,a.jsx)(n.li,{children:"Kates, J.M. and Arehart, K.H., 2021. The hearing-aid speech perception index (HASPI) version 2. Speech Communication, 131, pp.35-46."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(96540);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);