!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e){if(e){var t,n=e.elements,r=e.querySelector('[type="submit"]'),o=/^([а-яё]+|[a-z]+)$/i,a=/^([+]?[0-9\s-\(\)]{7,25})*$/,i=/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)/,l=/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@$/,u=/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)$/,c=/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/,d=["Незаполненное поле ввода","Введите Ваше реальное имя","Неверный формат номера телефона"],f=["Незаполненное поле ввода","Некорректный адрес электронной почты",'Адрес электронной почты должен содержать символ "@"','Введите часть адреса после символа "@"',"Введите расширение адреса. Например: .com или .ru"];(t=document.createElement("style")).textContent="\n\t\t\t.error {max-width: 260px; width: max-content; display: block; font-size: 13px; line-height: 15px; color: #fff; position: absolute; left: 0; top: calc(100% + 8px); z-index: 100; padding: 6px 10px 7px; -webkit-border-radius: 1px; border-radius: 6px; background: #d99;}\n\t\t\t.error:before {width: 0; height: 0; content: ''; position: absolute; left: 15px; top: -7px; border-right: 8px solid transparent; border-left: 8px solid transparent; border-bottom: 8px solid #d99;}\n\t\t\t.form-control_error {border-color: #d99;}\n\t\t\t.box-error {position: relative; display: inline-block;}\n\t\t",document.head.appendChild(t),r.addEventListener("click",s),e.addEventListener("focus",(function(){var e,t=document.activeElement;t!==r&&(e=t).nextElementSibling&&(e.classList.remove("form-control_error"),e.parentNode.removeChild(e.nextElementSibling))}),!0),[].forEach.call(n,(function(e){if("input"===e.tagName.toLowerCase()&&e!==r){var t=document.createElement("div");t.innerHTML=e.outerHTML,t.className="box-error",e.parentNode.replaceChild(t,e)}})),[].forEach.call(n,(function(e){e.addEventListener("blur",(function(e){var t=e.target,n=t.getAttribute("name"),r={};r[n]=t.value;var o=p(r,n);return 0!=o.length&&m(n,o),!1}))}))}function s(t){t.preventDefault();var n,o=function(e){var t={};if(!e.elements)return"";for(var n=0,o=e.elements.length;n<o;n++){var a=e.elements[n];"input"===a.tagName.toLowerCase()&&a!==r&&(t[a.name]=a.value)}return t}(e);for(var a in o)0!=(n=p(o,a)).length&&(!0,m(a,n));return!1}function p(e,t){var n="",r={name:function(){0==e.name.length?n=d[0]:0==o.test(e.name)&&(n=d[1])},email:function(){0==e.email.length?n=d[0]:0==c.test(e.email)&&(n=0==u.test(e.email)?0==l.test(e.email)?0==i.test(e.email)?f[1]:f[2]:f[3]:f[4])},phone:function(){0==e.phone.length?n=d[0]:0==a.test(e.phone)&&(n=d[2])},text:function(){0==e.textmess.length&&(n=d[0])}};return r[t]&&r[t](),n}function m(t,n){var r=e.querySelector("[name="+t+"]");if(!r.nextElementSibling){var o=document.createElement("span");o.className="error",r.parentNode.appendChild(o),r.classList.add("form-control_error"),o.innerText=n}}};addEventListener("DOMContentLoaded",(function(){for(var e=document.querySelectorAll("form"),t=0;t<e.length;t++)r(e[t]);document.querySelectorAll("form").forEach(e=>r(e)),r(document.querySelector("#form"))}))}]);