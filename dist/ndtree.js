!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.NDTREEJS=e():t.NDTREEJS=e()}(this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){function n(t){return Object.entries(t).length}function n(t){return Object.entries(t).length}t.exports={gen_guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){let e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})},range:function(t,e){return Array.from({length:e-t}).map((e,n)=>n+t)},seqs_slct:function(t,e){return e.filter((e,n)=>t.includes(n))},dict_length:n,is_empty_dict:function(t){return 0===Object.entries(t).length},dict_values:function(t){return Object.entries(t).map(t=>t[1])},dict_keys:function(t){return Object.entries(t).map(t=>t[0])},dict_map:function(t,e){for(let n in t)t[n]=e(n,t[n]);return t},dict_foreach:function(t,e){for(let n in t)e(n,t[n]);return t},dict_length:n,dict_plus:function(t,e){for(let n in e)t[n]=e[n];return t},dict_update:function(t,e){for(let n in e){!(n in t)&&(t[n]=e[n])}return t},dtb_kv_rm:function(t,e,n){return n=n.filter(n=>n[t]!==e)},dtb_kv_get_seq:function(t,e,n){return n.findIndex(n=>n[t]===e)},dcp:function(t){return JSON.parse(JSON.stringify(t))},mat_map:function(t,e){for(let n=0;n<t.length;n++){lyr=t[n];for(let r=0;r<lyr.length;r++)t[n][r]=e(t[n][r],n,r)}return t}}},function(t,e,n){const r=n(0);function i(t){if(r.is_empty_dict(t))return 0;{let e=r.dict_keys(t);return Math.max(...e)+1}}function s(t){return null!=t}function l(t,e){return t._id=t._id+e,t._tree=t._tree+e,s(t._fstch)&&(t._fstch=t._fstch+e),s(t._lsib)&&(t._lsib=t._lsib+e),s(t._rsib)&&(t._rsib=t._rsib+e),s(t._parent)&&(t._parent=t._parent+e),t}function u(t,e){let n=i(t);for(let t in e){let r=l(e[t],n);e[r._id]=r,delete e[t]}return e}function _(t){let e=void 0!==t._tree,n=t._tree===t._id;return e&&n}function o(t){return null===t._lsib}function f(t){return null===t._rsib}function c(t){return null===t._fstch}function d(t,e){if(_(t))return!0;return 1===O(D(t,e),e).length}function h(t,e,n){let r=c(t);if(e._tree=t._tree,e._lsib=null,r)e._rsib=null,e._parent=t._id;else{let r=n[t._fstch];r._lsib=void 0,e._rsib=r._id}return t._fstch=e._id,n[e._id]=e,t}function a(t,e,n){let r=c(t);if(e._tree=t._tree,e._rsib=null,r)t._fstch=e._id,e._lsib=null;else{let r=k(t,n);r._parent=void 0,r._rsib=e._id}return e._parent=t._id,n[e._id]=e,t}function p(t,e,n){if(_(t))return console.log("cant addrsib to root"),t;let r=f(t);return e._tree=t._tree,r?(e._parent=t._parent,t._parent=void 0,e._rsib=null):e._rsib=t._rsib,t._rsib=e._id,n[e._id]=e,t}function $(t,e,n){if(_(t))return console.log("cant addlsib to root"),t;let r=o(t);if(e._tree=t._tree,r){let r=D(t,n);t._lsib=void 0,e._lsib=null,r._fstch=e._id}else{N(t,n)._rsib=e._id}return e._rsib=t._id,n[e._id]=e,t}function g(t,e,n,r){let i=O(e,r),s=i.length;if(0===s)return h(e,n,r);if(t<=s&&t>=0){if(0===t)return h(e,n,r);if(t===s)return a(e,n,r);return p(i[t-1],n,r)}return console.log("not in range!!"),e}function b(t,e){for(let n in e)e[n]._tree=t._tree}function m(t,e){let n=C(t,e),r=n[0]._id;return n.forEach(t=>{t._tree=r}),n}function x(t,e){let n={};return t.map(t=>{let r=t._id;n[r]=t,delete e[r]}),n}function v(t){return t._fstch=null,t}function y(t){return t._lsib=null,t._rsib=null,t._parent=null,t}function w(t,e){if(_(t))return[t,e];if(d(t,e)){v(e[t._parent]);let n=x(m(t,e),e);return y(t),[t,n]}if(o(t)){T(t,e)._lsib=null,D(t,e)._fstch=t._rsib;let n=x(m(t,e),e);return y(t),[t,n]}if(f(t)){let n=N(t,e);n._rsib=t._rsib,n._parent=t._parent;let r=x(m(t,e),e);return y(t),[t,r]}{N(t,e)._rsib=t._rsib;let n=x(m(t,e),e);return y(t),[t,n]}}function j(t,e){return null===t._fstch?null:e[t._fstch]}function O(t,e){let n=[],r=j(t,e);for(;null!==r;)n.push(r),r=T(r,e);return n}function k(t,e){let n=O(t,e);return 0===n.length?null:n[n.length-1]}function E(t,e,n){let r=O(e,n);if(0===r.length)return null;return t>r.length-1||t<0?null:r[t]}function S(t,e,...n){let r=O(t,e),i=[];if(0===r.length);else for(let t=0;t<n.length;t++){let e=n[t];e>r.length-1||e<0||i.push(r[e])}return i}function q(t,e,n=!1){let r=t,i=T(t,e);for(;null!==i;)r=i,i=T(i,e);return n?r:r._id!==t._id?r:null}function M(t,e,n=!1){let i,s=D(t,e);return i=null!==s?O(s,e):[t],n?i:i=r.dtb_kv_rm("_id",t._id,i)}function N(t,e){let n=M(t,e,!0),i=r.dtb_kv_get_seq("_id",t._id,n);return 0===i?null:n[i-1]}function T(t,e){return null===t._rsib?null:e[t._rsib]}function J(t,e){return F(t,e,!0).length-1}function P(t,e){let n=J(t,e),r=C(t,e).map(t=>J(t,e));return Math.max(...r)-n+1}function A(t,e){let n=C(z(t,e),e),r=J(t,e);return n.filter(t=>J(t,e)===r)}function R(t,e){let n=A(t,e);return r.dtb_kv_get_seq("_id",t._id,n)}function z(t,e){let n=t,r=D(t,e);for(;null!==r;)n=r,r=D(r,e);return n}function D(t,e){let n;if(_(t))n=null;else{n=e[q(t,e,!0)._parent]}return n}function F(t,e,n=!1){let r=[],i=D(t,e);for(;null!==i;)r.push(i),i=D(i,e);return n&&r.unshift(t),r}function I(t,e){let n=D(t,e);for(;null!==n;){let t=T(n,e);if(null!==t)return t;n=D(n,e)}return null}function L(t,e){let n=j(t,e);if(null!==n)return n;{let n=T(t,e);return null!==n?n:I(t,e)}}function B(t,e){let n=t,r=k(t,e);for(;null!==r;)n=r,r=k(r,e);return n}function C(t,e){let n=J(t,e),r=[];for(;null!==t;)if(r.push(t),null!==(t=L(t,e))){if(J(t,e)<=n)break}return r}function G(t,e){let n=t,r=j(t,e);for(;null!==r;)n=r,r=j(r,e);return n}function H(t,e){let n=T(t,e);if(null===n){return D(t,e)}return G(n,e)}function K(t,e){let n=D(t,e);for(;null!==n;){let t=N(n,e);if(null!==t)return t;n=D(n,e)}return null}function Q(t,e){let n=[],r=G(t,e);for(;null!==r&&(n.push(r),r._id!==t._id);)r=H(r,e);return n}function U(t){r.dict_foreach(t,(e,n)=>{t[e]._$visited=!1})}function V(t,e){let n=t._$visited;if(c(t)){if(n){let n=T(t,e);return null===n?D(t,e):n}return t._$visited=!0,t}if(n){let n=T(t,e);return null===n?D(t,e):n}return t._$visited=!0,j(t,e)}function W(t,e){return e._$visited&&t===e._id}function X(t,e,n=!1,i=!0){let s=[];U(e);let l=t._id;for(;!W(l,t);)n?s.push(r.dcp(t)):s.push(t),t=V(t,e);return n?s.push(r.dcp(t)):s.push(t),i&&U(e),s}function Y(t){let e={ele:{}};return e.nd=t,e.ele._id=t._id,e.ele._children=[],e}function Z(t,e){let n=[],r=[Y(t[0])];for(r[0].ele._pbreadth=null;r.length>0;){let t=[];for(let i=0;i<r.length;i++){r[i].ele._breadth=i,r[i].ele._depth=n.length;let s=O(r[i].nd,e);(s=s.map(t=>Y(t))).forEach((e,s)=>{e.ele._pbreadth=r[i].ele._breadth,r[i].ele._children.push([n.length+1,t.length+s])}),t=t.concat(s)}let i=r.map(t=>t.ele);n.push(i),r=t}return n}function tt(t,e){return Q(t[0],e)}function et(t,e,n=!1,r=!0){return X(t[0],e,n,r)}function nt(t,e){return C(t[t.length-1],e)}function rt(t,e){return C(t[0],e)}function it(t,e,n=!1){let r=C(t,e);return n||r.splice(0,1),r}function st(t){return z(t[r.dict_keys(t)[0]],t)}t.exports={calc_next_id:i,update_nodes_ids:u,creat_root:function(t=0){return{_id:t,_fstch:null,_lsib:null,_rsib:null,_parent:null,_tree:t}},creat_nd:function(t,e=0){return{_id:i(t)+e,_fstch:null,_lsib:void 0,_rsib:void 0,_parent:void 0,_tree:void 0}},is_inited:function(t){return void 0!==t._tree},is_root:_,is_fstch:o,is_lstch:f,is_leaf:c,is_lonely:d,is_id:s,prepend_child:h,append_child:a,insert_child:g,add_rsib:p,add_lsib:$,get_fstch:j,get_rsib:T,get_children:O,get_lstch:k,get_which_child:E,get_some_children:S,get_fstsib:function(t,e,n=!1){let r=M(t,e,!0);return n?r[0]:r[0]._id===t._id?null:r[0]},get_lstsib:q,get_preceding_sibs:function(t,e){let n=M(t,e,!0),i=r.dtb_kv_get_seq("_id",t._id,n),s=[];if(0===n.length);else for(let t=0;t<n.length;t++){t<i&&s.push(n[t])}return s},get_following_sibs:function(t,e){let n=M(t,e,!0),i=r.dtb_kv_get_seq("_id",t._id,n),s=[];if(0===n.length);else for(let t=0;t<n.length;t++){t>i&&s.push(n[t])}return s},get_sibs:M,get_which_sib:function(t,e,n){let r=M(e,n,!0);return t<=r.length-1&&t>=0?r[t]:null},get_some_sibs:function(t,e,...n){let r=M(t,e,!0),i=[];if(0===r.length);else for(let t=0;t<n.length;t++){let e=n[t];e>r.length-1||e<0||i.push(r[e])}return i},get_sibseq:function(t,e){let n=M(t,e,!0);return r.dtb_kv_get_seq("_id",t._id,n)},get_lsib:N,get_rsib:T,get_lyr:A,get_breadth:R,get_count:function(t,e){return C(t,e).length},get_depth:J,get_height:P,get_fst_lyr_des_depth:function(t,e){return c(t)?null:J(t,e)+1},get_lst_lyr_des_depth:function(t,e){if(c(t))return null;{J(t,e);let n=C(t,e).map(t=>J(t,e));return Math.max(...n)}},get_which_lyr_des_depth:function(t,e,n){let r=J(e,n);return P(e,n)<=t?null:r+t},get_root:z,get_parent:D,get_ances:F,get_which_ance:function(t,e,n){let r=F(e,n,!0);return t<r.length&&t>=0?r[t]:null},get_some_ances:function(t,e,...n){let r=F(t,e,!0),i=[];if(0===r.length);else for(let t=0;t<n.length;t++){let e=n[t];e>r.length-1||e<0||i.push(r[e])}return i},get_rsib_of_fst_ance_having_rsib:I,get_sdfs_next:L,get_drmost_des:B,get_sdfs_prev:function(t,e){if(_(t))return null;if(c(t)){let n=N(t,e);if(null!==n)return n;return D(t,e)}{let n=N(t,e);if(null!==n){return c(n)?n:B(n,e)}return D(t,e)}},get_sdfs:C,get_lsib_of_fst_ance_having_lsib:K,get_dlmost_des:G,get_edfs_next:H,get_edfs_prev:function(t,e){if(c(t)){let n=N(t,e);return null===n?K(t,e):n}return k(t,e)},get_edfs:Q,clear_$visited:U,get_sedfs_next:V,is_sedfs_traverse_finished:W,get_sedfs_prev:function(t,e,n){if(c(e)){if(t)return e;{let t=N(e,n);return null===t?D(e,n):t}}if(t)return k(e,n);{let t=N(e,n);return null===t?D(e,n):t}},get_sedfs:X,get_deses:it,get_fst_lyr_deses:function(t,e){return O(t,e)},get_lst_lyr_deses:function(t,e){let n=it(t,e,!1),r=sdfs.map(t=>J(t,e)),i=Math.max(...r);return n=n.filter(t=>J(t,e)===i)},get_which_lyr_deses:function(t,e,n){let r=J(e,n),i=it(e,n,!1);return sdfs.map(t=>J(t,n)),i=i.filter(e=>J(e,n)===r+t)},get_some_deses:function(t,e,...n){let r=n.map(n=>get_which_deses(n,t,e));return r=Array.prototype.concat(...r)},nd2ele:function(t,e){let n={};n._depth=J(t,e),n._breadth=R(t,e);let r=D(t,e);return n._pbreadth=null===r?null:R(r,e),n._id=t._id,n},sdfs2mat:Z,sdfs2edfs:tt,sdfs2sedfs:et,edfs2mat:function(t,e){return Z(nt(t,e),e)},edfs2sdfs:nt,edfs2sedfs:function(t,e,n=!1,r=!0){return et(nt(t,e),e,n,r)},sedfs2mat:function(t,e){return Z(rt(t,e),e)},sedfs2sdfs:rt,sedfs2edfs:function(t,e){return tt(rt(t,e),e)},update_disconnected_nodes:m,update_orig_nodes:x,leafize:v,rootize:y,disconnect:w,rm_fstch:function(t,e){let n=j(t,e);return null===n?[t,e]:w(n,e)},rm_lstch:function(t,e){let n=k(t,e);return null===n?[t,e]:w(n,e)},rm_which:function(t,e,n){let r=E(t,e,n);return null===r?[e,n]:w(r,n)},rm_some:function(t,e,...n){let r=S(t,e,...whiches);for(let t=0;t<r.length;t++)w(r[t],e);return[t,e]},rm_all:function(t,e){let n=O(t,e);for(let t=0;t<n.length;t++)w(n[t],e);return e},update_treeid:b,update_one_nodeid:l,update_nodes_ids:u,prepend_child_tree:function(t,e,n){return b(t=h(t,z((n=u(e,n))[r.dict_keys(n)[0]],n),e),n),r.dict_plus(e,n),t},append_child_tree:function(t,e,n){return b(t=a(t,z((n=u(e,n))[r.dict_keys(n)[0]],n),e),n),r.dict_plus(e,n),t},add_rsib_tree:function(t,e,n){return b(t=p(t,z((n=u(e,n))[r.dict_keys(n)[0]],n),e),n),r.dict_plus(e,n),t},add_lsib_tree:function(t,e,n){return b(t=$(t,z((n=u(e,n))[r.dict_keys(n)[0]],n),e),n),r.dict_plus(e,n),t},insert_child_tree:function(t,e,n,i){return b(e=g(t,e,z((i=u(n,i))[r.dict_keys(i)[0]],i),n),i),r.dict_plus(n,i),e},get_root_via_tree:st,tree2sdfs:function(t){return C(st(t),t)}}},function(t,e,n){const r=n(5);t.exports={rjson:function(t){let e=r.readFileSync(t).toString();return JSON.parse(e)},wjson:function(t,e){let n=JSON.stringify(e);r.writeFileSync(t,n)}}},function(t,e,n){const r=n(4),i=n(1),s=n(7),l=n(2);t.exports={ndfunc:i,ndfuncterm:s,ndcls:r,ndutil:l}},function(t,e,n){const r=n(2),i=n(0),s=n(1),l=n(6).EventTarget,u=["_fstch","_lsib","_rsib","_parent","_tree"];function _(t){return t._tree===t}function o(t){let e=t._fstch,n=e;for(;null!==e;)n=e,e=e._rsib;return n}function f(t,e){let n=0,r=e._fstch;for(;;){if(n===t)return r;if(null===r)return r;r=r._rsib,n+=1}}function c(t,...e){let n=[],r=0,i=t._fstch;for(;;){if(e.includes(r))n.push(i);else if(null===i)return n;i=i._rsib,r+=1}}function d(t){let e=[],n=0,r=t._fstch;for(;;){if(null===r)return e;e.push(r),r=r._rsib,n+=1}}function h(t,e=!1){let n=t._rsib,r=t;for(;null!==n;)r=n,n=n._rsib;return e?r:r!==t?r:null}function a(t,e=!1){let n=m(t);if(null===n)return e?t:null;{let r=n._fstch;return e?r:r!==t?r:null}}function p(t){let e=[],n=a(t,!0);for(;null!==n;){if(n===t)return e;e.push(n),n=n._rsib}}function $(t){let e=[],n=t._rsib;for(;null!==n;)e.push(n),n=n._rsib;return e}function g(t,e=!1){let n=p(t),r=$(t),i=[t];return sibs=e?n.concat(i,r):n.concat(r),sibs}function b(t){return p(t).length}function m(t){return h(t,!0)._parent}function x(t,e=!1){let n=[],r=t;for(e&&n.push(r),r=r.$parent();null!==r;)n.push(r),r=r.$parent();return n}function v(t,e=!1){let n=k(t),r=E(t),i=r.indexOf(n);return e?r.slice(0,i+1):r.slice(1,i+1)}function y(t,e){let n=t.$is_leaf();if(e._tree=t._tree,e._lsib=null,n)e._rsib=null,e._parent=t;else{let n=t._fstch;n._lsib=void 0,e._rsib=n}return t._fstch=e,e}function w(t,e){let n=t.$is_leaf();if(e._tree=t._tree,e._rsib=null,n)t._fstch=e,e._lsib=null;else{let n=t.$lstch();n._parent=void 0,n._rsib=e}return e._parent=t,e}function j(t,e){if(t.$is_root())return console.log("cant addrsib to root"),t;let n=t.$is_lstch();return e._tree=t._tree,n?(e._parent=t._parent,t._parent=void 0,e._rsib=null):e._rsib=t._rsib,t._rsib=e,e}function O(t,e,n){let r=d(e),i=r.length;if(0===i)n=y(e,n);else{if(t<=i&&t>=0)if(0===t)n=y(e,n);else if(t===i)n=w(e,n);else{n=j(r[t-1],n)}else console.log("not in range!!")}return n}function k(t){let e=t,n=t.$lstch();for(;null!==n;)e=n,n=n.$lstch();return e}function E(t){let e=t.$depth();if(null===t)return[];{let n=[t];for(t=t.$sdfs_next();null!==t&&t.$depth()>e;)n.push(t),t=t.$sdfs_next();return n}}function S(t){let e=t.$visited;if(t.$is_leaf()){if(e){let e=t.$rsib();return null===e?t.$parent():e}return t.$visited=!0,t}if(e){let e=t.$rsib();return null===e?t.$parent():e}return t.$visited=!0,t.$fstch()}function q(t,e){return e.$visited&&t===e}function M(t){!function(t){t.$sdfs().forEach(t=>{delete t.$visited})}(t);let e=[],n=new Set,r=t;for(;!q(r,t);)n.has(t)?t.$close_at=e.length:(t.$open_at=e.length,n.add(t)),e.push(t),t=S(t);return r.$close_at=e.length,e.push(r),e.forEach(t=>{delete t.$visited}),e}function N(t){return t._lsib=null,t._rsib=null,t._parent=null,t}function T(t){let e=t.$sdfs();return e.forEach(t=>{t._tree=e[0]}),e}function J(t){if(t.$is_root())return t;if(t.$is_lonely()){!function(t){t._fstch=null}(t.$parent());T(t);return N(t),t}if(t.$is_fstch()){t.$rsib()._lsib=null,t.$parent()._fstch=t._rsib;T(t);return N(t),t}if(t.$is_lstch()){let e=t.$lsib();e._rsib=t._rsib,e._parent=t._parent;T(t);return N(t),t}t.$lsib()._rsib=t._rsib;T(t);return N(t),t}function P(t){let e={};return e._nd=t,e._children=[],e}class A extends l{constructor(){super(),this._fstch=null,this._lsib=void 0,this._rsib=void 0,this._parent=void 0,this._tree=void 0,this.$guid=i.gen_guid()}$is_inited(){return void 0!==this._tree}$is_root(){return _(this)}$is_fstch(){return null===this._lsib}$is_lstch(){return null===this._rsib}$is_leaf(){return null===this._fstch}$is_lonely(){return 1===this.$sibs(!0).length}$fstch(){return this._fstch}$lstch(){return o(this)}$which_child(t){return f(t,this)}$some_children(...t){return c(this,...t)}$children(){return d(this)}$children_count(){return function(t){let e=0,n=t._fstch;for(;;){if(null===n)return e;n=n._rsib,e+=1}}(this)}$rsib(){return this._rsib}$lsib(){return function(t){let e=a(t,!1);if(null===e)return null;{let n=e;for(;;){if(n._rsib===t)return n;n=n._rsib}}}(this)}$fstsib(t=!1){return a(this,t)}$lstsib(t=!1){return h(this,t)}$psibs(){return p(this)}$fsibs(){return $(this)}$which_sib(t){return function(t,e){let n=a(e,!0),r=0;for(;;){if(null===n)return null;if(r==t)return n;n=n._rsib,r+=1}}(t,this)}$some_sibs(...t){return function(t,...e){return g(t,!0).filter((t,n)=>e.includes(n))}(this,...t)}$sibseq(){return b(this)}$sibs(t=!1){return g(this,t)}$sibs_count(t=!1){return function(t,e=!1){return t.$sibs(e).length}(this,t)}$parent(){return m(this)}$root(){return function(t){let e=t,n=t;for(;null!==e;)n=e,e=e.$parent();return n}(this)}$ances(t=!1){return x(this,t)}$which_ance(t){return function(t,e){let n=0,r=e;for(;null!==r;){if(n===t)return r;r=r.$parent(),n+=1}return null}(t,this)}$some_ances(...t){return function(t,...e){return x(t,!0).filter((t,n)=>e.includes(n))}(this,...t)}$ances_count(t=!1){return function(t,e=!1){return x(t,e).length}(this,t)}$prepend_child(t){return y(this,t=void 0===t?new A:t)}$insert_child(t,e){return O(t,this,e=void 0===e?new A:e)}$append_child(t){return w(this,t=void 0===t?new A:t)}$clone(){if(_(this)){return F(B(this))}{let t=b(this),e=m(this);J(this);let n=F(B(this));return O(t,e,this),n}}$append_children(t,e){let n=[];for(let r=0;r<t;r++){let t=void 0===e?new A:e.$clone();t=w(this,t),n.push(t)}return n}$add_rsib(t){return j(this,t=void 0===t?new A:t)}$add_lsib(t){return function(t,e){if(t.$is_root())return console.log("cant addlsib to root"),t;let n=t.$is_fstch();if(e._tree=t._tree,n){let n=t.$parent();t._lsib=void 0,e._lsib=null,n._fstch=e}else{t.$lsib()._rsib=e}return e._rsib=t,e}(this,t=void 0===t?new A:t)}$rsib_of_fst_ance_having_rsib(){return function(t){let e=t.$parent();for(;null!==e;){let t=e.$rsib();if(null!==t)return t;e=e.$parent()}return null}(this)}$sdfs_next(){return function(t){let e=t.$fstch();if(null!==e)return e;{let e=t.$rsib();return null!==e?e:t.$rsib_of_fst_ance_having_rsib()}}(this)}$drmost_des(){return k(this)}$sdfs_prev(){return function(t){if(t.$is_root())return null;if(t.$is_leaf()){let e=t.$lsib();if(null!==e)return e;return t.$parent()}{let e=t.$lsib();if(null!==e){return e.$is_leaf()?e:e.$drmost_des()}return t.$parent()}}(this)}$sdfs(){return E(this)}$dlmost_des(){return function(t){let e=t,n=t.$fstch();for(;null!==n;)e=n,n=n.$fstch();return e}(this)}$edfs_next(){return function(t){let e=t.$rsib();if(null===e){return t.$parent()}return e.$dlmost_des()}(this)}$lsib_of_fst_ance_having_lsib(){return function(t){let e=t.$parent();for(;null!==e;){let t=e.$lsib();if(null!==t)return t;e=e.$parent()}return null}(this)}$edfs_prev(){return function(t){if(t.$is_leaf()){let e=t.$lsib();return null===e?t.$lsib_of_fst_ance_having_lsib():e}return t.$lstch()}(this)}$edfs(){return function(t){let e=[],n=t.$dlmost_des();for(;null!==n&&(e.push(n),n!==t);)n=n.$edfs_next();return e}(this)}$offset(){return function(t){let e,n=t.$root().$edfs();if(t.$is_leaf())e=n.indexOf(t);else{let r=t.$dlmost_des();e=n.indexOf(r)}return n=n.slice(0,e+1),offset=n.filter(t=>t.$is_leaf()).length-1,offset}(this)}$sedfs_next(){return S(this)}$sedfs_prev(t){return function(t,e){if(e.$is_leaf()){if(t)return e;{let t=e.$lsib();return null===t?e.$parent():t}}if(t)return e.$lstch();{let t=e.$lsib();return null===t?e.$parent():t}}(this)}$sedfs(){return M(this)}$deses(t=!1){return v(this,t)}$lst_lyr_deses(){return function(t){let e=t.$deses(!1),n=e.map(t=>t.$depth()),r=Math.max(...n);return e=e.filter(t=>t.$depth()===r)}(this)}$which_lyr_deses(t){return function(t,e){let n=e.$depth(),r=e.$deses(!1);return r.map(t=>t.$depth()),r=r.filter(e=>e.$depth()===n+t)}(t,this)}$some_lyrs_deses(...t){return function(t,...e){let n=t.$depth(),r=e.map(t=>t+n),i=t.$deses(!1);return i.map(t=>t.$depth()),i=i.filter(t=>r.includes(t.$depth()))}(this,...t)}$count(t=!0){return v(this,t).length}$depth(t=!1){return x(this,t).length}$height(){let t=this.$depth(),e=this.$sdfs().map(t=>t.$depth());return Math.max(...e)-t+1}$breadth(){return(t=this).$lyr().indexOf(t);var t}$width(){return function(t){let e=t.$sdfs();return(e=e.filter(t=>t.$is_leaf())).length}(this)}$lyr(){return function(t){let e=t.$root().$sdfs(),n=t.$depth();return e.filter(t=>t.$depth()===n)}(this)}$lcin(){return function(t){let e=t.$luncle();return t.$is_fstch()?null===e?null:e.$lstch():null}(this)}$rcin(){return function(t){let e=t.$runcle();return t.$is_lstch()?null===e?null:e.$fstch():null}(this)}$luncle(){return function(t){let e=t.$parent();return null===e?null:e.$lsib()}(this)}$runcle(){return function(t){let e=t.$parent();return null===e?null:e.$rsib()}(this)}$sdfs_repr(){let t=E(this.$root()),e=E(this);e.map(t=>t.$depth()).map(t=>"    ".repeat(t)).forEach((n,r)=>{console.log(n+"["+t.indexOf(e[r])+"] : "+e[r].$guid)})}$sedfs_repr(){R(this.$root()),M(this).forEach((t,e)=>{let n=t.$depth(),r="    ".repeat(n);e===t.$open_at&&console.log(r+"<"+t._id+" : "+t.$guid+">"),e===t.$close_at&&console.log(r+"</"+t._id+" : "+t.$guid+">")})}$disconn(){return J(this)}$rm_fstch(){return J(this._fstch)}$rm_lstch(){return J(o(this))}$rm_which(t){return J(f(t,this))}$rm_some_children(...t){return c(this,...t).map(t=>J(t))}$rm_all_children(){return d(this).map(t=>J(t))}$dump(){if(this.$is_root())return B(this);console.log("only root !!!")}$dump2file(t){if(this.$is_root()){let e=B(this);r.wjson(t,e)}else console.log("only root !!!")}$sdfs2mat(){return function(t){let e=[],n=[P(t[0])];for(n[0]._pbreadth=null;n.length>0;){let t=[];for(let r=0;r<n.length;r++){n[r]._breadth=r,n[r]._depth=e.length;let i=n[r]._nd.$children();(i=i.map(t=>P(t))).forEach((i,s)=>{i._pbreadth=n[r]._breadth,n[r]._children.push([e.length+1,t.length+s])}),t=t.concat(i)}let r=n;e.push(r),n=t}return e}(E(this))}}function R(t){let e=E(t);return e.forEach((t,e)=>{t._id=e}),e}function z(t,e){for(;e._id!==t;)e=e._parent;return e}function D(t,e){let n=L(e);for(let r of n)t[r]=e[r];return t}function F(t){let e,n=i.dict_keys(t)[0],r=s.get_root(t[n],t),l=function(t){let e=new C;return e._id=t._id,e.$guid=t._guid,e}(r),u=l=D(l,r),_=r,o=s.get_sdfs_next(_,t);for(;null!==o;)if(_._fstch===o._id)(e=u.$prepend_child())._id=o._id,e.$guid=o._guid,u=e=D(e,o),_=o,o=s.get_sdfs_next(_,t);else if(_._rsib===o._id)(e=u.$add_rsib())._id=o._id,e.$guid=o._guid,u=e=D(e,o),_=o,o=s.get_sdfs_next(_,t);else if(null!==o._parent&&void 0!==o._parent){(e=(u=z(o._parent,u)).$append_child())._id=o._id,e.$guid=o._guid,u=e=D(e,o),_=o,o=s.get_sdfs_next(_,t)}else if(void 0===o._parent){(e=(u=z(s.get_parent(o,t)._id,u)).$append_child())._id=o._id,e.$guid=o._guid,u=e=D(e,o),_=o,o=s.get_sdfs_next(_,t)}else console.log("Impossible",u,_,o);return l}function I(t,e){return null===t[e]?null:void 0===t[e]?void 0:t[e]._id}function L(t){return i.dict_keys(t).filter(t=>!u.includes(t))}function B(t){let e=R(t),n=t._id,r={};return e.forEach((t,e)=>{let i={};i._tree=n,i._fstch=I(t,"_fstch"),i._lsib=I(t,"_lsib"),i._rsib=I(t,"_rsib"),i._parent=I(t,"_parent"),i._id=t._id,i._guid=t.$guid,i=function(t,e){let n=L(t);for(let r of n)e[r]=t[r];return e}(t,i),r[t._id]=i}),r}class C extends A{constructor(){super(),this._fstch=null,this._lsib=null,this._rsib=null,this._parent=null,this._tree=this}$is_parent_of(t){return t.$parent()===this}$is_root_of(t){return t.$root()===this}$is_descendant_of(t){return t.$deses(!1).indexOf(this)>=0}$is_inclusive_descendant_of(t){return t.$deses(!0).indexOf(this)>=0}$is_ancestor_of(t){return t.$ances(!1).indexOf(this)>=0}$is_inclusive_ancestor_of(t){return t.$ances(!0).indexOf(this)>=0}$is_sibling_of(t){return t.$sibs(!1).indexOf(this)>=0}$is_inclusive_siblings_of(t){return t.$sibs(!0).indexOf(this)>=0}$is_preceding_of(t){let e=t.$sdfs(),n=e.indexOf(t),r=e.indexof(this);return r>=0&&r<n}$is_following_of(t){let e=t.$sdfs(),n=e.indexOf(t);return e.indexof(this)>n}$is_first_child_of(t){return this===t.$fstch()}$is_child_of(t){return t.$children().indexOf(this)>=0}$is_last_child_of(t){return this===t.$lstch()}$is_previous_sibling_of(t){return this===t.$lsib()}$is_next_sibling_of(t){return this===t.$rsib()}$index(){return this.$sibseq()}$sdfs_index(){return this.$sdfs().indexOf(this)}}function G(t){if("string"==typeof t){return F(r.rjson(t))}if("object"==typeof t){return F(t)}return new C}t.exports={Node:A,Tree:C,Root:C,load:G,clone:function(t){return t.$dump(),G(ndict)},struct_eq:function(t,e){let n=t.$sdfs2mat(),r=e.$sdfs2mat(),i=Array.prototype.concat(...n),s=Array.prototype.concat(...r);if(i.length!==s.length)return!1;for(let t=0;t<i.length;t++)if(l=i[t],u=s[t],l._pbreadth!==u._pbreadth||l._breadth!==u._breadth||l._depth!==u._depth)return!1;var l,u;return!0}}},function(t,e){},function(t,e){t.exports={EventTarget:class{constructor(){}addEventListener(t,e,n={}){}removeEventListener(t,e,n={}){}dispatchEvent(t){}}}},function(t,e,n){const r=n(1),i=n(0),s={t:"├── ",v:"│   ",l:"└── ",ws:"    "},l={t:"├── ",v:"│   ",l:"┌── ",ws:"    "};function u(t){let e;return e="t"===t?"v":"v"===t?"v":"ws"}function _(t,e){return(t=t.map(t=>e[t])).join("")}function o(t){for(let e in t)delete t[e]._ui}function f(t,e){if(t._ui={},r.is_root(t))t._ui.conns=[],t._ui.display=!0;else{let n=r.get_parent(t,e)._ui.conns.map(t=>u(t));r.is_lstch(t)?n.push("l"):n.push("t"),t._ui.conns=n,t._ui.display=!0}return t}function c(t,e,n){let i=r.get_depth(t,e),l=r.get_deses(t,e,!0),u=(l=l.map(t=>f(t,e))).map(t=>t._ui.conns),o=(u=(u=u.map(t=>t.slice(i))).map(t=>_(t,s))).map((t,e)=>t+"["+l[e]._id+"] : "+l[e]._guid);return o=o.filter((t,e)=>!0===l[e]._ui.display)}function d(){}function h(){}function a(t,e){if(t._ui={},r.is_root(t))t._ui.conns=[];else{let n=r.get_parent(t,e)._ui.conns.map(t=>u(t));r.is_fstch(t)?n.push("l"):n.push("t"),t._ui.conns=n}return t}function p(t,e,n){let i=r.get_depth(t,e),s=r.get_edfs(t,e);s.reverse(),(s=s.map(t=>a(t,e))).reverse();let u=r.get_deses(t,e,!0).map(t=>t._id),o=(s=s.filter(t=>u.includes(t._id))).map(t=>t._ui.conns);return(o=(o=o.map(t=>t.slice(i,t.length))).map(t=>_(t,l))).map((t,e)=>t+s[e]._id)}const $={indent:"    ",stag_prefix:"<",stag_suffix:">",etag_prefix:"</",etag_suffix:">"};function g(t,e,n){return e+t+n}t.exports={dflt_calc_conn_map_func:u,conns2repr:_,clear_ui:o,dflt_sdfs_show_connd:s,dflt_sdfs_calc_conns:f,get_sdfs_repr_arr:c,sdfs_show_all:function(t,e,n=d){c(r.get_root(t,e),e);let i=c(t,e).join("\n");console.log(i),o(e)},sdfs_show_root_tree:function(t,e=d){let n=i.dict_keys(t)[0],s=c(r.get_root(t[n],t),t).join("\n");console.log(s),o(t)},sdfs_show_from:function(t,e,n,i=d){c(r.get_root(t,e),e);let s=c(t,e),l=(s=s.slice(n)).join("\n");console.log(l),o(e)},sdfs_show_to:function(t,e,n,i=d){c(r.get_root(t,e),e);let s=c(t,e),l=(s=s.slice(0,n)).join("\n");console.log(l),o(e)},sdfs_show_from_to:function(t,e,n,i,s=d){c(r.get_root(t,e),e);let l=c(t,e),u=(l=l.slice(n,i)).join("\n");console.log(u),o(e)},sdfs_expand:function(t,e,n=d){return r.get_deses(t,e,!1).forEach(t=>{t._ui.display=!0}),e},sdfs_foldup:function(t,e,n=d){return r.get_deses(t,e,!1).forEach(t=>{t._ui.display=!1}),e},dflt_edfs_show_connd:l,dflt_edfs_calc_conns:a,get_edfs_repr_arr:p,edfs_show_all:function(t,e,n=h){p(r.get_root(t,e),e);let i=p(t,e).join("\n");console.log(i),o(e)},edfs_show_root_tree:function(t,e=h){let n=i.dict_keys(t)[0],s=p(r.get_root(t[n],t),t).join("\n");console.log(s),o(t)},edfs_show_from:function(t,e,n,i=h){r.get_root(t,e),p(t,e);let s=p(t,e),l=(s=s.slice(0,s.length-n)).join("\n");console.log(l),o(e)},edfs_show_to:function(t,e,n,i=h){r.get_root(t,e),p(t,e);let s=p(t,e),l=(s=s.slice(s.length-n,s.length)).join("\n");console.log(l),o(e)},edfs_show_from_to:function(t,e,n,i,s=h){r.get_root(t,e),p(t,e);let l=p(t,e),u=(l=l.slice(l.length-i,l.length-n)).join("\n");console.log(u),o(e)},dflt_sedfs_show_connd:$,gen_tag:g,sedfs_show_all:function(t,e,n=$){let i=r.get_sedfs(t,e,!0),s=i.map(t=>r.get_depth(t,e)),l=r.get_depth(t,e),u=s.map(t=>n.indent.repeat(t-l)),_=i.map(t=>!1===t._$visited?g(t._id,n.stag_prefix,n.stag_suffix):g(t._id,n.etag_prefix,n.etag_suffix)).map((t,e)=>u[e]+t).join("\n");console.log(_)}}}])});
//# sourceMappingURL=ndtree.js.map