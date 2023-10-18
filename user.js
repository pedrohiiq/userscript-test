// ==UserScript==
// @name         Old Wikipedia Layout
// @version      0.2
// @description  Redirects Wikipedia to use the good (pre-2023) skin.
// @author       Pedrokinha, Sheer Anger
// @match        *://*.wikipedia.org/*
// @downloadURL  https://github.com/pedrohiiq/userscript-test/blob/master/user.js
// @icon         https://www.google.com/s2/favicons?domain=www.wikipedia.org
// @grant        none
// @license      MIT
// @inject-into  page
// @run-at       document_start
// ==/UserScript==

const SKIN_CHOICE = 'vector';

function hasSkin(url) {
  return url.match(/(?<!\#.*)\?.*&?useskin=/);
}

function applySkin(url) {
  let u = new URL(url);
  if (!u.searchParams.has('useskin'))
    u.searchParams.append('useskin', SKIN_CHOICE);
  return u.href;
}

if (!hasSkin(window.location.href)) {
  window.location.assign(applySkin(window.location.href));
}
