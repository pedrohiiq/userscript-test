// ==UserScript==
// @name        No begging, wikipedia!!
// @description Removes the wikipedia fundraiser banners
// @match       *://*.wikipedia.org/*
// @run-at      document-body
// @version     0.02
// @icon        https://www.google.com/s2/favicons?domain=en.wikipedia.org
// @author      silvasur, pedrokinha
// ==/UserScript==

let style = document.createElement("style");

style.innerText = `.cn-fundraising, .cn-frthankyou {display: none !important;}`
/*#mw-page-base {padding-top: 0 !important;}
#mw-head {top: 0 !important;}
#mw-panel {top: 0 !important;}`;*/

document.head.appendChild(style)
