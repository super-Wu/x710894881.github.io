function ready(e){document.addEventListener("DOMContentLoaded",function(){e&&"[object Function]"===Object.prototype.toString.call(e)&&e()},!1)}function css(){return 2===arguments.length?arguments[0].currentStyle?arguments[0].currentStyle[arguments[1]]:getComputedStyle(arguments[0])[arguments[1]]:void(arguments[0].style[arguments[1]]=arguments[2])}function getByClass(e,t){if(t=t||document,t.getElementsByClassName)return t.getElementsByClassName(e);for(var n=[],a=t.getElementsByTagName("*"),s=new RegExp("\\b"+e+"\\b"),r=0;r<a.length;r++)s.test(a[r].className)&&n.push(a[r]);return n}function hasClass(e,t){t=t||document;for(var n=t.className.split(" "),a=0;a<n.length;a++)if(n[a]===e)return!0;return!1}function addClass(e,t){if(t=t||document,""==t.className)t.className=e;else{var n=t.className.split(" "),a=arrIndexOf(n,e);a==-1&&(t.className+=" "+e)}}function removeClass(e,t){if(t=t||document,""!=t.className){var n=t.className.split(" "),a=arrIndexOf(n,e);a!=-1&&(n.splice(a,1),t.className=n.join(" "))}}function arrIndexOf(e,t){for(var n=0;n<e.length;n++)if(e[n]==t)return n;return-1}function getPos(e){for(var t={t:0,l:0};e;)t.t+=e.offsetTop,t.l+=e.offsetLeft,e=e.offsetParent;return t}function mScroll(e,t,n){function a(e){var e=e||event,a=e.wheelDelta||e.detail,s=!0;s=e.detail?a>0:!(a>0),s?n&&n():t&&t(),e.preventDefault()}e.onmousewheel=function(e){var e=e||event;return a(e),!1},e.addEventListener("DOMMouseScroll",function(e){var e=e||event;a(e)})}