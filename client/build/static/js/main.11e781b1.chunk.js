(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{306:function(e,t){},308:function(e,t){},348:function(e,t){},349:function(e,t){},439:function(e,t,n){},440:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(57),c=n.n(r),a=n(19),s=n(101),o=n(139),l=n(487),h=n(491),j=n(140),d=n.n(j),u=n(4),g=function(e){var t=e.onFormSubmit,n=Object(i.useState)(""),r=Object(a.a)(n,2),c=r[0],j=r[1],g=function(){var e=Object(o.a)(Object(s.a)().mark((function e(n){var i;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,d.a.post("/chimpScrape",{url:c});case 3:i=e.sent,t(i.data.campaigns);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{style:{marginBottom:"1rem"},children:"Enter a MailChimp Campaign Archive URL to source from:"}),Object(u.jsx)(l.a,{variant:"standard",onChange:function(e){return j(e.target.value)},value:c,sx:{width:"60%"},label:"MailChimp Campaign Archive URL"}),Object(u.jsx)(h.a,{variant:"contained",onClick:function(e,t){return g(e,t)},children:"Select Issues"}),Object(u.jsxs)("div",{style:{maxWidth:"600px",marginTop:"2.5rem",backgroundColor:"#d3d3d3",borderRadius:"7px",padding:"1rem"},children:[Object(u.jsx)("div",{children:"To find your Campaign Archive URL follow these steps:"}),Object(u.jsxs)("ol",{children:[Object(u.jsxs)("li",{children:["Log into"," ",Object(u.jsx)("a",{rel:"noreferrer",href:"http://mailchimp.com",target:"_blank",children:"Mailchimp"})]}),Object(u.jsxs)("li",{children:["Click ",Object(u.jsx)("i",{children:"Campaigns"})]}),Object(u.jsxs)("li",{children:["Next to (or under) your Campaign you'll see a button called"," ",Object(u.jsx)("i",{children:"Sent Campaign"})," or ",Object(u.jsx)("i",{children:"View Report"})," or ",Object(u.jsx)("i",{children:"Edit"})," (the wording depends on the type of Campaign). Click the down arrow to the right of the words."," "]}),Object(u.jsxs)("li",{children:["Click ",Object(u.jsx)("i",{children:"View email"}),"."]}),Object(u.jsxs)("li",{children:["You'll now see an email that was sent as part of your Campaign. Click ",Object(u.jsx)("i",{children:"Past Issues"})," which is near the top of the screen."]}),Object(u.jsx)("li",{children:"You are now seeing a list (archive) of sent Campaigns. The link to the archive will be in your Internet Browser (e.g. Google Chrome, Safari, Firefox, etc.) address bar."})]})]}),Object(u.jsx)("div",{onClick:function(){return j("https://us11.campaign-archive.com/home/?u=16a7d00c97055ae7a7fe916ec&id=952a98efb9")},style:{marginTop:"2rem",cursor:"pointer"},children:"Want a sample url? Click here"})]});return Object(u.jsx)(u.Fragment,{children:b})},b=n(184),m=n(496),x=n(489),f=n(485),p=n(497),O=n(498),y=n(488),v=function(e){var t=e.campaigns,n=e.changeCampaigns,i=e.setArticles,r=function(){var e=Object(o.a)(Object(s.a)().mark((function e(n){var r,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=t.filter((function(e){return e.selected})),e.next=4,d.a.post("/chimpScrape/chimpPullContent",{issues:r});case 4:return c=e.sent,i(c.data.articles.flat()),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h.a,{variant:"contained",onClick:r,children:"Select Content"}),Object(u.jsx)(m.a,{children:t.map((function(e,i){return Object(u.jsx)(x.a,{disablePadding:!0,children:Object(u.jsxs)(f.a,{onClick:function(){return function(e){if(t.length>0){var i=t.map((function(t){return t.url===e?Object(b.a)(Object(b.a)({},t),{},{selected:!t.selected}):t}));n(i)}}(e.url)},children:[Object(u.jsx)(p.a,{children:Object(u.jsx)(y.a,{edge:"start",checked:e.selected,tabIndex:-1,disableRipple:!0})}),Object(u.jsx)(O.a,{children:e.headline}),Object(u.jsx)(O.a,{edge:"end",children:e.date})]})},e.url)}))})]})},C=n(42),w=n(499),S=n(26);S.b.register({family:"Assistant",fonts:[{src:"https://fonts.gstatic.com/s/assistant/v1/2iDwv6DBtyixlK5YHngp1w.ttf"},{src:"https://fonts.gstatic.com/s/assistant/v1/xXstfiHQzjB9j5ZxYTBoZy3USBnSvpkopQaUR-2r7iU.ttf",fontWeight:200},{src:"https://fonts.gstatic.com/s/assistant/v1/xXstfiHQzjB9j5ZxYTBoZy3USBnSvpkopQaUR-2r7iU.ttf",fontWeight:600}]}),S.b.register({family:"Cardo",fonts:[{src:"https://fonts.gstatic.com/s/cardo/v8/jbkF2_R0FKUEZTq5dwSknQ.ttf"}]});var k=S.f.create({page:{padding:"20 20 55 20"},title:{fontFamily:"Assistant",fontSize:20},text:{fontSize:12,fontFamily:"Cardo",margin:"0 0 9 0",lineHeight:"1.5"},textLast:{fontSize:12,fontFamily:"Cardo",margin:"0",lineHeight:"1.5"},image:{maxWidth:"50%",height:"auto",marginBottom:7},footer:{display:"flex",flexDirection:"row",position:"absolute",fontSize:12,bottom:20,left:0,right:0,color:"grey",fontFamily:"Assistant",justifyContent:"space-between",padding:"10 0",margin:"0 20"},pageNumber:{},article:{},shortArticle:{flexDirection:"row"},shortArticleText:{marginRight:185,marginLeft:10,fontSize:12,fontFamily:"Cardo",lineHeight:"1.5"},shortArticleImage:{width:"33%",height:"auto",objectFit:"contain",objectPosition:"0% 0%",paddingBottom:10},spacer:{borderBottom:"1 solid grey",marginBottom:10,paddingBottom:10}}),A=function(e){var t=e.orgName,n=e.newsletterName,i=e.footerText,r=e.subheading,c=e.articles;S.b.register({family:"Roboto",src:"https://fonts.googleapis.com/css2?family=Assistant&display=swap"});var a=function(e){return Object(u.jsxs)(S.h,{children:[Object(u.jsx)(S.g,{minPresenceAhead:24,style:k.title,children:e.headline[0].length>=100?null:"".concat(e.headline)}),e.text.split("\n").map((function(e,t,n){return t>0&&e.length>1?"\t"===e.charAt(0)?(i=e,Object(u.jsxs)(S.g,{children:["\u2022 ",i.substring(1)]})):t===n.length-1?Object(u.jsx)(S.g,{style:k.textLast,children:e},t):Object(u.jsx)(S.g,{style:k.text,children:e},t):e.length>=100?Object(u.jsx)(S.g,{style:k.text,children:e},t):null;var i}))]})};return Object(u.jsx)(S.a,{children:Object(u.jsxs)(S.e,{size:"LETTER",style:k.page,children:[Object(u.jsxs)(S.h,{fixed:!0,style:{borderBottom:"2 solid black",flexGrow:0,display:"flex",flexDirection:"row",justifyContent:"space-between",flexBasis:"100%",marginBottom:"10",padding:"8",fontSize:11,backgroundColor:"#e8e8e8",textTransform:"uppercase",fontFamily:"Assistant",fontWeight:"900"},children:[Object(u.jsx)(S.g,{style:{textTransform:"uppercase"},children:t}),Object(u.jsx)(S.g,{children:(new Date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})})]}),Object(u.jsxs)(S.h,{children:[Object(u.jsx)(S.g,{fontWeight:"thin",style:{fontSize:50,marginTop:-10,textAlign:"center",letterSpacing:3,fontFamily:"Assistant",fontWeight:200,borderBottom:"1 solid grey"},children:n}),r?Object(u.jsx)(S.g,{fontWeight:"thin",style:{fontSize:12,padding:"3 0",textAlign:"center",letterSpacing:3,fontFamily:"Assistant",fontWeight:900,borderBottom:"1 solid grey"},children:r}):null,Object(u.jsx)(S.h,{style:{margin:"5px 0"}}),c.map((function(e,t){return e.image.src?e.text.length<=400?Object(u.jsx)(S.h,{style:k.spacer,children:Object(u.jsxs)(S.h,{style:k.shortArticle,children:[Object(u.jsx)(S.c,{style:k.shortArticleImage,minPresenceAhead:80,src:"https://cors.grahamwebworks.com/".concat(e.image.src)}),Object(u.jsx)(S.h,{style:k.shortArticleText,children:a(e)})]})},t):Object(u.jsx)(S.h,{style:k.spacer,children:Object(u.jsxs)(S.h,{style:k.article,children:[Object(u.jsx)(S.c,{style:k.image,minPresenceAhead:1,src:"https://cors.grahamwebworks.com/".concat(e.image.src)}),a(e)]})},t):Object(u.jsx)(S.h,{style:k.spacer,children:Object(u.jsx)(S.h,{style:k.article,children:a(e)})},t)}))]}),Object(u.jsxs)(S.h,{fixed:!0,style:k.footer,children:[Object(u.jsx)(S.g,{children:i}),Object(u.jsx)(S.g,{style:k.pageNumber,render:function(e){var t=e.pageNumber,n=e.totalPages;return"".concat(t," / ").concat(n)},fixed:!0})]})]})})},T=function(e){var t=e.articles,n=Object(i.useState)("RB Community Church"),r=Object(a.a)(n,2),c=r[0],s=r[1],o=Object(i.useState)("Life of the Church"),h=Object(a.a)(o,2),j=h[0],d=h[1],g=Object(i.useState)("rbcommunity.org"),b=Object(a.a)(g,2),m=b[0],x=b[1],f=Object(i.useState)("If you've complained about not knowing what's going on...here you go"),p=Object(a.a)(f,2),O=p[0],y=p[1],v=Object(i.useState)([]),k=Object(a.a)(v,2),T=k[0],B=k[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(w.a,{sx:{display:"grid",gridTemplateColumns:"70% 1fr",height:"100vh"},children:[Object(u.jsx)("div",{style:{gridColumn:"1 / 2",padding:"2rem"},children:Object(u.jsx)(S.d,{width:"100%",height:"100%",children:Object(u.jsx)(A,{orgName:c,newsletterName:j,footerText:m,subheading:O,articles:T.map((function(e){return t[e]}))})})}),Object(u.jsxs)("div",{style:{gridColumn:"2 / 3"},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(l.a,{label:"Church Name",variant:"outlined",value:c,sx:{width:"100%",marginTop:"2rem"},onChange:function(e){return s(e.target.value)}}),Object(u.jsx)(l.a,{label:"Publication Title",variant:"outlined",value:j,sx:{width:"100%",marginTop:"1rem"},onChange:function(e){return d(e.target.value)}}),Object(u.jsx)(l.a,{label:"Subheading",variant:"outlined",value:O,sx:{width:"100%",marginTop:"1rem"},onChange:function(e){return y(e.target.value)}}),Object(u.jsx)(l.a,{label:"Footer Text",variant:"outlined",value:m,sx:{width:"100%",marginTop:"1rem"},onChange:function(e){return x(e.target.value)}})]}),Object(u.jsxs)("div",{style:{marginTop:"2rem"},children:["Select articles to add:",Object(u.jsx)("ul",{style:{listStyle:"none"},children:t.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",name:t,id:t,onChange:function(e){return function(e){e.target.checked?B([].concat(Object(C.a)(T),[e.target.id]).sort((function(e,t){return e-t}))):e.target.checked||B(T.filter((function(t){return t!==e.target.id})))}(e)}}),e.headline]})},t)}))})]})]})]})})},B=n(494),F=n(495),R=n(493),z=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)([]),s=Object(a.a)(c,2),o=s[0],l=s[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(B.a,{sx:{mb:2},position:"static",children:Object(u.jsx)(F.a,{children:Object(u.jsx)(R.a,{onClick:function(){r([]),l([])},variant:"h6",sx:{cursor:"pointer"},children:"ChimpPrint"})})}),Object(u.jsx)("div",{style:{margin:"0 2.5rem"},children:n.length?o.length?Object(u.jsx)(T,{articles:o}):Object(u.jsx)(v,{campaigns:n,changeCampaigns:r,setArticles:l}):Object(u.jsx)(g,{onFormSubmit:r})})]})};n(439);c.a.render(Object(u.jsx)(z,{}),document.querySelector("#root"))}},[[440,1,2]]]);
//# sourceMappingURL=main.11e781b1.chunk.js.map