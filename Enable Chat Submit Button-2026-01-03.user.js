// ==UserScript==
// @name         Bypass GPT
// @namespace    http://tampermonkey.net/
// @version      2026-01-03
// @match        https://chatgpt.com/*
// @description  Automatically enable the ChatGPT submit button
// @author       Acyber Team Security
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    function enableSubmitButton() {
        const button = document.getElementById('composer-submit-button')
                    || document.querySelector('button[type="submit"]');
        if (button) {
            button.removeAttribute('disabled');
            console.log("Submit button enabled!");
        }
    }

     function project() {
        const button = document.getElementById('composer-submit-button');
        if (button) {
            button.removeAttribute('disabled');
            console.log("Submit button enabled! In project");
        }
    }

    window.addEventListener('load', function() {
        setInterval(enableSubmitButton, 3000);
         setInterval(project, 3000);
    });

})();

