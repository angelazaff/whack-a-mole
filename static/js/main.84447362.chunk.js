(this["webpackJsonpwhack-a-mole"]=this["webpackJsonpwhack-a-mole"]||[]).push([[0],[,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),r=s(4),i=s.n(r),a=s(2),o=(s(9),s(10),s(0));var l=function(){return Object(o.jsxs)("div",{className:"mountains-wrapper",children:[Object(o.jsxs)("svg",{width:"699",height:"296",viewBox:"0 0 699 296",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("path",{d:"M28.2525 27.1569L-23.7247 75.8792L-52.6272 417.848L717.401 432.284L716.818 119.033L676.298 136.511L539.368 0.614052L402.443 137.021L203.029 53.448L105.558 137.573L28.2525 27.1569Z",fill:"url(#paint0_linear)"}),Object(o.jsx)("defs",{children:Object(o.jsxs)("linearGradient",{id:"paint0_linear",x1:"331.598",y1:"1.00037",x2:"331.477",y2:"217.001",gradientUnits:"userSpaceOnUse",children:[Object(o.jsx)("stop",{stopColor:"#1C1244"}),Object(o.jsx)("stop",{offset:"1",stopColor:"#1A1781"})]})})]}),Object(o.jsxs)("svg",{width:"699",height:"296",viewBox:"0 0 699 296",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("path",{d:"M28.2525 27.1569L-23.7247 75.8792L-52.6272 417.848L717.401 432.284L716.818 119.033L676.298 136.511L539.368 0.614052L402.443 137.021L203.029 53.448L105.558 137.573L28.2525 27.1569Z",fill:"url(#paint0_linear)"}),Object(o.jsx)("defs",{children:Object(o.jsxs)("linearGradient",{id:"paint0_linear",x1:"331.598",y1:"1.00037",x2:"331.477",y2:"217.001",gradientUnits:"userSpaceOnUse",children:[Object(o.jsx)("stop",{stopColor:"#1C1244"}),Object(o.jsx)("stop",{offset:"1",stopColor:"#1A1781"})]})})]})]})};s(12),s(13);var j=function(e){var t=e.counterHit,s=e.counter,n=e.title;return Object(o.jsxs)("div",{className:"results "+(n?"":"results-end"),children:[n&&Object(o.jsx)("h1",{children:"Whack a mole"}),Object(o.jsxs)("p",{children:["score ",t," / ",s]})]})};var d=function(e){var t=e.setGameStatus,s=e.gameStatus,n=e.counter,r=e.counterHit,i=e.setCounter,a=e.setCounterHit;return Object(o.jsx)(c.a.Fragment,{children:Object(o.jsxs)("div",{className:"start-game",children:[Object(o.jsx)("h1",{children:"Whack a mole"}),"ended"===s&&Object(o.jsx)("div",{className:"results-wrapper",children:Object(o.jsx)(j,{counterHit:r,counter:n,title:!1})}),Object(o.jsxs)("button",{onClick:function(){i(-1),a(0),t("started")},children:["start"===s&&Object(o.jsx)(c.a.Fragment,{children:"Start a game"}),"ended"===s&&Object(o.jsx)(c.a.Fragment,{children:"Try again"})]})]})})};s(14),s(15);var u=function(e){var t=Object(n.useState)(!1),s=Object(a.a)(t,2),c=s[0],r=s[1],i=e.setCounterHit,l=e.counterHit;return Object(o.jsxs)("div",{className:"mole"+(c?" hit":""),onClick:function(){r(!0),setTimeout((function(){r(!1)}),400),i(l+1)},children:[c&&Object(o.jsxs)("svg",{className:"reaction",width:"70",height:"46",viewBox:"0 0 70 46",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("path",{d:"M7.32467 24.785C7.17945 23.8272 8.34467 23.2432 9.02513 23.9327L9.92534 24.8449C10.2296 25.1532 10.6979 25.2305 11.0852 25.0364L12.2309 24.4621C13.0969 24.0281 14.0125 24.9558 13.567 25.816L12.9776 26.954C12.7784 27.3387 12.8496 27.8079 13.1539 28.1163L14.0541 29.0285C14.7345 29.718 14.1352 30.8754 13.1794 30.7175L11.9149 30.5087C11.4875 30.4381 11.0632 30.6508 10.864 31.0355L10.2747 32.1735C9.82918 33.0337 8.54319 32.8213 8.39797 31.8635L8.20584 30.5965C8.1409 30.1681 7.80753 29.8303 7.38009 29.7597L6.11565 29.5509C5.15987 29.3931 4.96447 28.1044 5.8305 27.6703L6.9762 27.096C7.3635 26.9019 7.58175 26.4804 7.5168 26.0521L7.32467 24.785Z",fill:"#F4AF5A"}),Object(o.jsx)("path",{d:"M20.5258 28.7661C20.6606 27.8462 21.8938 27.6362 22.3255 28.4597V28.4597C22.5185 28.828 22.9267 29.03 23.3366 28.9603V28.9603C24.2532 28.8042 24.8339 29.9122 24.1842 30.5772V30.5772C23.8936 30.8746 23.8275 31.3253 24.0205 31.6935V31.6935C24.4522 32.517 23.5779 33.4117 22.7447 32.9992V32.9992C22.372 32.8148 21.923 32.8912 21.6324 33.1886V33.1886C20.9826 33.8536 19.8615 33.2986 19.9963 32.3787V32.3787C20.0566 31.9673 19.8451 31.5638 19.4725 31.3794V31.3794C18.6393 30.9669 18.8207 29.7291 19.7372 29.5731V29.5731C20.1471 29.5033 20.4655 29.1775 20.5258 28.7661V28.7661Z",fill:"#C4C4C4"}),Object(o.jsx)("path",{d:"M27.224 11.646C27.3448 10.8891 28.4243 10.8622 28.5828 11.6121V11.6121C28.6961 12.1485 29.3589 12.3458 29.7471 11.9586V11.9586C30.2898 11.4173 31.1789 12.0301 30.8663 12.7299V12.7299C30.6427 13.2305 31.063 13.7797 31.6047 13.6946V13.6946C32.3618 13.5757 32.721 14.594 32.0568 14.9764V14.9764C31.5816 15.25 31.5988 15.9413 32.087 16.1909V16.1909C32.7695 16.5397 32.4615 17.5747 31.6994 17.4936V17.4936C31.1542 17.4357 30.7617 18.0051 31.01 18.4939V18.4939C31.3571 19.1773 30.4996 19.8336 29.9306 19.32V19.32C29.5236 18.9527 28.8714 19.1827 28.785 19.7241V19.7241C28.6641 20.481 27.5846 20.5079 27.4262 19.758V19.758C27.3128 19.2216 26.65 19.0243 26.2618 19.4115V19.4115C25.7191 19.9527 24.83 19.34 25.1426 18.6402V18.6402C25.3662 18.1396 24.9459 17.5904 24.4043 17.6755V17.6755C23.6471 17.7944 23.2879 16.7761 23.9522 16.3937V16.3937C24.4273 16.1201 24.4101 15.4287 23.9219 15.1792V15.1792C23.2394 14.8304 23.5474 13.7954 24.3096 13.8764V13.8764C24.8548 13.9344 25.2472 13.365 24.9989 12.8761V12.8761C24.6518 12.1928 25.5093 11.5365 26.0783 12.05V12.05C26.4853 12.4174 27.1375 12.1874 27.224 11.646V11.646Z",fill:"#9847EB"}),Object(o.jsx)("path",{d:"M63.1986 29.785C63.3439 28.8272 62.1786 28.2432 61.4982 28.9327L60.598 29.8449C60.2937 30.1532 59.8254 30.2305 59.4381 30.0364L58.2924 29.4621C57.4264 29.0281 56.5108 29.9558 56.9563 30.816L57.5457 31.954C57.7449 32.3387 57.6737 32.8079 57.3694 33.1163L56.4692 34.0285C55.7888 34.718 56.3882 35.8754 57.3439 35.7175L58.6084 35.5087C59.0358 35.4381 59.4601 35.6508 59.6593 36.0355L60.2487 37.1735C60.6941 38.0337 61.9801 37.8213 62.1253 36.8635L62.3175 35.5965C62.3824 35.1681 62.7158 34.8303 63.1432 34.7597L64.4077 34.5509C65.3634 34.3931 65.5588 33.1044 64.6928 32.6703L63.5471 32.096C63.1598 31.9019 62.9416 31.4804 63.0065 31.0521L63.1986 29.785Z",fill:"#E69441"}),Object(o.jsx)("path",{d:"M44.0694 30.7661C43.9346 29.8462 42.7013 29.6362 42.2697 30.4597V30.4597C42.0767 30.828 41.6684 31.03 41.2585 30.9603V30.9603C40.342 30.8042 39.7612 31.9122 40.411 32.5772V32.5772C40.7016 32.8746 40.7676 33.3253 40.5746 33.6935V33.6935C40.143 34.517 41.0173 35.4117 41.8505 34.9992V34.9992C42.2231 34.8148 42.6722 34.8912 42.9628 35.1886V35.1886C43.6125 35.8536 44.7337 35.2986 44.5988 34.3787V34.3787C44.5385 33.9673 44.75 33.5638 45.1226 33.3794V33.3794C45.9559 32.9669 45.7745 31.7291 44.8579 31.5731V31.5731C44.448 31.5033 44.1297 31.1775 44.0694 30.7661V30.7661Z",fill:"#F097C9"}),Object(o.jsx)("path",{d:"M44.4668 18.2262C44.1487 17.3893 42.9755 17.3601 42.6161 18.1801L41.6493 20.386C41.613 20.4688 41.5656 20.5463 41.5085 20.6164L39.9867 22.4831C39.4209 23.177 39.9822 24.2077 40.872 24.1089L43.2657 23.8432C43.3556 23.8332 43.4465 23.8355 43.5357 23.8499L45.9133 24.2346C46.7971 24.3775 47.409 23.3762 46.8785 22.6549L45.4516 20.7147C45.398 20.6419 45.3546 20.5621 45.3224 20.4775L44.4668 18.2262Z",fill:"#6DDCDC"}),Object(o.jsx)("path",{d:"M7.5 13.5C9.66667 15.1667 14.6 18.7 17 19.5L13 14.5L15 13.5L9.5 8L6 9L9.5 12.5L7.5 13.5Z",fill:"#ED625D"}),Object(o.jsx)("path",{d:"M61.7727 17.3043C60 18.6087 55.9636 21.3739 54 22L57.2727 18.087L55.6364 17.3043L60.1364 13L63 13.7826L60.1364 16.5217L61.7727 17.3043Z",fill:"#C4C4C4"}),Object(o.jsx)("rect",{x:"37",width:"2",height:"9",rx:"1",fill:"#4892E8"})]}),Object(o.jsxs)("div",{className:"mole-face-wrapper",children:[Object(o.jsxs)("div",{className:"mole-eyes",children:[Object(o.jsx)("svg",{width:"9",height:"4",viewBox:"0 0 9 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M0.523178 3C0.523178 3 2.68108 0.5 4.52318 0.5C6.36528 0.5 8.52318 3 8.52318 3",stroke:"white"})}),Object(o.jsx)("svg",{width:"9",height:"4",viewBox:"0 0 9 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M0.523178 3C0.523178 3 2.68108 0.5 4.52318 0.5C6.36528 0.5 8.52318 3 8.52318 3",stroke:"white"})})]}),Object(o.jsx)("div",{className:"mole-mouth"}),Object(o.jsxs)("div",{className:"mole-hands",children:[Object(o.jsx)("div",{className:"mole-hand"}),Object(o.jsx)("div",{className:"mole-hand"})]})]})]})};function C(e){var t=c.a.useState(null),s=Object(a.a)(t,2),r=s[0],i=s[1],l=e.counter,d=e.counterHit,C=e.setCounterHit,x=e.setCounter;return h((function(){i(Math.floor(3*Math.random()))})),Object(n.useEffect)((function(){x(l+1)}),[r]),Object(o.jsxs)("div",{className:"game-wrapper",children:[Object(o.jsxs)("div",{className:"moles-wrapper",children:[Object(o.jsxs)("div",{className:"mole-hole-group"+(0===r?" display":""),children:[Object(o.jsx)(u,{counterHit:d,setCounterHit:C}),Object(o.jsx)("div",{className:"hole"})]}),Object(o.jsxs)("div",{className:"mole-hole-group"+(1===r?" display":""),children:[Object(o.jsx)(u,{counterHit:d,setCounterHit:C}),Object(o.jsx)("div",{className:"hole"})]}),Object(o.jsxs)("div",{className:"mole-hole-group"+(2===r?" display":""),children:[Object(o.jsx)(u,{counterHit:d,setCounterHit:C}),Object(o.jsx)("div",{className:"hole"})]})]}),Object(o.jsx)(j,{counterHit:d,counter:l,title:!0})]})}var h=function(e){var t=Math.floor(300*Math.random())+400,s=c.a.useRef(null),n=c.a.useRef(e);return c.a.useEffect((function(){return function e(){s.current=window.setTimeout((function(){n.current(),e()}),t)}(),function(){return window.clearTimeout(s.current)}}),[]),function(){window.clearTimeout(s.current)}};var x=function(){var e=Object(n.useState)("start"),t=Object(a.a)(e,2),s=t[0],r=t[1],i=c.a.useState(0),j=Object(a.a)(i,2),u=j[0],h=j[1],x=c.a.useState(-1),b=Object(a.a)(x,2),m=b[0],O=b[1];return Object(n.useEffect)((function(){var e;if(window.addEventListener("mousemove",(function(e){var t=document.getElementById("cursor");t.style.top=e.pageY-25+"px",t.style.left=e.pageX-25+"px"})),window.addEventListener("mousedown",(function(){document.getElementById("cursor").style.transform="rotate(-45deg)"})),window.addEventListener("mouseup",(function(){document.getElementById("cursor").style.transform="rotate(0)"})),"started"===s)return e=setTimeout((function(){r("ended")}),15e3),function(){return clearTimeout(e)}}),[s]),Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)("p",{className:"made",children:"Made with \ud83d\udc9c by Angela Zafirovska"}),("start"===s||"ended"===s)&&Object(o.jsx)(d,{gameStatus:s,setGameStatus:r,counter:m,setCounter:O,counterHit:u,setCounterHit:h}),Object(o.jsx)("div",{id:"cursor"}),Object(o.jsx)(l,{}),"started"===s&&Object(o.jsx)(C,{counter:m,setCounter:O,counterHit:u,setCounterHit:h})]})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.84447362.chunk.js.map