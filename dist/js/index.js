!function(e){function t(t){for(var r,a,l=t[0],u=t[1],c=t[2],f=0,p=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);p.length;)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;i.push([1,1]),n()}([,function(e,t,n){"use strict";n.r(t);n(2);var r=n(3),o=n(4);r(),o()},function(e,t,n){},function(e,t,n){n(0);e.exports=function(){new Swiper("#video-all",{slidesPerView:"auto",spaceBetween:0,initialSlide:2,centeredSlides:!0,speed:1e3,navigation:{nextEl:".btn-next",prevEl:".btn-prev"}})}},function(e,t,n){var r=n(0);e.exports=function(){var e;let t;function n(){e.playVideo(),r(".js-lightbox").addClass("active")}function o(){0===e.getPlayerState()&&(e.destroy(),r(".js-lightbox").removeClass("active"))}r(".js-play").on("click",(function(){t=r(this).data("video"),e=new YT.Player("player",{videoId:t,events:{onReady:n,onStateChange:o}})})),r(".js-lightbox").on("click",(function(){e.destroy(),r(this).removeClass("active")}))}}]);