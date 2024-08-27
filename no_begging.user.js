// ==UserScript==
// @name        No begging, wikipedia!!
// @description Removes the wikipedia fundraiser banners
// @match       *://*.wikipedia.org/*
// @run-at      document-body
// @version     0.021
// @downloadURL	https://pedrohiiq.github.io/userscript-test/no_begging.user.js
// @author      silvasur, pedrokinha
// ==/UserScript==

let style = document.createElement("style");

style.innerText = `.cn-fundraising, .cn-frthankyou {display: none !important;}`
/*#mw-page-base {padding-top: 0 !important;}
#mw-head {top: 0 !important;}
#mw-panel {top: 0 !important;}`;*/

document.head.appendChild(style)
