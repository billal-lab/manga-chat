(this["webpackJsonpmanga-chat"]=this["webpackJsonpmanga-chat"]||[]).push([[0],{27:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(8),s=c.n(a),l=c(20),n=c.n(l),d=c(10),i=(c(27),c(15)),j=(c(28),c(29),c(30),i.a.initializeApp({apiKey:"AIzaSyCw3MmaxfLNdRFLQZIGh0jIJxEiPPEBiVk",authDomain:"react-b63c7.firebaseapp.com",projectId:"react-b63c7",storageBucket:"react-b63c7.appspot.com",messagingSenderId:"829980992642",appId:"1:829980992642:web:1987fd725edf676e6c409b",measurementId:"G-BD7EET1PET"}).firestore()),r=new i.a.auth.GoogleAuthProvider,o=j,h=c(2);var b=function(e){var t=Object(a.useState)(""),c=Object(d.a)(t,2),s=c[0],l=c[1],n=Object(a.useState)([]),i=Object(d.a)(n,2),j=i[0],r=i[1];Object(a.useEffect)((function(){o.collection("rooms").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]);var b=Object(a.useRef)(null),u=Object(a.useRef)(null);return Object(h.jsx)("div",{className:"Sidebar",ref:b,children:Object(h.jsxs)("div",{className:"swip",children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsxs)("div",{className:"add-button",children:[Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",onClick:function(e){""!==s&&o.collection("rooms").add({name:s})},width:"30",height:"30",fill:"wite",viewBox:"0 0 16 16",children:[Object(h.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(h.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})]}),Object(h.jsx)("div",{className:"add-room",children:Object(h.jsx)("input",{type:"text",value:s,placeholder:"Add new room",onChange:function(e){return l(e.target.value)}})})]}),Object(h.jsx)("div",{onClick:function(){b.current.classList.toggle("sidebarToggle"),u.current.classList.toggle("rotate")},className:"toggle-button",children:Object(h.jsxs)("svg",{ref:u,xmlns:"http://www.w3.org/2000/svg",fill:"white",viewBox:"0 0 16 16",children:[Object(h.jsx)("path",{fillRule:"evenodd",d:"M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"}),Object(h.jsx)("path",{fillRule:"evenodd",d:"M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"})]})})]}),Object(h.jsx)("div",{className:"body",children:j.map((function(t){return Object(h.jsxs)("div",{onClick:function(c){return a=t.id,s=t.data.name,void e.select(a,s);var a,s},className:"row",children:[Object(h.jsx)("div",{className:"logo-container",children:Object(h.jsx)("img",{className:"logo",alt:"avatar",src:"https://directemployers.org/wp-content/uploads/2018/08/avatar-JohnDoe.jpg"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:t.data.name}),Object(h.jsx)("p",{children:"John Doe : Salut les gens, je suis..."})]})]},t.id)}))})]})})},u=Object(h.jsxs)("div",{className:"placeholder",children:[Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1996 2000",width:"250",height:"250",children:[Object(h.jsx)("path",{d:"M1389.91 584.59h-12.7c0-4.2 4.2-8.5 4.2-8.5h4.2c4.3 4.3 4.3 8.5 4.3 8.5",fill:"#eff3c9"}),Object(h.jsx)("path",{d:"M928 4.2c25.4 0 59.31-4.2 84.71-4.2 89 0 131.42 33.89 114.42 101.68-21.13 80.48-135.58 194.86-283.9 296.54-29.7 12.7-59.31-25.4-50.81-42.39 0-4.2 4.2-4.2 4.2-4.2 131.42-89 228.83-186.36 250-258.45 16.9-67.79-38.11-97.48-135.62-89h17",fill:"#d37d41"}),Object(h.jsx)("path",{d:"M1436.52 101.68c50.81 25.4 72 67.79 55.11 131.37-50.81 190.66-423.76 483-830.62 656.67-76.32 33.9-152.53 59.28-220.34 80.49-38.11 4.2-42.41-46.59-25.4-72 4.2-8.5 8.5-8.5 12.7-12.7 63.61-16.9 131.42-42.39 203.43-72 385.66-165.27 737.41-444.81 784-622.78 16.9-63.59-8.5-105.88-63.61-127.08 25.4 12.6 59.31 25.3 84.71 38",fill:"#e8b521"}),Object(h.jsx)("path",{d:"M1966.3 745.65c4.2 21.2 4.2 46.59-4.2 76.29-50.81 186.36-368.66 461.81-754.31 660.87-42.41 16.9-67.81-12.7-59.31-42.39 4.2-12.7 12.7-21.2 21.2-25.4 389.86-203.36 716.21-483 767-673.57q12.75-50.84 0-89c12.7 33.79 25.4 67.69 29.6 93.18",fill:"#417ba4"}),Object(h.jsxs)("g",{fill:"#d37d41",children:[Object(h.jsx)("path",{d:"M1996 923.52v33.89c0 16.9 0 29.69-4.2 50.79-29.7 114.38-169.53 262.65-360.25 406.72-29.7 21.2-46.61-8.5-42.41-29.69 4.2-16.9 16.9-29.69 21.2-33.89 199.23-148.27 343.25-300.74 373-419.42 4.2-21.2 8.5-42.39 4.2-63.59l8.5 55.19M135.52 588.88c12.7-25.4 25.4-46.59 42.41-72 33.91 42.39 139.82 42.39 283.94-4.2 16.9-4.2 16.9 33.89 16.9 33.89"}),Object(h.jsx)("path",{d:"M478.77 546.49c0 21.2-4.2 50.79-186.43 76.29-50.81 8.5-122.92 4.2-156.82-33.89"})]}),Object(h.jsx)("path",{d:"M1254.29 33.89c55.11 21.2 76.31 59.29 59.31 118.58-42.41 161-360.25 410.92-707.71 559.19-275.44 114.48-487.37 135.67-542.38 55.09 8.5-25.4 16.9-50.79 25.4-76.29 50.81 72 245.84 55.09 495.87-50.79 317.85-139.77 610.29-368.53 648.4-512.6 12.7-55.09-30.7-100.38-77.31-117.38",fill:"#417ba4"}),Object(h.jsx)("path",{d:"M76.11 958.71c-4.2 12.7-8.5 29.69-16.9 25.4C16.8 963-.2 929.12 4.1 878.23c-4.2 29.69 4.2 55.09 16.9 72-.2-25.79 8.5-55.09 12.7-80.48 8.5 12.7 21.2 21.2 38.11 29.69 12.8 16.9 4.3 59.29 4.3 59.29",fill:"#e8b521"}),Object(h.jsx)("path",{d:"M1576.44 182.16l42.41 29.69c33.91 29.69 46.61 72 33.91 127.08-55.11 211.86-470.37 538-923.84 728.66C296.64 1254-17 1245.56 4.2 1063.39c-4.2 29.69 4.2 59.29 16.9 80.48-4.2-25.4-4.2-55.09-4.2-80.48 283.94 300.74 1559.53-478.71 1572.24-809.14 4.2-59.29-29.7-80.48-46.61-93.18l33.9 21.1",fill:"#d37d41"}),Object(h.jsxs)("g",{fill:"#417ba4",children:[Object(h.jsx)("path",{d:"M46.51 1300.54c-4.2-16.9-8.5-33.89-4.2-55.09-4.3 21.2 0 38.19 4.2 55.09"}),Object(h.jsx)("path",{d:"M1771.37 360.13c25.4 29.69 29.7 67.79 16.9 118.58-59.31 224.56-495.87 567.69-978.95 771-457.67 199.16-792.52 190.66-767-4.2-4.2 33.89 4.2 63.59 21.2 84.68-8.5-25.4-16.9-50.79-21.2-80.48 76.31 105.88 364.45 80.48 733.21-76.29 470.37-199.16 898.44-538 957.74-758.35 12.7-55.09 4.2-93.18-25.4-122.88 21.1 21.3 42.31 46.69 63.51 67.89"})]}),Object(h.jsx)("path",{d:"M1661.15 915.12c8.5 25.4 0 42.39-8.5 55.09-186.43 169.47-462 338.93-750.11 461.81-428.06 178-750.11 190.66-779.82 38.09-4.2-12.7-12.7-21.2-21.2-33.89 80.51 105.88 377.16 84.68 758.61-80.48 288.14-122.88 563.68-296.54 750.11-461.81 34-17 46.71 8.4 50.91 21.2",fill:"#e8b521"}),Object(h.jsx)("path",{d:"M589 1690.37c4.2 8.5 8.5 25.4-8.5 29.69-152.52 25.4-262.74 12.7-313.65-42.39-16.9-21.2-42.41-50.79-59.31-72 46.61 59.29 161 76.29 326.35 50.79 29.7 0 50.81 25.4 55.11 33.89",fill:"#417ba4"}),Object(h.jsx)("path",{d:"M1055.16 1707.26c4.2 4.2 4.2 21.2-21.2 33.89-292.44 114.38-521.28 139.77-614.49 76.29-21.2-16.9-50.81-38.09-72-55.09 89 76.29 330.55 50.79 644.2-72 46.51-12.7 63.51 16.9 63.51 16.9",fill:"#d37d41"}),Object(h.jsx)("path",{d:"M1983.3 1182c-50.81 182.16-411.06 466-805.22 635.48-258.54 110.18-466.17 139.77-567.89 101.68-25.4-12.7-59.31-25.4-80.51-38.09C868 2021.2 1893.38 1470.71 1994.1 1109.18",fill:"#417ba4"}),Object(h.jsx)("path",{d:"M1923.89 1381.13c-148.32 305-834.83 644-1106.07 601.58-29.7-4.2-67.81-12.7-93.21-21.2 97.51 29.69 279.74-4.2 500.08-97.48 356-152.47 682.3-406.72 733.21-571.89-8.5 25.39-21.3 63.49-34 89",fill:"#e8b521"}),Object(h.jsx)("path",{d:"M1703.56 1686.07c0 4.2-245.84 182.16-377.16 237.25-110.22 46.59-207.63 72-279.74 76.29H940.74c84.71 4.2 207.63-25.4 356-84.68 148.32-63.59 417.26-247.45 421.46-247.45 0 0-10.4 14.4-14.6 18.6",fill:"#417ba4"}),Object(h.jsx)("path",{d:"M135.52 588.88c-8.5-12.7-12.7-25-12.7-46.19 0-4.2 0-8.5 4.2-16.9 12.7-21.2 29.7-42.39 42.41-63.59-4.2 25.4-4.2 42.39 8.5 55.09-17 29.59-29.7 46.19-42.41 71.59",fill:"#d37d41"}),Object(h.jsx)("path",{d:"M63.51 766.75q-19.05-25.35-12.7-63.59c0-8.5 0-12.7 4.2-21.2a509.1 509.1 0 0 1 29.7-72c-8.5 29.69-6.9 61.39 5.8 82.58-12.8 29.79-19 50.09-27 74.19",fill:"#417ba4"}),Object(h.jsx)("path",{d:"M21.1 950.51c-12.7-21.2-21.2-42.39-17-72l8.5-55.09 8.5-33.89c-8.5 33.89-4.2 63.59 12.7 80.48-2.6 25.79-12.7 55.09-12.7 80.48",fill:"#e8b521"}),Object(h.jsx)("path",{d:"M21.1 1140.78c-12.7-12.7-16.9-26.6-16.9-47.78 0-25.4-4.2-63.59-4.2-89 0 25.4 8.5 42.39 16.9 59.29",fill:"#d37d41"}),Object(h.jsx)("g",{fill:"#417ba4",children:Object(h.jsx)("path",{d:"M678 300.74c-4.2-4.3-21.2-25.4-33.91-21.2-33.91 21.2-72.11 38.19-110.22 55.09-118.71 50.79-211.92 59.29-237.33 25.37l-.09.11c-8.39-8.51-3-35.25-1.81-36.2 4.3-17 15.2-31.59 27.9-48.49-16.64 12.58-84.41 67.13-84.74 104.21-1.76 10.43 0 33.61 3.43 44 29.7 42.29 148.62 33.89 296.94-29.69 50.81-17 97.41-42.39 139.82-67.79 8.51-8.51 4.21-21.21.01-25.41M63.51 1330.24c-8.5-8.5-12.7-16.9-16.9-29.69-8.5-25.4-16.9-63.59-25.4-89 4.2 12.7 12.7 25.4 21.2 38.09 8.3 29.79 12.6 55.19 21.1 80.58"})}),Object(h.jsx)("path",{d:"M123.82 533.8c0-8.5 7.5-24.1 11.7-32.49 4.2-12.7 50.81-84.68 67.81-101.68 0 0-21.2 29.69-33.91 63.59-12.7 21.2-29.7 42.39-42.41 63.59",fill:"#d37d41"})]}),Object(h.jsx)("h1",{children:"MANGA\xb0"})]});var O=function(e){var t=Object(a.useState)(""),c=Object(d.a)(t,2),s=c[0],l=c[1],n=Object(a.useState)([]),i=Object(d.a)(n,2),j=i[0],r=i[1],b=Object(a.useRef)(null);return Object(a.useEffect)((function(){b.current.scrollTop=b.current.scrollHeight,r([]),console.log(e.selected,j),null!=e.selected&&o.collection("messages").onSnapshot((function(t){for(var c=[],a=0;a<t.docs.length;a++)t.docs[a].data().roomId===e.selected.id&&c.push(t.docs[a]);c.sort((function(e,t){return Date.parse(t.data().createdAt)-Date.parse(e.data().createdAt)})),r(c)}))}),[e]),Object(h.jsxs)("div",{className:"Main",children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h1",{className:"room-name",children:null===e.selected?"":e.selected.name}),Object(h.jsx)("div",{className:"logo-container",children:Object(h.jsx)("img",{className:"logo",alt:"avatar",src:e.user.photoURL})})]}),Object(h.jsx)("div",{ref:b,className:"body",children:null===e.selected?u:j.map((function(t){return Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:e.user.email===t.data().email?"user":"others",children:Object(h.jsxs)("div",{className:"message",children:[Object(h.jsxs)("small",{className:"",children:[t.data().userId," : ",new Date(t.data().createdAt).toLocaleString()]}),Object(h.jsx)("div",{className:"content",children:Object(h.jsx)("p",{children:t.data().content})})]})})},t.id)}))}),null===e.selected?"":Object(h.jsxs)("div",{className:"footer",children:[Object(h.jsx)("input",{type:"text",placeholder:" message",onChange:function(e){l(e.target.value)},value:s}),Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",onClick:function(){if(""!==s){var t=(new Date).toString();o.collection("messages").add({content:s,roomId:e.selected.id,email:e.user.email,userId:e.user.displayName,createdAt:t}),l(""),b.current.scrollTop=b.current.scrollHeight}},width:"24",height:"24",fill:"white",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"})})]})]})},x=c(22);var p=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),c=t[0],s=t[1],l=Object(a.useState)(null),n=Object(d.a)(l,2),i=n[0],j=n[1];return null!=i?Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{select:function(e,t){s({id:e,name:t}),console.log("ok",c)}}),Object(h.jsx)(O,{user:i,selected:c})]}):Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"btn-container",children:[u,Object(h.jsx)("button",{onClick:function(){x.a.auth().signInWithPopup(r).then((function(e){var t=e.user;j(t)})).catch((function(e){}))},children:"SIGN IN WITH GOOGLE"})]})})};n.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6d34bbb8.chunk.js.map