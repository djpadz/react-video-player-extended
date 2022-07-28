!function(M,N){"object"==typeof exports&&"object"==typeof module?module.exports=N(require("react")):"function"==typeof define&&define.amd?define(["react"],N):"object"==typeof exports?exports["react-video-player-extended"]=N(require("react")):M["react-video-player-extended"]=N(M.React)}(window,(function(M){return function(M){var N={};function e(D){if(N[D])return N[D].exports;var n=N[D]={i:D,l:!1,exports:{}};return M[D].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=M,e.c=N,e.d=function(M,N,D){e.o(M,N)||Object.defineProperty(M,N,{enumerable:!0,get:D})},e.r=function(M){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(M,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(M,"__esModule",{value:!0})},e.t=function(M,N){if(1&N&&(M=e(M)),8&N)return M;if(4&N&&"object"==typeof M&&M&&M.__esModule)return M;var D=Object.create(null);if(e.r(D),Object.defineProperty(D,"default",{enumerable:!0,value:M}),2&N&&"string"!=typeof M)for(var n in M)e.d(D,n,function(N){return M[N]}.bind(null,n));return D},e.n=function(M){var N=M&&M.__esModule?function(){return M.default}:function(){return M};return e.d(N,"a",N),N},e.o=function(M,N){return Object.prototype.hasOwnProperty.call(M,N)},e.p="./dist",e(e.s=19)}([function(N,e){N.exports=M},function(M,N,e){var D=e(2);"string"==typeof D&&(D=[[M.i,D,""]]);var n={insert:"head",singleton:!1};e(18)(D,n);D.locals&&(M.exports=D.locals)},function(M,N,e){N=M.exports=e(3)(!1);var D=e(4),n=D(e(5)),u=D(e(6)),j=D(e(7)),i=D(e(8)),g=D(e(9)),t=D(e(10)),I=D(e(11)),c=D(e(12)),o=D(e(13)),r=D(e(14)),T=D(e(15)),z=D(e(16)),A=D(e(17));N.push([M.i,".react-video-wrap {\n  padding-bottom: 36px;\n  position: relative;\n}\n\n.overlay-desc .text-col {\n  color: white;\n  font-family: 'Nobile', sans-serif;\n  font-size: 0.7vw;\n  font-weight: 500;\n}\n\n.overlay-desc {\n  background: rgba(0, 0, 0, 0);\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-evenly;\n}\n\n.react-video-wrap video {\n  background-color: #000000;\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.react-video-controls {\n  background-color: #e7e7e7;\n  display: flex;\n  height: 36px;\n  padding: 0 7px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.react-video-controls button {\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border: 0;\n  cursor: pointer;\n  margin: 10px 7px;\n  padding: 0;\n  outline: none;\n  height: 16px;\n  width: 16px;\n  text-indent: -9999px;\n}\n\n.react-video-controls .play {\n  background-image: url("+n+");\n}\n\n.react-video-controls .pause {\n  background-image: url("+u+");\n  background-size: 15px;\n}\n\n.react-video-controls .volume {\n  background-image: url("+j+");\n  background-position-x: 0;\n\n}\n\n.react-video-controls .no-volume {\n  background-image: url("+i+");\n  background-position-x: 0;\n  width: 17px;\n}\n\n.react-video-controls .full-screen {\n  background-image: url("+g+");\n  width: 17px;\n}\n\n.react-video-controls .time {\n  color: #969696;\n  font-size: 10px;\n  line-height: 37px;\n  margin: 0 7px;\n}\n\n.react-video-controls progress {\n  appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n}\n\n.react-video-controls .progress-wrap {\n  flex-grow: 1;\n  margin: 5px 7px 0;\n  position: relative;\n}\n\n.react-video-controls .progress-wrap progress {\n  height: 8px;\n  width: 100%;\n}\n\n.react-video-controls .progress-wrap progress::-webkit-progress-value {\n  background: #90caf9;\n}\n\n.react-video-controls .progress-wrap progress::-webkit-progress-bar {\n  background: #ffffff;\n}\n\n.react-video-controls .progress-wrap .react-video-marker {\n  background-color: #666666;\n  cursor: pointer;\n  display: block;\n  height: 8px;\n  width: 4px;\n  position: absolute;\n  top: 9px;\n  left: 50%;\n}\n\n.react-video-controls .volume-wrap {\n  position: relative;\n}\n\n.react-video-controls .volume-wrap:hover progress {\n  display: block;\n}\n\n.react-video-controls .volume-wrap progress {\n  border-radius: 2px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  display: none;\n  height: 12px;\n  overflow: hidden;\n  position: absolute;\n  top: -52px;\n  left: -31px;\n  transform: rotate(-90deg);\n  width: 100px;\n}\n\n.react-video-controls .volume-wrap progress::-webkit-progress-value {\n  background: #ffffff;\n}\n\n.react-video-controls .volume-wrap progress::-webkit-progress-bar {\n  background: #9d9d9d;\n}\n\n.react-video-full-screen .react-video-wrap {\n  background-color: #000000;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n}\n\n.react-video-full-screen .react-video-player {\n  height: calc(100vh - 36px);\n  max-width: 100%;\n}\n\n.react-video-full-screen .react-video-close {\n  background: url("+t+") no-repeat transparent;\n  border: 0;\n  cursor: pointer;\n  opacity: 1;\n  outline: none;\n  text-indent: -9999px;\n  height: 23px;\n  width: 23px;\n  position: absolute;\n  top: 36px;\n  right: 77px;\n}\n\n.react-video-full-screen .react-video-controls {\n  background-color: #595959;\n}\n\n.react-video-full-screen .react-video-controls .play {\n  background-image: url("+I+");\n}\n\n.react-video-full-screen .react-video-controls .pause {\n  background-image: url("+c+");\n}\n\n.react-video-full-screen .react-video-controls .volume {\n  background-image: url("+o+");\n}\n\n.react-video-full-screen .react-video-controls .no-volume {\n  background-image: url("+r+");\n}\n\n.react-video-full-screen .react-video-controls .full-screen {\n  background-image: url("+T+");\n}\n\n.react-video-full-screen .react-video-controls .time {\n  color: #ffffff;\n}\n\n.react-video-controls .next-frame {\n  background-image: url("+z+");\n}\n\n.react-video-controls .last-frame {\n  background-image: url("+A+");\n}\n",""])},function(M,N,e){"use strict";M.exports=function(M){var N=[];return N.toString=function(){return this.map((function(N){var e=function(M,N){var e=M[1]||"",D=M[3];if(!D)return e;if(N&&"function"==typeof btoa){var n=(j=D,i=btoa(unescape(encodeURIComponent(JSON.stringify(j)))),g="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(g," */")),u=D.sources.map((function(M){return"/*# sourceURL=".concat(D.sourceRoot).concat(M," */")}));return[e].concat(u).concat([n]).join("\n")}var j,i,g;return[e].join("\n")}(N,M);return N[2]?"@media ".concat(N[2],"{").concat(e,"}"):e})).join("")},N.i=function(M,e){"string"==typeof M&&(M=[[null,M,""]]);for(var D={},n=0;n<this.length;n++){var u=this[n][0];null!=u&&(D[u]=!0)}for(var j=0;j<M.length;j++){var i=M[j];null!=i[0]&&D[i[0]]||(e&&!i[2]?i[2]=e:e&&(i[2]="(".concat(i[2],") and (").concat(e,")")),N.push(i))}},N}},function(M,N,e){"use strict";M.exports=function(M,N){return"string"!=typeof(M=M.__esModule?M.default:M)?M:(/^['"].*['"]$/.test(M)&&(M=M.slice(1,-1)),/["'() \t\n]/.test(M)||N?'"'.concat(M.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):M)}},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMSAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMDI5MyAxMS4wNjY4VjEuMDI1MzlMOS40MzcyNiA2LjA0NDc1TDEuMDI5MyAxMS4wNjY4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEuODUxOSAxMS4wNjc1VjEwLjA2OTdWNy42NzU3VjQuNzc3MDlWMi4yNTc5NEMxLjg1MTkgMS44NTQwNSAxLjg2NjEgMS40NDY4OCAxLjg1MTkgMS4wNDAyNlYxLjAyMzM5QzEuNDM3OTUgMS4yNjAxNyAxLjAyMTI3IDEuNDk2OTUgMC42MDc4NjQgMS43MzQyOUMwLjg4NDc0NiAxLjkwMTQgMS4xNjQzNSAyLjA2NTc5IDEuNDQxMjIgMi4yMzI5QzIuMTEyMzkgMi42MzQwNyAyLjc4MzU3IDMuMDM1NzkgMy40NTQxMiAzLjQzNDI0QzQuMjYyMzYgMy45MTY1MiA1LjA3MDEyIDQuMzk4OCA1Ljg3ODMzIDQuODgzMkM2LjU3NzM1IDUuMzAxMjQgNy4yNzYzNyA1LjcxOTI5IDcuOTc1MzkgNi4xMzQ2MkM4LjMxNjcgNi4zMzgyIDguNjUyMDEgNi41NTI2NyA4Ljk5ODggNi43NDQ4MkM5LjAwNDI2IDYuNzQ3NTQgOS4wMDk3MiA2Ljc1MDI2IDkuMDEyOTkgNi43NTI5OFY1LjMyODk3QzguNzM2MTEgNS40OTYwOCA4LjQ1NjUgNS42NjA0NyA4LjE3OTY0IDUuODI3NThDNy41MDg0NiA2LjIyODc1IDYuODM3MjkgNi42MzA0NyA2LjE2Njc0IDcuMDI4OTJDNS4zNTg1IDcuNTExMiA0LjU1MDc0IDcuOTkzNDggMy43NDI1MyA4LjQ3Nzg4QzMuMDQzNTEgOC44OTU5MiAyLjM0NDQ5IDkuMzEzOTcgMS42NDU0NyA5LjcyOTNDMS4zMDQxNSA5LjkzMjg4IDAuOTYwNjU0IDEwLjEzMDUgMC42MjIwNjMgMTAuMzM5NUMwLjYxNjYwMiAxMC4zNDIyIDAuNjExMTQxIDEwLjM0NDkgMC42MDc4NjQgMTAuMzQ3N0MwLjIzNTk1NyAxMC41NzA4IDAuMDY4MzA0MiAxMS4wOTcyIDAuMzExMzI2IDExLjQ3NjZDMC41NTE2MjEgMTEuODQ3MyAxLjA0NjkzIDEyLjAwOSAxLjQ0Mzk2IDExLjc3MjJDMS43MjA4NCAxMS42MDUxIDIuMDAwNDUgMTEuNDQwNyAyLjI3NzMyIDExLjI3MzZDMi45NDg0OSAxMC44NzI0IDMuNjE5NjYgMTAuNDcwNyA0LjI5MDIyIDEwLjA3MjJDNS4wOTg0NiA5LjU4OTk2IDUuOTA2MjIgOS4xMDc2OCA2LjcxNDQyIDguNjIzMjlDNy40MTM0NCA4LjIwNTI0IDguMTEyNDcgNy43ODcxOSA4LjgxMTQ5IDcuMzcxODZDOS4xNTI4IDcuMTY4MjggOS40OTYzIDYuOTcwNjkgOS44MzQ4OSA2Ljc2MTY2QzkuODQwMzYgNi43NTg5NCA5Ljg0NTgyIDYuNzU2MjIgOS44NDkwOSA2Ljc1MzVDMTAuMzg1OSA2LjQzMjg4IDEwLjM4NTkgNS42NDk1OSA5Ljg0OTA5IDUuMzI5NDlDOS41NzIyMSA1LjE2MjM4IDkuMjkyNiA0Ljk5Nzk5IDkuMDE1NzMgNC44MzA4OEM4LjM0NDU2IDQuNDI5NzEgNy42NzMzOSA0LjAyNzk5IDcuMDAyODMgMy42Mjk1NEM2LjE5NDYgMy4xNDcyNyA1LjM4Njg0IDIuNjY0OTggNC41Nzg2MyAyLjE4MDU5QzMuODc5NjEgMS43NjI1NCAzLjE4MDU5IDEuMzQ0NDkgMi40ODE1NyAwLjkyOTE2QzIuMTQwMjUgMC43MjU1ODQgMS44MDQ5NSAwLjUxMzgyOSAxLjQ1ODE2IDAuMzE4OTYzQzEuNDUyNyAwLjMxNjI0MiAxLjQ0NzI0IDAuMzEzNTIgMS40NDM5NiAwLjMxMDc5OEMwLjkwNDQwMyAtMC4wMTI1MzM3IDAuMTk5OTMgMC40MDI3OTEgMC4xOTk5MyAxLjAyMTdWMi4wMTk0N1Y0LjQxMzQ5VjcuMzEyMVY5LjgzMTI1QzAuMTk5OTMgMTAuMjM1MSAwLjE5MTczOCAxMC42NDIzIDAuMTk5OTMgMTEuMDQ4OVYxMS4wNjU4QzAuMTk5OTMgMTEuNDk4IDAuNTgwMDI5IDExLjkxMDEgMS4wMjc4NCAxMS44OTFDMS40NzE4MyAxMS44NzAzIDEuODUxOTEgMTEuNTMwMSAxLjg1MTkxIDExLjA2NzRMMS44NTE5IDExLjA2NzVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"},function(M,N){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8dGl0bGU+CiAgICBwYXVzZQogIDwvdGl0bGU+CiAgPHJlY3Qgd2lkdGg9IjYiIGhlaWdodD0iMTYiIHg9IjMiIHk9IjIiIHJ4PSIxIiByeT0iMSIvPgogIDxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjE2IiB4PSIxMSIgeT0iMiIgcng9IjEiIHJ5PSIxIi8+Cjwvc3ZnPgo="},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik05LjMzMjc5IDAuNzUzMTM3QzguOTMwOTkgMC41ODQxMjUgOC40NjY1MyAwLjY4MDg3NiA4LjE2NDg2IDAuOTk1MDNMNS4yNTIwNCAzLjk4ODM2SDEuODUzMzlWMy45ODc3NEMxLjQxODQyIDMuOTg3MTMgMS4wMDA2NCA0LjE1OTgzIDAuNjkzNDUyIDQuNDY2NjJDMC4zODU2NTYgNC43NzM0MiAwLjIxMzYyMyA1LjE4OTg0IDAuMjE0ODUgNS42MjM0VjExLjE1NzVDMC4yMTQ4NSAxMi4wNTgzIDAuOTQ3MTc2IDEyLjc4ODIgMS44NTA4NyAxMi43ODgySDUuNjcxNjdMOC4xNjQ4NiAxNS4zNTI3QzguMzYzOTIgMTUuNTU4NSA4LjYzNzkzIDE1LjY3NDggOC45MjQ4NCAxNS42NzQ4QzkuMDY0OTEgMTUuNjc0OCA5LjIwMzE1IDE1LjY0NzMgOS4zMzI3OSAxNS41OTQ2QzkuNzM5NSAxNS40MzYgMTAuMDA0OSAxNS4wNDI5IDEwIDE0LjYwNzVWMS43NDAyN0MxMC4wMDQ5IDEuMzA0ODggOS43Mzk1MiAwLjkxMTcxOSA5LjMzMjc5IDAuNzUzMTE3VjAuNzUzMTM3Wk05LjUxNDY0IDE0LjYwODFWMTQuNjA3NUM5LjUxNDY0IDE0Ljg0MzkgOS4zNzAyNiAxNS4wNTY0IDkuMTUwOTMgMTUuMTQ1MkM4LjkzMTYgMTUuMjM0IDguNjc5NyAxNS4xODEzIDguNTE0NDMgMTUuMDExN0w1Ljg3ODExIDEyLjMwMkgxLjg1MDk3QzEuMjE2MzEgMTIuMzAyIDAuNzAxNDczIDExLjc5IDAuNzAwMjQ3IDExLjE1NzRWNS42MjMzNkMwLjcwMDI0NyA0Ljk5MDE2IDEuMjE1NyA0LjQ3Njk5IDEuODUwOTcgNC40NzY5OUg1LjQ1ODY1TDguNTEyNyAxLjMzMTI5SDguNTEyMDlDOC42NzczNiAxLjE2MDQ0IDguOTI5ODYgMS4xMDY1NCA5LjE1MDQyIDEuMTk1MzRDOS4zNzE1OSAxLjI4NDEzIDkuNTE1MzYgMS40OTc4NSA5LjUxNDc1IDEuNzM1NDVMOS41MTQ2NCAxNC42MDgxWiIgZmlsbD0iYmxhY2siLz4KPHJlY3QgeD0iMTEiIHk9IjUiIHdpZHRoPSIxIiBoZWlnaHQ9IjYiIHJ4PSIwLjUiIGZpbGw9IiM3MzczNzMiLz4KPHJlY3QgeD0iMTMiIHk9IjMiIHdpZHRoPSIxIiBoZWlnaHQ9IjEwIiByeD0iMC41IiBmaWxsPSIjNzM3MzczIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iMTUuNzI4IiBoZWlnaHQ9IjE1LjY3NjgiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjIxNDg0NCAwLjMzNTkzOCkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik05LjMzMjc5IDAuNzUzMTM3QzguOTMwOTkgMC41ODQxMjUgOC40NjY1MyAwLjY4MDg3NiA4LjE2NDg2IDAuOTk1MDNMNS4yNTIwNCAzLjk4ODM2SDEuODUzMzlWMy45ODc3NEMxLjQxODQyIDMuOTg3MTMgMS4wMDA2NCA0LjE1OTgzIDAuNjkzNDUyIDQuNDY2NjJDMC4zODU2NTYgNC43NzM0MiAwLjIxMzYyMyA1LjE4OTg0IDAuMjE0ODUgNS42MjM0VjExLjE1NzVDMC4yMTQ4NSAxMi4wNTgzIDAuOTQ3MTc2IDEyLjc4ODIgMS44NTA4NyAxMi43ODgySDUuNjcxNjdMOC4xNjQ4NiAxNS4zNTI3QzguMzYzOTIgMTUuNTU4NSA4LjYzNzkzIDE1LjY3NDggOC45MjQ4NCAxNS42NzQ4QzkuMDY0OTEgMTUuNjc0OCA5LjIwMzE1IDE1LjY0NzMgOS4zMzI3OSAxNS41OTQ2QzkuNzM5NSAxNS40MzYgMTAuMDA0OSAxNS4wNDI5IDEwIDE0LjYwNzVWMS43NDAyN0MxMC4wMDQ5IDEuMzA0ODggOS43Mzk1MiAwLjkxMTcxOSA5LjMzMjc5IDAuNzUzMTE3VjAuNzUzMTM3Wk05LjUxNDY0IDE0LjYwODFWMTQuNjA3NUM5LjUxNDY0IDE0Ljg0MzkgOS4zNzAyNiAxNS4wNTY0IDkuMTUwOTMgMTUuMTQ1MkM4LjkzMTYgMTUuMjM0IDguNjc5NyAxNS4xODEzIDguNTE0NDMgMTUuMDExN0w1Ljg3ODExIDEyLjMwMkgxLjg1MDk3QzEuMjE2MzEgMTIuMzAyIDAuNzAxNDczIDExLjc5IDAuNzAwMjQ3IDExLjE1NzRWNS42MjMzNkMwLjcwMDI0NyA0Ljk5MDE2IDEuMjE1NyA0LjQ3Njk5IDEuODUwOTcgNC40NzY5OUg1LjQ1ODY1TDguNTEyNyAxLjMzMTI5SDguNTEyMDlDOC42NzczNiAxLjE2MDQ0IDguOTI5ODYgMS4xMDY1NCA5LjE1MDQyIDEuMTk1MzRDOS4zNzE1OSAxLjI4NDEzIDkuNTE1MzYgMS40OTc4NSA5LjUxNDc1IDEuNzM1NDVMOS41MTQ2NCAxNC42MDgxWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE0LjAwNzUgOC40MTU0NEwxNS44Njk3IDYuNTU5MzFMMTUuODY5MSA2LjU1OTkyQzE1Ljk1MjEgNi40NjM3OCAxNS45NDY1IDYuMzIwNDkgMTUuODU2OCA2LjIzMTA3QzE1Ljc2NzEgNi4xNDE2NiAxNS42MjM0IDYuMTM2MTUgMTUuNTI2OSA2LjIxODIxTDEzLjY2NDcgOC4wNzQzNEwxMS44MDI1IDYuMjE4MjFIMTEuODAzMUMxMS43MDY3IDYuMTM2MTUgMTEuNTYzNSA2LjE0MTY2IDExLjQ3MzggNi4yMzEwN0MxMS4zODQxIDYuMzIwNDggMTEuMzc4NiA2LjQ2Mzc4IDExLjQ2MDkgNi41NTk5MkwxMy4zMjMxIDguNDE1NDNMMTEuNDYwOSAxMC4yNzE2QzExLjQwOTMgMTAuMzE1IDExLjM3ODYgMTAuMzc4NyAxMS4zNzYxIDEwLjQ0NjFDMTEuMzczNyAxMC41MTM0IDExLjM5OTUgMTAuNTc4NCAxMS40NDc0IDEwLjYyNjFDMTEuNDk0NyAxMC42NzM5IDExLjU2MDQgMTAuNjk5NiAxMS42MjggMTAuNjk3MkMxMS42OTU2IDEwLjY5NDEgMTEuNzU5NSAxMC42NjM1IDExLjgwMzEgMTAuNjEyNkwxMy42NjUzIDguNzU2NTJMMTUuNTI3NSAxMC42MTI2SDE1LjUyNjlDMTUuNjIzNCAxMC42OTQ3IDE1Ljc2NzEgMTAuNjg5MiAxNS44NTY4IDEwLjU5OThDMTUuOTQ2NSAxMC41MTA0IDE1Ljk1MiAxMC4zNjc3IDE1Ljg2OTEgMTAuMjcxNUwxNC4wMDc1IDguNDE1NDRaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjE1LjcyOCIgaGVpZ2h0PSIxNS42NzY4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4yMTQ4NDQgMC4zMzU5MzgpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAyNyAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjIyNyA4LjIzMDJDMTguMTk1MyA4LjIxNjkzIDE4LjE2MDUgOC4yMDk3OSAxOC4xMjY3IDguMjA5NzlIMTQuMjg3N0MxNC4xNDIzIDguMjA5NzkgMTQuMDI1NiA4LjMyNjE0IDE0LjAyNTYgOC40NzEwN0MxNC4wMjU2IDguNjE1OTkgMTQuMTQyMyA4LjczMjM1IDE0LjI4NzcgOC43MzIzNUgxNy40OTM2TDE0LjAwOTEgMTIuMjA1NUMxMy45MDY3IDEyLjMwNzYgMTMuOTA2NyAxMi40NzI5IDE0LjAwOTEgMTIuNTc1QzE0LjA2MDMgMTIuNjI2IDE0LjEyNjggMTIuNjUxNiAxNC4xOTQ0IDEyLjY1MTZDMTQuMjYyIDEyLjY1MTYgMTQuMzI4NiAxMi42MjYgMTQuMzc5OCAxMi41NzVMMTcuODY0MyA5LjEwMTgyVjEyLjI5NzNDMTcuODY0MyAxMi40NDIyIDE3Ljk4MSAxMi41NTg2IDE4LjEyNjQgMTIuNTU4NkMxOC4yNzE4IDEyLjU1ODYgMTguMzg4NiAxMi40NDIyIDE4LjM4ODYgMTIuMjk3M1Y4LjQ3MDgzQzE4LjM4ODYgOC40MzcxNSAxOC4zODE0IDguNDAyNDUgMTguMzY4MSA4LjM3MDgxQzE4LjM0MTUgOC4zMDY1MSAxOC4yOTEzIDguMjU2NSAxOC4yMjY4IDguMjI5OTZMMTguMjI3IDguMjMwMlpNMTIuNDM2NSAxMy43NzQzTDguOTUxOTcgMTcuMjQ3NVYxNC4wNTJDOC45NTE5NyAxMy45MDcxIDguODM1MjQgMTMuNzkwOCA4LjY4OTg0IDEzLjc5MDhDOC41NDQ0MyAxMy43OTA4IDguNDI3NyAxMy45MDcxIDguNDI3NyAxNC4wNTJWMTcuODc4NUM4LjQyNzcgMTcuOTEyMiA4LjQzNDg3IDE3Ljk0NjkgOC40NDgxOCAxNy45Nzg1QzguNDc0OCAxOC4wNDI4IDguNTI2IDE4LjA5MjggOC41ODk0OSAxOC4xMTkzQzguNjIxMjMgMTguMTMyNiA4LjY1NjA1IDE4LjEzOTggOC42ODk4MyAxOC4xMzk4SDEyLjUyODhDMTIuNjc0MiAxOC4xMzk4IDEyLjc5MDkgMTguMDIzNCAxMi43OTA5IDE3Ljg3ODVDMTIuNzkwOSAxNy43MzM2IDEyLjY3NDIgMTcuNjE3MiAxMi41Mjg4IDE3LjYxNzJIOS4zMjI4OEwxMi44MDc0IDE0LjE0NEMxMi45MDk4IDE0LjA0MTkgMTIuOTA5OCAxMy44NzY2IDEyLjgwNzQgMTMuNzc0NUMxMi43MDUgMTMuNjcyNCAxMi41MzkxIDEzLjY3MTQgMTIuNDM2NyAxMy43NzQ1TDEyLjQzNjUgMTMuNzc0M1pNMTguOTEzIDYuMzgwODZINy45MDM0NEM3LjE4MDUzIDYuMzgwODYgNi41OTI3NyA2Ljk2NjcgNi41OTI3NyA3LjY4NzI2VjE4LjY2MUM2LjU5Mjc3IDE5LjM4MTYgNy4xODA1MyAxOS45Njc0IDcuOTAzNDQgMTkuOTY3NEgxOC45MTNDMTkuNjM1OSAxOS45Njc0IDIwLjIyMzcgMTkuMzgxNiAyMC4yMjM3IDE4LjY2MVY3LjY4NzI2QzIwLjIyMzcgNi45NjY3IDE5LjYzNTkgNi4zODA4NiAxOC45MTMgNi4zODA4NlpNMTkuNjk5NCAxOC42NjFDMTkuNjk5NCAxOS4wOTI3IDE5LjM0NjEgMTkuNDQ0OSAxOC45MTMgMTkuNDQ0OUg3LjkwMzQ0QzcuNDcwMzIgMTkuNDQ0OSA3LjExNzA0IDE5LjA5MjcgNy4xMTcwNCAxOC42NjFWNy42ODcyNkM3LjExNzA0IDcuMjU1NTUgNy40NzAzMiA2LjkwMzQyIDcuOTAzNDQgNi45MDM0MkgxOC45MTNDMTkuMzQ2MSA2LjkwMzQyIDE5LjY5OTQgNy4yNTU1NSAxOS42OTk0IDcuNjg3MjZWMTguNjYxWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyMyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS41MDAyIDAuNzAwMTk1QzUuNTMwNzcgMC43MDAxOTUgMC43MDAxOTUgNS41Mjg2MSAwLjcwMDE5NSAxMS41MDAyQzAuNzAwMTk1IDE3LjQ2OTYgNS41MzA3NyAyMi4zMDAyIDExLjUwMDIgMjIuMzAwMkMxNy40NzE4IDIyLjMwMDIgMjIuMzAwMiAxNy40Njk2IDIyLjMwMDIgMTEuNTAwMkMyMi4zMDAyIDUuNTI3NTMgMTcuNDcyOSAwLjcwMDE5NSAxMS41MDAyIDAuNzAwMTk1Wk03LjM4MjcgNi45MTAyQzcuNDAyNzQgNi45MDkxNCA3LjQyMTcyIDYuOTA5MTQgNy40NDE3NiA2LjkxMDJDNy41ODczMSA2LjkwOTE0IDcuNzI3NTggNi45NjYwOSA3LjgyOTg4IDcuMDcwNTFMMTEuNTAwMyAxMC43MzIyTDE1LjE2MiA3LjA3MDUxQzE1LjI2MDEgNi45NzAzMSAxNS4zOTMgNi45MTMzNiAxNS41MzMzIDYuOTEwMkMxNS43NTY4IDYuOTAwNyAxNS45NjM2IDcuMDMxNDkgMTYuMDUxMSA3LjIzNzE0QzE2LjEzOTcgNy40NDM4NiAxNi4wOTEyIDcuNjgyMjEgMTUuOTI5OCA3LjgzODMyTDEyLjI1OTQgMTEuNTA4N0wxNS45Mjk4IDE1LjE3MDRDMTYuMDMyMSAxNS4yNzE3IDE2LjA4OTEgMTUuNDA5OSAxNi4wODkxIDE1LjU1NDRDMTYuMDg5MSAxNS42OTc4IDE2LjAzMjEgMTUuODM2IDE1LjkyOTggMTUuOTM4M0MxNS44Mjg2IDE2LjAzOTUgMTUuNjkwNCAxNi4wOTc1IDE1LjU0NTkgMTYuMDk3NUMxNS40MDE0IDE2LjA5NzUgMTUuMjY0MyAxNi4wMzk1IDE1LjE2MiAxNS45MzgzTDExLjUwMDMgMTIuMjY3OUw3LjgyOTg4IDE1LjkzODNDNy42MTc4OSAxNi4xNTAzIDcuMjc0MDYgMTYuMTUwMyA3LjA2MjA1IDE1LjkzODNDNi44NTAwNSAxNS43MjYzIDYuODUwMDYgMTUuMzgyNCA3LjA2MjA1IDE1LjE3MDRMMTAuNzIzOCAxMS41MDg3TDcuMDYyMDUgNy44MzgzMkM2LjkwOTEyIDcuNjkxNzIgNi44NTUzMyA3LjQ3MDIzIDYuOTI0OTQgNy4yNzA4OUM2Ljk5MzUgNy4wNzE1NSA3LjE3MjggNi45MzAyMyA3LjM4MjY3IDYuOTEwMkg3LjM4MjdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMSAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMDI5MyAxMS4zMTA5VjEuMjY5NTNMOS40MzcyNiA2LjI4ODg5TDEuMDI5MyAxMS4zMTA5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEuODUxOSAxMS4zMTE2VjEwLjMxMzlWNy45MTk4NFY1LjAyMTIzVjIuNTAyMDhDMS44NTE5IDIuMDk4MTkgMS44NjYxIDEuNjkxMDIgMS44NTE5IDEuMjg0NFYxLjI2NzUzQzEuNDM3OTUgMS41MDQzMSAxLjAyMTI3IDEuNzQxMDkgMC42MDc4NjQgMS45Nzg0M0MwLjg4NDc0NiAyLjE0NTU0IDEuMTY0MzUgMi4zMDk5MyAxLjQ0MTIyIDIuNDc3MDRDMi4xMTIzOSAyLjg3ODIxIDIuNzgzNTcgMy4yNzk5MyAzLjQ1NDEyIDMuNjc4MzhDNC4yNjIzNiA0LjE2MDY2IDUuMDcwMTIgNC42NDI5NCA1Ljg3ODMzIDUuMTI3MzRDNi41NzczNSA1LjU0NTM4IDcuMjc2MzcgNS45NjM0MyA3Ljk3NTM5IDYuMzc4NzZDOC4zMTY3IDYuNTgyMzQgOC42NTIwMSA2Ljc5NjgxIDguOTk4OCA2Ljk4ODk2QzkuMDA0MjYgNi45OTE2OCA5LjAwOTcyIDYuOTk0NCA5LjAxMjk5IDYuOTk3MTJWNS41NzMxMUM4LjczNjExIDUuNzQwMjIgOC40NTY1IDUuOTA0NjEgOC4xNzk2NCA2LjA3MTcyQzcuNTA4NDYgNi40NzI4OSA2LjgzNzI5IDYuODc0NjEgNi4xNjY3NCA3LjI3MzA2QzUuMzU4NSA3Ljc1NTM0IDQuNTUwNzQgOC4yMzc2MyAzLjc0MjUzIDguNzIyMDJDMy4wNDM1MSA5LjE0MDA3IDIuMzQ0NDkgOS41NTgxMSAxLjY0NTQ3IDkuOTczNDRDMS4zMDQxNSAxMC4xNzcgMC45NjA2NTQgMTAuMzc0NiAwLjYyMjA2MyAxMC41ODM2QzAuNjE2NjAyIDEwLjU4NjQgMC42MTExNDEgMTAuNTg5MSAwLjYwNzg2NCAxMC41OTE4QzAuMjM1OTU3IDEwLjgxNSAwLjA2ODMwNDIgMTEuMzQxMyAwLjMxMTMyNiAxMS43MjA4QzAuNTUxNjIxIDEyLjA5MTUgMS4wNDY5MyAxMi4yNTMxIDEuNDQzOTYgMTIuMDE2M0MxLjcyMDg0IDExLjg0OTIgMi4wMDA0NSAxMS42ODQ4IDIuMjc3MzIgMTEuNTE3N0MyLjk0ODQ5IDExLjExNjYgMy42MTk2NiAxMC43MTQ4IDQuMjkwMjIgMTAuMzE2NEM1LjA5ODQ2IDkuODM0MTEgNS45MDYyMiA5LjM1MTgyIDYuNzE0NDIgOC44Njc0M0M3LjQxMzQ0IDguNDQ5MzggOC4xMTI0NyA4LjAzMTMzIDguODExNDkgNy42MTZDOS4xNTI4IDcuNDEyNDMgOS40OTYzIDcuMjE0ODMgOS44MzQ4OSA3LjAwNThDOS44NDAzNiA3LjAwMzA4IDkuODQ1ODIgNy4wMDAzNiA5Ljg0OTA5IDYuOTk3NjRDMTAuMzg1OSA2LjY3NzAyIDEwLjM4NTkgNS44OTM3MyA5Ljg0OTA5IDUuNTczNjNDOS41NzIyMSA1LjQwNjUyIDkuMjkyNiA1LjI0MjEzIDkuMDE1NzMgNS4wNzUwMkM4LjM0NDU2IDQuNjczODUgNy42NzMzOSA0LjI3MjE0IDcuMDAyODMgMy44NzM2OEM2LjE5NDYgMy4zOTE0MSA1LjM4Njg0IDIuOTA5MTIgNC41Nzg2MyAyLjQyNDczQzMuODc5NjEgMi4wMDY2OCAzLjE4MDU5IDEuNTg4NjMgMi40ODE1NyAxLjE3MzNDMi4xNDAyNSAwLjk2OTcyNSAxLjgwNDk1IDAuNzU3OTcgMS40NTgxNiAwLjU2MzEwNEMxLjQ1MjcgMC41NjAzODIgMS40NDcyNCAwLjU1NzY2MSAxLjQ0Mzk2IDAuNTU0OTM5QzAuOTA0NDAzIDAuMjMxNjA3IDAuMTk5OTMgMC42NDY5MzIgMC4xOTk5MyAxLjI2NTg0VjIuMjYzNjFWNC42NTc2M1Y3LjU1NjI0VjEwLjA3NTRDMC4xOTk5MyAxMC40NzkzIDAuMTkxNzM4IDEwLjg4NjQgMC4xOTk5MyAxMS4yOTMxVjExLjMwOTlDMC4xOTk5MyAxMS43NDIxIDAuNTgwMDI5IDEyLjE1NDIgMS4wMjc4NCAxMi4xMzUyQzEuNDcxODMgMTIuMTE0NSAxLjg1MTkxIDExLjc3NDMgMS44NTE5MSAxMS4zMTE2TDEuODUxOSAxMS4zMTE2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},function(M,N){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8dGl0bGU+CiAgICBwYXVzZQogIDwvdGl0bGU+CiAgPHJlY3QgZmlsbD0iI2ZmZmZmZiIgd2lkdGg9IjYiIGhlaWdodD0iMTYiIHg9IjMiIHk9IjIiIHJ4PSIxIiByeT0iMSIvPgogIDxyZWN0IGZpbGw9IiNmZmZmZmYiIHdpZHRoPSI2IiBoZWlnaHQ9IjE2IiB4PSIxMSIgeT0iMiIgcng9IjEiIHJ5PSIxIi8+Cjwvc3ZnPgo="},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik05LjMzMjc5IDAuNzUzMTM3QzguOTMwOTkgMC41ODQxMjUgOC40NjY1MyAwLjY4MDg3NiA4LjE2NDg2IDAuOTk1MDNMNS4yNTIwNCAzLjk4ODM2SDEuODUzMzlWMy45ODc3NEMxLjQxODQyIDMuOTg3MTMgMS4wMDA2NCA0LjE1OTgzIDAuNjkzNDUyIDQuNDY2NjJDMC4zODU2NTYgNC43NzM0MiAwLjIxMzYyMyA1LjE4OTg0IDAuMjE0ODUgNS42MjM0VjExLjE1NzVDMC4yMTQ4NSAxMi4wNTgzIDAuOTQ3MTc2IDEyLjc4ODIgMS44NTA4NyAxMi43ODgySDUuNjcxNjdMOC4xNjQ4NiAxNS4zNTI3QzguMzYzOTIgMTUuNTU4NSA4LjYzNzkzIDE1LjY3NDggOC45MjQ4NCAxNS42NzQ4QzkuMDY0OTEgMTUuNjc0OCA5LjIwMzE1IDE1LjY0NzMgOS4zMzI3OSAxNS41OTQ2QzkuNzM5NSAxNS40MzYgMTAuMDA0OSAxNS4wNDI5IDEwIDE0LjYwNzVWMS43NDAyN0MxMC4wMDQ5IDEuMzA0ODggOS43Mzk1MiAwLjkxMTcxOSA5LjMzMjc5IDAuNzUzMTE3VjAuNzUzMTM3Wk05LjUxNDY0IDE0LjYwODFWMTQuNjA3NUM5LjUxNDY0IDE0Ljg0MzkgOS4zNzAyNiAxNS4wNTY0IDkuMTUwOTMgMTUuMTQ1MkM4LjkzMTYgMTUuMjM0IDguNjc5NyAxNS4xODEzIDguNTE0NDMgMTUuMDExN0w1Ljg3ODExIDEyLjMwMkgxLjg1MDk3QzEuMjE2MzEgMTIuMzAyIDAuNzAxNDczIDExLjc5IDAuNzAwMjQ3IDExLjE1NzRWNS42MjMzNkMwLjcwMDI0NyA0Ljk5MDE2IDEuMjE1NyA0LjQ3Njk5IDEuODUwOTcgNC40NzY5OUg1LjQ1ODY1TDguNTEyNyAxLjMzMTI5SDguNTEyMDlDOC42NzczNiAxLjE2MDQ0IDguOTI5ODYgMS4xMDY1NCA5LjE1MDQyIDEuMTk1MzRDOS4zNzE1OSAxLjI4NDEzIDkuNTE1MzYgMS40OTc4NSA5LjUxNDc1IDEuNzM1NDVMOS41MTQ2NCAxNC42MDgxWiIgZmlsbD0iI2ZmZmZmZiIvPgo8cmVjdCB4PSIxMSIgeT0iNSIgd2lkdGg9IjEiIGhlaWdodD0iNiIgcng9IjAuNSIgZmlsbD0iIzlhOWE5YSIvPgo8cmVjdCB4PSIxMyIgeT0iMyIgd2lkdGg9IjEiIGhlaWdodD0iMTAiIHJ4PSIwLjUiIGZpbGw9IiM5YTlhOWEiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIxNS43MjgiIGhlaWdodD0iMTUuNjc2OCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMjE0ODQ0IDAuMzM1OTM4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik05LjMzMjc5IDAuNzUzMTM3QzguOTMwOTkgMC41ODQxMjUgOC40NjY1MyAwLjY4MDg3NiA4LjE2NDg2IDAuOTk1MDNMNS4yNTIwNCAzLjk4ODM2SDEuODUzMzlWMy45ODc3NEMxLjQxODQyIDMuOTg3MTMgMS4wMDA2NCA0LjE1OTgzIDAuNjkzNDUyIDQuNDY2NjJDMC4zODU2NTYgNC43NzM0MiAwLjIxMzYyMyA1LjE4OTg0IDAuMjE0ODUgNS42MjM0VjExLjE1NzVDMC4yMTQ4NSAxMi4wNTgzIDAuOTQ3MTc2IDEyLjc4ODIgMS44NTA4NyAxMi43ODgySDUuNjcxNjdMOC4xNjQ4NiAxNS4zNTI3QzguMzYzOTIgMTUuNTU4NSA4LjYzNzkzIDE1LjY3NDggOC45MjQ4NCAxNS42NzQ4QzkuMDY0OTEgMTUuNjc0OCA5LjIwMzE1IDE1LjY0NzMgOS4zMzI3OSAxNS41OTQ2QzkuNzM5NSAxNS40MzYgMTAuMDA0OSAxNS4wNDI5IDEwIDE0LjYwNzVWMS43NDAyN0MxMC4wMDQ5IDEuMzA0ODggOS43Mzk1MiAwLjkxMTcxOSA5LjMzMjc5IDAuNzUzMTE3VjAuNzUzMTM3Wk05LjUxNDY0IDE0LjYwODFWMTQuNjA3NUM5LjUxNDY0IDE0Ljg0MzkgOS4zNzAyNiAxNS4wNTY0IDkuMTUwOTMgMTUuMTQ1MkM4LjkzMTYgMTUuMjM0IDguNjc5NyAxNS4xODEzIDguNTE0NDMgMTUuMDExN0w1Ljg3ODExIDEyLjMwMkgxLjg1MDk3QzEuMjE2MzEgMTIuMzAyIDAuNzAxNDczIDExLjc5IDAuNzAwMjQ3IDExLjE1NzRWNS42MjMzNkMwLjcwMDI0NyA0Ljk5MDE2IDEuMjE1NyA0LjQ3Njk5IDEuODUwOTcgNC40NzY5OUg1LjQ1ODY1TDguNTEyNyAxLjMzMTI5SDguNTEyMDlDOC42NzczNiAxLjE2MDQ0IDguOTI5ODYgMS4xMDY1NCA5LjE1MDQyIDEuMTk1MzRDOS4zNzE1OSAxLjI4NDEzIDkuNTE1MzYgMS40OTc4NSA5LjUxNDc1IDEuNzM1NDVMOS41MTQ2NCAxNC42MDgxWiIgZmlsbD0iI2ZmZmZmZiIvPgo8cGF0aCBkPSJNMTQuMDA3NSA4LjQxNTQ0TDE1Ljg2OTcgNi41NTkzMUwxNS44NjkxIDYuNTU5OTJDMTUuOTUyMSA2LjQ2Mzc4IDE1Ljk0NjUgNi4zMjA0OSAxNS44NTY4IDYuMjMxMDdDMTUuNzY3MSA2LjE0MTY2IDE1LjYyMzQgNi4xMzYxNSAxNS41MjY5IDYuMjE4MjFMMTMuNjY0NyA4LjA3NDM0TDExLjgwMjUgNi4yMTgyMUgxMS44MDMxQzExLjcwNjcgNi4xMzYxNSAxMS41NjM1IDYuMTQxNjYgMTEuNDczOCA2LjIzMTA3QzExLjM4NDEgNi4zMjA0OCAxMS4zNzg2IDYuNDYzNzggMTEuNDYwOSA2LjU1OTkyTDEzLjMyMzEgOC40MTU0M0wxMS40NjA5IDEwLjI3MTZDMTEuNDA5MyAxMC4zMTUgMTEuMzc4NiAxMC4zNzg3IDExLjM3NjEgMTAuNDQ2MUMxMS4zNzM3IDEwLjUxMzQgMTEuMzk5NSAxMC41Nzg0IDExLjQ0NzQgMTAuNjI2MUMxMS40OTQ3IDEwLjY3MzkgMTEuNTYwNCAxMC42OTk2IDExLjYyOCAxMC42OTcyQzExLjY5NTYgMTAuNjk0MSAxMS43NTk1IDEwLjY2MzUgMTEuODAzMSAxMC42MTI2TDEzLjY2NTMgOC43NTY1MkwxNS41Mjc1IDEwLjYxMjZIMTUuNTI2OUMxNS42MjM0IDEwLjY5NDcgMTUuNzY3MSAxMC42ODkyIDE1Ljg1NjggMTAuNTk5OEMxNS45NDY1IDEwLjUxMDQgMTUuOTUyIDEwLjM2NzcgMTUuODY5MSAxMC4yNzE1TDE0LjAwNzUgOC40MTU0NFoiIGZpbGw9IiNmZmZmZmYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIxNS43MjgiIGhlaWdodD0iMTUuNjc2OCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMjE0ODQ0IDAuMzM1OTM4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAyNyAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjIyNyA4LjIzMDJDMTguMTk1MyA4LjIxNjkzIDE4LjE2MDUgOC4yMDk3OSAxOC4xMjY3IDguMjA5NzlIMTQuMjg3N0MxNC4xNDIzIDguMjA5NzkgMTQuMDI1NiA4LjMyNjE0IDE0LjAyNTYgOC40NzEwN0MxNC4wMjU2IDguNjE1OTkgMTQuMTQyMyA4LjczMjM1IDE0LjI4NzcgOC43MzIzNUgxNy40OTM2TDE0LjAwOTEgMTIuMjA1NUMxMy45MDY3IDEyLjMwNzYgMTMuOTA2NyAxMi40NzI5IDE0LjAwOTEgMTIuNTc1QzE0LjA2MDMgMTIuNjI2IDE0LjEyNjggMTIuNjUxNiAxNC4xOTQ0IDEyLjY1MTZDMTQuMjYyIDEyLjY1MTYgMTQuMzI4NiAxMi42MjYgMTQuMzc5OCAxMi41NzVMMTcuODY0MyA5LjEwMTgyVjEyLjI5NzNDMTcuODY0MyAxMi40NDIyIDE3Ljk4MSAxMi41NTg2IDE4LjEyNjQgMTIuNTU4NkMxOC4yNzE4IDEyLjU1ODYgMTguMzg4NiAxMi40NDIyIDE4LjM4ODYgMTIuMjk3M1Y4LjQ3MDgzQzE4LjM4ODYgOC40MzcxNSAxOC4zODE0IDguNDAyNDUgMTguMzY4MSA4LjM3MDgxQzE4LjM0MTUgOC4zMDY1MSAxOC4yOTEzIDguMjU2NSAxOC4yMjY4IDguMjI5OTZMMTguMjI3IDguMjMwMlpNMTIuNDM2NSAxMy43NzQzTDguOTUxOTcgMTcuMjQ3NVYxNC4wNTJDOC45NTE5NyAxMy45MDcxIDguODM1MjQgMTMuNzkwOCA4LjY4OTg0IDEzLjc5MDhDOC41NDQ0MyAxMy43OTA4IDguNDI3NyAxMy45MDcxIDguNDI3NyAxNC4wNTJWMTcuODc4NUM4LjQyNzcgMTcuOTEyMiA4LjQzNDg3IDE3Ljk0NjkgOC40NDgxOCAxNy45Nzg1QzguNDc0OCAxOC4wNDI4IDguNTI2IDE4LjA5MjggOC41ODk0OSAxOC4xMTkzQzguNjIxMjMgMTguMTMyNiA4LjY1NjA1IDE4LjEzOTggOC42ODk4MyAxOC4xMzk4SDEyLjUyODhDMTIuNjc0MiAxOC4xMzk4IDEyLjc5MDkgMTguMDIzNCAxMi43OTA5IDE3Ljg3ODVDMTIuNzkwOSAxNy43MzM2IDEyLjY3NDIgMTcuNjE3MiAxMi41Mjg4IDE3LjYxNzJIOS4zMjI4OEwxMi44MDc0IDE0LjE0NEMxMi45MDk4IDE0LjA0MTkgMTIuOTA5OCAxMy44NzY2IDEyLjgwNzQgMTMuNzc0NUMxMi43MDUgMTMuNjcyNCAxMi41MzkxIDEzLjY3MTQgMTIuNDM2NyAxMy43NzQ1TDEyLjQzNjUgMTMuNzc0M1pNMTguOTEzIDYuMzgwODZINy45MDM0NEM3LjE4MDUzIDYuMzgwODYgNi41OTI3NyA2Ljk2NjcgNi41OTI3NyA3LjY4NzI2VjE4LjY2MUM2LjU5Mjc3IDE5LjM4MTYgNy4xODA1MyAxOS45Njc0IDcuOTAzNDQgMTkuOTY3NEgxOC45MTNDMTkuNjM1OSAxOS45Njc0IDIwLjIyMzcgMTkuMzgxNiAyMC4yMjM3IDE4LjY2MVY3LjY4NzI2QzIwLjIyMzcgNi45NjY3IDE5LjYzNTkgNi4zODA4NiAxOC45MTMgNi4zODA4NlpNMTkuNjk5NCAxOC42NjFDMTkuNjk5NCAxOS4wOTI3IDE5LjM0NjEgMTkuNDQ0OSAxOC45MTMgMTkuNDQ0OUg3LjkwMzQ0QzcuNDcwMzIgMTkuNDQ0OSA3LjExNzA0IDE5LjA5MjcgNy4xMTcwNCAxOC42NjFWNy42ODcyNkM3LjExNzA0IDcuMjU1NTUgNy40NzAzMiA2LjkwMzQyIDcuOTAzNDQgNi45MDM0MkgxOC45MTNDMTkuMzQ2MSA2LjkwMzQyIDE5LjY5OTQgNy4yNTU1NSAxOS42OTk0IDcuNjg3MjZWMTguNjYxWiIgZmlsbD0iI2ZmZmZmZiIvPgo8L3N2Zz4K"},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBkPSJNMCAyMXYtMThsMTUgOS0xNSA5em0xMS0xN3YzLjI2OGw3Ljg4OCA0LjczMi03Ljg4OCA0LjczMnYzLjI2OGwxMy04LTEzLTh6Ii8+Cjwvc3ZnPgo="},function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBkPSJNOSAxMmwxNS05djE4bC0xNS05em0tOSAwbDEzIDh2LTMuMjY4bC03Ljg4OC00LjczMiA3Ljg4OC00LjczMnYtMy4yNjhsLTEzIDh6Ii8+Cjwvc3ZnPgo="},function(M,N,e){"use strict";var D,n={},u=function(){return void 0===D&&(D=Boolean(window&&document&&document.all&&!window.atob)),D},j=function(){var M={};return function(N){if(void 0===M[N]){var e=document.querySelector(N);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(M){e=null}M[N]=e}return M[N]}}();function i(M,N){for(var e=[],D={},n=0;n<M.length;n++){var u=M[n],j=N.base?u[0]+N.base:u[0],i={css:u[1],media:u[2],sourceMap:u[3]};D[j]?D[j].parts.push(i):e.push(D[j]={id:j,parts:[i]})}return e}function g(M,N){for(var e=0;e<M.length;e++){var D=M[e],u=n[D.id],j=0;if(u){for(u.refs++;j<u.parts.length;j++)u.parts[j](D.parts[j]);for(;j<D.parts.length;j++)u.parts.push(A(D.parts[j],N))}else{for(var i=[];j<D.parts.length;j++)i.push(A(D.parts[j],N));n[D.id]={id:D.id,refs:1,parts:i}}}}function t(M){var N=document.createElement("style");if(void 0===M.attributes.nonce){var D=e.nc;D&&(M.attributes.nonce=D)}if(Object.keys(M.attributes).forEach((function(e){N.setAttribute(e,M.attributes[e])})),"function"==typeof M.insert)M.insert(N);else{var n=j(M.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(N)}return N}var I,c=(I=[],function(M,N){return I[M]=N,I.filter(Boolean).join("\n")});function o(M,N,e,D){var n=e?"":D.css;if(M.styleSheet)M.styleSheet.cssText=c(N,n);else{var u=document.createTextNode(n),j=M.childNodes;j[N]&&M.removeChild(j[N]),j.length?M.insertBefore(u,j[N]):M.appendChild(u)}}function r(M,N,e){var D=e.css,n=e.media,u=e.sourceMap;if(n&&M.setAttribute("media",n),u&&btoa&&(D+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),M.styleSheet)M.styleSheet.cssText=D;else{for(;M.firstChild;)M.removeChild(M.firstChild);M.appendChild(document.createTextNode(D))}}var T=null,z=0;function A(M,N){var e,D,n;if(N.singleton){var u=z++;e=T||(T=t(N)),D=o.bind(null,e,u,!1),n=o.bind(null,e,u,!0)}else e=t(N),D=r.bind(null,e,N),n=function(){!function(M){if(null===M.parentNode)return!1;M.parentNode.removeChild(M)}(e)};return D(M),function(N){if(N){if(N.css===M.css&&N.media===M.media&&N.sourceMap===M.sourceMap)return;D(M=N)}else n()}}M.exports=function(M,N){(N=N||{}).attributes="object"==typeof N.attributes?N.attributes:{},N.singleton||"boolean"==typeof N.singleton||(N.singleton=u());var e=i(M,N);return g(e,N),function(M){for(var D=[],u=0;u<e.length;u++){var j=e[u],t=n[j.id];t&&(t.refs--,D.push(t))}M&&g(i(M,N),N);for(var I=0;I<D.length;I++){var c=D[I];if(0===c.refs){for(var o=0;o<c.parts.length;o++)c.parts[o]();delete n[c.id]}}}}},function(M,N,e){"use strict";e.r(N);var D=e(0),n=e.n(D),u=function(M,N){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(M,N){M.__proto__=N}||function(M,N){for(var e in N)N.hasOwnProperty(e)&&(M[e]=N[e])})(M,N)};function j(M,N){function e(){this.constructor=M}u(M,N),M.prototype=null===N?Object.create(N):(e.prototype=N.prototype,new e)}var i,g=function(M){function N(){var N=null!==M&&M.apply(this,arguments)||this;return N.getPosition=function(){var M=N.props,e=M.marker,D=M.duration,n=e.time;return D?"calc("+100*(n<=D?n/D:1)+"% - 2px)":"-9999px"},N}return j(N,M),N.prototype.render=function(){var M=this.props,N=M.marker,e=M.configuration,n=M.onMarkerClick,u=N.title,j=String(N.id),i=void 0!==this.props.selectedMarker&&this.props.selectedMarker.id===N.id?void 0!==e?e.selectionColor:"#4CAF50":void 0!==e?e.color:"#F44336";return D.createElement("i",{id:j,className:"react-video-marker",title:u,style:{background:i,left:this.getPosition()},onClick:function(){n(N)}})},N}(D.Component);!function(M){M.FullScreen="FullScreen",M.Play="Play",M.Progress="Progress",M.Time="Time",M.Volume="Volume",M.LastFrame="LastFrame",M.NextFrame="NextFrame"}(i||(i={}));var t,I=function(M){function N(){var N=null!==M&&M.apply(this,arguments)||this;return N.getTimeCode=function(M){var N=M?parseInt(String(M),10):0,e=Math.floor(N/3600),D=Math.floor((N-3600*e)/60),n=N-3600*e-60*D,u=String(e),j=String(D),i=String(n);return e<10&&(u="0"+e),D<10&&(j="0"+D),n<10&&(i="0"+n),("00"!==u?u+":":"")+j+":"+i},N.handleOnMarkerSelection=function(M){N.props.onMarkerClick(M)},N}return j(N,M),N.prototype.render=function(){var M=this,N=this.props,e=N.progressEl,n=N.volumeEl,u=N.controls,j=N.isPlaying,t=N.volume,I=N.muted,c=N.currentTime,o=N.duration,r=N.markers,T=N.onPlayClick,z=N.onPauseClick,A=N.onProgressClick,x=N.onVolumeClick,a=N.onMuteClick,O=N.onFullScreenClick,E=N.onNextFrameClick,l=N.onLastFrameClick,y=N.selectedMarker,L=N.markerConfiguration,s=this.getTimeCode(Math.ceil(o)),d=c!==o?this.getTimeCode(c):s;return D.createElement("div",{className:"react-video-controls"},-1!==u.indexOf(i.LastFrame.toString())&&D.createElement("button",{className:"last-frame",onClick:l},"Last Frame"),-1!==u.indexOf(i.Play.toString())&&D.createElement("button",{className:j?"pause":"play",onClick:j?z:T},j?"Pause":"Play"),-1!==u.indexOf(i.NextFrame.toString())&&D.createElement("button",{className:"next-frame",onClick:E},"Next Frame"),-1!==u.indexOf(i.Time.toString())&&D.createElement("div",{className:"time"},d,"/",s),-1!==u.indexOf(i.Progress.toString())&&D.createElement("div",{className:"progress-wrap"},D.createElement("progress",{ref:e,max:"100",onClick:A},"0% played"),r&&r.map((function(N,e){return D.createElement(g,{key:e,marker:N,duration:o,onMarkerClick:M.handleOnMarkerSelection,selectedMarker:y,configuration:L})}))),-1!==u.indexOf(i.Volume.toString())&&D.createElement("div",{className:"volume-wrap"},D.createElement("progress",{ref:n,max:"100",value:100*t,onClick:x},100*t,"% volume"),D.createElement("button",{className:I?"no-volume":"volume",onClick:a},"Volume")),-1!==u.indexOf(i.FullScreen.toString())&&D.createElement("button",{className:"full-screen",onClick:O},"FullScreen"))},N}(D.Component);e(1);!function(M){M.Title="Title",M.FPS="FPS",M.Repeat="Repeat",M.StartTime="StartTime",M.Volume="Volume"}(t||(t={}));var c=function(M){var N=M.url,e=M.fps,n=M.loop,u=M.timeStart,j=M.volume,i=M.viewSettings;return D.createElement("div",{className:"overlay-desc"},-1!==i.indexOf(t.Title.toString())&&D.createElement("p",{className:"text-col"},"Title: "+N.substring(N.lastIndexOf("/")+1)),-1!==i.indexOf(t.FPS.toString())&&D.createElement("p",{className:"text-col"},"FPS: "+e),-1!==i.indexOf(t.Repeat.toString())&&D.createElement("p",{className:"text-col"},"Repeat: "+n),-1!==i.indexOf(t.StartTime.toString())&&D.createElement("p",{className:"text-col"},"Start Time: "+u),-1!==i.indexOf(t.Volume.toString())&&D.createElement("p",{className:"text-col"},"Volume: "+j))};N.default=function(M){var N=Object(D.useRef)(null),e=Object(D.useRef)(null),u=Object(D.useRef)(null),j=Object(D.useState)(0),i=j[0],g=j[1],t=Object(D.useState)(null),o=t[0],r=t[1],T=Object(D.useState)(!1),z=T[0],A=T[1],x=Object(D.useState)(!1),a=x[0],O=x[1],E=M.url,l=M.controls,y=void 0===l?["Play","Time","Progress","Volume","FullScreen"]:l,L=M.height,s=void 0===L?"360px":L,d=M.width,S=void 0===d?"640px":d,k=M.isPlaying,w=void 0!==k&&k,C=M.volume,m=void 0===C?.7:C,Y=M.loop,p=void 0!==Y&&Y,Q=M.markers,U=void 0===Q?[]:Q,f=M.timeStart,v=void 0===f?0:f,b=M.fps,h=void 0===b?30:b,Z=M.onPlay,P=void 0===Z?function(){}:Z,G=M.onPause,W=void 0===G?function(){}:G,H=M.onVolume,R=void 0===H?function(){}:H,V=M.onProgress,F=void 0===V?function(){}:V,J=M.onDuration,B=void 0===J?function(){}:J,K=M.onMarkerClick,X=void 0===K?function(){}:K,_=M.onLoadedMetadata,q=void 0===_?function(){}:_,$=M.selectedMarker,MM=M.viewSettings,NM=M.markerConfiguration;Object(D.useEffect)((function(){eM()}),[v]),Object(D.useEffect)((function(){w?N.current.play():N.current.pause()}),[w]),Object(D.useEffect)((function(){DM(m)}),[m]);var eM=function(){v&&N&&(N.current.currentTime=v)},DM=function(M){N.current.volume=M,A(!M)},nM=function(M){var N=M.currentTarget.duration;N===1/0&&(N=0),r(N),B(N)},uM=function(M){var N=M.currentTarget,D=N.currentTime,n=N.duration;if(n){g(D);var u=100/n*D;e&&e.current&&(e.current.value=u,e.current.innerHTML=u+"% played"),D===n&&W()}F(M)},jM=function(){var M=document.getElementsByClassName("react-video-wrap")[0];a?(document.body.classList.remove("react-video-full-screen"),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()):(document.body.classList.add("react-video-full-screen"),M.requestFullscreen?M.requestFullscreen():M.mozRequestFullScreen?M.mozRequestFullScreen():M.webkitRequestFullscreen?M.webkitRequestFullscreen():M.msRequestFullscreen&&M.msRequestFullscreen()),O(!a)};return Object(D.useEffect)((function(){var M=N.current;return M.addEventListener("timeupdate",uM),M.addEventListener("durationchange",nM),v&&eM(),w&&M.play(),function(){M&&(M.removeEventListener("timeupdate",uM),M.removeEventListener("durationchange",nM))}}),[]),n.a.createElement("div",{className:"react-video-wrap",style:{height:s,width:S}},n.a.createElement("video",{ref:N,key:E,className:"react-video-player",loop:p,onClick:function(){w?W():P()},onLoadedMetadata:q},n.a.createElement("source",{src:E,type:"video/mp4"})),MM&&n.a.createElement(c,{url:E,fps:h,timeStart:v,volume:m,loop:p,viewSettings:MM}),a?n.a.createElement("button",{className:"react-video-close",onClick:jM},"Close video"):null,y.length?n.a.createElement(I,{progressEl:e,volumeEl:u,controls:y,isPlaying:w,volume:m,currentTime:i,duration:o,muted:z,markers:U,onPlayClick:P,onPauseClick:W,onProgressClick:function(M){var D=(M.clientX-e.current.getBoundingClientRect().left+document.body.scrollLeft)*e.current.max/e.current.offsetWidth;N.current.currentTime=D/100*N.current.duration},onVolumeClick:function(M){var e=(u.current.offsetWidth-(M.clientY-u.current.getBoundingClientRect().top+document.body.scrollTop))*u.current.max/u.current.offsetWidth;N.current.muted=!1,R(e/100)},onMuteClick:function(){z?(N.current.muted=!1,DM(.7),A(!1)):(N.current.muted=!0,DM(0),A(!0))},onFullScreenClick:jM,onMarkerClick:function(M){N.current.currentTime=M.time,X(M)},onNextFrameClick:function(){console.log("Moving to next frame with fps: "+h);var M=1/h;N.current.currentTime=Math.min(N.current.duration,N.current.currentTime+M)},onLastFrameClick:function(){console.log("Moving to last frame with fps: "+h);var M=1/h;N.current.currentTime=Math.max(0,N.current.currentTime-M)},selectedMarker:$,markerConfiguration:NM}):null)}}])}));
//# sourceMappingURL=index.js.map