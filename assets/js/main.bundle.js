(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(57),r=n(203),s=n(83);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=i.c,a={};var c=Object(r.a)(a),u=[c],p=[i.a.apply(void 0,u)],h=Object(i.d)(Object(s.default)(),e,o.apply(void 0,p));return h.runSaga=c.run,t.hot.accept(83,function(t){s=n(83),h.replaceReducer(Object(s.default)())}.bind(this)),h}},44:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"f",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"c",(function(){return f}));var i=n(84);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){t.keys().forEach(t)}var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return t.slice(0).forEach(e)};var u=function(t,e){var n=document.getElementById(t);return{sceneParams:s(s({},e.sceneParams),{},{ReferenceSize:i.a.ReferenceSize}),animation:{tick:1,previousTick:0,startTime:window.performance.now(),currentTime:window.performance.now()},messages:i.a.messages,customClass:e.customClass,assets:e.assets,customCursor:e.customCursor,filter:e.filter,parentNode:null!==n?n:document.body}},p=function(){return{width:window.innerWidth,height:window.innerHeight,resolution:window.devicePixelRatio,sceneCenter:{x:window.innerWidth/2,y:window.innerHeight/2}}},h=function(t,e){return{core:{adaptiveSize:t,customClass:e.customClass,sceneSize:!t&&e.sceneSize?e.sceneSize:p()}}};function f(){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&navigator.serviceWorker.controller}}})).catch((function(){}))}))}},445:function(t,e,n){},446:function(t,e,n){var i={"./slashdot.svg":447};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=s,t.exports=r,r.id=446},447:function(t,e,n){"use strict";n.r(e);var i=n(201),r=n.n(i),s=n(202),o=n.n(s),a=new r.a({id:"slashdot",use:"slashdot-usage",viewBox:"0 0 512 512",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="slashdot"><path d="M376.661 4.992C374.607 1.807 371.085 0 367.303 0H255.998c-4.37 0-8.326 2.438-10.13 6.405L23.259 496.087c-1.565 3.445-1.272 7.543.772 10.717 2.054 3.185 5.576 5.196 9.359 5.196h111.304c4.37 0 8.326-2.671 10.13-6.638l222.609-489.74a11.14 11.14 0 00-.772-10.63zm-239.13 484.747H50.672L263.161 22.261h86.859L137.531 489.739zM400.694 333.679c-49.098 0-89.044 39.946-89.044 89.043 0 49.098 39.946 89.044 89.044 89.044s89.043-39.946 89.043-89.044c.001-49.097-39.945-89.043-89.043-89.043zm0 155.826c-36.826 0-66.783-29.956-66.783-66.783s29.956-66.783 66.783-66.783 66.783 29.956 66.783 66.783-29.957 66.783-66.783 66.783z" /></symbol>'});o.a.add(a);e.default=a},448:function(t,e,n){var i={"./thingies_background.jpg":449,"./thingies_item_1.png":450,"./thingies_item_10.png":451,"./thingies_item_11.png":452,"./thingies_item_12.png":453,"./thingies_item_13.png":454,"./thingies_item_14.png":455,"./thingies_item_15.png":456,"./thingies_item_16.png":457,"./thingies_item_17.png":458,"./thingies_item_2.png":459,"./thingies_item_3.png":460,"./thingies_item_4.png":461,"./thingies_item_5.png":462,"./thingies_item_6.png":463,"./thingies_item_7.png":464,"./thingies_item_8.png":465,"./thingies_item_9.png":466};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=s,t.exports=r,r.id=448},449:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_background.jpg"},450:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_item_1.png"},451:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_item_10.png"},452:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_item_11.png"},453:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_item_12.png"},454:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_item_13.png"},455:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_item_14.png"},456:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_item_15.png"},457:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_item_16.png"},458:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_item_17.png"},459:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_item_2.png"},460:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_item_3.png"},461:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_item_4.png"},462:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_item_5.png"},463:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_item_6.png"},464:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_item_7.png"},465:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_item_8.png"},466:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/img/thingies_item_9.png"},467:function(t,e,n){"use strict";n.r(e);n(206),n(430);var i=Symbol("text"),r=Symbol("link"),s=n(56),o={delay:1700,chunks:[{type:i,key:"name",value:"Igor Ivanov"},{type:r,key:"telegram",value:"@iivanovw7",link:"https://t.me/iivanovw7"},{type:r,key:"email",value:"iivanovw7@gmail.com",link:"mailto:iivanovw7@gmail.com"},{type:r,key:"github",value:"iivanovw7",link:"https://github.com/iivanovw7"}]},a=n(44),c=function(){this.container=document.querySelector(".contacts-typing-container"),this.textChunks=[];var t=o.chunks,e=o.delay;Object.assign(this,{createTextChunks:function(){var e=this;a.b(t,(function(n,s){var o='<span class="default nested">'.concat(n.key,": </span>"),a='<span class="string">\'</span>',c=s===t.length-1,u="";switch(n.type){case i:u='<span class="string">\''.concat(n.value,"'</span>");break;case r:u="".concat(a,'<a class="contacts-link" href="').concat(n.link,'">').concat(n.value,"</a>").concat(a)}return u+=c?"".concat('<span class="cursor"> |</span>'):",",e.textChunks.push('<p class="contacts-typing-text">'.concat(o).concat(u,"</p>"))}))},appendChunks:function(){var t=this,n=0,i=setInterval((function(){var e=document.querySelector(".".concat("contacts-typing-text"));e&&e.classList.remove("contacts-typing-text"),t.container.innerHTML+=t.textChunks[n],(n+=1)>=t.textChunks.length&&clearInterval(i)}),e)}})};c.prototype.init=function(){this.createTextChunks(),this.appendChunks()};var u=new c;Object.freeze(u);var p=u,h=n(204),f=n(19);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}f.k.skipHello();var y=function(t){this.props=t;var e=this.props.store.getState().core.sceneSize,n=e.width,i=e.height;this.app=new f.b(d(d({},this.props.sceneParams),{},{width:n,height:i})),this.app.renderer.plugins.interaction.cursorStyles.default=this.props.customCursor};y.prototype={cleanView:function(){var t=this.props.parentNode;t&&"object"===g(t)&&(t.innerHTML="")},appendView:function(){var t=this.props,e=t.parentNode,n=t.store.getState().core,i=n.adaptiveSize,r=n.customClass;e.classList.add(r),e.classList.add(i?"responsive":"static"),e.appendChild(this.app.view)},resizeHandler:function(){var t=this.props.store,e=t.getState().core,n=e.adaptiveSize,i=e.sceneSize;if(t.dispatch(function(t){return{type:s.a,adaptiveSize:t}}(n)),n){var r=i.width,o=i.height;this.app.renderer.resize(r,o)}},cleanRenderer:function(){for(;this.app.stage.children[0];)this.app.stage.removeChild(this.app.stage.children[0])},removeChild:function(t){this.app.stage.removeChild(t)},removeChildren:function(t){for(var e=t.length;e--;)this.app.stage.removeChild(t[e])},destroy:function(){this.app.stage.destroy(this.props.sceneParams),this.app.ticker.destroy(),this.app.renderer.destroy(!0)},render:function(){this.app.renderer.render(this.app.stage)},tickerAdd:function(t){this.app.ticker.add(t)},tickerRemove:function(t){this.app.ticker.remove(t)},load:function(t){this.app.loader.load(t)},textureFrom:function(t){return f.i.from(t)},createSpite:function(t){return new f.f(t)},addChild:function(t){return this.app.stage.addChild(t)},startAnimating:function(){this.app.animating=!0,window.requestAnimationFrame(this.animate.bind(this))},stopAnimating:function(){this.app.animating=!1},animate:function(){var t=this.props.store;this.app.animating&&(window.requestAnimationFrame(this.animate.bind(this)),t.dispatch({type:s.a}))},addChildren:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.length;e--;)this.app.stage.addChild(t[e])},createTilingSprite:function(t,e,n){return new f.j(t,e,n)},createAnimatedSprite:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.keys(t).map((function(e){return t[e]}));return new f.a(e)},preload:function(t){var e,n=this.props,i=n.store,r=n.messages,s=i.getState().core.sceneSize,o=s.width,a=s.height,c=this.app.loader,u=0,p=new f.h({fontSize:12,fill:"#eeeeee"}),h=new f.g(r.loaderTitle,p),g=(new f.d).beginFill(6579300).drawRect(0,-2.5,o/3,5),l=(new f.d).beginFill(16711680).drawRect(0,-2.5,o/3,5);g.x=o/3,g.y=a/2,h.x=o/2-h.width/2,h.y=a/2-h.height/2-20,this.addChild(g),this.addChild(h);var d=Object.values(t.assets.Assets).map((function(e){return e.url=t.assets.BaseDir+e.url,e}));e=100/(d.length+1),l.x=o/3,l.y=a/2,l.scale.x=0,this.addChild(l),c.add(d).load(),c.onProgress.add((function(){u+=.01*e,l.scale.x=u})),c.onComplete.add((function(){return t.callback(d)})),c.onError.add((function(){return t.error()}))}};var v=y;function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var w=n(84).a.messages.loaderError,_='<button class="refresh-button">'.concat(w.buttonText,"</button>"),O='<div class="loading-error-message"><p>'.concat(w.message,"</p>").concat(_,"</div>"),k={displayError:function(t){t&&"object"===b(t)&&(t.innerHTML=O,document.querySelector(".refresh-button").addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),window.location.replace("/")})))}};function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=C(t);if(e){var r=C(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return x(this,n)}}function x(t,e){return!e||"object"!==j(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(s,t);var e,n,i,r=I(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=r.call(this,t)).offset=new f.e(0,0),e.targetOffset=new f.e(0,0),e.originPosition=new f.e(0,0),e.alpha=.9,e}return e=s,(n=[{key:"setInitialPoint",value:function(t,e){this.position.set(t,e),this.originPosition.set(t,e)}},{key:"update",value:function(t){var e=t.x,n=t.y,i=this.originPosition.x-e,r=this.originPosition.y-n,s=Math.sqrt(i*i+r*r);if(s<200){var o=Math.atan2(r,i),a=Math.cos(o)*s,c=Math.sin(o)*s;this.targetOffset.set(a,c)}else this.targetOffset.set(0,0);this.offset.x+=.01*(this.targetOffset.x-this.offset.x),this.offset.y+=.01*(this.targetOffset.y-this.offset.y),this.position.set(this.originPosition.x+this.offset.x,this.originPosition.y+this.offset.y)}}])&&S(e.prototype,n),i&&S(e,i),s}(f.f),E=function(t){var e=this;v.apply(this,[t]),this.props=t,this.state=this.props.store.getState(),this.viewportHeight=this.app.screen.height,this.viewportWidth=this.app.screen.width,this.mousepos=new f.e(500,500),this.props.store.subscribe((function(){e.state=e.props.store.getState()}))};(E.prototype=Object.create(v.prototype)).setBackground=function(){this.cleanRenderer();var t=this.createSpite(this.app.loader.resources.thingiesBackground.texture);t.position.x=-(t.width-this.viewportWidth)/2,t.position.y=-(t.height-this.viewportHeight),this.addChildren([t])},E.prototype.addThingies=function(){var t=this,e=[],n=[],i=new f.c;this.addChild(i);for(var r=1;r<=17;r++)n.push("thingiesItem".concat(r));for(var s=function(r){var s=t.textureFrom(n[Math.floor(Math.random()*n.length)]),o=new z(s);o.setInitialPoint(t.viewportWidth*Math.random(),(t.viewportHeight+300)*Math.random()-300),e.some((function(t){return e=o.position,n=t.position,i=e.x-n.x,r=e.y-n.y,Math.sqrt(i*i+r*r)<100;var e,n,i,r}))||(e.push(o),i.addChild(o))},o=0;o<100;o++)s();this.startAnimating(),this.props.store.subscribe((function(){e.forEach((function(e){return e.update(t.mousepos)}))})),i.filters=[new h.a({blur:3,quality:5,alpha:.6,color:0,distance:20,rotation:0})]},E.prototype.init=function(){var t=this;this.cleanView(),this.appendView(),this.preload({assets:this.props.assets,error:function(){k.displayError(t.props.parentNode)},callback:function(){t.setBackground(),t.addThingies()}}),window.addEventListener("resize",(function(){t.resizeHandler()})),window.addEventListener("mousemove",(function(e){var n=e.x,i=e.y;t.mousepos.x!==n&&t.mousepos.y!==i&&t.mousepos.set(n,i)}))};var T=E,D=n.p+"assets/img/cursor.png",R={customCursor:"url(".concat(D,"), auto"),sceneParams:{backgroundColor:3289650,autoResize:!0,resolution:window.devicePixelRatio,AllowAudio:!1,PausedInBackground:!0},filter:{blurSize:3},assets:{BaseDir:"/assets/img/",Assets:{thingiesBackground:{url:"thingies_background.jpg",name:"thingiesBackground"},thingiesItem1:{url:"thingies_item_1.png",name:"thingiesItem1"},thingiesItem2:{url:"thingies_item_2.png",name:"thingiesItem2"},thingiesItem3:{url:"thingies_item_3.png",name:"thingiesItem3"},thingiesItem4:{url:"thingies_item_4.png",name:"thingiesItem4"},thingiesItem5:{url:"thingies_item_5.png",name:"thingiesItem5"},thingiesItem6:{url:"thingies_item_6.png",name:"thingiesItem6"},thingiesItem7:{url:"thingies_item_7.png",name:"thingiesItem7"},thingiesItem8:{url:"thingies_item_8.png",name:"thingiesItem8"},thingiesItem9:{url:"thingies_item_9.png",name:"thingiesItem9"},thingiesItem10:{url:"thingies_item_10.png",name:"thingiesItem10"},thingiesItem11:{url:"thingies_item_11.png",name:"thingiesItem11"},thingiesItem12:{url:"thingies_item_12.png",name:"thingiesItem12"},thingiesItem13:{url:"thingies_item_13.png",name:"thingiesItem13"},thingiesItem14:{url:"thingies_item_14.png",name:"thingiesItem14"},thingiesItem15:{url:"thingies_item_15.png",name:"thingiesItem15"},thingiesItem16:{url:"thingies_item_16.png",name:"thingiesItem16"},thingiesItem17:{url:"thingies_item_17.png",name:"thingiesItem17"}}}},L=n(197);n(445);function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function H(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}a.d(n(446)),a.d(n(448));var A=a.e(!0,R),B=new T(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){H(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({store:Object(L.a)(A),adaptiveSize:!0},a.a("app",R)));window.onload=function(){B.init(),p.init()},t.hot.accept(),a.c()},56:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var i="APP_RESIZE",r="TICK"},83:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c}));var i=n(57),r=n(200),s=n(56),o=n(44),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return Object(r.a)(t,(function(n){switch(e.type){case s.a:e.adaptiveSize?n.sceneSize=o.f():n.sceneSize.resolution=window.devicePixelRatio;break;case s.b:n.animation.previousTick=n.animation.tick,n.animation.tick=n.animation.tick+1,n.animation.currentTime=window.performance.now();break;default:return t}}))};function c(){return Object(i.b)({core:a})}},84:function(t,e,n){"use strict";e.a={ReferenceSize:{width:1920,height:1080},messages:{loaderTitle:"Loading resources...",loaderError:{message:"Something went wrong...",buttonText:"Reload"}}}}},[[467,27,2,12,17,15,26,1,7,23,25,3,4,5,6,8,9,10,11,13,14,16,18,19,20,21,22,24]]]);