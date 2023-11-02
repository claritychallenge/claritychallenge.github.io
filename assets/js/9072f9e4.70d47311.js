"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[2243],{46081:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>_,frontMatter:()=>n,metadata:()=>p,toc:()=>c});var a=r(85893),l=r(11151),s=r(68672);const i=JSON.parse('{"defaultSortField":"HASPI","format":[{"dataField":"rank","text":"Rank","sort":false},{"dataField":"team","text":"Team","sort":false},{"dataField":"id","text":"ID","sort":false},{"dataField":"paper","text":"Paper","type":"Link"},{"dataField":"spkr_id","text":"Spkr. ID","sort":false},{"dataField":"head_rot","text":"Head Rot.","sort":false},{"dataField":"HASPI","text":"HASPI","sort":true},{"dataField":"listener","text":"Listener","sort":true,"min":20}],"data":[{"rank":1,"team":"T01","id":"E009","spkr_id":null,"head_rot":null,"paper":"https://claritychallenge.org/clarity2022-CEC2-workshop/papers/Clarity_2022_CEC2_paper_cornell.pdf","HASPI":0.966,"listener":93.2},{"rank":2,"team":"T02","id":"E031","spkr_id":"Yes","head_rot":null,"paper":"https://claritychallenge.org/clarity2022-CEC2-workshop/papers/Clarity_2022_CEC2_paper_liu.pdf","HASPI":0.801,"listener":76.5},{"rank":3,"team":"T03","id":"E008_hr","spkr_id":null,"head_rot":"Yes","paper":"https://claritychallenge.org/clarity2022-CEC2-workshop/papers/Clarity_2022_CEC2_paper_ouyang.pdf","HASPI":0.784,"listener":52.6},{"rank":4,"team":"T03","id":"E008","spkr_id":null,"head_rot":null,"paper":"https://claritychallenge.org/clarity2022-CEC2-workshop/papers/Clarity_2022_CEC2_paper_ouyang.pdf","HASPI":0.777,"listener":null},{"rank":5,"team":"T04","id":"E037","spkr_id":null,"head_rot":null,"paper":"https://claritychallenge.org/clarity2022-CEC2-workshop/papers/Clarity_2022_CEC2_paper_lei.pdf","HASPI":0.775,"listener":68.4},{"rank":6,"team":"T04","id":"E022","spkr_id":null,"head_rot":null,"paper":"https://claritychallenge.org/clarity2022-CEC2-workshop/papers/Clarity_2022_CEC2_paper_lei.pdf","HASPI":0.721,"listener":65.5},{"rank":7,"team":"T05","id":"E024_hr","spkr_id":null,"head_rot":"Yes","paper":"https://claritychallenge.org/clarity2022-CEC2-workshop/papers/Clarity_2022_CEC2_paper_lee.pdf","HASPI":0.63,"listener":44.8},{"rank":8,"team":"T05","id":"E024","spkr_id":null,"head_rot":null,"paper":"https://claritychallenge.org/clarity2022-CEC2-workshop/papers/Clarity_2022_CEC2_paper_lee.pdf","HASPI":0.617,"listener":null},{"rank":9,"team":"T06","id":"E036","spkr_id":"Yes","head_rot":null,"paper":"https://claritychallenge.org/clarity2022-CEC2-workshop/papers/Clarity_2022_CEC2_paper_tammen.pdf","HASPI":0.599,"listener":45.6},{"rank":10,"team":"T06","id":"E038","spkr_id":"Yes","head_rot":null,"paper":"https://claritychallenge.org/clarity2022-CEC2-workshop/papers/Clarity_2022_CEC2_paper_tammen.pdf","HASPI":0.554,"listener":34.1},{"rank":11,"team":"T07","id":"E032","spkr_id":"Yes","head_rot":null,"paper":"https://claritychallenge.org/clarity2022-CEC2-workshop/papers/Clarity_2022_CEC2_paper_tu.pdf","HASPI":0.549,"listener":35.3},{"rank":12,"team":"T01","id":"Baseline","spkr_id":null,"head_rot":null,"paper":null,"HASPI":0.258,"listener":27},{"rank":13,"team":"T01","id":"None","spkr_id":null,"head_rot":null,"paper":null,"HASPI":0.172,"listener":null}]}'),n={id:"cec2_results",title:"Results",sidebar_label:"Results",sidebar_position:11},o=void 0,p={id:"cec2/cec2_results",title:"Results",description:"The 2nd Clarity Enhancement Challenge is now complete. Results are shown below along with links to the system description papers. Further information can be found on the Clarity-CEC2-2022 workshop website here.",source:"@site/docs/cec2/cec2_results.mdx",sourceDirName:"cec2",slug:"/cec2/cec2_results",permalink:"/docs/cec2/cec2_results",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"cec2_results",title:"Results",sidebar_label:"Results",sidebar_position:11},sidebar:"tutorialSidebar_cec2",previous:{title:"FAQ",permalink:"/docs/cec2/taking_part/cec2_faq"}},d={},c=[];function u(e){const t=Object.assign({p:"p",a:"a"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The 2nd Clarity Enhancement Challenge is now complete. Results are shown below along with links to the system description papers. Further information can be found on the Clarity-CEC2-2022 workshop website ",(0,a.jsx)(t.a,{href:"https://claritychallenge.org/clarity2022-CEC2-workshop/results",children:"here"}),"."]}),"\n","\n","\n",(0,a.jsx)(s.Z,{all_data:i})]})}const _=function(e={}){const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(u,e)})):u(e)}},68672:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(99551),l=(r(9085),r(26495)),s=r(67294),i=r(85893);function n(e){let{all_data:t}=e;const r=t.data,[n,o]=(0,s.useState)({labels:r.map((e=>e.id)),datasets:[{label:"",data:r.map((e=>e[t.defaultSortField])),backgroundColor:"rgba(53, 162, 235, 0.5)",borderColor:"BLUE",yAxisID:"y"}]}),[p,d]=(0,s.useState)({field:t.defaultSortField}),c={responsive:!0,elements:{bar:{borderWidth:2}},scales:{y:{type:"linear",min:(t.format.find((e=>e.dataField===p.field))||{min:0}).min,position:"left",title:{display:!0,text:(t.format.find((e=>e.dataField===p.field))||{text:0}).text,font:{size:18}}}}},u=(e,r)=>{console.log(e),console.log(r);const a=r.sortField;console.log(a),"asc"===r.sortOrder?r.data.sort(((e,t)=>{const r=e[a],l=t[a];return null===r&&null===l?0:null===r?1:null===l?-1:"number"==typeof r&&"number"==typeof l?r-l:r.toString().localeCompare(l.toString())})):r.data.sort(((e,t)=>{const r=e[a],l=t[a];return null===r&&null===l?0:null===r?-1:null===l?1:"number"==typeof r&&"number"==typeof l?l-r:l.toString().localeCompare(r.toString())})),o((e=>({...e,labels:r.data.map((e=>e.id)),datasets:[{...e.datasets[0],data:r.data.map((e=>e[r.sortField])),label:t.format.find((e=>e.dataField===r.sortField)).text}]}))),d((e=>({...e,field:r.sortField})))},_=function(e){const t=(e,t,r,a)=>t.paper?(0,i.jsx)("a",{href:t.paper,children:"Link"}):null;for(const r of e)"Link"===r.type&&(r.formatter=t);return e}(t.format);return(0,s.useEffect)((()=>{const e={sortField:p.field,sortOrder:"asc",data:t.data};u("sort",e)}),[]),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:[(0,i.jsx)(l.$Q,{data:n,options:c}),(0,i.jsx)("p",{style:{paddingTop:40}}),(0,i.jsx)(a.Z,{bootstrap4:!0,keyField:"id",remote:{filter:!1,pagination:!1,sort:!0,cellEdit:!1},data:r,columns:_,onTableChange:u})]})}}}]);