/*!
    Colorbox v1.5.2 - 2014-02-28
    jQuery lightbox and modal window plugin
    (c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
    license: http://www.opensource.org/licenses/mit-license.php
*/
// (function(t,e,i){function o(i,o,n){var r=e.createElement(i);return o&&(r.id=Z+o),n&&(r.style.cssText=n),t(r)}function n(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.get=function(e){var o,n;return void 0!==this.cache[e]?n=this.cache[e]:(o=t(this.el).attr("data-cbox-"+e),void 0!==o?n=o:void 0!==i[e]?n=i[e]:void 0!==X[e]&&(n=X[e]),this.cache[e]=n),t.isFunction(n)?n.call(this.el):n}}function h(t){var e=E.length,i=(z+t)%e;return 0>i?e+i:i}function s(t,e){return Math.round((/%/.test(t)?("x"===e?W.width():n())/100:1)*parseInt(t,10))}function a(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(){z=0,rel&&"nofollow"!==rel?(E=t("."+te).filter(function(){var e=t.data(this,Y),i=new r(this,e);return i.get("rel")===rel}),z=E.index(_.el),-1===z&&(E=E.add(_.el),z=E.length-1)):E=t(_.el)}function u(i){t(e).trigger(i),se.triggerHandler(i)}function f(i){var n;G||(n=t(i).data("colorbox"),_=new r(i,n),rel=_.get("rel"),g(),$||($=q=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block"}),L=o(ae,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(L),D=T.height()+k.height()+b.outerHeight(!0)-b.height(),j=C.width()+H.width()+b.outerWidth(!0)-b.width(),A=L.outerHeight(!0),N=L.outerWidth(!0),_.w=s(_.get("initialWidth"),"x"),_.h=s(_.get("initialHeight"),"y"),L.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(R).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),se.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&se.one(re,function(){t(_.el).focus()})),v.css({opacity:parseFloat(_.get("opacity")),cursor:_.get("overlayClose")?"pointer":"auto",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w())}function p(){!x&&e.body&&(V=!1,W=t(i),x=o(ae).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=o(ae,"Overlay").hide(),M=t([o(ae,"LoadingOverlay")[0],o(ae,"LoadingGraphic")[0]]),y=o(ae,"Wrapper"),b=o(ae,"Content").append(R=o(ae,"Title"),F=o(ae,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),I=o("button","Slideshow"),M),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(o(ae).append(o(ae,"TopLeft"),T=o(ae,"TopCenter"),o(ae,"TopRight")),o(ae,!1,"clear:left").append(C=o(ae,"MiddleLeft"),b,H=o(ae,"MiddleRight")),o(ae,!1,"clear:left").append(o(ae,"BottomLeft"),k=o(ae,"BottomCenter"),o(ae,"BottomRight"))).find("div div").css({"float":"left"}),S=o(ae,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(F).add(I),t(e.body).append(v,x.append(y,S)))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&E[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var n,r,h,d=J.prep,c=++le;q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?s(_.get("height"),"y")-A-D:_.get("innerHeight")&&s(_.get("innerHeight"),"y"),_.w=_.get("width")?s(_.get("width"),"x")-N-j:_.get("innerWidth")&&s(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=s(_.get("maxWidth"),"x")-N-j,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=s(_.get("maxHeight"),"y")-A-D,_.mh=_.h&&_.h<_.mh?_.h:_.mh),n=_.get("href"),Q=setTimeout(function(){M.show()},100),_.get("inline")?(h=o(ae).hide().insertBefore(t(n)[0]),se.one(he,function(){h.replaceWith(L.children())}),d(t(n))):_.get("iframe")?d(" "):_.get("html")?d(_.get("html")):a(_,n)?(n=l(_,n),U=e.createElement("img"),t(U).addClass(Z+"Photo").bind("error",function(){d(o(ae,"Error").html(_.get("imgError")))}).one("load",function(){var e;c===le&&(t.each(["alt","longdesc","aria-describedby"],function(e,i){var o=t(_.el).attr(i)||t(_.el).attr("data-"+i);o&&U.setAttribute(i,o)}),_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(r=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,r()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,r())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),E[1]&&(_.get("loop")||E[z+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",setTimeout(function(){d(U)},1))}),setTimeout(function(){U.src=n},1)):n&&S.load(n,_.get("data"),function(e,i){c===le&&d("error"===i?o(ae,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,E,W,L,S,M,R,F,I,K,P,B,O,_,D,j,A,N,z,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",oe=Z+"_complete",ne=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",se=t("<a/>"),ae="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||E[z+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){I.html(_.get("slideshowStop")).unbind(a).one(a,o),se.bind(oe,e).bind(ie,t),x.removeClass(s+"off").addClass(s+"on")}function o(){t(),se.unbind(oe,e).unbind(ie,t),I.html(_.get("slideshowStart")).unbind(a).one(a,function(){J.next(),i()}),x.removeClass(s+"on").addClass(s+"off")}function n(){r=!1,I.hide(),t(),se.unbind(oe,e).unbind(ie,t),x.removeClass(s+"off "+s+"on")}var r,h,s=Z+"Slideshow_",a="click."+Z;return function(){r?_.get("slideshow")||(se.unbind(ne,n),n()):_.get("slideshow")&&E[1]&&(r=!0,se.one(ne,n),_.get("slideshowAuto")?i():o(),I.show())}}();t.colorbox||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var o,n=this;if(e=e||{},t.isFunction(n))n=t("<a/>"),e.open=!0;else if(!n[0])return n;return n[0]?(p(),m()&&(i&&(e.onComplete=i),n.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),o=new r(n[0],e),o.get("open")&&f(n[0])),n):n},J.position=function(e,i){function o(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-j+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-D+"px"}var r,h,a,l=0,d=0,c=x.offset();if(W.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=W.scrollTop(),a=W.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=a,x.css({position:"fixed"})):(l=h,d=a,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(W.width()-_.w-N-j-s(_.get("right"),"x"),0):_.get("left")!==!1?s(_.get("left"),"x"):Math.round(Math.max(W.width()-_.w-N-j,0)/2),l+=_.get("bottom")!==!1?Math.max(n()-_.h-A-D-s(_.get("bottom"),"y"),0):_.get("top")!==!1?s(_.get("top"),"y"):Math.round(Math.max(n()-_.h-A-D,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+N+j,height:_.h+A+D,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){o(),q=!1,y[0].style.width=_.w+N+j+"px",y[0].style.height=_.h+A+D+"px",_.get("reposition")&&setTimeout(function(){W.bind("resize."+Z,J.position)},1),i&&i()},step:o})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=s(t.width,"x")-N-j),t.innerWidth&&(_.w=s(t.innerWidth,"x")),L.css({width:_.w}),t.height&&(_.h=s(t.height,"y")-A-D),t.innerHeight&&(_.h=s(t.innerHeight,"y")),t.innerHeight||t.height||(e=L.scrollTop(),L.css({height:"auto"}),_.h=L.height()),L.css({height:_.h}),e&&L.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function n(){return _.w=_.w||L.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function s(){return _.h=_.h||L.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");L.remove(),L=o(ae,"LoadedContent").append(i),L.hide().appendTo(S.show()).css({width:n(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:s()}).prependTo(b),S.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var o,n,s=E.length;$&&(n=function(){clearTimeout(Q),M.hide(),u(oe),_.get("onComplete")},R.html(_.get("title")).show(),L.show(),s>1?("string"==typeof _.get("current")&&F.html(_.get("current").replace("{current}",z+1).replace("{total}",s)).show(),K[_.get("loop")||s-1>z?"show":"hide"]().html(_.get("next")),P[_.get("loop")||z?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,o=E[this],n=new r(o,t.data(o,Y)),h=n.get("href");h&&a(n,h)&&(h=l(n,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(o=e.createElement("iframe"),"frameBorder"in o&&(o.frameBorder=0),"allowTransparency"in o&&(o.allowTransparency="true"),_.get("scrolling")||(o.scrolling="no"),t(o).attr({src:_.get("href"),name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0}).one("load",n).appendTo(L),se.one(he,function(){o.src="//about:blank"}),_.get("fastIframe")&&t(o).trigger("load")):n(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&E[1]&&(_.get("loop")||E[z+1])&&(z=h(1),f(E[z]))},J.prev=function(){!q&&E[1]&&(_.get("loop")||z)&&(z=h(-1),f(E[z]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(ne),_.get("onCleanup"),W.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.add(v).css({opacity:1,cursor:"auto"}).hide(),u(he),L.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t.colorbox.close(),x.stop().remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);






