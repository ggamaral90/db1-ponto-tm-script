// ==UserScript==
// @name         DB1 ponto calculator
// @namespace    https://github.com/heidiks/db1-ponto-tm-script
// @version      0.2.3
// @description  DB1 ponto calculator 
// @author       Heidi Kussakawa
// @match        http://ponto.db1.com.br/ponto/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$.getScript( "http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js" ).done(function() {
    $.getScript("https://cdn.rawgit.com/heidiks/db1-ponto-tm-script/3e8b5813ba641818dac9507b32aca0460f961adc/db1-calculator.js");
});