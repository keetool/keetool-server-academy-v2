(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{1021:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e};t.default=v;var i=r(200);var a=c(i);var o=r(199);var u=r(578);function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(e.id==t){return n({},e,{message:a.default.t("social.global.you")})}else{return n({},e,{message:e.name,url:"/profile/"+e.id})}}function f(e,t){if(e.id==t){return n({},e,{message:a.default.t("social.global.your")})}else{return n({},e,{message:e.name,url:"/profile/"+e.id})}}function s(e,t,r){switch(e){case"user":return l(t,r);case"post_creator":return f(t,r);default:return t}}function p(e){var t="";if(e.url){t+='<a href="'+e.url+'">'+e.message+"</a>";return t}if(e.message){t+=e.message;return t}}function v(e,t){var r=e.data;var n=e.type;var i={};Object.keys(r).forEach(function(e){var n=s(e,r[e],t);i[e]=p(n)});var a=(0,u.convertTypeNotiToKey)(n);var c=(0,u.getContentNotiWithData)(a,i);return(0,o.capitalizeFirstLetter)(c)}},1022:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var i;var a=r(1);var o=O(a);var u=r(2);var c=O(u);var l=r(532);var f=r(92);var s=r(541);var p=r(542);var v=O(p);var d=r(1021);var y=O(d);var h=r(571);var m=r(709);var b=O(m);var g=r(198);var _=O(g);var E=r(549);var w=r(578);function O(e){return e&&e.__esModule?e:{default:e}}function N(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function P(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function j(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function k(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var T=_.default.bind(b.default);var C=(0,l.observer)(i=function(e){k(t,e);function t(){var e;var r,n,i;P(this,t);for(var a=arguments.length,o=Array(a),u=0;u<a;u++){o[u]=arguments[u]}return i=(r=(n=j(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n),n.handleClickNoti=function(){var e=n.props.store;e.seenNotification()},r),j(n,i)}n(t,[{key:"componentDidMount",value:function e(){}},{key:"render",value:function e(){var t=this.props,r=t.prefixCls,n=t.account,i=t.store;var a=i.notification;var u=(0,y.default)(a,n.id);var c=(0,w.linkNotification)(a.type,a.action_web);var l=i.isUnseen;return o.default.createElement(E.Link,{to:c,onClick:this.handleClickNoti},o.default.createElement("div",{className:T(r+"-container",N({},r+"-unseen",l))},o.default.createElement("div",{className:T(r+"-avatar")},o.default.createElement(v.default,{url:a.image_url})),o.default.createElement("div",{className:T(r+"-container-body")},o.default.createElement("div",{className:T(r+"-content-text")},o.default.createElement("div",{dangerouslySetInnerHTML:{__html:u}})),o.default.createElement("div",{className:T(r+"-content-time")},(0,h.relativeTime)(a.created_at)))))}}]);return t}(o.default.Component))||i;C.defaultProps={prefixCls:"notification"};C.propTypes={store:c.default.object.isRequired};t.default=(0,f.translate)(function(e){return e.namespaces})((0,s.withAccount)(C))},1024:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var i=r(1);var a=v(i);var o=r(550);var u=v(o);var c=r(546);var l=r(709);var f=v(l);var s=r(198);var p=v(s);function v(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function y(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function h(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var m=p.default.bind(f.default);var b=function(e){h(t,e);function t(){d(this,t);return y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}n(t,[{key:"componentDidMount",value:function e(){}},{key:"render",value:function e(){var t=this.props.prefixCls;return a.default.createElement("div",{className:m(t+"-container")},a.default.createElement("div",{className:m(t+"-avatar")},a.default.createElement(c.RoundShape,{color:"#E0E0E0",style:{width:30,height:30}})),a.default.createElement("div",{className:m(t+"-container-body")},a.default.createElement("div",{className:m(t+"-content-text")},a.default.createElement(c.TextBlock,{rows:2,color:"#E0E0E0"})),a.default.createElement("div",{className:m(t+"-content-time"),style:{width:"100px"}},a.default.createElement(c.TextBlock,{rows:1,color:"#E0E0E0"}))))}}]);return t}(a.default.Component);b.defaultProps={prefixCls:"notification"};b.propTypes={};t.default=(0,u.default)()(b)},1026:function(e,t,r){e.exports={"module-notification-layout":"__1DIWM2","module-notification-layout-empty":"__2zFdDv","module-notification-layout-empty-text":"__1cnAsE"}},1027:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var i;var a=r(1);var o=C(a);var u=r(532);var c=r(92);var l=r(198);var f=C(l);var s=r(1026);var p=C(s);var v=r(637);var d=C(v);var y=r(1024);var h=C(y);var m=r(562);var b=C(m);var g=r(1022);var _=C(g);var E=r(580);var w=C(E);var O=r(579);var N=r(541);var P=r(136);var j=r(199);var k=r(564);var T=C(k);function C(e){return e&&e.__esModule?e:{default:e}}function A(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function M(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function x(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var R=f.default.bind(p.default);var D="list-noti";var I=(0,u.observer)(i=function(e){x(t,e);function t(e){A(this,t);var r=M(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.getNotis=function(){var e=r.store;if(e.isLoadMore){e.getNotifications()}};r.renderLoading=function(){return o.default.createElement("div",null,o.default.createElement(h.default,null),o.default.createElement(h.default,null),o.default.createElement(h.default,null),o.default.createElement(h.default,null),o.default.createElement(h.default,null),o.default.createElement(h.default,null),o.default.createElement(h.default,null))};r.store=new d.default;r.scrollView=new T.default(D,r.getNotis);return r}n(t,[{key:"componentDidMount",value:function e(){var t=this;this.store.getNotifications();var r=P.SUBDOMAIN+":"+O.CREATE_NOTIFICATION;w.default.on(r,function(e){var r=e;var n=t.props.account;var i=(0,j.getValueObjectFromStringKey)(r,"receiver.id");if(i==n.id){t.store.addNotification(r)}})}},{key:"componentDidUpdate",value:function e(){var t=this.store.isLoading;if(!t){this.scrollView.addEventScroll()}}},{key:"renderEmptyNoti",value:function e(){var t=this.props,r=t.prefixCls,n=t.t;var i=this.store.isEmpty;if(i){return o.default.createElement("div",{className:R(r+"-layout-empty")},o.default.createElement("div",{className:R(r+"-layout-empty-text")},n("social.notification.noti.empty")))}else{return o.default.createElement("div",null)}}},{key:"render",value:function e(){var t=this.props.prefixCls;var r=this.store,n=r.notifications,i=r.isLoading;return o.default.createElement("div",{id:D,className:R(t+"-layout")},n&&n.length>0?n.map(function(e,t){return o.default.createElement("div",{key:t},o.default.createElement(_.default,{store:e,key:t}))}):i&&this.renderLoading(),i&&o.default.createElement(h.default,null),this.renderEmptyNoti())}}]);return t}(o.default.Component))||i;I.defaultProps={prefixCls:"module-notification"};I.propTypes={};t.default=(0,c.translate)(function(e){return e.namespaces})((0,b.default)()((0,N.withAccount)(I)))},564:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});function n(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var i=function e(t,r){var i=this;var a=arguments.length>2&&arguments[2]!==undefined?arguments[2]:500;n(this,e);this.id=null;this.distance=0;this.handle=null;this.addEventScroll=function(){document.addEventListener("scroll",i.trackScrolling)};this.trackScrolling=function(){var e=document.getElementById(i.id);if(i.isBottom(e)){if(i.handle){i.handle()}document.removeEventListener("scroll",i.trackScrolling)}};this.isBottom=function(e){return e&&e.getBoundingClientRect&&e.getBoundingClientRect()&&e.getBoundingClientRect().bottom-i.distance<=window.innerHeight};this.id=t;this.handle=r;this.distance=a};t.default=i},577:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getNotificationsApi=u;t.getNotificationsByMerchantApi=c;t.seenNotificationApi=l;var n=r(202);var i=o(n);var a=r(136);function o(e){return e&&e.__esModule?e:{default:e}}function u(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var t=a.MERCHANT_API_URL+("v1/user/notification/after/"+e);return i.default.get(t)}function c(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var t=a.MERCHANT_API_URL+("v1/user/notification/merchant/after/"+e);return i.default.get(t)}function l(e){var t=a.MERCHANT_API_URL+("v1/user/notification/"+e+"/seen");return i.default.put(t)}},578:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e};t.splitKeyData=p;t.convertTypeNotiToKey=v;t.getContentNotiWithoutData=d;t.getContentNotiWithData=y;t.getDataNotification=g;t.linkNotification=_;var i=r(200);var a=u(i);var o=r(199);function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var l="social.notification.type";var f={user:"user",post_creator:"post.creator"};var s={"post.vote.up.create":{link:"/post/:postID",action_web:"postID"},"post.vote.down.create":{link:"/post/:postID",action_web:"postID"},"post.comment.create":{link:"/post/:postID",action_web:"postID"}};function p(e){var t=/{{\S+}}/g;var r=e.match(t);if(r){return e.match(t).map(function(e){return e.replace(/{/g,"").replace(/}/g,"")})}else{return[]}}function v(e){return l+"."+e.replace(/\./g,"_")}function d(e){return a.default.t(e,{interpolation:{prefix:"__",suffix:"__"}})}function y(e,t){var r={interpolation:{escapeValue:false}};var a=n({},t,r);return(0,i.translateI18n)(e,a)}function h(e){var t={};e.forEach(function(e){t[e.type]=e.data});return t}function m(e,t){var r={};t.forEach(function(t){var n=f[t];r[t]=(0,o.getValueObjectFromStringKey)(e,n)});return r}function b(e,t){var r=v(t);var n=d(r);var i=p(n);return m(e,i)}function g(e,t){var r=h(e);return b(r,t)}function _(e,t){var r=s[e];return(0,o.linkRoute)(r.link,c({},r.action_web,t))}},579:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=t.CREATE_COMMENT="comment.create";var i=t.CREATE_NOTIFICATION="notification.create";var a=t.CREATE_POST="post.create"},580:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(644);var i=o(n);var a=r(136);function o(e){return e&&e.__esModule?e:{default:e}}var u=a.SOCKET_HOST+":"+a.SOCKET_PORT;var c=(0,i.default)(u);t.default=c},636:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var i,a,o,u,c;var l=r(534);var f=r(578);var s=r(535);var p=r(577);function v(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(i,a){try{var o=t[i](a);var u=o.value}catch(e){r(e);return}if(o.done){e(u)}else{return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}}return n("next")})}}function d(e,t,r,n){if(!r)return;Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function y(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function h(e,t,r,n,i){var a={};Object["ke"+"ys"](n).forEach(function(e){a[e]=n[e]});a.enumerable=!!a.enumerable;a.configurable=!!a.configurable;if("value"in a||a.initializer){a.writable=true}a=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},a);if(i&&a.initializer!==void 0){a.value=a.initializer?a.initializer.call(i):void 0;a.initializer=undefined}if(a.initializer===void 0){Object["define"+"Property"](e,t,a);a=null}return a}function m(e,t){throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.")}var b=(o=function(){function e(t){y(this,e);d(this,"notification",u,this);d(this,"error",c,this);t.data=(0,f.getDataNotification)(t.detail,t.type);this.notification=t}n(e,[{key:"seenNotification",value:function(){var e=v(regeneratorRuntime.mark(function e(){var t=this;var r,n;return regeneratorRuntime.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;r=this.notification.id;i.next=4;return(0,p.seenNotificationApi)(r);case 4:n=i.sent;if(!(0,s.httpSuccess)(n.status)){(0,l.runInAction)(function(){t.error=(0,s.messageHttpRequest)()})}i.next=11;break;case 8:i.prev=8;i.t0=i["catch"](0);(0,l.runInAction)(function(){t.error=(0,s.messageHttpRequest)(i.t0)});case 11:case"end":return i.stop()}}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"isUnseen",get:function e(){return this.notification&&this.notification.status=="unseen"}}]);return e}(),u=h(o.prototype,"notification",[l.observable],{enumerable:true,initializer:function e(){return null}}),c=h(o.prototype,"error",[l.observable],{enumerable:true,initializer:function e(){return null}}),h(o.prototype,"seenNotification",[l.action],Object.getOwnPropertyDescriptor(o.prototype,"seenNotification"),o.prototype),h(o.prototype,"isUnseen",[l.computed],Object.getOwnPropertyDescriptor(o.prototype,"isUnseen"),o.prototype),o);t.default=b},637:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var i,a,o,u,c,l,f;var s=r(534);var p=r(535);var v=r(199);var d=r(636);var y=g(d);var h=r(577);var m=r(538);var b=r(554);function g(e){return e&&e.__esModule?e:{default:e}}function _(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++){r[t]=e[t]}return r}else{return Array.from(e)}}function E(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(i,a){try{var o=t[i](a);var u=o.value}catch(e){r(e);return}if(o.done){e(u)}else{return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}}return n("next")})}}function w(e,t,r,n){if(!r)return;Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function O(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function N(e,t,r,n,i){var a={};Object["ke"+"ys"](n).forEach(function(e){a[e]=n[e]});a.enumerable=!!a.enumerable;a.configurable=!!a.configurable;if("value"in a||a.initializer){a.writable=true}a=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},a);if(i&&a.initializer!==void 0){a.value=a.initializer?a.initializer.call(i):void 0;a.initializer=undefined}if(a.initializer===void 0){Object["define"+"Property"](e,t,a);a=null}return a}function P(e,t){throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.")}var j=(o=function(){function e(){O(this,e);w(this,"notifications",u,this);w(this,"isLoading",c,this);w(this,"error",l,this);w(this,"pagination",f,this)}n(e,[{key:"getNotifications",value:function(){var e=E(regeneratorRuntime.mark(function e(){var t=this;var r,n,i,a,o;return regeneratorRuntime.wrap(function e(u){while(1){switch(u.prev=u.next){case 0:if(!this.isLoading){u.next=2;break}return u.abrupt("return");case 2:this.isLoading=true;this.error=null;r=(0,v.getLastArr)(this.notifications);n=r?r.notification.id:"";u.prev=6;u.next=9;return(0,h.getNotificationsByMerchantApi)(n);case 9:i=u.sent;a=i.data;if((0,p.httpSuccess)(i.status)){o=a.data;(0,s.runInAction)(function(){t.notifications=(0,b.concat2Array)(t.notifications,t.createStoreNotifications(o));a.meta.remain_total=a.meta.total-o.length;t.pagination=a.meta})}else{(0,s.runInAction)(function(){t.error=(0,p.messageHttpRequest)()})}u.next=17;break;case 14:u.prev=14;u.t0=u["catch"](6);(0,s.runInAction)(function(){t.error=(0,p.messageHttpRequest)(u.t0)});case 17:u.prev=17;(0,s.runInAction)(function(){t.isLoading=false});if(!(0,v.isEmpty)(this.error)){(0,m.messageError)(this.error)}return u.finish(17);case 21:case"end":return u.stop()}}},e,this,[[6,14,17,21]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"addNotification",value:function e(t){if(this.isLoading)return;var r=this.createStoreNotification(t);this.notifications=[r].concat(_(this.notifications))}},{key:"createStoreNotifications",value:function e(t){var r=this;return t.map(function(e){return r.createStoreNotification(e)})}},{key:"createStoreNotification",value:function e(t){return new y.default(t)}},{key:"isEmpty",get:function e(){return!this.isLoading&&!this.error&&(0,v.isEmptyArr)(this.notifications)}},{key:"isLoadMore",get:function e(){return this.pagination.remain_total>0}}]);return e}(),u=N(o.prototype,"notifications",[s.observable],{enumerable:true,initializer:function e(){return[]}}),c=N(o.prototype,"isLoading",[s.observable],{enumerable:true,initializer:function e(){return false}}),l=N(o.prototype,"error",[s.observable],{enumerable:true,initializer:function e(){return null}}),f=N(o.prototype,"pagination",[s.observable],{enumerable:true,initializer:function e(){return{}}}),N(o.prototype,"getNotifications",[s.action],Object.getOwnPropertyDescriptor(o.prototype,"getNotifications"),o.prototype),N(o.prototype,"addNotification",[s.action],Object.getOwnPropertyDescriptor(o.prototype,"addNotification"),o.prototype),N(o.prototype,"isEmpty",[s.computed],Object.getOwnPropertyDescriptor(o.prototype,"isEmpty"),o.prototype),N(o.prototype,"isLoadMore",[s.computed],Object.getOwnPropertyDescriptor(o.prototype,"isLoadMore"),o.prototype),o);t.default=j},639:function(e,t){},709:function(e,t,r){e.exports={"notification-container":"__1xnOoT","notification-container-body":"__25kAVf","notification-unseen":"__2IQ9mE","notification-content-time":"__1fUrPs"}}}]);