/*
* MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
* Version: 1.5.5
* License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
* http://creativecommons.org/licenses/by-nd/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
* 
* http://mixitup.io
*/

(function(d){function r(e,c,l,b,a){function f(){n.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd");c&&x(c,l,b,a);a.startOrder=[];a.newOrder=[];a.origSort=[];a.checkSort=[];v.removeStyle(a.prefix+"filter, filter, "+a.prefix+"transform, transform, opacity, display").css(a.clean).removeAttr("data-checksum");window.atob||v.css({display:"none",opacity:"0"});n.removeStyle(a.prefix+"transition, transition, "+a.prefix+"perspective, perspective, "+a.prefix+"perspective-origin, perspective-origin, "+
(a.resizeContainer?"height":""));"list"==a.layoutMode?(p.css({display:a.targetDisplayList,opacity:"1"}),a.origDisplay=a.targetDisplayList):(p.css({display:a.targetDisplayGrid,opacity:"1"}),a.origDisplay=a.targetDisplayGrid);a.origLayout=a.layoutMode;setTimeout(function(){v.removeStyle(a.prefix+"transition, transition");a.mixing=!1;if("function"==typeof a.onMixEnd){var b=a.onMixEnd.call(this,a);a=b?b:a}})}clearInterval(a.failsafe);a.mixing=!0;a.filter=e;if("function"==typeof a.onMixStart){var g=a.onMixStart.call(this,
a);a=g?g:a}for(var k=a.transitionSpeed,g=0;2>g;g++){var h=0==g?h=a.prefix:"";a.transition[h+"transition"]="all "+k+"ms linear";a.transition[h+"transform"]=h+"translate3d(0,0,0)";a.perspective[h+"perspective"]=a.perspectiveDistance+"px";a.perspective[h+"perspective-origin"]=a.perspectiveOrigin}var w=a.targetSelector,v=b.find(w);v.each(function(){this.data={}});var n=v.parent();n.css(a.perspective);a.easingFallback="ease-in-out";"smooth"==a.easing&&(a.easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)");
"snap"==a.easing&&(a.easing="cubic-bezier(0.77, 0, 0.175, 1)");"windback"==a.easing&&(a.easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)",a.easingFallback="cubic-bezier(0.175, 0.885, 0.320, 1)");"windup"==a.easing&&(a.easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)",a.easingFallback="cubic-bezier(0.6, 0.28, 0.735, 0.045)");g="list"==a.layoutMode&&null!=a.listEffects?a.listEffects:a.effects;Array.prototype.indexOf&&(a.fade=-1<g.indexOf("fade")?"0":"",a.scale=-1<g.indexOf("scale")?"scale(.01)":"",a.rotateZ=
-1<g.indexOf("rotateZ")?"rotate(180deg)":"",a.rotateY=-1<g.indexOf("rotateY")?"rotateY(90deg)":"",a.rotateX=-1<g.indexOf("rotateX")?"rotateX(90deg)":"",a.blur=-1<g.indexOf("blur")?"blur(8px)":"",a.grayscale=-1<g.indexOf("grayscale")?"grayscale(100%)":"");var p=d(),s=d(),t=[],r=!1;"string"===typeof e?t=z(e):(r=!0,d.each(e,function(a){t[a]=z(this)}));"or"==a.filterLogic?(""==t[0]&&t.shift(),1>t.length?s=s.add(b.find(w+":visible")):v.each(function(){var a=d(this);if(r){var b=0;d.each(t,function(d){this.length?
a.is("."+this.join(", ."))&&b++:0<b&&b++});b==t.length?p=p.add(a):s=s.add(a)}else a.is("."+t.join(", ."))?p=p.add(a):s=s.add(a)})):(p=p.add(n.find(w+"."+t.join("."))),s=s.add(n.find(w+":not(."+t.join(".")+"):visible")));e=p.length;var u=d(),q=d(),m=d();s.each(function(){var a=d(this);"none"!=a.css("display")&&(u=u.add(a),m=m.add(a))});if(p.filter(":visible").length==e&&!u.length&&!c){if(a.origLayout==a.layoutMode)return f(),!1;if(1==p.length)return"list"==a.layoutMode?(b.addClass(a.listClass),b.removeClass(a.gridClass),
m.css("display",a.targetDisplayList)):(b.addClass(a.gridClass),b.removeClass(a.listClass),m.css("display",a.targetDisplayGrid)),f(),!1}a.origHeight=n.height();if(p.length){b.removeClass(a.failClass);p.each(function(){var a=d(this);"none"==a.css("display")?q=q.add(a):m=m.add(a)});if(a.origLayout!=a.layoutMode&&!1==a.animateGridList)return"list"==a.layoutMode?(b.addClass(a.listClass),b.removeClass(a.gridClass),m.css("display",a.targetDisplayList)):(b.addClass(a.gridClass),b.removeClass(a.listClass),
m.css("display",a.targetDisplayGrid)),f(),!1;if(!window.atob)return f(),!1;v.css(a.clean);m.each(function(){this.data.origPos=d(this).offset()});"list"==a.layoutMode?(b.addClass(a.listClass),b.removeClass(a.gridClass),q.css("display",a.targetDisplayList)):(b.addClass(a.gridClass),b.removeClass(a.listClass),q.css("display",a.targetDisplayGrid));q.each(function(){this.data.showInterPos=d(this).offset()});u.each(function(){this.data.hideInterPos=d(this).offset()});m.each(function(){this.data.preInterPos=
d(this).offset()});"list"==a.layoutMode?m.css("display",a.targetDisplayList):m.css("display",a.targetDisplayGrid);c&&x(c,l,b,a);if(c&&A(a.origSort,a.checkSort))return f(),!1;u.hide();q.each(function(a){this.data.finalPos=d(this).offset()});m.each(function(){this.data.finalPrePos=d(this).offset()});a.newHeight=n.height();c&&x("reset",null,b,a);q.hide();m.css("display",a.origDisplay);"block"==a.origDisplay?(b.addClass(a.listClass),q.css("display",a.targetDisplayList)):(b.removeClass(a.listClass),q.css("display",
a.targetDisplayGrid));a.resizeContainer&&n.css("height",a.origHeight+"px");e={};for(g=0;2>g;g++)h=0==g?h=a.prefix:"",e[h+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,e[h+"filter"]=a.blur+" "+a.grayscale;q.css(e);m.each(function(){var b=this.data,c=d(this);c.hasClass("mix_tohide")?(b.preTX=b.origPos.left-b.hideInterPos.left,b.preTY=b.origPos.top-b.hideInterPos.top):(b.preTX=b.origPos.left-b.preInterPos.left,b.preTY=b.origPos.top-b.preInterPos.top);for(var e={},k=0;2>k;k++){var h=
0==k?h=a.prefix:"";e[h+"transform"]="translate("+b.preTX+"px,"+b.preTY+"px)"}c.css(e)});"list"==a.layoutMode?(b.addClass(a.listClass),b.removeClass(a.gridClass)):(b.addClass(a.gridClass),b.removeClass(a.listClass));setTimeout(function(){if(a.resizeContainer){for(var b={},c=0;2>c;c++){var e=0==c?e=a.prefix:"";b[e+"transition"]="all "+k+"ms ease-in-out";b.height=a.newHeight+"px"}n.css(b)}u.css("opacity",a.fade);q.css("opacity",1);q.each(function(){var b=this.data;b.tX=b.finalPos.left-b.showInterPos.left;
b.tY=b.finalPos.top-b.showInterPos.top;for(var c={},e=0;2>e;e++){var h=0==e?h=a.prefix:"";c[h+"transition-property"]=h+"transform, "+h+"filter, opacity";c[h+"transition-timing-function"]=a.easing+", linear, linear";c[h+"transition-duration"]=k+"ms";c[h+"transition-delay"]="0";c[h+"transform"]="translate("+b.tX+"px,"+b.tY+"px)";c[h+"filter"]="none"}d(this).css("-webkit-transition","all "+k+"ms "+a.easingFallback).css(c)});m.each(function(){var b=this.data;b.tX=0!=b.finalPrePos.left?b.finalPrePos.left-
b.preInterPos.left:0;b.tY=0!=b.finalPrePos.left?b.finalPrePos.top-b.preInterPos.top:0;for(var c={},e=0;2>e;e++){var h=0==e?h=a.prefix:"";c[h+"transition"]="all "+k+"ms "+a.easing;c[h+"transform"]="translate("+b.tX+"px,"+b.tY+"px)"}d(this).css("-webkit-transition","all "+k+"ms "+a.easingFallback).css(c)});b={};for(c=0;2>c;c++)e=0==c?e=a.prefix:"",b[e+"transition"]="all "+k+"ms "+a.easing+", "+e+"filter "+k+"ms linear, opacity "+k+"ms linear",b[e+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+
a.rotateZ,b[e+"filter"]=a.blur+" "+a.grayscale,b.opacity=a.fade;u.css(b);n.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(a){if(-1<a.originalEvent.propertyName.indexOf("transform")||-1<a.originalEvent.propertyName.indexOf("opacity"))-1<w.indexOf(".")?d(a.target).hasClass(w.replace(".",""))&&f():d(a.target).is(w)&&f()})},10);a.failsafe=setTimeout(function(){a.mixing&&f()},k+400)}else{a.resizeContainer&&n.css("height",a.origHeight+"px");if(!window.atob)return f(),!1;
u=s;setTimeout(function(){n.css(a.perspective);if(a.resizeContainer){for(var c={},e=0;2>e;e++){var d=0==e?d=a.prefix:"";c[d+"transition"]="height "+k+"ms ease-in-out";c.height=a.minHeight+"px"}n.css(c)}v.css(a.transition);if(s.length){c={};for(e=0;2>e;e++)d=0==e?d=a.prefix:"",c[d+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,c[d+"filter"]=a.blur+" "+a.grayscale,c.opacity=a.fade;u.css(c);n.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(c){if(-1<c.originalEvent.propertyName.indexOf("transform")||
-1<c.originalEvent.propertyName.indexOf("opacity"))b.addClass(a.failClass),f()})}else a.mixing=!1},10)}}function x(e,c,l,b){function a(a,b){var c=isNaN(1*a.attr(e))?a.attr(e).toLowerCase():1*a.attr(e),d=isNaN(1*b.attr(e))?b.attr(e).toLowerCase():1*b.attr(e);return c<d?-1:c>d?1:0}function f(a){"asc"==c?k.prepend(a).prepend(" "):k.append(a).append(" ")}function g(a){a=a.slice();for(var b=a.length,c=b;c--;){var e=parseInt(Math.random()*b),d=a[c];a[c]=a[e];a[e]=d}return a}l.find(b.targetSelector).wrapAll('<div class="mix_sorter"/>');
var k=l.find(".mix_sorter");b.origSort.length||k.find(b.targetSelector+":visible").each(function(){d(this).wrap("<s/>");b.origSort.push(d(this).parent().html().replace(/\s+/g,""));d(this).unwrap()});k.empty();if("reset"==e)d.each(b.startOrder,function(){k.append(this).append(" ")});else if("default"==e)d.each(b.origOrder,function(){f(this)});else if("random"==e)b.newOrder.length||(b.newOrder=g(b.startOrder)),d.each(b.newOrder,function(){k.append(this).append(" ")});else if("custom"==e)d.each(c,function(){f(this)});
else{if("undefined"===typeof b.origOrder[0].attr(e))return console.log("No such attribute found. Terminating"),!1;b.newOrder.length||(d.each(b.origOrder,function(){b.newOrder.push(d(this))}),b.newOrder.sort(a));d.each(b.newOrder,function(){f(this)})}b.checkSort=[];k.find(b.targetSelector+":visible").each(function(a){var c=d(this);0==a&&c.attr("data-checksum","1");c.wrap("<s/>");b.checkSort.push(c.parent().html().replace(/\s+/g,""));c.unwrap()});l.find(b.targetSelector).unwrap()}function B(e){for(var c=
["Webkit","Moz","O","ms"],d=0;d<c.length;d++)if(c[d]+"Transition"in e.style)return c[d];return"transition"in e.style?"":!1}function A(e,c){if(e.length!=c.length)return!1;for(var d=0;d<c.length;d++)if(e[d].compare&&!e[d].compare(c[d])||e[d]!==c[d])return!1;return!0}function z(e){e=e.replace(/\s{2,}/g," ");var c=e.split(" ");d.each(c,function(d){"all"==this&&(c[d]="mix_all")});""==c[0]&&c.shift();return c}var y={init:function(e){return this.each(function(){var c=window.navigator.appVersion.match(/Chrome\/(\d+)\./),
c=c?parseInt(c[1],10):!1,l=function(a){a=document.getElementById(a);var b=a.parentElement,c=document.createElement("div"),d=document.createDocumentFragment();b.insertBefore(c,a);d.appendChild(a);b.replaceChild(a,c)};(c&&31==c||32==c)&&l(this.id);var b={targetSelector:".mix",filterSelector:".filter",sortSelector:".sort",buttonEvent:"click",effects:["fade","scale"],listEffects:null,easing:"smooth",layoutMode:"grid",targetDisplayGrid:"inline-block",targetDisplayList:"block",listClass:"",gridClass:"",
transitionSpeed:600,showOnLoad:"all",sortOnLoad:!1,multiFilter:!1,filterLogic:"or",resizeContainer:!0,minHeight:0,failClass:"fail",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",animateGridList:!0,onMixLoad:null,onMixStart:null,onMixEnd:null,container:null,origOrder:[],startOrder:[],newOrder:[],origSort:[],checkSort:[],filter:"",mixing:!1,origDisplay:"",origLayout:"",origHeight:0,newHeight:0,isTouch:!1,resetDelay:0,failsafe:null,prefix:"",easingFallback:"ease-in-out",transition:{},perspective:{},
clean:{},fade:"1",scale:"",rotateX:"",rotateY:"",rotateZ:"",blur:"",grayscale:""};e&&d.extend(b,e);this.config=b;d.support.touch="ontouchend"in document;d.support.touch&&(b.isTouch=!0,b.resetDelay=350);b.container=d(this);var a=b.container;b.prefix=B(a[0]);b.prefix=b.prefix?"-"+b.prefix.toLowerCase()+"-":"";a.find(b.targetSelector).each(function(){b.origOrder.push(d(this))});if(b.sortOnLoad){var f;d.isArray(b.sortOnLoad)?(c=b.sortOnLoad[0],f=b.sortOnLoad[1],d(b.sortSelector+"[data-sort="+b.sortOnLoad[0]+
"][data-order="+b.sortOnLoad[1]+"]").addClass("active")):(d(b.sortSelector+"[data-sort="+b.sortOnLoad+"]").addClass("active"),c=b.sortOnLoad,b.sortOnLoad="desc");x(c,f,a,b)}for(f=0;2>f;f++)c=0==f?c=b.prefix:"",b.transition[c+"transition"]="all "+b.transitionSpeed+"ms ease-in-out",b.perspective[c+"perspective"]=b.perspectiveDistance+"px",b.perspective[c+"perspective-origin"]=b.perspectiveOrigin;for(f=0;2>f;f++)c=0==f?c=b.prefix:"",b.clean[c+"transition"]="none";"list"==b.layoutMode?(a.addClass(b.listClass),
b.origDisplay=b.targetDisplayList):(a.addClass(b.gridClass),b.origDisplay=b.targetDisplayGrid);b.origLayout=b.layoutMode;f=b.showOnLoad.split(" ");d.each(f,function(){d(b.filterSelector+'[data-filter="'+this+'"]').addClass("active")});a.find(b.targetSelector).addClass("mix_all");"all"==f[0]&&(f[0]="mix_all",b.showOnLoad="mix_all");var g=d();d.each(f,function(){g=g.add(d("."+this))});g.each(function(){var a=d(this);"list"==b.layoutMode?a.css("display",b.targetDisplayList):a.css("display",b.targetDisplayGrid);
a.css(b.transition)});setTimeout(function(){b.mixing=!0;g.css("opacity","1");setTimeout(function(){"list"==b.layoutMode?g.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayList,opacity:1}):g.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayGrid,opacity:1});b.mixing=!1;if("function"==typeof b.onMixLoad){var a=b.onMixLoad.call(this,b);b=a?a:b}},b.transitionSpeed)},10);b.filter=b.showOnLoad;d(b.sortSelector).bind(b.buttonEvent,function(){if(!b.mixing){var c=
d(this),e=c.attr("data-sort"),f=c.attr("data-order");if(!c.hasClass("active"))d(b.sortSelector).removeClass("active"),c.addClass("active");else if("random"!=e)return!1;a.find(b.targetSelector).each(function(){b.startOrder.push(d(this))});r(b.filter,e,f,a,b)}});d(b.filterSelector).bind(b.buttonEvent,function(){if(!b.mixing){var c=d(this);if(!1==b.multiFilter)d(b.filterSelector).removeClass("active"),c.addClass("active"),b.filter=c.attr("data-filter"),d(b.filterSelector+'[data-filter="'+b.filter+'"]').addClass("active");
else{var e=c.attr("data-filter");c.hasClass("active")?(c.removeClass("active"),b.filter=b.filter.replace(RegExp("(\\s|^)"+e),"")):(c.addClass("active"),b.filter=b.filter+" "+e)}r(b.filter,null,null,a,b)}})})},toGrid:function(){return this.each(function(){var e=this.config;"grid"!=e.layoutMode&&(e.layoutMode="grid",r(e.filter,null,null,d(this),e))})},toList:function(){return this.each(function(){var e=this.config;"list"!=e.layoutMode&&(e.layoutMode="list",r(e.filter,null,null,d(this),e))})},filter:function(e){return this.each(function(){var c=
this.config;c.mixing||(d(c.filterSelector).removeClass("active"),d(c.filterSelector+'[data-filter="'+e+'"]').addClass("active"),r(e,null,null,d(this),c))})},sort:function(e){return this.each(function(){var c=this.config,l=d(this);if(!c.mixing){d(c.sortSelector).removeClass("active");if(d.isArray(e)){var b=e[0],a=e[1];d(c.sortSelector+'[data-sort="'+e[0]+'"][data-order="'+e[1]+'"]').addClass("active")}else d(c.sortSelector+'[data-sort="'+e+'"]').addClass("active"),b=e,a="desc";l.find(c.targetSelector).each(function(){c.startOrder.push(d(this))});
r(c.filter,b,a,l,c)}})},multimix:function(e){return this.each(function(){var c=this.config,l=d(this);multiOut={filter:c.filter,sort:null,order:"desc",layoutMode:c.layoutMode};d.extend(multiOut,e);c.mixing||(d(c.filterSelector).add(c.sortSelector).removeClass("active"),d(c.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass("active"),"undefined"!==typeof multiOut.sort&&(d(c.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass("active"),l.find(c.targetSelector).each(function(){c.startOrder.push(d(this))})),
c.layoutMode=multiOut.layoutMode,r(multiOut.filter,multiOut.sort,multiOut.order,l,c))})},remix:function(e){return this.each(function(){var c=this.config,l=d(this);c.origOrder=[];l.find(c.targetSelector).each(function(){var b=d(this);b.addClass("mix_all");c.origOrder.push(b)});c.mixing||"undefined"===typeof e||(d(c.filterSelector).removeClass("active"),d(c.filterSelector+'[data-filter="'+e+'"]').addClass("active"),r(e,null,null,l,c))})}};d.fn.mixitup=function(d,c){if(y[d])return y[d].apply(this,Array.prototype.slice.call(arguments,
1));if("object"===typeof d||!d)return y.init.apply(this,arguments)};d.fn.removeStyle=function(e){return this.each(function(){var c=d(this);e=e.replace(/\s+/g,"");var l=e.split(",");d.each(l,function(){var b=RegExp(this.toString()+"[^;]+;?","g");c.attr("style",function(a,c){if(c)return c.replace(b,"")})})})}})(jQuery);


