function ready(fn){document.addEventListener('DOMContentLoaded',function(){if(fn&&Object.prototype.toString.call(fn)==='[object Function]'){fn()}},false)}function css(){if(arguments.length===2){if(arguments[0].currentStyle){return arguments[0].currentStyle[arguments[1]]}else{return getComputedStyle(arguments[0])[arguments[1]]}}else{arguments[0].style[arguments[1]]=arguments[2]}}function getByClass(sClass,parent){parent=parent||document;if(parent.getElementsByClassName){return parent.getElementsByClassName(sClass)}else{var arr=[];var aEls=parent.getElementsByTagName('*');var reg=new RegExp('\\b'+sClass+'\\b');for(var i=0;i<aEls.length;i++){if(reg.test(aEls[i].className)){arr.push(aEls[i])}}return arr}return[]}function hasClass(sClass,obj){obj=obj||document;var arr=obj.className.split(' ');for(var i=0;i<arr.length;i++){if(arr[i]===sClass){return true}}return false}function addClass(sClass,parent){parent=parent||document;if(parent.className==''){parent.className=sClass}else{var arrClass=parent.className.split(' ');var _index=arrIndexOf(arrClass,sClass);if(_index==-1){parent.className+=' '+sClass}}}function removeClass(sClass,parent){parent=parent||document;if(parent.className!=''){var arrClass=parent.className.split(' ');var _index=arrIndexOf(arrClass,sClass);if(_index!=-1){arrClass.splice(_index,1);parent.className=arrClass.join(' ')}}}function arrIndexOf(arr,v){for(var i=0;i<arr.length;i++){if(arr[i]==v){return i}}return-1}function getPos(obj){var pos={t:0,l:0};while(obj){pos.t+=obj.offsetTop;pos.l+=obj.offsetLeft;obj=obj.offsetParent}return pos}function mScroll(obj,callbackUp,callbackDown){obj.onmousewheel=function(ev){var ev=ev||event;fn(ev);return false}obj.addEventListener('DOMMouseScroll',function(ev){var ev=ev||event;fn(ev)});function fn(ev){var ev=ev||event;var fx=ev.wheelDelta||ev.detail;var bDown=true;if(ev.detail){bDown=fx>0?true:false}else{bDown=fx>0?false:true}if(bDown){callbackDown&&callbackDown()}else{callbackUp&&callbackUp()}ev.preventDefault()}}