(this["webpackJsonpdjango-react-boilerplate"]=this["webpackJsonpdjango-react-boilerplate"]||[]).push([[0],{183:function(e,t,n){},213:function(e,t,n){},216:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(17),a=n.n(r),s=(n(183),n(12)),o=n(255),u=n(257),l=n(63),j=n(77),d=n(36),b=n(105),O=n.n(b),f=function(){return O.a.get("token")},h=function(){O.a.remove("token")},x=function(e){O.a.set("token",e.token)},m=n(2),p=function(){h(),window.location.reload(!1)},g=function(){return Object(m.jsx)("div",{"data-testid":"MainNavbar",children:Object(m.jsx)(o.a,{color:"primary",children:Object(m.jsxs)(u.a,{style:{justifyContent:"space-evenly"},children:[Object(m.jsx)(j.a,{variant:"h2",style:{width:"75%",fontWeight:"bolder",fontStyle:"italic"},children:"ADTAA"}),Object(m.jsx)(l.a,{color:"default",variant:"contained",component:d.b,to:"/",children:"Assistant"}),Object(m.jsx)(l.a,{color:"default",variant:"contained",component:d.b,to:"/setup",children:"Setup"}),f()?Object(m.jsx)(l.a,{color:"default",variant:"contained",onClick:p,children:"Logout"}):Object(m.jsx)(l.a,{color:"default",variant:"contained",component:d.b,to:"/login",children:"Login"})]})})})};g.defaultProps={};var v=g,y=n(5),S=n(33),C=n(265),w=n(262),_=n(263),k=n(264),T=n(78),I=n(50),P=n.n(I),N=n(76),q=n(40),A=n.n(q),E="/api/",L="".concat(E,"discipline/"),D="".concat(E,"instructor/"),W="".concat(E,"timeslot/"),R="".concat(E,"section/"),M="".concat(E,"course/"),F="".concat(E,"solution/"),z="".concat(E,"solution/constraintmap/"),B="".concat(E,"auth/token/"),J="".concat(E,"registrationrequest/create/"),G="".concat(E,"auth/changepassword/"),U="".concat(E,"changes/");function Q(e){if(401===e.status&&f()&&h(),e.status>=400&&e.status<600)throw new Error(e.status)}var Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},c="POST"===e.method||"PUT"===e.method,i=f();return c||i?(c&&(n["Content-Type"]="application/json"),i&&!t&&(n.Authorization="Token ".concat(i)),e.headers=n,e):e},H={authenticate:function(){var e=Object(N.a)(A.a.mark((function e(t,n){var c,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"POST",body:JSON.stringify({username:t,password:n})},e.next=3,fetch(B,Y(c,!0));case 3:return Q(i=e.sent),e.abrupt("return",i.json());case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),get:function(){var e=Object(N.a)(A.a.mark((function e(t){var n,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET"},e.next=3,fetch(t,Y(n));case 3:return Q(c=e.sent),e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),post:function(){var e=Object(N.a)(A.a.mark((function e(t,n){var c,i,r,a=arguments;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>2&&void 0!==a[2]&&a[2],i={method:"POST",body:JSON.stringify(n)},e.next=4,fetch(t,Y(i,c));case 4:return Q(r=e.sent),e.abrupt("return",r.json());case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),put:function(){var e=Object(N.a)(A.a.mark((function e(t,n){var c,i,r,a=arguments;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!(a.length>2&&void 0!==a[2])||a[2],i={method:"PUT",body:JSON.stringify(n)},c&&(t+=n.id.toString()),e.next=5,fetch(t,Y(i));case 5:return Q(r=e.sent),e.abrupt("return",t===G?r:r.json());case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),delete:function(){var e=Object(N.a)(A.a.mark((function e(t,n){var c,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"DELETE"},e.next=3,fetch(t+n.toString(),Y(c));case 3:return Q(i=e.sent),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},K=H,V=n(101),X=n.n(V),Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"h3";return Object(m.jsx)(j.a,{variant:t,style:{color:X()().palette.primary,fontWeight:"bold",marginBottom:"0.5em"},children:e})},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"current";return Object(m.jsxs)(j.a,{children:["Your account is not authorized to access the ",e," page. Only administrators can make changes to this information. If you believe you should have access to this page, please contact an administrator or supervisor to correct this."]})},ee=n(218),te=function(e,t,n,c){var i=Object(m.jsx)("br",{});return 0===t.size||null==t.size||0===n.size||null==n.size?i=Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j.a,{children:"Welcome to ADTAA! To get started, classes and instructors must be defined to generate schedules from. Please use the button below to go to the setup page."}),Object(m.jsx)("br",{}),Object(m.jsx)(l.a,{color:"primary",variant:"contained",component:d.b,to:"/setup",children:"Go to Setup"})]}):0===e.length&&(i=Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j.a,{children:"No solutions have been generated."}),Object(m.jsx)("br",{}),Object(m.jsx)(l.a,{variant:"contained",color:"primary",onClick:c,children:"Run Scheduler"})]})),i},ne=function(e){var t,n=[],c=1,i=Object(S.a)(e);try{for(i.s();!(t=i.n()).done;){var r=t.value;n.push(Object(m.jsxs)(w.a,{variant:"outlined",style:{width:"20%",margin:"1em"},children:[Object(m.jsxs)(_.a,{children:[Object(m.jsxs)(j.a,{children:["Option ",c]}),Object(m.jsxs)(j.a,{children:["Covered Classes: ",r.assignment_count,"/",r.assignments.length]}),Object(m.jsx)(j.a,{children:"Issues: None"})]}),Object(m.jsx)(k.a,{children:Object(m.jsx)(T.a,{style:{marginLeft:"auto"},component:d.b,to:"/edit/".concat(r.id),children:Object(m.jsx)(P.a,{})})})]},r.id)),c+=1}}catch(a){i.e(a)}finally{i.f()}return n},ce=function(){var e=Object(c.useState)(!1),t=Object(y.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!1),a=Object(y.a)(r,2),s=a[0],o=a[1],u=Object(c.useState)(!1),d=Object(y.a)(u,2),b=d[0],O=d[1],f=Object(c.useState)(!1),h=Object(y.a)(f,2),x=h[0],p=h[1],g=Object(c.useState)([]),v=Object(y.a)(g,2),S=v[0],T=v[1],I=Object(c.useState)({}),P=Object(y.a)(I,2),N=P[0],q=P[1],A=Object(c.useState)({}),E=Object(y.a)(A,2),L=E[0],W=E[1],M=function(){o(!1),p(!0),T([]),K.post(F).then((function(e){e&&T(e)}),(function(e){return console.error(e)})).finally((function(){o(!0),p(!1),O(!1)}))},z=function(e){"403"===e.message?i(!0):console.error(e)};return Object(c.useEffect)((function(){Promise.all([K.get(F),K.get(D),K.get(R),K.get(U)]).then((function(e){T(e[0]),q(new Map(e[1].map((function(e){return[e.id,e]})))),W(new Map(e[2].map((function(e){return[e.id,e]})))),O(e[3].data_changed),o(!0)})).catch(z)}),[]),n?Object(m.jsxs)("div",{children:[Z("Generated Schedules"),$("scheduler")]}):Object(m.jsxs)("div",{"data-testid":"AssistantPage",children:[Z("Generated Schedules"),x&&Object(m.jsx)(j.a,{children:"Please wait for the scheduler to finish, this step can take several minutes."}),s?te(S,N,L,M):Object(m.jsx)(ee.a,{}),s&&b&&S.length>0&&Object(m.jsxs)(w.a,{variant:"outlined",style:{margin:"auto auto 1rem auto",width:"60%"},children:[Object(m.jsx)(_.a,{children:Object(m.jsx)(j.a,{children:"These solutions were generated with data that has been modified, and could be invalid. Click this button to re-run the scheduler!"})}),Object(m.jsx)(k.a,{children:Object(m.jsx)(l.a,{variant:"contained",color:"primary",style:{margin:"auto"},onClick:M,children:"Run Scheduler"})})]}),Object(m.jsx)(C.a,{container:!0,alignItems:"center",justifyContent:"center",children:ne(S.slice(0,12))})]})};ce.defaultProps={};var ie=ce,re=n(273),ae=n(222),se=n(271),oe=n(272),ue=n(103),le=n.n(ue),je=n(73),de=n.n(je),be=n(221),Oe=n(223),fe=n(16),he=n(278),xe=n(268),me=n(269),pe=n(270),ge=n(125),ve=n(45),ye=n(280),Se=function(e){var t=e.row,n=e.setRow,i=e.disciplines,r=Object(c.useState)(""),a=Object(y.a)(r,2),s=a[0],o=a[1];return Object(m.jsxs)(C.a,{container:!0,alignItems:"center",justifyContent:"center",spacing:2,children:[Object(m.jsx)(C.a,{item:!0,children:Object(m.jsx)(ge.a,{id:"lastNameInput",label:"Last Name",required:!0,inputProps:{maxLength:30},type:"text",value:t.lastName||"",onChange:function(e){return n(Object(fe.a)(Object(fe.a)({},t),{},{lastName:e.target.value}))}})}),Object(m.jsx)(C.a,{item:!0,children:Object(m.jsx)(ge.a,{id:"maxSectionsInput",label:"Max Sections",required:!0,inputProps:{inputMode:"numeric",pattern:"[0-9]*",maxLength:2},type:"text",value:t.maxSections||"",onChange:function(e){return n(Object(fe.a)(Object(fe.a)({},t),{},{maxSections:e.target.value.replace(/[^0-9]/g,"")}))}})}),Object(m.jsx)(C.a,{item:!0,children:Object(m.jsx)(ge.a,{id:"qualificationsSelect",select:!0,label:"Qualifications",style:{minWidth:150},value:s,onChange:function(e){return o(e.target.value)},children:i.filter((function(e){return t.qualifications.findIndex((function(t){return t.id===e.id}))<0})).map((function(e){return Object(m.jsx)(ve.a,{value:e,children:e.name},e.name)}))})}),Object(m.jsx)(C.a,{item:!0,children:Object(m.jsx)(l.a,{variant:"contained",color:"default",onClick:function(){return n(Object(fe.a)(Object(fe.a)({},t),{},{qualifications:t.qualifications.concat([s])}))},children:"Add"})}),Object(m.jsx)(C.a,{item:!0,xs:12,children:t.qualifications.map((function(e){return Object(m.jsx)(ye.a,{label:e.name,onDelete:function(){return n(Object(fe.a)(Object(fe.a)({},t),{},{qualifications:t.qualifications.filter((function(t){return t.id!==e.id}))}))}})}))})]})},Ce=function(e){var t=e.create,n=e.open,i=e.setOpen,r=e.row,a=e.disciplines,s=e.setInstructors,o=Object(c.useState)({lastName:null,maxSections:null,qualifications:[]}),u=Object(y.a)(o,2),j=u[0],d=u[1],b=t?"Create Instructor":"Edit Instructor",O=function(){return i(!1)};return Object(c.useEffect)((function(){n&&!t?d(r):n&&t&&d({lastName:null,maxSections:null,qualifications:[]})}),[n]),Object(m.jsx)("div",{"data-testid":"InstructorDialog",children:Object(m.jsxs)(he.a,{open:n,onClose:O,"aria-labelledby":"instructor-dialog",fullWidth:!0,maxWidth:"sm",children:[Object(m.jsx)(xe.a,{id:"instructor-dialog",children:b}),Object(m.jsx)(me.a,{children:Object(m.jsx)(Se,{row:j,setRow:d,disciplines:a})}),Object(m.jsxs)(pe.a,{children:[Object(m.jsx)(l.a,{variant:"contained",onClick:O,color:"default",children:"Cancel"}),Object(m.jsx)(l.a,{variant:"contained",disabled:!j.lastName||!j.maxSections,onClick:function(){var e=Object(fe.a)(Object(fe.a)({},j),{},{qualifications:j.qualifications.map((function(e){return e.id}))});t?K.post(D,e).then((function(e){s((function(t){return t.concat([Object(fe.a)(Object(fe.a)({},e),{},{qualifications:j.qualifications})])})),i(!1)}),(function(e){return console.log(e)})):K.put(D,e).then((function(){s((function(e){var t=e.findIndex((function(e){return e.id===j.id})),n=e.slice(0);return n[t]=j,n})),i(!1)}),(function(e){return console.log(e)}))},color:"primary",children:"Submit"})]})]})})};Ce.defaultProps={};var we=Ce,_e=function(e,t,n){var c,i=[],r=Object(S.a)(e);try{var a=function(){var r=c.value;i.push(Object(m.jsxs)(ae.a,{children:[Object(m.jsx)(se.a,{primary:r.lastName,secondary:"Assignment Limit: "+r.maxSections.toString()}),Object(m.jsxs)(oe.a,{children:[Object(m.jsx)(T.a,{edge:"end","aria-label":"edit-instructor",onClick:function(){return n(r)},children:Object(m.jsx)(P.a,{})}),Object(m.jsx)(T.a,{edge:"end","aria-label":"delete-instructor",onClick:function(){K.delete(D,r.id).then((function(){t(e.filter((function(e){return e.id!==r.id})))}),(function(e){return console.error(e)}))},children:Object(m.jsx)(de.a,{})})]})]},r.id)),i.push(Object(m.jsx)(re.a,{},"divider-".concat(r.id)))};for(r.s();!(c=r.n()).done;)a()}catch(s){r.e(s)}finally{r.f()}return i},ke=function(e){var t=Object(c.useState)({}),n=Object(y.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(!1),s=Object(y.a)(a,2),o=s[0],u=s[1],l=Object(c.useState)(!1),j=Object(y.a)(l,2),d=j[0],b=j[1];return Object(m.jsxs)("div",{"data-testid":"InstructorList",children:[Object(m.jsxs)(be.a,{style:{border:"1px #0000001f solid"},children:[_e(e.instructors,e.setInstructors,(function(e){r(e),b(!0)})),Object(m.jsxs)(ae.a,{button:!0,onClick:function(){return u(!0)},children:[Object(m.jsx)(Oe.a,{children:Object(m.jsx)(le.a,{})}),Object(m.jsx)(se.a,{primary:"Add New"})]},"addRow")]}),Object(m.jsx)(we,{create:!0,open:o,setOpen:u,disciplines:e.disciplines,setInstructors:e.setInstructors}),Object(m.jsx)(we,{open:d,setOpen:b,row:i,disciplines:e.disciplines,setInstructors:e.setInstructors})]})};ke.defaultProps={};var Te=ke,Ie={"Mon.":"Monday","Tue.":"Tuesday","Wed.":"Wednesday","Thu.":"Thursday","Fri.":"Friday","Sat.":"Saturday","Sun.":"Sunday"},Pe=n(155),Ne=n.n(Pe),qe=n(154),Ae=n.n(qe),Ee=n(156),Le=n.n(Ee),De=n(224),We=n(225),Re=n(274),Me=n(276),Fe=function(e){var t=e.row,n=e.classes,i=e.setClasses,r=Object(c.useState)(-1),a=Object(y.a)(r,2),s=a[0],o=a[1],u=Object(c.useState)(-1),j=Object(y.a)(u,2),d=j[0],b=j[1],O=Object(c.useState)({meetingDays:"Sun.",begin_time:"",end_time:""}),f=Object(y.a)(O,2),h=f[0],x=f[1],p=function(){return!Object.keys(Ie).includes(h.meetingDays)||h.begin_time.length<5||h.end_time.length<5},g=function(e){var t={id:e.id,course:e.course.id,meetingTimes:e.meetingTimes};K.put(R,t).then((function(t){i((function(n){var c=n.findIndex((function(t){return t.id===e.id})),i=n.slice(0);return i[c]=t,i}))}),(function(e){return console.error(e)}))},v=function(e){if(e.id!==s)return[];var t,n=[],c=Object(S.a)(e.meetingTimes);try{for(c.s();!(t=c.n()).done;){var i=t.value,r="".concat(i.meetingDays," ").concat(i.begin_time,"-").concat(i.end_time);n.push(Object(m.jsx)(De.a,{value:i.id,label:r,control:Object(m.jsx)(Me.a,{})},i.id))}}catch(a){c.e(a)}finally{c.f()}return n};return Object(m.jsxs)(C.a,{container:!0,alignItems:"center",justifyContent:"center",spacing:2,children:[Object(m.jsx)(C.a,{item:!0,xs:2,children:Object(m.jsx)(ge.a,{select:!0,label:"Day",style:{minWidth:60},value:h.meetingDays,onChange:function(e){return x(Object(fe.a)(Object(fe.a)({},h),{},{meetingDays:e.target.value}))},children:Object.keys(Ie).map((function(e){return Object(m.jsx)(ve.a,{value:e,children:e},e)}))})}),Object(m.jsx)(C.a,{item:!0,xs:4,children:Object(m.jsx)(ge.a,{label:"Begin Time",type:"time",value:h.begin_time,onChange:function(e){return x(Object(fe.a)(Object(fe.a)({},h),{},{begin_time:e.target.value}))},InputLabelProps:{shrink:!0},inputProps:{step:60},fullWidth:!0})}),Object(m.jsx)(C.a,{item:!0,xs:4,children:Object(m.jsx)(ge.a,{label:"End Time",type:"time",value:h.end_time,onChange:function(e){return x(Object(fe.a)(Object(fe.a)({},h),{},{end_time:e.target.value}))},InputLabelProps:{shrink:!0},inputProps:{step:60},fullWidth:!0})}),n.filter((function(e){return e.course.id===t.id})).length>0&&Object(m.jsxs)(C.a,{item:!0,children:[Object(m.jsx)(l.a,{variant:"contained",color:"default",disabled:d<0||p(),onClick:function(){return e=Object(fe.a)(Object(fe.a)({},h),{},{id:d}),void K.put(W,e).then((function(t){i((function(n){var c,i=n.findIndex((function(e){return e.id===s})),r=n.slice(0),a=r[i].meetingTimes.findIndex((function(t){return t.id===e.id}));return r[i].meetingTimes[a]=t,r[i].meetingTimeString="".concat((c=t).meetingDays," ").concat(c.begin_time.slice(0,-3),"-").concat(c.end_time.slice(0,-3)),r}))}),(function(e){return console.error(e)}));var e},children:"Change Selected Time"}),Object(m.jsx)(l.a,{variant:"contained",color:"default",disabled:s<0||p(),onClick:function(){return function(e,t){var n=Object.assign({},t);n.meetingTimes.push(e),g(n)}(h,n.find((function(e){return e.id===s})))},children:"Add to Selected Section"})]}),Object(m.jsx)(C.a,{item:!0,children:Object(m.jsx)(l.a,{variant:"contained",color:"primary",disabled:p(),onClick:function(){return e=h,void K.post(R,{course:t.id,meetingTimes:[e]}).then((function(e){console.log(e),console.log(n),i((function(t){return t.concat([e])}))}),(function(e){return console.error(e)}));var e},children:"Add to New Section"})}),Object(m.jsx)(C.a,{item:!0,xs:12,children:function(){var e=[];return n&&(e=n.filter((function(e){return e.course.id===t.id})).map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsxs)(ae.a,{button:!0,onClick:function(){return t=e.id,o(t);var t},children:[(t=e.id,s===t?Object(m.jsx)(Oe.a,{children:Object(m.jsx)(Ae.a,{})}):Object(m.jsx)(Oe.a,{children:Object(m.jsx)(Ne.a,{})})),Object(m.jsx)(se.a,{primary:"Section ".concat(e.id),secondary:"".concat(e.meetingTimes.length," time slot(s)")}),Object(m.jsxs)(oe.a,{children:[Object(m.jsx)(T.a,{onClick:function(){return function(e,t){var n=Object.assign({},t);n.meetingTimes=n.meetingTimes.filter((function(t){return t.id!==e})),g(n)}(d,e)},disabled:d<0,children:Object(m.jsx)(Le.a,{})}),Object(m.jsx)(T.a,{onClick:function(){return t=e.id,void K.delete(R,t).then((function(e){t===s&&o(-1),i(n.filter((function(e){return e.id!==t})))}),(function(e){return console.error(e)}));var t},children:Object(m.jsx)(de.a,{})})]})]}),Object(m.jsx)(We.a,{children:Object(m.jsx)(Re.a,{value:d,onChange:function(e){return b(parseInt(e.target.value))},children:v(e)})})]},e.id);var t}))),e}()})]})},ze=function(e){var t=e.row,n=e.setRow,i=e.classes,r=e.setClasses,a=e.disciplines,s=e.create,o=Object(c.useState)(""),u=Object(y.a)(o,2),d=u[0],b=u[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j.a,{variant:"h6",style:{textAlign:"center"},children:"Course"}),Object(m.jsxs)(C.a,{container:!0,alignItems:"center",justifyContent:"center",spacing:2,children:[Object(m.jsx)(C.a,{item:!0,children:Object(m.jsx)(ge.a,{label:"Course Title",required:!0,value:t.course_title||"",inputProps:{maxLength:55},type:"text",onChange:function(e){return n(Object(fe.a)(Object(fe.a)({},t),{},{course_title:e.target.value}))}})}),Object(m.jsx)(C.a,{item:!0,children:Object(m.jsx)(ge.a,{label:"Course Number",required:!0,value:t.course_number||"",inputProps:{inputMode:"numeric",pattern:"[0-9]*",maxLength:6},type:"text",onChange:function(e){return n(Object(fe.a)(Object(fe.a)({},t),{},{course_number:e.target.value}))}})}),Object(m.jsx)(C.a,{item:!0,children:Object(m.jsx)(ge.a,{select:!0,label:"Subject Disciplines",style:{minWidth:160},value:d,onChange:function(e){return b(e.target.value)},children:a.filter((function(e){return t.subject_disciplines.findIndex((function(t){return t.id===e.id}))<0})).map((function(e){return Object(m.jsx)(ve.a,{value:e,children:e.name},e.name)}))})}),Object(m.jsx)(C.a,{item:!0,children:Object(m.jsx)(l.a,{variant:"contained",color:"default",onClick:function(){return n(Object(fe.a)(Object(fe.a)({},t),{},{subject_disciplines:t.subject_disciplines.concat([d])}))},children:"Add"})}),Object(m.jsx)(C.a,{item:!0,xs:12,children:t.subject_disciplines.map((function(e){return Object(m.jsx)(ye.a,{label:e.name,onDelete:function(){return n(Object(fe.a)(Object(fe.a)({},t),{},{subject_disciplines:t.subject_disciplines.filter((function(t){return t.id!==e.id}))}))}},e.id)}))})]}),!s&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j.a,{variant:"h6",style:{textAlign:"center",marginTop:"1rem"},children:"Sections"}),Object(m.jsx)(Fe,{row:t,classes:i,setClasses:r})]})]})},Be=function(e){var t=e.create,n=e.open,i=e.setOpen,r=e.row,a=e.setCourses,s=e.classes,o=e.setClasses,u=e.disciplines,j=e.setSelected,d=e.setEditOpen,b=Object(c.useState)({course_title:"",course_number:null,subject_disciplines:[]}),O=Object(y.a)(b,2),f=O[0],h=O[1],x=t?"Create Class":"Edit Class",p=function(){return i(!1)};return Object(c.useEffect)((function(){n&&!t?h(r):n&&t&&h({course_title:"",course_number:null,subject_disciplines:[]})}),[n]),Object(m.jsx)("div",{"data-testid":"ClassDialog",children:Object(m.jsxs)(he.a,{open:n,onClose:p,"aria-labelledby":"instructor-dialog",fullWidth:!0,maxWidth:"sm",children:[Object(m.jsx)(xe.a,{id:"instructor-dialog",children:x}),Object(m.jsx)(me.a,{children:Object(m.jsx)(ze,{row:f,setRow:h,classes:s,setClasses:o,disciplines:u,create:t})}),Object(m.jsxs)(pe.a,{children:[Object(m.jsx)(l.a,{variant:"contained",onClick:p,color:"default",children:"Cancel"}),Object(m.jsx)(l.a,{variant:"contained",onClick:function(){var e=Object(fe.a)(Object(fe.a)({},f),{},{subject_disciplines:f.subject_disciplines.map((function(e){return e.id}))});t?K.post(M,e).then((function(e){var t=Object(fe.a)(Object(fe.a)({},e),{},{subject_disciplines:f.subject_disciplines});a((function(e){return e.concat([t])})),j(t),i(!1),d(!0)}),(function(e){return console.error(e)})):K.put(M,e).then((function(e){a((function(e){var t=e.findIndex((function(e){return e.id===f.id})),n=e.slice(0);return n[t]=f,n})),i(!1)}),(function(e){return console.error(e)}))},color:"primary",disabled:!f.course_title||!f.course_number,children:"Submit"})]})]})})};Be.defaultProps={};var Je=Be,Ge=function(e,t,n,c){var i,r=[],a=Object(S.a)(t);try{var s=function(){var a=i.value,s=e.filter((function(e){return e.course.id===a.id})),o=s.map((function(e){return e.meetingTimeString}));r.push(Object(m.jsxs)(ae.a,{children:[Object(m.jsx)(se.a,{primary:"CPSC "+a.course_number+" - "+a.course_title,secondary:s.length.toString()+" Section(s) - "+o.join(" | ")}),Object(m.jsxs)(oe.a,{children:[Object(m.jsx)(T.a,{edge:"end",onClick:function(){return c(a)},children:Object(m.jsx)(P.a,{})}),Object(m.jsx)(T.a,{edge:"end",onClick:function(){K.delete(M,a.id).then((function(e){n(t.filter((function(e){return e.id!==a.id})))}),(function(e){return console.error(e)}))},children:Object(m.jsx)(de.a,{})})]})]},a.id)),r.push(Object(m.jsx)(re.a,{},"divider-".concat(a.id)))};for(a.s();!(i=a.n()).done;)s()}catch(o){a.e(o)}finally{a.f()}return r},Ue=function(e){var t=Object(c.useState)({}),n=Object(y.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(!1),s=Object(y.a)(a,2),o=s[0],u=s[1],l=Object(c.useState)(!1),j=Object(y.a)(l,2),d=j[0],b=j[1];return Object(m.jsxs)("div",{"data-testid":"ClassList",children:[Object(m.jsxs)(be.a,{style:{border:"1px #0000001f solid"},children:[Ge(e.classes,e.courses,e.setCourses,(function(e){r(e),b(!0)})),Object(m.jsxs)(ae.a,{button:!0,onClick:function(){return u(!0)},children:[Object(m.jsx)(Oe.a,{children:Object(m.jsx)(le.a,{})}),Object(m.jsx)(se.a,{primary:"Add New"})]},"addRow")]}),Object(m.jsx)(Je,{create:!0,open:o,setOpen:u,setCourses:e.setCourses,disciplines:e.disciplines,setClasses:e.setClasses,setSelected:r,setEditOpen:b}),Object(m.jsx)(Je,{open:d,setOpen:b,row:i,setCourses:e.setCourses,disciplines:e.disciplines,classes:e.classes,setClasses:e.setClasses})]})};Ue.defaultProps={};var Qe=Ue,Ye=function(){var e=Object(c.useState)(!1),t=Object(y.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!1),a=Object(y.a)(r,2),s=a[0],o=a[1],u=Object(c.useState)([]),l=Object(y.a)(u,2),j=l[0],d=l[1],b=Object(c.useState)([]),O=Object(y.a)(b,2),f=O[0],h=O[1],x=Object(c.useState)([]),p=Object(y.a)(x,2),g=p[0],v=p[1],S=Object(c.useState)([]),w=Object(y.a)(S,2),_=w[0],k=w[1],T=function(e){"403"===e.message?i(!0):console.error(e)};return Object(c.useEffect)((function(){Promise.all([K.get(L),K.get(D),K.get(R),K.get(M)]).then((function(e){d(e[0]),h(e[1]),v(e[2]),k(e[3]),o(!0)}),T)}),[]),n?Object(m.jsxs)("div",{children:[Z("Setup Page"),$("setup")]}):Object(m.jsx)("div",{"data-testid":"SetupPage",children:Object(m.jsxs)(C.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(m.jsxs)(C.a,{container:!0,item:!0,xs:5,direction:"column",children:[Z("Teaching Staff","h4"),Object(m.jsx)("div",{style:{padding:"1rem 5rem"},children:s?Object(m.jsx)(Te,{instructors:f,setInstructors:h,disciplines:j}):Object(m.jsx)(ee.a,{})})]}),Object(m.jsx)(re.a,{orientation:"vertical",flexItem:!0}),Object(m.jsxs)(C.a,{container:!0,item:!0,xs:5,direction:"column",children:[Z("Class Roster","h4"),Object(m.jsx)("div",{style:{padding:"1rem 5rem"},children:s?Object(m.jsx)(Qe,{classes:g,setClasses:v,courses:_,setCourses:k,disciplines:j}):Object(m.jsx)(ee.a,{})})]})]})})};Ye.defaultProps={};var He=Ye,Ke=function(e,t){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(C.a,{container:!0,alignItems:"center",justifyContent:"center",spacing:2,children:[Object(m.jsx)(C.a,{item:!0,xs:12,children:Object(m.jsx)(ge.a,{required:!0,label:"Email",type:"text",onChange:function(t){return e(t.target.value)}})}),Object(m.jsx)(C.a,{item:!0,xs:12,children:Object(m.jsx)(ge.a,{required:!0,label:"Password",type:"password",onChange:function(e){return t(e.target.value)}})})]})})},Ve=function(e,t,n,c){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(C.a,{container:!0,alignItems:"center",justifyContent:"center",spacing:2,children:[Object(m.jsx)(C.a,{item:!0,xs:12,children:Object(m.jsx)(ge.a,{required:!0,label:"Email",type:"text",onChange:function(e){return t(e.target.value)}})}),Object(m.jsx)(C.a,{item:!0,xs:12,children:Object(m.jsx)(ge.a,{select:!0,label:"Requested Access Level",style:{minWidth:200},onChange:function(e){return c(e.target.value)},children:e.map((function(e){return Object(m.jsx)(ve.a,{value:e,children:e},e)}))})}),Object(m.jsx)(C.a,{item:!0,xs:12,children:Object(m.jsx)(ge.a,{required:!0,label:"Requested Password",type:"password",onChange:function(e){return n(e.target.value)}})})]})})},Xe=function(e){X()();var t=Object(c.useState)(!0),n=Object(y.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(),s=Object(y.a)(a,2),o=s[0],u=s[1],j=Object(c.useState)(),d=Object(y.a)(j,2),b=d[0],O=d[1],f=Object(c.useState)(),h=Object(y.a)(f,2),p=h[0],g=h[1];return Object(m.jsxs)("div",{"data-testid":"LoginPage",children:[Z(i?"Login":"Submit Registration Request"),i?Ke(u,O):Ve(["root","admin","assistant"],u,O,g),Object(m.jsx)(l.a,{color:"primary",variant:"contained",style:{marginTop:"2em",marginRight:"1em"},onClick:function(){i?K.authenticate(o,b).then((function(e){x(e),window.location.reload(!1)}),(function(e){"404"===e.message?K.put(G,{username:"root",password:"root",new_password:b},!1).then((function(){K.authenticate("root",b).then((function(e){x(e),window.location.reload(!1)}),(function(e){return console.error(e)}))}),(function(e){return console.error(e)})):console.error(e)})):K.post(J,{contact_email:o,requested_password:b,access_level:p}).then((function(e){console.log(e)}),(function(e){return console.error(e)}))},children:"Submit"}),Object(m.jsx)(l.a,{color:"default",variant:"contained",style:{marginTop:"2em"},onClick:function(){return r(!i)},children:i?"Register":"Return to Login"})]})};Xe.defaultProps={};var Ze=Xe,$e=n(150),et=n(56),tt=n(261),nt=n(275),ct=Object($e.a)(Object(et.b)({palette:{primary:{main:"#800000"}}})),it=(n(213),n(157)),rt=function(e){var t=e.open,n=e.setOpen,i=e.row,r=e.schedule,a=e.setSchedule,s=e.instructors,o=(e.sectionOverlapMap,e.disciplineMap,Object(c.useState)()),u=Object(y.a)(o,2),d=u[0],b=u[1],O=function(){return n(!1)};return Object(c.useEffect)((function(){null!=i&&b(i.instructor)}),[i]),Object(m.jsx)("div",{"data-testid":"EditAssignmentDialog",children:Object(m.jsxs)(he.a,{open:t,onClose:O,fullWidth:!0,maxWidth:"sm",children:[Object(m.jsx)(xe.a,{children:"Edit Assignment"}),Object(m.jsxs)(me.a,{children:[null!=i&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(j.a,{style:{textAlign:"center",fontWeight:"bold"},children:[i.course_number," ",i.course_title]}),Object(m.jsx)(j.a,{style:{textAlign:"center"},children:i.meetingTimeString})]}),null!=s.size&&Object(m.jsx)(ge.a,{select:!0,label:"Instructor",style:{minWidth:160},value:d,onChange:function(e){b(e.target.value)},children:Array.from(s.values()).map((function(e){return Object(m.jsx)(ve.a,{value:e.id,children:e.lastName},e.id)}))})]}),Object(m.jsxs)(pe.a,{children:[Object(m.jsx)(l.a,{variant:"contained",onClick:O,children:"Cancel"}),Object(m.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){var e=r.assignments,t=e.findIndex((function(e){return e.id===i.id}));e[t].instructor=d;var n=r;r.assignments=e,a(n),O()},disabled:!d,children:"Submit"})]})]})})};rt.defaultProps={};var at=rt,st=function(){var e=Object(c.useState)(),t=Object(y.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(),a=Object(y.a)(r,2),o=a[0],u=a[1],j=Object(c.useState)({}),b=Object(y.a)(j,2),O=b[0],f=b[1],h=Object(c.useState)({}),x=Object(y.a)(h,2),p=x[0],g=x[1],v=Object(c.useState)({}),C=Object(y.a)(v,2),w=C[0],_=C[1],k=Object(c.useState)({}),I=Object(y.a)(k,2),N=I[0],q=I[1],A=Object(c.useState)(!1),E=Object(y.a)(A,2),L=E[0],W=E[1],M=Object(c.useState)(),B=Object(y.a)(M,2),J=B[0],G=B[1],U=Object(s.h)().solution_id,Q=[{field:"id",headerName:"ID",hide:!0},{field:"course_title",headerName:"Course",flex:1},{field:"course_number",hide:!0},{field:"meetingTimeString",headerName:"Meeting Times",flex:3},{field:"subject_disciplines",headerName:"Subject Disciplines",hide:!0},{field:"instructor_lastName",headerName:"Assigned Instructor",flex:1},{field:"Edit",renderCell:function(e){return Object(m.jsx)(T.a,{onClick:function(){G(e.row),W(!0)},children:Object(m.jsx)(P.a,{})})},flex:.5}],Y=function(){return null!=n&&null!=O.size&&null!=p.size&&0!==Object.keys(w).length&&0!==Object.keys(N).length};return Object(c.useEffect)((function(){K.get(F+U.toString()).then((function(e){i(e),u(e)}),(function(e){console.error(e)})),K.get(D).then((function(e){f(new Map(e.map((function(e){return[e.id,e]}))))}),(function(e){console.error(e)})),K.get(R).then((function(e){g(new Map(e.map((function(e){return[e.id,e]}))))}),(function(e){console.error(e)})),K.get(z).then((function(e){_(e.section_overlap_map),q(e.discipline_overlap_map)}),(function(e){return console.error(e)}))}),[U]),Object(m.jsxs)("div",{"data-testid":"EditSolution",children:[Object(m.jsxs)("div",{style:{marginBottom:"0.5rem",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-end",width:"80vw",marginLeft:"auto",marginRight:"auto"},children:[Object(m.jsx)(l.a,{variant:"contained",style:{height:"36px"},component:d.b,to:"/",children:"Cancel"}),Z("Edit Solution"),Object(m.jsx)(l.a,{variant:"contained",style:{height:"36px"},color:"primary",children:"Submit"})]}),Object(m.jsx)("div",{style:{height:"80vh",width:"80vw",margin:"auto"},children:Y()?Object(m.jsx)(it.a,{rows:function(e){var t=[];if(0!==p.size&&null!=p.size){var n,c=Object(S.a)(e);try{for(c.s();!(n=c.n()).done;){var i=n.value,r=p.get(i.section),a="Unassigned";null!=i.instructor&&(a=O.get(i.instructor).lastName),r&&t.push({id:i.id,course_title:r.course.course_title,course_number:r.course.course_number,meetingTimeString:r.meetingTimeString,instructor:i.instructor,instructor_lastName:a,subject_disciplines:r.course.subject_disciplines})}}catch(s){c.e(s)}finally{c.f()}}return t}(o.assignments),columns:Q,autoPageSize:!0}):Object(m.jsx)("p",{children:"Loading"})}),Y()&&Object(m.jsx)(at,{open:L,setOpen:W,row:J,schedule:o,setSchedule:u,instructors:O,sectionOverlapMap:w,disciplineMap:N})]})};st.defaultProps={};var ot=st;var ut,lt=(ut=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)(s.d,{children:[Object(m.jsx)(s.b,{path:"/",element:f()?Object(m.jsx)(ie,{}):Object(m.jsx)(s.a,{to:"/login"})}),Object(m.jsx)(s.b,{path:"/edit/:solution_id",element:f()?Object(m.jsx)(ot,{}):Object(m.jsx)(s.a,{to:"/login"})}),Object(m.jsx)(s.b,{path:"/setup",element:f()?Object(m.jsx)(He,{}):Object(m.jsx)(s.a,{to:"/login"})}),Object(m.jsx)(s.b,{path:"/login",element:f()?Object(m.jsx)(s.a,{to:"/"}):Object(m.jsx)(Ze,{})})]})})]})},function(e){return Object(m.jsxs)(tt.a,{theme:ct,children:[Object(m.jsx)(nt.a,{}),Object(m.jsx)(ut,Object(fe.a)({},e))]})}),jt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,281)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(d.a,{children:Object(m.jsx)(lt,{})})}),document.getElementById("root")),jt()}},[[216,1,2]]]);
//# sourceMappingURL=main.1e621b08.chunk.js.map