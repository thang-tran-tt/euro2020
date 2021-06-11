(this["webpackJsonpeuro2020-front-end"]=this["webpackJsonpeuro2020-front-end"]||[]).push([[0],{101:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),i=a.n(r),o=(a(101),a(30)),s=a(12),j=a(8),l=a(166),m=a(153),u=a(151),d=a(164),b=a(148),h=a(152),O=a(165),p=a(57),f=a.n(p),x=a(115),v=a(149),g=a(150),w="https://euro2020-back-end.herokuapp.com/";function _(){var e=S();return fetch(w+"validateToken",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authenticate:e}}).then((function(e){return e.json()})).then((function(e){return e.success}))}function y(e){return w+e}function S(){var e="; ".concat(document.cookie).split("; ".concat("jwt","="));if(2===e.length){var t=e.pop().split(";").shift();return"undefined"===typeof t?"":t}return""}var N=a(2);function C(){return Object(N.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(N.jsx)(b.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var T=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function k(){var e=T(),t=Object(n.useState)(""),a=Object(j.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),o=Object(j.a)(i,2),p=o[0],v=o[1],w=Object(n.useState)(""),S=Object(j.a)(w,2),k=S[0],E=S[1],A=Object(n.useState)(""),B=Object(j.a)(A,2),P=B[0],z=B[1],G=Object(n.useState)(""),F=Object(j.a)(G,2),W=F[0],I=F[1],q=Object(n.useState)(!0),D=Object(j.a)(q,2),J=D[0],L=D[1],H=Object(n.useState)(!1),U=Object(j.a)(H,2),Y=U[0],M=U[1],R=Object(n.useState)(!1),Z=Object(j.a)(R,2),$=Z[0],K=Z[1];function Q(){!function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(k)?L(!1):fetch(y("signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:k,password:P,name:c+" "+p})}).then((function(e){return e.json()})).then((function(e){!1===e.success?alert("error whilst signing up :("):M(!0)}))}return Object(n.useEffect)((function(){_().then((function(e){e&&K(!0)}))}),[K]),$?Object(N.jsx)(s.a,{to:"/home"}):Y?Object(N.jsx)(s.a,{to:"/"}):Object(N.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(N.jsx)(u.a,{}),Object(N.jsxs)("div",{className:e.paper,children:[Object(N.jsx)(l.a,{className:e.avatar,children:Object(N.jsx)(f.a,{})}),Object(N.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(N.jsxs)("div",{className:e.form,children:[Object(N.jsxs)(h.a,{container:!0,spacing:2,children:[Object(N.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(N.jsx)(d.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(e){return r(e.target.value)}})}),Object(N.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(N.jsx)(d.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:function(e){return v(e.target.value)}})}),Object(N.jsx)(h.a,{item:!0,xs:12,children:Object(N.jsx)(d.a,{variant:"outlined",required:!0,fullWidth:!0,type:"email",id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return E(e.target.value)},error:!J})}),Object(N.jsx)(h.a,{item:!0,xs:12,children:Object(N.jsx)(d.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return z(e.target.value)}})}),Object(N.jsx)(h.a,{item:!0,xs:12,children:Object(N.jsx)(d.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmpassword",label:"Confirm Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return I(e.target.value)},error:P!==W})})]}),Object(N.jsx)(m.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){return Q()},children:"Sign Up"}),Object(N.jsx)(h.a,{container:!0,children:Object(N.jsx)(h.a,{item:!0,children:Object(N.jsx)(s.b,{render:function(e){var t=e.history;return Object(N.jsx)(b.a,{onClick:function(){t.push("/")},variant:"body2",children:"Already have an account? Sign in"})}})})})]})]}),Object(N.jsx)(O.a,{mt:8,children:Object(N.jsx)(C,{})})]})}var E=a(7);function A(){return Object(N.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(N.jsx)(b.a,{color:"inherit",href:"https://material-ui.com/",children:"Ali Colver & Luke Ely"})," ",(new Date).getFullYear(),"."]})}var B=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function P(){var e=B(),t=Object(n.useState)({value:"",error:!1}),a=Object(j.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)({value:"",error:!1}),o=Object(j.a)(i,2),p=o[0],v=o[1],w=Object(n.useState)(!1),S=Object(j.a)(w,2),C=S[0],T=S[1];Object(n.useEffect)((function(){_().then((function(e){e&&T(!0)}))}),[T]);var k=function(){fetch(y("login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c.value,password:p.value})}).then((function(e){return e.json()})).then((function(e){var t;""===e["error-message"]?(t=e.token,document.cookie="jwt="+t,T(!0)):(v(Object(E.a)(Object(E.a)({},p),{},{error:!0})),r(Object(E.a)(Object(E.a)({},c),{},{error:!0})))}))};return C?Object(N.jsx)(s.a,{to:"/home"}):Object(N.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(N.jsx)(u.a,{}),Object(N.jsxs)("div",{className:e.paper,children:[Object(N.jsx)(l.a,{className:e.avatar,children:Object(N.jsx)(f.a,{})}),Object(N.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(N.jsxs)("div",{className:e.form,children:[Object(N.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",type:"email",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return r(Object(E.a)(Object(E.a)({},c),{},{value:e.target.value}))},error:c.error}),Object(N.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return v(Object(E.a)(Object(E.a)({},p),{},{value:e.target.value}))},error:p.error}),Object(N.jsx)(m.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){return k()},children:"Sign In"}),Object(N.jsx)(h.a,{container:!0,children:Object(N.jsx)(h.a,{item:!0,children:Object(N.jsx)(s.b,{render:function(e){var t=e.history;return Object(N.jsx)(b.a,{onClick:function(){t.push("/signup")},variant:"body2",children:"Don't have an account? Sign Up"})}})})})]})]}),Object(N.jsx)(O.a,{mt:8,children:Object(N.jsx)(A,{})})]})}var z=a(5),G=a(156),F=a(159),W=a(154),I=a(155),q=a(157),D=a(158),J=a(117),L=a(73),H=a.n(L),U=Object(v.a)({table:{padding:"5px"}}),Y=Object(z.a)((function(e){return{head:{backgroundColor:"#1caac9",color:"white"},body:{fontSize:14}}}))(W.a);function M(){var e=U(),t=Object(n.useState)(!1),a=Object(j.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)([]),o=Object(j.a)(i,2),s=o[0],l=o[1];return Object(n.useEffect)((function(){fetch(y("leaderboard"),{method:"GET",headers:{Authenticate:S()}}).then((function(e){return e.json()})).then((function(e){e.success&&(console.log(e),l(e.leaderboard))})),fetch(y("match/in-progress"),{method:"GET",headers:{Authenticate:S()}}).then((function(e){return e.json()})).then((function(e){e.success&&r(e.matches.length>0)}))}),[l]),Object(N.jsx)(I.a,{component:J.a,children:Object(N.jsxs)(G.a,{className:e.table,"aria-label":"simple table",children:[Object(N.jsx)(q.a,{children:Object(N.jsxs)(D.a,{children:[Object(N.jsx)(Y,{children:"#"}),Object(N.jsx)(Y,{children:"Player"}),Object(N.jsx)(Y,{children:"R"}),Object(N.jsx)(Y,{children:"S"}),Object(N.jsx)(Y,{align:"center",children:Object(N.jsx)("b",{children:"Pts"})})]})}),Object(N.jsx)(F.a,{children:s.map((function(e,t){return Object(N.jsxs)(D.a,{children:[Object(N.jsxs)(W.a,{children:[c?Object(N.jsx)(H.a,{style:{color:"green",paddingRight:"3vw"}}):Object(N.jsx)(N.Fragment,{}),t+1]}),Object(N.jsx)(W.a,{component:"th",scope:"row",children:e.name.split(" ")[0]}),Object(N.jsx)(W.a,{children:e.correct_results}),Object(N.jsx)(W.a,{children:e.correct_scores}),Object(N.jsx)(W.a,{align:"center",children:Object(N.jsx)("b",{children:e.score})})]},t)}))})]})})}var R=a.p+"static/media/logo.b61bf1d9.svg",Z=Object(v.a)({logo:{maxHeight:"15vw"},headerBar:{maxHeight:"15vw",marginBottom:"5vw",position:"fixed",width:"100%",backgroundColor:"white",top:0,zIndex:10}});function $(){var e=Z();return Object(N.jsx)("div",{className:e.headerBar,children:Object(N.jsx)("img",{className:e.logo,src:R,alt:"euro logo"})})}var K=a(160),Q=a(161),V=a(75),X=a.n(V),ee=a(77),te=a.n(ee),ae=a(76),ne=a.n(ae),ce=a(74),re=a.n(ce),ie=Object(v.a)({root:{width:"100vw",position:"fixed",bottom:0,left:0}});function oe(e){var t=ie(),a=Object(n.useState)(!1),c=Object(j.a)(a,2),r=c[0],i=c[1];return Object(n.useEffect)((function(){fetch(y("is-admin"),{method:"GET",headers:{"Content-Type":"application/json",Authenticate:S()}}).then((function(e){return e.json()})).then((function(e){i(e.success)}))}),[i]),Object(N.jsx)(s.b,{render:function(a){var n=a.history;return Object(N.jsxs)(Q.a,{value:e.value,onChange:function(e,t){n.push(t)},showLabels:!0,className:t.root,children:[Object(N.jsx)(K.a,{label:"Standings",value:"/standings",icon:Object(N.jsx)(X.a,{})}),Object(N.jsx)(K.a,{label:"Predict",value:"/home",icon:Object(N.jsx)(ne.a,{})}),Object(N.jsx)(K.a,{label:"History",value:"/history",icon:Object(N.jsx)(te.a,{})}),r?Object(N.jsx)(K.a,{label:"ADMIN",value:"/admin",icon:Object(N.jsx)(re.a,{})}):Object(N.jsx)(N.Fragment,{})]})}})}var se=Object(v.a)({leaderboard:{padding:"5px",marginTop:"50px",marginBottom:"10vw",paddingTop:"5vw",paddingBottom:"5vw"}});function je(){var e=se();return Object(N.jsxs)(c.a.Fragment,{children:[Object(N.jsx)($,{}),Object(N.jsx)("div",{className:e.leaderboard,children:Object(N.jsx)(M,{})}),Object(N.jsx)(oe,{value:"/standings"})]})}var le=a(168),me=a(162),ue=Object(v.a)({team:{textAlign:"center",width:"25vw"},teamEmoji:{fontSize:"15vw"},teamName:{fontSize:"4vw"}});function de(e){var t=ue();return Object(N.jsxs)(O.a,{className:t.team,children:[Object(N.jsx)("div",{className:t.teamEmoji,children:e.emoji}),Object(N.jsx)("div",{className:t.teamName,children:e.name})]})}var be=Object(v.a)({match:{width:"80vw",margin:"0 auto",display:"flex",justifyContent:"space-between",marginBottom:"3vh"},game:{width:"80vw",margin:"0 auto",display:"flex",justifyContent:"space-between",marginTop:"5vh",position:"relative"},teaminput:{width:"10vw",height:"8vw",fontSize:"4vw",marginTop:"6vw"},dash:{fontSize:"8vw",marginTop:"4vw"},date:{fontSize:"5vw",marginBottom:"1.5vh",verticalAlign:"center",position:"relative"},matchCard:{marginBottom:"4vh",textAlign:"center"},buttonBox:{marginBottom:"1.5vh"},button:{backgroundColor:"#1caac9"}});function he(e){var t=be(),a=Object(n.useState)({score:"",error:!1}),c=Object(j.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)({score:"",error:!1}),s=Object(j.a)(o,2),l=s[0],u=s[1],d=Object(n.useState)(!0),b=Object(j.a)(d,2),h=b[0],p=b[1];return Object(n.useEffect)((function(){p(!e.hasPrediction),e.hasPrediction&&e.team_one_pred&&e.team_two_pred&&(i({error:!1,score:e.team_one_pred}),u({error:!1,score:e.team_two_pred}))}),[e.hasPrediction,e.team_one_pred,e.team_two_pred]),Object(N.jsxs)(me.a,{className:t.matchCard,children:[Object(N.jsxs)(O.a,{className:t.match,children:[Object(N.jsx)(O.a,{children:Object(N.jsx)(de,{name:e.team_one.name,emoji:e.team_one.emoji})}),h?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(le.a,{className:t.teaminput,id:"outlined-basic",type:"number",value:r.score,onChange:function(e){return i(Object(E.a)(Object(E.a)({},r),{},{score:e.target.value}))},error:r.error}),Object(N.jsx)("span",{className:t.dash,children:"-"}),Object(N.jsx)(le.a,{className:t.teaminput,id:"outlined-basic",type:"number",value:l.score,onChange:function(e){return u(Object(E.a)(Object(E.a)({},l),{},{score:e.target.value}))},error:l.error})]}):function(){var a,n;return Object(N.jsx)("span",{className:t.dash,children:(null===(a=e.prediction)||void 0===a?void 0:a.team_one_pred)+"-"+(null===(n=e.prediction)||void 0===n?void 0:n.team_two_pred)})}(),Object(N.jsx)(O.a,{children:Object(N.jsx)(de,{name:e.team_two.name,emoji:e.team_two.emoji})})]}),Object(N.jsx)(O.a,{className:t.date,children:e.match.match_date+" "+e.match.kick_off_time.substring(0,e.match.kick_off_time.length-3)}),Object(N.jsx)(O.a,{className:t.buttonBox,children:Object(N.jsx)(m.a,{variant:"contained",className:t.button,onClick:function(){return function(){if(h){var t=parseInt(r.score),a=parseInt(l.score);if(isNaN(t)||isNaN(a))return i(Object(E.a)(Object(E.a)({},r),{},{error:!0})),void u(Object(E.a)(Object(E.a)({},l),{},{error:!0}));i(Object(E.a)(Object(E.a)({},r),{},{error:!1})),u(Object(E.a)(Object(E.a)({},l),{},{error:!1})),fetch(y("prediction"),{method:"POST",headers:{"Content-Type":"application/json",Authenticate:S()},body:JSON.stringify({team_one_pred:t,team_two_pred:a,matchid:e.match.matchid,penalty_winners:null})}).then((function(e){return e.json()})).then((function(t){t.success?(e.callback(),p(!1)):alert("Error whilst sending prediction, please try again")}))}else p(!0)}()},children:h?"Submit Prediction":"Edit Prediction"})})]})}var Oe=Object(v.a)({upcomingGames:{fontSize:"8vw"},gameContainer:{marginBottom:"15vw"}});function pe(){var e=Oe(),t=Object(n.useState)([]),a=Object(j.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!1),o=Object(j.a)(i,2),l=o[0],m=o[1];return Object(n.useEffect)((function(){u()}),[r]),l?Object(N.jsx)(s.a,{to:"/"}):Object(N.jsxs)(g.a,{className:e.gameContainer,children:[Object(N.jsx)(x.a,{className:e.upcomingGames,children:"Upcoming Games"}),c.map((function(e){return e.hasPrediction&&e.prediction?Object(N.jsx)(he,Object(E.a)(Object(E.a)({},e),{},{callback:u,team_one_pred:e.prediction.team_one_pred,team_two_pred:e.prediction.team_two_pred})):Object(N.jsx)(he,Object(E.a)(Object(E.a)({},e),{},{callback:u}))}))]});function u(){console.log("attempting fetch"),fetch(y("prediction-required"),{method:"GET",headers:{Authenticate:S()}}).then((function(e){return e.json()})).then((function(e){e.success?r(e.matches):m(!0)}))}}var fe=a(78),xe=a(163),ve=Object(v.a)({logo:{maxHeight:"15vw"},homepage:{position:"absolute",top:"19vw",left:0,width:"100%",marginBottom:"30vw"}}),ge=Object(fe.a)({typography:{fontFamily:["Source Sans Pro","sans-serif"].join(",")}});var we=function(){var e=ve();return Object(N.jsxs)(xe.a,{theme:ge,children:[Object(N.jsx)($,{}),Object(N.jsx)(g.a,{className:e.homepage,children:Object(N.jsx)(pe,{})}),Object(N.jsx)(oe,{value:"/home"})]})},_e=Object(v.a)({match:{width:"80vw",margin:"0 auto",display:"flex",justifyContent:"space-between",marginBottom:"3vh"},game:{width:"80vw",margin:"0 auto",display:"flex",justifyContent:"space-between",marginTop:"5vh",position:"relative"},teaminput:{width:"10vw",height:"8vw",fontSize:"4vw",marginTop:"6vw"},dash:{fontSize:"8vw",marginTop:"4vw"},date:{fontSize:"5vw",marginBottom:"1.5vh",verticalAlign:"center",position:"relative"},matchCard:{marginBottom:"4vh",textAlign:"center"}});function ye(e){var t=_e();return Object(N.jsxs)(me.a,{className:t.matchCard,children:[Object(N.jsxs)(O.a,{className:t.match,children:[Object(N.jsx)(O.a,{children:Object(N.jsx)(de,{name:e.team_one.name,emoji:e.team_one.emoji})}),function(){var a,n;return Object(N.jsx)("span",{className:t.dash,children:(null===(a=e.prediction)||void 0===a?void 0:a.team_one_pred)+"-"+(null===(n=e.prediction)||void 0===n?void 0:n.team_two_pred)})}(),Object(N.jsx)(O.a,{children:Object(N.jsx)(de,{name:e.team_two.name,emoji:e.team_two.emoji})})]}),Object(N.jsx)(O.a,{className:t.date,children:e.match.match_date+" "+e.match.kick_off_time.substring(0,e.match.kick_off_time.length-3)})]})}var Se=Object(v.a)({upcomingGames:{fontSize:"8vw",marginTop:"19vw"}});function Ne(){var e=Se(),t=Object(n.useState)([]),a=Object(j.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)([]),o=Object(j.a)(i,2),l=o[0],m=o[1],u=Object(n.useState)(!1),d=Object(j.a)(u,2),b=d[0],h=d[1];return Object(n.useEffect)((function(){fetch(y("match/ended"),{method:"GET",headers:{Authenticate:S()}}).then((function(e){return e.json()})).then((function(e){e.success?r(e.matches):h(!0)})),fetch(y("match/in-progress"),{method:"GET",headers:{Authenticate:S()}}).then((function(e){return e.json()})).then((function(e){e.success?m(e.matches):h(!0)}))}),[]),b?Object(N.jsx)(s.a,{to:"/"}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)($,{}),Object(N.jsxs)(g.a,{children:[Object(N.jsx)(x.a,{className:e.upcomingGames,children:"Your History"}),c.map((function(e){return Object(N.jsx)(ye,Object(E.a)({},e))})),l.map((function(e){return Object(N.jsx)(ye,Object(E.a)({},e))}))]}),Object(N.jsx)(oe,{value:"/history"})]})}var Ce=Object(v.a)({match:{width:"80vw",margin:"0 auto",display:"flex",justifyContent:"space-between",marginBottom:"3vh"},game:{width:"80vw",margin:"0 auto",display:"flex",justifyContent:"space-between",marginTop:"5vh",position:"relative"},teaminput:{width:"10vw",height:"8vw",fontSize:"4vw",marginTop:"6vw"},dash:{fontSize:"8vw",marginTop:"4vw"},date:{fontSize:"5vw",marginBottom:"1.5vh",verticalAlign:"center",position:"relative"},matchCard:{marginBottom:"4vh",textAlign:"center"},buttonBox:{marginBottom:"1.5vh"},button:{backgroundColor:"#1caac9"},endButton:{backgroundColor:"#1c4c87"}});function Te(e){var t=Ce(),a=Object(n.useState)({score:"",error:!1}),c=Object(j.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)({score:"",error:!1}),s=Object(j.a)(o,2),l=s[0],u=s[1],d=Object(n.useState)(!0),b=Object(j.a)(d,2),h=b[0],p=b[1];return Object(n.useEffect)((function(){var t=e.match.team_one_goals&&e.match.team_two_goals;p(!t),t&&(i({error:!1,score:e.match.team_one_goals}),u({error:!1,score:e.match.team_two_goals}))}),[e.hasPrediction,e.match.team_one_goals,e.match.team_two_goals]),Object(N.jsxs)(me.a,{className:t.matchCard,children:[Object(N.jsxs)(O.a,{className:t.match,children:[Object(N.jsx)(O.a,{children:Object(N.jsx)(de,{name:e.team_one.name,emoji:e.team_one.emoji})}),h?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(le.a,{className:t.teaminput,id:"outlined-basic",type:"number",value:r.score,onChange:function(e){return i(Object(E.a)(Object(E.a)({},r),{},{score:e.target.value}))},error:r.error}),Object(N.jsx)("span",{className:t.dash,children:"-"}),Object(N.jsx)(le.a,{className:t.teaminput,id:"outlined-basic",type:"number",value:l.score,onChange:function(e){return u(Object(E.a)(Object(E.a)({},l),{},{score:e.target.value}))},error:l.error})]}):function(){var a,n;return Object(N.jsx)("span",{className:t.dash,children:(null===(a=e.prediction)||void 0===a?void 0:a.team_one_pred)+"-"+(null===(n=e.prediction)||void 0===n?void 0:n.team_two_pred)})}(),Object(N.jsx)(O.a,{children:Object(N.jsx)(de,{name:e.team_two.name,emoji:e.team_two.emoji})})]}),Object(N.jsx)(O.a,{className:t.date,children:e.match.match_date+" "+e.match.kick_off_time}),Object(N.jsx)(O.a,{className:t.buttonBox,children:Object(N.jsx)(m.a,{variant:"contained",className:t.button,onClick:function(){return function(){if(h){var t=parseInt(r.score),a=parseInt(l.score);if(isNaN(t)||isNaN(a))return i(Object(E.a)(Object(E.a)({},r),{},{error:!0})),void u(Object(E.a)(Object(E.a)({},l),{},{error:!0}));i(Object(E.a)(Object(E.a)({},r),{},{error:!1})),u(Object(E.a)(Object(E.a)({},l),{},{error:!1})),fetch(y("score"),{method:"PUT",headers:{"Content-Type":"application/json",Authenticate:S()},body:JSON.stringify({team_one_goals:t,team_two_goals:a,matchid:e.match.matchid})}).then((function(e){return e.json()})).then((function(t){t.success?(e.callback(),p(!1)):alert("Error whilst updating scores, please try again")}))}else p(!0)}()},children:h?"Submit Score":"Edit Score"})}),Object(N.jsx)(m.a,{variant:"contained",className:t.endButton,onClick:function(){window.confirm("Are you sure the match is finished?")&&fetch(y("match/end"),{method:"PUT",headers:{"Content-Type":"application/json",Authenticate:S()},body:JSON.stringify({matchid:e.match.matchid})}).then((function(e){return e.json()})).then((function(e){e.success||alert("Error whilst updating scores, please try again")}))},children:"End Game"})]})}var ke=Object(v.a)({liveGames:{fontSize:"8vw",position:"absolute",top:"19vw",width:"90%",left:"5%"}});function Ee(){var e=ke(),t=Object(n.useState)([]),a=Object(j.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!1),o=Object(j.a)(i,2),l=o[0],m=o[1],u=Object(n.useState)(!0),d=Object(j.a)(u,2),b=d[0],h=d[1];function O(){fetch(y("match/in-progress"),{method:"GET",headers:{Authenticate:S()}}).then((function(e){return e.json()})).then((function(e){e.success?r(e.matches):m(!0)}))}return Object(n.useEffect)((function(){O(),fetch(y("is-admin"),{method:"GET",headers:{"Content-Type":"application/json",Authenticate:S()}}).then((function(e){return e.json()})).then((function(e){e.success||h(!1)}))}),[r,h]),l?Object(N.jsx)(s.a,{to:"/"}):b?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)($,{}),Object(N.jsxs)(g.a,{className:e.liveGames,children:[Object(N.jsx)(x.a,{children:"Live Games"}),c.map((function(e){return Object(N.jsx)(Te,Object(E.a)(Object(E.a)({},e),{},{callback:O}))}))]}),Object(N.jsx)(oe,{value:"/admin"})]}):Object(N.jsx)(s.a,{to:"/home"})}function Ae(){return Object(N.jsxs)(o.a,{children:[Object(N.jsx)(s.b,{path:"/",exact:!0,component:P}),Object(N.jsx)(s.b,{path:"/signup",exact:!0,component:k}),Object(N.jsx)(s.b,{path:"/standings",exact:!0,component:je}),Object(N.jsx)(s.b,{path:"/predict",exact:!0,component:pe}),Object(N.jsx)(s.b,{path:"/home",exact:!0,component:we}),Object(N.jsx)(s.b,{path:"/history",exact:!0,component:Ne}),Object(N.jsx)(s.b,{path:"/admin",exact:!0,component:Ee})]})}var Be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,170)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(Ae,{})}),document.getElementById("root")),Be()}},[[113,1,2]]]);
//# sourceMappingURL=main.4969a35b.chunk.js.map