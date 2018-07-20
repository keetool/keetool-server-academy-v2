(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{1049:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var i,o,a,u,c,s,l,f,p;var v=r(525);var d=r(526);var h=r(550);var y=r(199);var b=r(558);var m=_(b);var g=r(529);var w=r(541);function _(e){return e&&e.__esModule?e:{default:e}}function P(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++){r[t]=e[t]}return r}else{return Array.from(e)}}function O(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(i,o){try{var a=t[i](o);var u=a.value}catch(e){r(e);return}if(a.done){e(u)}else{return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}}return n("next")})}}function k(e,t,r,n){if(!r)return;Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function E(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function j(e,t,r,n,i){var o={};Object["ke"+"ys"](n).forEach(function(e){o[e]=n[e]});o.enumerable=!!o.enumerable;o.configurable=!!o.configurable;if("value"in o||o.initializer){o.writable=true}o=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},o);if(i&&o.initializer!==void 0){o.value=o.initializer?o.initializer.call(i):void 0;o.initializer=undefined}if(o.initializer===void 0){Object["define"+"Property"](e,t,o);o=null}return o}function A(e,t){throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.")}var z=(a=function(){function e(){E(this,e);k(this,"posts",u,this);k(this,"isLoading",c,this);k(this,"error",s,this);k(this,"pagination",l,this);k(this,"addPost",f,this);k(this,"handleDeletePost",p,this)}n(e,[{key:"getPosts",value:function(){var e=O(regeneratorRuntime.mark(function e(){var t=this;var r,n,i,o,a;return regeneratorRuntime.wrap(function e(u){while(1){switch(u.prev=u.next){case 0:if(!this.isLoading){u.next=2;break}return u.abrupt("return");case 2:this.isLoading=true;this.error=null;r=(0,y.getLastArr)(this.posts);n=r?r.post.id:"";u.prev=6;u.next=9;return(0,h.getPostsApi)(n);case 9:i=u.sent;o=i.data;if((0,d.httpSuccess)(i.status)){a=o.data;(0,v.runInAction)(function(){t.posts=(0,w.concat2Array)(t.posts,t.createStorePosts(a));o.meta.remain_total=o.meta.total-a.length;t.pagination=o.meta})}else{(0,v.runInAction)(function(){t.error=(0,d.messageHttpRequest)()})}u.next=17;break;case 14:u.prev=14;u.t0=u["catch"](6);(0,v.runInAction)(function(){t.error=(0,d.messageHttpRequest)(u.t0)});case 17:u.prev=17;(0,v.runInAction)(function(){t.isLoading=false});if(!(0,y.isEmpty)(this.error)){(0,g.messageError)(this.error)}return u.finish(17);case 21:case"end":return u.stop()}}},e,this,[[6,14,17,21]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"createStorePosts",value:function e(t){var r=this;return t.map(function(e){return r.createStorePost(e)})}},{key:"createStorePost",value:function e(t){return new m.default(t,{handleDelete:this.handleDeletePost})}},{key:"isEmpty",get:function e(){return!this.isLoading&&!this.error&&(0,y.isEmptyArr)(this.posts)}},{key:"isLoadMore",get:function e(){return this.pagination.remain_total>0}}]);return e}(),u=j(a.prototype,"posts",[v.observable],{enumerable:true,initializer:function e(){return[]}}),c=j(a.prototype,"isLoading",[v.observable],{enumerable:true,initializer:function e(){return false}}),s=j(a.prototype,"error",[v.observable],{enumerable:true,initializer:function e(){return null}}),l=j(a.prototype,"pagination",[v.observable],{enumerable:true,initializer:function e(){return{}}}),j(a.prototype,"getPosts",[v.action],Object.getOwnPropertyDescriptor(a.prototype,"getPosts"),a.prototype),f=j(a.prototype,"addPost",[v.action],{enumerable:true,initializer:function e(){var t=this;return function(e){var r=t.createStorePost(e);t.posts=[r].concat(P(t.posts))}}}),p=j(a.prototype,"handleDeletePost",[v.action],{enumerable:true,initializer:function e(){var t=this;return function(e){t.posts=t.posts.filter(function(t){return t.post.id!==e})}}}),j(a.prototype,"isEmpty",[v.computed],Object.getOwnPropertyDescriptor(a.prototype,"isEmpty"),a.prototype),j(a.prototype,"isLoadMore",[v.computed],Object.getOwnPropertyDescriptor(a.prototype,"isLoadMore"),a.prototype),a);t.default=z},1101:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var i;var o=r(1);var a=O(o);var u=r(2);var c=O(u);var s=r(563);var l=O(s);var f=r(559);var p=O(f);var v=r(736);var d=O(v);var h=r(198);var y=O(h);var b=r(523);var m=r(555);var g=O(m);var w=r(92);var _=r(634);var P=O(_);function O(e){return e&&e.__esModule?e:{default:e}}function k(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function E(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function j(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var A=y.default.bind(d.default);var z="list-post";var N=(0,b.observer)(i=function(e){j(t,e);function t(e){k(this,t);var r=E(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.getPosts=function(){var e=r.props.store;if(e.isLoadMore){e.getPosts()}};r.renderEmpty=function(){var e=r.props,t=e.store,n=e.prefixCls,i=e.t;var o=t.isEmpty;if(o){return a.default.createElement("div",{className:A(n+"-empty")},a.default.createElement("div",{className:A(n+"-empty-text")},i("social.home.noti.empty")))}else{return a.default.createElement("div",null)}};r.store=new P.default;r.scrollView=new g.default(z,r.getPosts);return r}n(t,[{key:"componentDidUpdate",value:function e(){var t=this.store.isLoading;if(!t){this.scrollView.addEventScroll()}}},{key:"render",value:function e(){var t=this.props,r=t.store,n=t.prefixCls;var i=r.posts,o=r.isLoading;return a.default.createElement("div",{id:z,className:A(n+"-layout-posts")},i&&i.length>0?i.map(function(e,t){return a.default.createElement("div",{key:t},a.default.createElement(l.default,{store:e,key:t}))}):o&&a.default.createElement("div",null,a.default.createElement(p.default,null),a.default.createElement(p.default,null)),o&&a.default.createElement(p.default,null),this.renderEmpty())}}]);return t}(a.default.Component))||i;N.defaultProps={prefixCls:"module-home"};N.propTypes={store:c.default.object.isRequired};t.default=(0,w.translate)(function(e){return e.namespaces})(N)},1112:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var i;var o=r(1);var a=P(o);var u=r(736);var c=P(u);var s=r(198);var l=P(s);var f=r(602);var p=P(f);var v=r(1101);var d=P(v);var h=r(523);var y=r(1049);var b=P(y);var m=r(553);var g=P(m);var w=r(568);var _=P(w);function P(e){return e&&e.__esModule?e:{default:e}}function O(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function k(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function E(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var j=l.default.bind(c.default);var A=(0,h.observer)(i=function(e){E(t,e);function t(e){O(this,t);var r=k(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.store=new b.default;return r}n(t,[{key:"componentDidMount",value:function e(){this.store.getPosts()}},{key:"render",value:function e(){var t=this.props.prefixCls;return a.default.createElement("div",null,a.default.createElement("div",{className:j(t+"-container")},a.default.createElement(p.default,{addPost:this.store.addPost}),a.default.createElement(d.default,{store:this.store})))}}]);return t}(a.default.Component))||i;A.defaultProps={prefixCls:"module-home"};t.default=(0,g.default)()((0,_.default)()(A))},555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});function n(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var i=function e(t,r){var i=this;var o=arguments.length>2&&arguments[2]!==undefined?arguments[2]:500;n(this,e);this.id=null;this.distance=0;this.handle=null;this.addEventScroll=function(){document.addEventListener("scroll",i.trackScrolling)};this.trackScrolling=function(){var e=document.getElementById(i.id);if(i.isBottom(e)){if(i.handle){i.handle()}document.removeEventListener("scroll",i.trackScrolling)}};this.isBottom=function(e){return e&&e.getBoundingClientRect&&e.getBoundingClientRect()&&e.getBoundingClientRect().bottom-i.distance<=window.innerHeight};this.id=t;this.handle=r;this.distance=o};t.default=i},568:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var i=r(1);var o=u(i);var a=r(545);function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function s(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function l(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var f=function e(){return function(e){var t=function(t){l(r,t);function r(){var e;var t,n,i;c(this,r);for(var o=arguments.length,a=Array(o),u=0;u<o;u++){a[u]=arguments[u]}return i=(t=(n=s(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(a))),n),n.scrollTop=function(){window.scrollTo(0,0)},t),s(n,i)}n(r,[{key:"render",value:function t(){this.scrollTop();return o.default.createElement(e,this.props)}}]);return r}(i.Component);return(0,a.withRouter)(t)}};t.default=f},569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getNotificationsApi=u;t.getNotificationsByMerchantApi=c;t.clickedNotificationApi=s;var n=r(202);var i=a(n);var o=r(136);function a(e){return e&&e.__esModule?e:{default:e}}function u(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var t=o.MERCHANT_API_URL+("v1/user/notification/after/"+e);return i.default.get(t)}function c(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var t=o.MERCHANT_API_URL+("v1/user/notification/merchant/after/"+e);return i.default.get(t)}function s(e){var t=o.MERCHANT_API_URL+("v1/user/notification/"+e+"/click");return i.default.put(t)}},570:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e};t.splitKeyData=p;t.convertTypeNotiToKey=v;t.getContentNotiWithoutData=d;t.getContentNotiWithData=h;t.getDataNotification=g;t.linkNotification=w;var i=r(200);var o=u(i);var a=r(199);function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var s="social.notification.type";var l={user:"user",post_creator:"post.creator"};var f={"post.vote.up.create":{link:"/post/:postID",action_web:"postID"},"post.vote.down.create":{link:"/post/:postID",action_web:"postID"},"post.comment.create":{link:"/post/:postID",action_web:"postID"}};function p(e){var t=/{{\S+}}/g;var r=e.match(t);if(r){return e.match(t).map(function(e){return e.replace(/{/g,"").replace(/}/g,"")})}else{return[]}}function v(e){return s+"."+e.replace(/\./g,"_")}function d(e){return o.default.t(e,{interpolation:{prefix:"__",suffix:"__"}})}function h(e,t){var r={interpolation:{escapeValue:false}};var o=n({},t,r);return(0,i.translateI18n)(e,o)}function y(e){var t={};e.forEach(function(e){t[e.type]=e.data});return t}function b(e,t){var r={};t.forEach(function(t){var n=l[t];r[t]=(0,a.getValueObjectFromStringKey)(e,n)});return r}function m(e,t){var r=v(t);var n=d(r);var i=p(n);return b(e,i)}function g(e,t){var r=y(e);return m(r,t)}function w(e,t){var r=f[e];return(0,a.linkRoute)(r.link,c({},r.action_web,t))}},633:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var i,o,a,u,c;var s=r(525);var l=r(570);var f=r(526);var p=r(569);function v(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(i,o){try{var a=t[i](o);var u=a.value}catch(e){r(e);return}if(a.done){e(u)}else{return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}}return n("next")})}}function d(e,t,r,n){if(!r)return;Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function h(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function y(e,t,r,n,i){var o={};Object["ke"+"ys"](n).forEach(function(e){o[e]=n[e]});o.enumerable=!!o.enumerable;o.configurable=!!o.configurable;if("value"in o||o.initializer){o.writable=true}o=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},o);if(i&&o.initializer!==void 0){o.value=o.initializer?o.initializer.call(i):void 0;o.initializer=undefined}if(o.initializer===void 0){Object["define"+"Property"](e,t,o);o=null}return o}function b(e,t){throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.")}var m=(a=function(){function e(t){h(this,e);d(this,"notification",u,this);d(this,"error",c,this);t.data=(0,l.getDataNotification)(t.detail,t.type);this.notification=t}n(e,[{key:"clickNotification",value:function(){var e=v(regeneratorRuntime.mark(function e(){var t=this;var r,n;return regeneratorRuntime.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;r=this.notification.id;i.next=4;return(0,p.clickedNotificationApi)(r);case 4:n=i.sent;if(!(0,f.httpSuccess)(n.status)){(0,s.runInAction)(function(){t.error=(0,f.messageHttpRequest)()})}i.next=11;break;case 8:i.prev=8;i.t0=i["catch"](0);(0,s.runInAction)(function(){t.error=(0,f.messageHttpRequest)(i.t0)});case 11:case"end":return i.stop()}}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"isClicked",get:function e(){return this.notification&&this.notification.status=="clicked"}}]);return e}(),u=y(a.prototype,"notification",[s.observable],{enumerable:true,initializer:function e(){return null}}),c=y(a.prototype,"error",[s.observable],{enumerable:true,initializer:function e(){return null}}),y(a.prototype,"clickNotification",[s.action],Object.getOwnPropertyDescriptor(a.prototype,"clickNotification"),a.prototype),y(a.prototype,"isClicked",[s.computed],Object.getOwnPropertyDescriptor(a.prototype,"isClicked"),a.prototype),a);t.default=m},634:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var i,o,a,u,c,s,l;var f=r(525);var p=r(526);var v=r(199);var d=r(633);var h=g(d);var y=r(569);var b=r(529);var m=r(541);function g(e){return e&&e.__esModule?e:{default:e}}function w(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++){r[t]=e[t]}return r}else{return Array.from(e)}}function _(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(i,o){try{var a=t[i](o);var u=a.value}catch(e){r(e);return}if(a.done){e(u)}else{return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}}return n("next")})}}function P(e,t,r,n){if(!r)return;Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function O(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function k(e,t,r,n,i){var o={};Object["ke"+"ys"](n).forEach(function(e){o[e]=n[e]});o.enumerable=!!o.enumerable;o.configurable=!!o.configurable;if("value"in o||o.initializer){o.writable=true}o=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},o);if(i&&o.initializer!==void 0){o.value=o.initializer?o.initializer.call(i):void 0;o.initializer=undefined}if(o.initializer===void 0){Object["define"+"Property"](e,t,o);o=null}return o}function E(e,t){throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.")}var j=(a=function(){function e(){O(this,e);P(this,"notifications",u,this);P(this,"isLoading",c,this);P(this,"error",s,this);P(this,"pagination",l,this)}n(e,[{key:"getNotifications",value:function(){var e=_(regeneratorRuntime.mark(function e(){var t=this;var r,n,i,o,a;return regeneratorRuntime.wrap(function e(u){while(1){switch(u.prev=u.next){case 0:if(!this.isLoading){u.next=2;break}return u.abrupt("return");case 2:this.isLoading=true;this.error=null;r=(0,v.getLastArr)(this.notifications);n=r?r.notification.id:"";u.prev=6;u.next=9;return(0,y.getNotificationsByMerchantApi)(n);case 9:i=u.sent;o=i.data;if((0,p.httpSuccess)(i.status)){a=o.data;(0,f.runInAction)(function(){t.notifications=(0,m.concat2Array)(t.notifications,t.createStoreNotifications(a));o.meta.remain_total=o.meta.total-a.length;t.pagination=o.meta})}else{(0,f.runInAction)(function(){t.error=(0,p.messageHttpRequest)()})}u.next=17;break;case 14:u.prev=14;u.t0=u["catch"](6);(0,f.runInAction)(function(){t.error=(0,p.messageHttpRequest)(u.t0)});case 17:u.prev=17;(0,f.runInAction)(function(){t.isLoading=false});if(!(0,v.isEmpty)(this.error)){(0,b.messageError)(this.error)}return u.finish(17);case 21:case"end":return u.stop()}}},e,this,[[6,14,17,21]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"addNotification",value:function e(t){if(this.isLoading)return;var r=this.createStoreNotification(t);this.notifications=[r].concat(w(this.notifications))}},{key:"createStoreNotifications",value:function e(t){var r=this;return t.map(function(e){return r.createStoreNotification(e)})}},{key:"createStoreNotification",value:function e(t){return new h.default(t)}},{key:"isEmpty",get:function e(){return!this.isLoading&&!this.error&&(0,v.isEmptyArr)(this.notifications)}},{key:"isLoadMore",get:function e(){return this.pagination.remain_total>0}}]);return e}(),u=k(a.prototype,"notifications",[f.observable],{enumerable:true,initializer:function e(){return[]}}),c=k(a.prototype,"isLoading",[f.observable],{enumerable:true,initializer:function e(){return false}}),s=k(a.prototype,"error",[f.observable],{enumerable:true,initializer:function e(){return null}}),l=k(a.prototype,"pagination",[f.observable],{enumerable:true,initializer:function e(){return{}}}),k(a.prototype,"getNotifications",[f.action],Object.getOwnPropertyDescriptor(a.prototype,"getNotifications"),a.prototype),k(a.prototype,"addNotification",[f.action],Object.getOwnPropertyDescriptor(a.prototype,"addNotification"),a.prototype),k(a.prototype,"isEmpty",[f.computed],Object.getOwnPropertyDescriptor(a.prototype,"isEmpty"),a.prototype),k(a.prototype,"isLoadMore",[f.computed],Object.getOwnPropertyDescriptor(a.prototype,"isLoadMore"),a.prototype),a);t.default=j},736:function(e,t,r){e.exports={"module-home-empty":"__2nvkb_","module-home-empty-text":"__1q9qO8","module-home-header":"__KXn3HT","module-home-container":"__1kkA_f","module-home-header-fixed-top":"__de78sW"}}}]);