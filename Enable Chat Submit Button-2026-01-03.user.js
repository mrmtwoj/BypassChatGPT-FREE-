// ==UserScript==
// @name         Bypass GPT 
// @namespace    http://tampermonkey.net/
// @version      2026-01-03
// @description  Automatically enable the ChatGPT submit button
// @author       Acyber Team Security 
// @match        https://chatgpt.com/c/*
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
        } else {
            setTimeout(enableSubmitButton, 900); // retry
        }
    }

    window.addEventListener('load', function() {
        setTimeout(enableSubmitButton, 3000); 
    });

})();
