(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[901],{7432:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/devops/Linux/cron",function(){return t(5614)}])},5614:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return l}});var a=t(5893),i=t(2673),s=t(3393),r=t(8426);t(9128);var o=t(2643);let l=[{depth:2,value:"Basic Crontab Syntax",id:"basic-crontab-syntax"},{depth:2,value:"Editing the Crontab",id:"editing-the-crontab"},{depth:2,value:"Examples",id:"examples"},{depth:3,value:"Running a Script on Reboot",id:"running-a-script-on-reboot"},{depth:3,value:"Running a Script Every 30 Minutes",id:"running-a-script-every-30-minutes"},{depth:3,value:"Running a Script Every Hour",id:"running-a-script-every-hour"},{depth:3,value:"Running a Script Every Day",id:"running-a-script-every-day"},{depth:2,value:"Additional Tips",id:"additional-tips"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",h3:"h3",ul:"ul",li:"li"},(0,o.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Using Cron and Crontab to Run Scripts Automatically"}),"\n",(0,a.jsx)(n.p,{children:"Cron is a time-based job scheduler in Unix-like operating systems, and crontab is a file that contains a list of commands to be executed by cron at specified intervals."}),"\n",(0,a.jsx)(n.h2,{id:"basic-crontab-syntax",children:"Basic Crontab Syntax"}),"\n",(0,a.jsx)(n.p,{children:"A crontab entry consists of five fields, followed by the command to be executed:"}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"* * * * * command_to_execute"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"│ │ │ │ │"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"│ │ │ │ └─ Day of the Week (0-6, Sunday to Saturday)"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"│ │ │ └─── Month of the Year (1-12)"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"│ │ └───── Day of the Month (1-31)"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"│ └─────── Hour (0-23)"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"└───────── Minute (0-59)"})})]})}),"\n",(0,a.jsx)(n.h2,{id:"editing-the-crontab",children:"Editing the Crontab"}),"\n",(0,a.jsx)(n.p,{children:"To edit the crontab, use the following command:"}),"\n",(0,a.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"crontab"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-e"})]})})}),"\n",(0,a.jsx)(n.p,{children:"If prompted, choose an editor (e.g., nano)."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{id:"running-a-script-on-reboot",children:"Running a Script on Reboot"}),"\n",(0,a.jsxs)(n.p,{children:["To run a script on reboot, use the ",(0,a.jsx)(n.code,{children:"@reboot"})," keyword:"]}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"@reboot /path/to/script.sh"})})})}),"\n",(0,a.jsx)(n.h3,{id:"running-a-script-every-30-minutes",children:"Running a Script Every 30 Minutes"}),"\n",(0,a.jsx)(n.p,{children:"To run a script every 30 minutes, use the following crontab entry:"}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"*/30 * * * * /path/to/script.sh"})})})}),"\n",(0,a.jsx)(n.h3,{id:"running-a-script-every-hour",children:"Running a Script Every Hour"}),"\n",(0,a.jsx)(n.p,{children:"To run a script every hour, use the following crontab entry:"}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"0 * * * * /path/to/script.sh"})})})}),"\n",(0,a.jsx)(n.h3,{id:"running-a-script-every-day",children:"Running a Script Every Day"}),"\n",(0,a.jsx)(n.p,{children:"To run a script every day at a specific time (e.g., 3:30 AM), use the following crontab entry:"}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"30 3 * * * /path/to/script.sh"})})})}),"\n",(0,a.jsx)(n.h2,{id:"additional-tips",children:"Additional Tips"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Make sure the script has execute permissions:"}),"\n",(0,a.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"chmod"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"+x"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"/path/to/script.sh"})]})})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Use the full path to the script to avoid issues with PATH variables."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Redirect the script's output and errors to a log file for debugging:"}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"*/30 * * * * /path/to/script.sh > /path/to/script.log 2>&1"})})})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Comments can be added to the crontab by prefixing the line with ",(0,a.jsx)(n.code,{children:"#"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"After saving the changes to the crontab, cron will automatically read the updated file and start executing the scheduled tasks."})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/devops/Linux/cron.mdx",route:"/devops/Linux/cron",timestamp:1711241523e3,pageMap:[{kind:"Folder",name:"Programming",route:"/Programming",children:[{kind:"Folder",name:"Python",route:"/Programming/Python",children:[{kind:"Meta",data:{virtualenv:"Using virtual environments with virtualenv"}},{kind:"MdxPage",name:"virtualenv",route:"/Programming/Python/virtualenv"}]},{kind:"Meta",data:{git:"Git",Python:"Python"}},{kind:"Folder",name:"git",route:"/Programming/git",children:[{kind:"Meta",data:{push_multiple:"Push git repo to multiple locations"}},{kind:"MdxPage",name:"push_multiple",route:"/Programming/git/push_multiple"}]}]},{kind:"Meta",data:{index:"Introduction",about:"About",deck:"Steam Deck",devops:"DevOps",contact:{title:"Contact ↗",type:"page",href:"https://bilawal.net",newWindow:!0}}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"deck",route:"/deck",children:[{kind:"MdxPage",name:"downloads",route:"/deck/downloads"},{kind:"MdxPage",name:"guides",route:"/deck/guides"},{kind:"MdxPage",name:"scripts",route:"/deck/scripts"},{kind:"Meta",data:{downloads:"Downloads",guides:"Guides",scripts:"Scripts"}}]},{kind:"Folder",name:"devops",route:"/devops",children:[{kind:"Folder",name:"Linux",route:"/devops/Linux",children:[{kind:"Meta",data:{setup:"Quickly set up a development VM",cron:"Use cron to run script automatically"}},{kind:"MdxPage",name:"cron",route:"/devops/Linux/cron"},{kind:"MdxPage",name:"setup",route:"/devops/Linux/setup"}]},{kind:"Folder",name:"Windows",route:"/devops/Windows",children:[{kind:"Meta",data:{auto_powershell:"Run PowerShell scripts automatically",powershell_policy:"Change PowerShell Execution Policy"}},{kind:"MdxPage",name:"auto_powershell",route:"/devops/Windows/auto_powershell"},{kind:"MdxPage",name:"powershell_policy",route:"/devops/Windows/powershell_policy"}]}]},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Using Cron and Crontab to Run Scripts Automatically",headings:l},pageNextRoute:"/devops/Linux/cron",nextraLayout:s.ZP,themeConfig:r.Z};n.default=(0,i.j)(d)},8426:function(e,n,t){"use strict";var a=t(5893);t(7294);let i={logo:(0,a.jsx)("span",{children:"Deck/Ops"}),project:{link:"https://github.com/bilawalriaz"},chat:{link:"https://discord.com/bilawalriaz"},docsRepositoryBase:"https://deckops.dev",editLink:{component:null},feedback:{content:null},banner:{key:"2.0-release",text:(0,a.jsx)("a",{href:"https://news.hyperflash.uk",target:"_blank",children:"\uD83C\uDF89 Visit QuickNews for unbiased, accurate news summaries. Read more →"})},footer:{text:(0,a.jsxs)("span",{children:[new Date().getFullYear()," \xa9"," ",(0,a.jsx)("a",{href:"https://bilawal.net",target:"_blank",children:"Bilawal Riaz"})]})}};n.Z=i},5789:function(){}},function(e){e.O(0,[774,890,888,179],function(){return e(e.s=7432)}),_N_E=e.O()}]);