/**
 * BxSlider v4.1.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2013, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:v()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(p()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",B),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&I(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},p=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},v=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.delegate("a","click",q)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",k),o.controls.autoEl.delegate(".bx-stop","click",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},q=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},I=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},B=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider())};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&I(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){t(this).css("zIndex",50),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",p()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),I(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",B))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);




/*!
 * iCheck v1.0.1, http://git.io/arlzeA
 * ===================================
 * Powerful jQuery and Zepto plugin for checkboxes and radio buttons customization
 *
 * (c) 2013 Damir Sultanov, http://fronteed.com
 * MIT Licensed
 */

(function($) {

  // Cached vars
  var _iCheck = 'iCheck',
    _iCheckHelper = _iCheck + '-helper',
    _checkbox = 'checkbox',
    _radio = 'radio',
    _checked = 'checked',
    _unchecked = 'un' + _checked,
    _disabled = 'disabled',a
    _determinate = 'determinate',
    _indeterminate = 'in' + _determinate,
    _update = 'update',
    _type = 'type',
    _click = 'click',
    _touch = 'touchbegin.i touchend.i',
    _add = 'addClass',
    _remove = 'removeClass',
    _callback = 'trigger',
    _label = 'label',
    _cursor = 'cursor',
    _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);

  // Plugin init
  $.fn[_iCheck] = function(options, fire) {

    // Walker
    var handle = 'input[type="' + _checkbox + '"], input[type="' + _radio + '"]',
      stack = $(),
      walker = function(object) {
        object.each(function() {
          var self = $(this);

          if (self.is(handle)) {
            stack = stack.add(self);
          } else {
            stack = stack.add(self.find(handle));
          }
        });
      };

    // Check if we should operate with some method
    if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(options)) {

      // Normalize method's name
      options = options.toLowerCase();

      // Find checkboxes and radio buttons
      walker(this);

      return stack.each(function() {
        var self = $(this);

        if (options == 'destroy') {
          tidy(self, 'ifDestroyed');
        } else {
          operate(self, true, options);
        }

        // Fire method's callback
        if ($.isFunction(fire)) {
          fire();
        }
      });

    // Customization
    } else if (typeof options == 'object' || !options) {

      // Check if any options were passed
      var settings = $.extend({
          checkedClass: _checked,
          disabledClass: _disabled,
          indeterminateClass: _indeterminate,
          labelHover: true
        }, options),

        selector = settings.handle,
        hoverClass = settings.hoverClass || 'hover',
        focusClass = settings.focusClass || 'focus',
        activeClass = settings.activeClass || 'active',
        labelHover = !!settings.labelHover,
        labelHoverClass = settings.labelHoverClass || 'hover',

        // Setup clickable area
        area = ('' + settings.increaseArea).replace('%', '') | 0;

      // Selector limit
      if (selector == _checkbox || selector == _radio) {
        handle = 'input[type="' + selector + '"]';
      }

      // Clickable area limit
      if (area < -50) {
        area = -50;
      }

      // Walk around the selector
      walker(this);

      return stack.each(function() {
        var self = $(this);

        // If already customized
        tidy(self);

        var node = this,
          id = node.id,

          // Layer styles
          offset = -area + '%',
          size = 100 + (area * 2) + '%',
          layer = {
            position: 'absolute',
            top: offset,
            left: offset,
            display: 'block',
            width: size,
            height: size,
            margin: 0,
            padding: 0,
            background: '#fff',
            border: 0,
            opacity: 0
          },

          // Choose how to hide input
          hide = _mobile ? {
            position: 'absolute',
            visibility: 'hidden'
          } : area ? layer : {
            position: 'absolute',
            opacity: 0
          },

          // Get proper class
          className = node[_type] == _checkbox ? settings.checkboxClass || 'i' + _checkbox : settings.radioClass || 'i' + _radio,

          // Find assigned labels
          label = $(_label + '[for="' + id + '"]').add(self.closest(_label)),

          // Check ARIA option
          aria = !!settings.aria,

          // Set ARIA placeholder
          ariaID = _iCheck + '-' + Math.random().toString(36).substr(2,6),

          // Parent & helper
          parent = '<div class="' + className + '" ' + (aria ? 'role="' + node[_type] + '" ' : ''),
          helper;

        // Set ARIA "labelledby"
        if (aria) {
          label.each(function() {
            parent += 'aria-labelledby="';

            if (this.id) {
              parent += this.id;
            } else {
              this.id = ariaID;
              parent += ariaID;
            }

            parent += '"';
          });
        }

        // Wrap input
        parent = self.wrap(parent + '/>')[_callback]('ifCreated').parent().append(settings.insert);

        // Layer addition
        helper = $('<ins class="' + _iCheckHelper + '"/>').css(layer).appendTo(parent);

        // Finalize customization
        self.data(_iCheck, {o: settings, s: self.attr('style')}).css(hide);
        !!settings.inheritClass && parent[_add](node.className || '');
        !!settings.inheritID && id && parent.attr('id', _iCheck + '-' + id);
        parent.css('position') == 'static' && parent.css('position', 'relative');
        operate(self, true, _update);

        // Label events
        if (label.length) {
          label.on(_click + '.i mouseover.i mouseout.i ' + _touch, function(event) {
            var type = event[_type],
              item = $(this);

            // Do nothing if input is disabled
            if (!node[_disabled]) {

              // Click
              if (type == _click) {
                if ($(event.target).is('a')) {
                  return;
                }
                operate(self, false, true);

              // Hover state
              } else if (labelHover) {

                // mouseout|touchend
                if (/ut|nd/.test(type)) {
                  parent[_remove](hoverClass);
                  item[_remove](labelHoverClass);
                } else {
                  parent[_add](hoverClass);
                  item[_add](labelHoverClass);
                }
              }

              if (_mobile) {
                event.stopPropagation();
              } else {
                return false;
              }
            }
          });
        }

        // Input events
        self.on(_click + '.i focus.i blur.i keyup.i keydown.i keypress.i', function(event) {
          var type = event[_type],
            key = event.keyCode;

          // Click
          if (type == _click) {
            return false;

          // Keydown
          } else if (type == 'keydown' && key == 32) {
            if (!(node[_type] == _radio && node[_checked])) {
              if (node[_checked]) {
                off(self, _checked);
              } else {
                on(self, _checked);
              }
            }

            return false;

          // Keyup
          } else if (type == 'keyup' && node[_type] == _radio) {
            !node[_checked] && on(self, _checked);

          // Focus/blur
          } else if (/us|ur/.test(type)) {
            parent[type == 'blur' ? _remove : _add](focusClass);
          }
        });

        // Helper events
        helper.on(_click + ' mousedown mouseup mouseover mouseout ' + _touch, function(event) {
          var type = event[_type],

            // mousedown|mouseup
            toggle = /wn|up/.test(type) ? activeClass : hoverClass;

          // Do nothing if input is disabled
          if (!node[_disabled]) {

            // Click
            if (type == _click) {
              operate(self, false, true);

            // Active and hover states
            } else {

              // State is on
              if (/wn|er|in/.test(type)) {

                // mousedown|mouseover|touchbegin
                parent[_add](toggle);

              // State is off
              } else {
                parent[_remove](toggle + ' ' + activeClass);
              }

              // Label hover
              if (label.length && labelHover && toggle == hoverClass) {

                // mouseout|touchend
                label[/ut|nd/.test(type) ? _remove : _add](labelHoverClass);
              }
            }

            if (_mobile) {
              event.stopPropagation();
            } else {
              return false;
            }
          }
        });
      });
    } else {
      return this;
    }
  };

  // Do something with inputs
  function operate(input, direct, method) {
    var node = input[0],
      state = /er/.test(method) ? _indeterminate : /bl/.test(method) ? _disabled : _checked,
      active = method == _update ? {
        checked: node[_checked],
        disabled: node[_disabled],
        indeterminate: input.attr(_indeterminate) == 'true' || input.attr(_determinate) == 'false'
      } : node[state];

    // Check, disable or indeterminate
    if (/^(ch|di|in)/.test(method) && !active) {
      on(input, state);

    // Uncheck, enable or determinate
    } else if (/^(un|en|de)/.test(method) && active) {
      off(input, state);

    // Update
    } else if (method == _update) {

      // Handle states
      for (var each in active) {
        if (active[each]) {
          on(input, each, true);
        } else {
          off(input, each, true);
        }
      }

    } else if (!direct || method == 'toggle') {

      // Helper or label was clicked
      if (!direct) {
        input[_callback]('ifClicked');
      }

      // Toggle checked state
      if (active) {
        if (node[_type] !== _radio) {
          off(input, state);
        }
      } else {
        on(input, state);
      }
    }
  }

  // Add checked, disabled or indeterminate state
  function on(input, state, keep) {
    var node = input[0],
      parent = input.parent(),
      checked = state == _checked,
      indeterminate = state == _indeterminate,
      disabled = state == _disabled,
      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',
      regular = option(input, callback + capitalize(node[_type])),
      specific = option(input, state + capitalize(node[_type]));

    // Prevent unnecessary actions
    if (node[state] !== true) {

      // Toggle assigned radio buttons
      if (!keep && state == _checked && node[_type] == _radio && node.name) {
        var form = input.closest('form'),
          inputs = 'input[name="' + node.name + '"]';

        inputs = form.length ? form.find(inputs) : $(inputs);

        inputs.each(function() {
          if (this !== node && $(this).data(_iCheck)) {
            off($(this), state);
          }
        });
      }

      // Indeterminate state
      if (indeterminate) {

        // Add indeterminate state
        node[state] = true;

        // Remove checked state
        if (node[_checked]) {
          off(input, _checked, 'force');
        }

      // Checked or disabled state
      } else {

        // Add checked or disabled state
        if (!keep) {
          node[state] = true;
        }

        // Remove indeterminate state
        if (checked && node[_indeterminate]) {
          off(input, _indeterminate, false);
        }
      }

      // Trigger callbacks
      callbacks(input, checked, state, keep);
    }

    // Add proper cursor
    if (node[_disabled] && !!option(input, _cursor, true)) {
      parent.find('.' + _iCheckHelper).css(_cursor, 'default');
    }

    // Add state class
    parent[_add](specific || option(input, state) || '');

    // Set ARIA attribute
    if (!!parent.attr('role') && !indeterminate) {
      parent.attr('aria-' + (disabled ? _disabled : _checked), 'true');
    }

    // Remove regular state class
    parent[_remove](regular || option(input, callback) || '');
  }

  // Remove checked, disabled or indeterminate state
  function off(input, state, keep) {
    var node = input[0],
      parent = input.parent(),
      checked = state == _checked,
      indeterminate = state == _indeterminate,
      disabled = state == _disabled,
      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',
      regular = option(input, callback + capitalize(node[_type])),
      specific = option(input, state + capitalize(node[_type]));

    // Prevent unnecessary actions
    if (node[state] !== false) {

      // Toggle state
      if (indeterminate || !keep || keep == 'force') {
        node[state] = false;
      }

      // Trigger callbacks
      callbacks(input, checked, callback, keep);
    }

    // Add proper cursor
    if (!node[_disabled] && !!option(input, _cursor, true)) {
      parent.find('.' + _iCheckHelper).css(_cursor, 'pointer');
    }

    // Remove state class
    parent[_remove](specific || option(input, state) || '');

    // Set ARIA attribute
    if (!!parent.attr('role') && !indeterminate) {
      parent.attr('aria-' + (disabled ? _disabled : _checked), 'false');
    }

    // Add regular state class
    parent[_add](regular || option(input, callback) || '');
  }

  // Remove all traces
  function tidy(input, callback) {
    if (input.data(_iCheck)) {

      // Remove everything except input
      input.parent().html(input.attr('style', input.data(_iCheck).s || ''));

      // Callback
      if (callback) {
        input[_callback](callback);
      }

      // Unbind events
      input.off('.i').unwrap();
      $(_label + '[for="' + input[0].id + '"]').add(input.closest(_label)).off('.i');
    }
  }

  // Get some option
  function option(input, state, regular) {
    if (input.data(_iCheck)) {
      return input.data(_iCheck).o[state + (regular ? '' : 'Class')];
    }
  }

  // Capitalize some string
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Executable handlers
  function callbacks(input, checked, callback, keep) {
    if (!keep) {
      if (checked) {
        input[_callback]('ifToggled');
      }

      input[_callback]('ifChanged')[_callback]('if' + capitalize(callback));
    }
  }
})(window.jQuery || window.Zepto);








